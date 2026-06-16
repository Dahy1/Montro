// Deep harvest: land on several representative apartments (one per floor), wait
// long enough for the full camera auto-play chain, click in-viewer controls, and
// record EVERY full /vmedia URL requested. Reveals all camera state names.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// one representative apartment per distinct floor
const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
const perFloor = {};
for (const r of rows) if (!perFloor[r.floor]) perFloor[r.floor] = r;
const reps = Object.values(perFloor);

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1366,900'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1366, height: 900 });

  const media = new Map();
  const record = (u, s) => { if (/\/vmedia\//.test(u)) { const k = u.split('?')[0].replace(BASE, ''); if (!media.has(k) || s < media.get(k)) media.set(k, s); } };
  page.on('response', (r) => record(r.url(), r.status()));
  page.on('requestfailed', (r) => record(r.url(), 0));

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4000);

  for (const it of reps) {
    const url = `/Kozielska/Zone_A/${it.bld}/${it.seg}?side=${it.side}&floor=${it.floor}`;
    await page.evaluate((u) => window.next.router.push(u), url);
    await sleep(6000); // let the camera auto-play chain run
    // try clicking in-viewer controls (floor buttons, plan toggles, thumbnails)
    await page.evaluate(() => {
      const clickAll = (sel) => document.querySelectorAll(sel).forEach((e) => { try { e.click(); } catch (x) {} });
      // plan / floor selector style controls
      [...document.querySelectorAll('button, [role=button], [class*=Floor], [class*=Plan], [class*=Thumb]')].slice(0, 12).forEach((e) => { try { e.click(); } catch (x) {} });
    });
    await sleep(3500);
    console.log('floor', it.floor, '->', it.seg, '| media so far:', media.size);
  }

  const all = [...media.entries()].map(([u, s]) => ({ u, s })).sort((a, b) => a.u.localeCompare(b.u));
  const missing = all.filter((m) => m.s === 404 || m.s === 0);
  // extract distinct camera state names
  const states = new Set();
  for (const m of all) { const mm = m.u.match(/Sequencer_Camera([A-Za-z0-9-]+)_Camera([A-Za-z0-9-]+)\.mp4/); if (mm) { states.add(mm[1]); states.add(mm[2]); } }
  console.log('\nTOTAL', all.length, 'MISSING', missing.length, 'STATES', states.size);
  console.log('--- distinct states ---'); console.log([...states].sort().join('\n'));
  console.log('--- missing ---'); missing.forEach((m) => console.log('  ', m.s, m.u.replace('/vmedia/VinodeKozielska/Kozielska4/', '...')));
  fs.writeFileSync(path.join(__dirname, 'harvest_deep_result.json'), JSON.stringify({ all, missing, states: [...states] }, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
