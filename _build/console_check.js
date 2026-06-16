// Load the zone page + an apartment detail and report ALL console errors + failed
// requests, so we can confirm only the documented Altone/AbarHigh font 404s remain.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const failed = [];
  const errors = [];
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url().replace(BASE, '')); });
  page.on('requestfailed', (r) => { const u = r.url(); if (!/\.mp4/.test(u)) failed.push('FAIL ' + u.replace(BASE, '')); });
  page.on('pageerror', (e) => errors.push('PAGEERR ' + String(e).slice(0, 140)));
  page.on('console', (m) => { if (m.type() === 'error') { const t = m.text(); if (!/Failed to load resource/.test(t)) errors.push('CONSOLE ' + t.slice(0, 140)); } });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(7000);
  // open list + go to a detail to exercise more
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2000);
  await page.evaluate(() => window.next && window.next.router && window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/1_04?side=north&floor=1'));
  await sleep(6000);

  const classify = (s) => {
    if (/Altone|AbarHigh|fonts\/(altone|abarhigh)/i.test(s)) return 'EXPECTED-font';
    if (/api\/lang/.test(s)) return 'EXPECTED-lang500';
    if (/cdn-cgi/.test(s)) return 'cdn-cgi';
    if (/favicon/.test(s)) return 'favicon';
    if (/ws:\/\/|websocket/i.test(s)) return 'websocket';
    return 'OTHER';
  };
  const buckets = {};
  [...new Set(failed)].forEach((f) => { const c = classify(f); (buckets[c] = buckets[c] || []).push(f); });
  console.log('=== FAILED REQUESTS by category ===');
  for (const [c, arr] of Object.entries(buckets)) { console.log(`\n[${c}] (${arr.length})`); arr.slice(0, 8).forEach((x) => console.log('   ', x)); }
  console.log('\n=== PAGE/CONSOLE ERRORS (non-resource) ===');
  [...new Set(errors)].forEach((e) => console.log('   ', e));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
