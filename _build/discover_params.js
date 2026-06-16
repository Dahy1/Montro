// Toggle every filter/sort control on the LIVE site and record the exact
// Zone_A.json query string each produces. Reveals all param names + values.
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
  let last = '';
  const seen = [];
  page.on('request', (r) => { const u = r.url(); const m = u.match(/Zone_A\.json\?(.*)$/); if (m) { last = decodeURIComponent(m[1]); seen.push(last); } });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Akcept|Zgadzam|Accept|Zezw/i.test(x.innerText)); if (b) b.click(); });
  await sleep(800);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); if (b) b.click(); });
  await sleep(1000);

  const tryControl = async (label, fn, arg) => { seen.length = 0; await page.evaluate(fn, arg); await sleep(2200); console.log(label.padEnd(22), '->', [...new Set(seen)].join('   ||   ') || '(no zone_a refetch)'); };

  await tryControl('rooms=1', () => { const r = document.querySelector('input[name=roomsCount][value="1"]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('rooms=1 off', () => { const r = document.querySelector('input[name=roomsCount][value="1"]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('status', () => { const r = document.querySelector('input[name=status]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('status off', () => { const r = document.querySelector('input[name=status]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('balcony', () => { const r = document.querySelector('input[name=balcony]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('balcony off', () => { const r = document.querySelector('input[name=balcony]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('loggia', () => { const r = document.querySelector('input[name=loggia]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('loggia off', () => { const r = document.querySelector('input[name=loggia]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('terrace', () => { const r = document.querySelector('input[name=terrace]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('terrace off', () => { const r = document.querySelector('input[name=terrace]'); if (r) (r.closest('label') || r).click(); });
  await tryControl('price to slider', () => { const sl = document.querySelector('input[type=range][name=to]'); if (sl) { const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(sl, String(Math.round((+sl.min + +sl.max) / 2))); sl.dispatchEvent(new Event('input', { bubbles: true })); sl.dispatchEvent(new Event('change', { bubbles: true })); } });
  await tryControl('price from slider', () => { const sl = document.querySelector('input[type=range][name=from]'); if (sl) { const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(sl, String(Math.round((+sl.min + +sl.max) / 3))); sl.dispatchEvent(new Event('input', { bubbles: true })); sl.dispatchEvent(new Event('change', { bubbles: true })); } });
  await tryControl('search text', () => { const i = document.querySelector('input[name=search]'); if (i) { const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(i, '1.4'); i.dispatchEvent(new Event('input', { bubbles: true })); i.dispatchEvent(new Event('change', { bubbles: true })); } });

  // sort: click column headers (twice each to capture asc/desc)
  for (const col of ['Cena', 'Powierzchnia', 'Pi', 'Pokoje', 'Etap']) {
    await tryControl('sort ' + col, (c) => { const re = new RegExp('^' + c, 'i'); const h = [...document.querySelectorAll('th,span,div,button,p')].find((e) => { const t = (e.innerText || '').trim(); return re.test(t) && t.length < 16; }); if (h) h.click(); }, col);
    await tryControl('sort ' + col + ' (2)', (c) => { const re = new RegExp('^' + c, 'i'); const h = [...document.querySelectorAll('th,span,div,button,p')].find((e) => { const t = (e.innerText || '').trim(); return re.test(t) && t.length < 16; }); if (h) h.click(); }, col);
  }
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
