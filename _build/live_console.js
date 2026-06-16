// Capture the LIVE site's console errors + failed requests, to confirm the clone's
// remaining items (Altone font 404, api/lang 500, pixel-streaming WebSocket) also
// occur on the original (i.e. faithful, not clone defects).
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'https://mieszkania.kozielskapark.pl';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const failed = []; const errors = [];
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url().replace(BASE, '').slice(0, 70)); });
  page.on('console', (m) => { if (m.type() === 'error') { const t = m.text(); if (/websocket|ws:|font|Altone|AbarHigh/i.test(t)) errors.push('CONSOLE ' + t.slice(0, 120)); } });
  page.on('pageerror', (e) => errors.push('PAGEERR ' + String(e).slice(0, 120)));
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(8000);
  console.log('=== LIVE failed requests (font/lang/cdn-cgi/favicon) ===');
  [...new Set(failed)].filter((f) => /font|altone|abarhigh|lang|cdn-cgi|favicon|\.ttf|\.woff/i.test(f)).forEach((f) => console.log('   ', f));
  console.log('=== LIVE relevant console errors ===');
  [...new Set(errors)].forEach((e) => console.log('   ', e));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
