// Watch the clone's /api/apartments calls during list scroll to find why rows
// duplicate (2094). Logs every apartments request query string + response count.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const BASE = 'http://localhost:8099';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1000 });
  const calls = [];
  page.on('request', (r) => { const u = r.url(); if (/\/api\/apartments/.test(u)) calls.push(u.replace(BASE, '')); });
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  console.log('calls after opening list:', JSON.stringify([...new Set(calls)]));
  calls.length = 0;
  // gentle scroll
  await page.evaluate(async () => {
    const links = [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')];
    let cont = null; if (links[0]) { let p = links[0].parentElement; while (p) { if (p.scrollHeight > p.clientHeight + 30) { cont = p; break; } p = p.parentElement; } }
    if (cont) for (let i = 0; i < 10; i++) { cont.scrollTop += cont.clientHeight; await new Promise((r) => setTimeout(r, 300)); }
  });
  await sleep(2000);
  console.log('apartments calls during scroll:', calls.length);
  console.log('distinct:', JSON.stringify([...new Set(calls)].slice(0, 8)));
  const linkCount = await page.evaluate(() => document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]').length);
  console.log('link count after gentle scroll:', linkCount);
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
