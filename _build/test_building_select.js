// With the apartment list open, test building/stage (Etap) selection overlaid on
// the 3D view, the "Wybierz budynek" dropdown, and amenity POI thumbnails. Capture
// any missing videos + whether selection changes the view/filter.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1000 });
  const missing = new Set();
  page.on('response', (r) => { if (r.status() === 404 && /vmedia/.test(r.url())) missing.add(r.url().split('/').pop()); });
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /SPRAWD/i.test(e.innerText)); if (x) x.click(); });
  await sleep(3000);

  const playing = () => page.evaluate(() => { const v = document.querySelector('video'); return v ? (v.currentSrc || '').split('/').pop() : null; });
  const ofery = () => page.evaluate(() => (document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i) || [])[1]);

  // building/stage labels overlaid on 3D
  const etaps = await page.evaluate(() => [...document.querySelectorAll('*')].filter((e) => /^Etap\s*\d$/.test((e.innerText || '').trim()) && e.children.length <= 1 && e.offsetParent).map((e) => e.innerText.trim()));
  console.log('Etap labels on 3D view:', JSON.stringify([...new Set(etaps)]));
  const beforeVid = await playing();
  const clickEtap = await page.evaluate(() => { const b = [...document.querySelectorAll('*')].find((e) => /^Etap\s*[1-6]$/.test((e.innerText || '').trim()) && e.children.length <= 1 && e.offsetParent); if (b) { b.click(); return b.innerText.trim(); } return null; });
  await sleep(4500);
  console.log('clicked', clickEtap, '| video', beforeVid, '->', await playing(), '| OFERTY:', await ofery());
  await page.screenshot({ path: '_build/screenshots/building_selected.png' });

  // "Wybierz budynek" dropdown in filters
  await page.evaluate(() => { const x = [...document.querySelectorAll('button')].find((e) => /Filtr/i.test(e.innerText)); if (x) x.click(); });
  await sleep(1000);
  const dd = await page.evaluate(() => { const sel = document.querySelector('select'); if (sel) return { tag: 'select', opts: [...sel.options].map((o) => o.text) }; const d = [...document.querySelectorAll('[class*=Dropdown]')].map((e) => e.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 6); return { tag: 'div', d }; });
  console.log('building dropdown:', JSON.stringify(dd));

  console.log('\nmissing videos:', missing.size); [...missing].forEach((m) => console.log('  ', m));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
