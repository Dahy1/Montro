// Capture the complete data flow of the apartment list on the LIVE site:
// initial load, scroll (pagination), and filtering. Logs every /api + /_next/data
// request with query strings, and how many rows render.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const BASE = 'https://mieszkania.kozielskapark.pl';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const data = [];
  page.on('request', (r) => { const u = r.url(); if (/\/api\/|\/_next\/data\/.*Zone_A\.json/i.test(u) && !/facebook|google|hotjar/i.test(u)) data.push(u.replace(BASE, '')); });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Akcept|Zgadzam|Accept|Zezw/i.test(x.innerText)); if (b) b.click(); });
  await sleep(800);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);

  const rows = () => page.evaluate(() => document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_"]').length);
  console.log('=== after opening list ===');
  console.log('rows:', await rows());
  console.log('data reqs:', JSON.stringify([...new Set(data)], null, 1));

  // scroll the list container to trigger pagination
  data.length = 0;
  await page.evaluate(async () => {
    const list = [...document.querySelectorAll('*')].find((e) => e.scrollHeight > e.clientHeight + 50 && e.querySelector('a[href*="/Kozielska_A1V/"]'));
    for (let i = 0; i < 8; i++) { if (list) list.scrollTop += 600; window.scrollBy(0, 300); await new Promise((r) => setTimeout(r, 500)); }
  });
  await sleep(2500);
  console.log('\n=== after scrolling ===');
  console.log('rows:', await rows());
  console.log('data reqs during scroll:', JSON.stringify([...new Set(data)], null, 1));

  // apply 2-room filter
  data.length = 0;
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); if (b) b.click(); });
  await sleep(1000);
  await page.evaluate(() => { const r = document.querySelector('input[name="roomsCount"][value="2"]'); if (r) (r.closest('label') || r).click(); });
  await sleep(3000);
  console.log('\n=== after rooms=2 filter ===');
  console.log('rows:', await rows());
  console.log('data reqs:', JSON.stringify([...new Set(data)], null, 1));

  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
