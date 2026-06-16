// Harvest every media URL the 71 detail pages request, by driving the Next.js
// router through all apartment routes from a single loaded page. Outputs the set
// of /vmedia + voxdeveloper URLs with their local status so we know what to fetch.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
const seen = new Set();
const items = rows.filter((r) => { if (seen.has(r.seg)) return false; seen.add(r.seg); return true; });

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1366,900'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1366, height: 900 });

  const media = new Map(); // url -> status (lowest seen)
  page.on('response', (r) => {
    const u = r.url();
    if (/\/vmedia\/|voxdeveloper/.test(u)) { const k = u.split('?')[0]; if (!media.has(k) || r.status() < media.get(k)) media.set(k, r.status()); }
  });
  page.on('requestfailed', (r) => { const u = r.url(); if (/\/vmedia\/|voxdeveloper/.test(u)) { const k = u.split('?')[0]; if (!media.has(k)) media.set(k, 0); } });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4000);
  const hasRouter = await page.evaluate(() => !!(window.next && window.next.router));
  console.log('window.next.router available:', hasRouter);

  let done = 0;
  for (const it of items) {
    const url = `/Kozielska/Zone_A/${it.bld}/${it.seg}?side=${it.side}&floor=${it.floor}`;
    try {
      await page.evaluate((u) => window.next.router.push(u), url);
      await sleep(1400);
      done++;
      if (done % 15 === 0) console.log('   navigated', done, '/', items.length, '| media urls so far:', media.size);
    } catch (e) { console.log('  nav fail', it.seg, e.message); }
  }
  // back to zone to capture zone/amenity media too
  try { await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A')); await sleep(2000); } catch (e) {}

  const all = [...media.entries()].map(([u, s]) => ({ u: u.replace(BASE, ''), s })).sort((a, b) => a.u.localeCompare(b.u));
  const missing = all.filter((m) => m.s === 404 || m.s === 0);
  console.log('\nTOTAL media urls:', all.length, '| MISSING(404/fail):', missing.length);
  console.log('--- missing (first 60) ---');
  missing.slice(0, 60).forEach((m) => console.log('  ', m.s, m.u));
  fs.writeFileSync(path.join(__dirname, 'harvest_media_result.json'), JSON.stringify({ all, missing }, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
