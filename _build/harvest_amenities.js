// In the amenities (Udogodnienia) view, click through ALL POI thumbnails and record
// every /vmedia video requested (full names) + which 404. Reveals missing POI videos.
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
  const media = new Map();
  page.on('response', (r) => { const u = r.url(); if (/\/vmedia\/.*\.mp4/.test(u)) { const k = u.split('/').pop().split('?')[0]; if (!media.has(k) || r.status() < media.get(k)) media.set(k, r.status()); } });
  page.on('requestfailed', (r) => { const u = r.url(); if (/\/vmedia\/.*\.mp4/.test(u)) { const k = u.split('/').pop().split('?')[0]; if (!media.has(k)) media.set(k, 0); } });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Udogodnienia/i.test(x.innerText)); if (b) b.click(); });
  await sleep(5000);

  // enumerate POI thumbnails / amenity list items and click each
  const n = await page.evaluate(() => document.querySelectorAll('[class*=SectionItem], [class*=Slider] [class*=Item], [class*=Poi] [class*=Item]').length);
  console.log('amenity/POI items found:', n);
  for (let i = 0; i < Math.max(n, 16); i++) {
    await page.evaluate((idx) => { const items = [...document.querySelectorAll('[class*=SectionItem], [class*=Slider] [class*=Item], [class*=Poi] [class*=Item]')]; if (items[idx]) items[idx].click(); }, i);
    await sleep(2200);
  }
  await sleep(1500);

  const all = [...media.entries()].sort();
  const missing = all.filter(([, s]) => s === 404 || s === 0).map(([k]) => k);
  console.log('total POI/amenity videos seen:', all.length, '| missing:', missing.length);
  missing.forEach((m) => console.log('  MISSING', m));
  fs.writeFileSync('_build/amenities_missing_names.json', JSON.stringify(missing, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
