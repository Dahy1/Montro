// Exercise the 3D hero camera state machine: nav menu (Apartamenty/Udogodnienia/
// Lokalizacje), building-outline labels, camera-viewpoint / POI thumbnails, and the
// amenities section. Capture any missing /vmedia videos and verify a video is playing.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const missing = new Set();
  page.on('response', (r) => { if (r.status() === 404 && /vmedia/.test(r.url())) missing.add(r.url().split('/').pop()); });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(7000);

  const playing = () => page.evaluate(() => { const v = document.querySelector('video'); return v ? { src: (v.currentSrc || '').split('/').pop(), t: +v.currentTime.toFixed(1), paused: v.paused, rs: v.readyState } : null; });
  console.log('initial video:', JSON.stringify(await playing()));

  // 1) Nav menu items (top): Apartamenty, Udogodnienia, Lokalizacje, Główna
  const nav = async (re) => { const r = await page.evaluate((rs) => { const b = [...document.querySelectorAll('button,a')].find((x) => new RegExp(rs, 'i').test((x.innerText || '').trim())); if (b) { b.click(); return (b.innerText || '').trim(); } return null; }, re); await sleep(4500); return r; };
  for (const item of ['Udogodnienia', 'Lokalizacje', 'Apartamenty', 'G[lł][oó]wna']) {
    const clicked = await nav(item);
    console.log(`nav "${item}" -> clicked=${JSON.stringify(clicked)} | video=`, JSON.stringify(await playing()));
  }

  // 2) Building-outline labels (Etap 1..6) — overlaid on the 3D canvas
  await sleep(1000);
  const buildings = await page.evaluate(() => [...document.querySelectorAll('*')].filter((e) => /^Etap\s*\d$/.test((e.innerText || '').trim()) && e.children.length <= 1).length);
  console.log('\nbuilding labels (Etap N) found:', buildings);
  const clickBuilding = await page.evaluate(() => { const b = [...document.querySelectorAll('*')].find((e) => /^Etap\s*\d$/.test((e.innerText || '').trim()) && e.children.length <= 1 && e.offsetParent); if (b) { b.click(); return b.innerText.trim(); } return null; });
  await sleep(4500);
  console.log('clicked building:', JSON.stringify(clickBuilding), '| video=', JSON.stringify(await playing()), '| url=', page.url());

  // 3) camera-viewpoint / POI thumbnails (bottom "Strefa" strip)
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 60000 }); await sleep(6000);
  const thumbs = await page.evaluate(() => document.querySelectorAll('[class*=SectionItem], [class*=Thumbnail] img, [class*=Poi] *').length);
  console.log('\nviewpoint/POI thumbnails found:', thumbs);
  for (let i = 0; i < 4; i++) {
    const r = await page.evaluate((idx) => { const items = [...document.querySelectorAll('[class*=SectionItem], [class*=Slider] [class*=Item]')]; if (items[idx]) { items[idx].click(); return idx; } return null; }, i);
    await sleep(4000);
    console.log(`viewpoint[${i}] -> clicked=${r} | video=`, JSON.stringify(await playing()));
  }

  console.log('\n=== missing /vmedia videos during hero flow:', missing.size, '===');
  [...missing].forEach((m) => console.log('  ', m));
  fs.writeFileSync('_build/test_hero_result.json', JSON.stringify({ missing: [...missing] }, null, 1));
  await page.screenshot({ path: '_build/screenshots/hero_final.png' });
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
