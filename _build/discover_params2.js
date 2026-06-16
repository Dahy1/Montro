// Capture price / search / sort param names from the LIVE Zone_A.json refetches.
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
  const seen = [];
  page.on('request', (r) => { const m = r.url().match(/Zone_A\.json\?(.*)$/); if (m) seen.push(decodeURIComponent(m[1])); });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Akcept|Zgadzam|Accept|Zezw/i.test(x.innerText)); if (b) b.click(); });
  await sleep(800);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); if (b) b.click(); });
  await sleep(1000);

  const cap = async (label, fn, arg) => { seen.length = 0; try { await page.evaluate(fn, arg); } catch (e) {} await sleep(2500); console.log(label.padEnd(18), '->', [...new Set(seen)].pop() || '(none)'); };

  await cap('price to', () => { const sl = document.querySelector('input[type=range][name=to]'); const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(sl, String(Math.round((+sl.min + +sl.max) / 2))); sl.dispatchEvent(new Event('input', { bubbles: true })); sl.dispatchEvent(new Event('change', { bubbles: true })); });
  await cap('price from', () => { const sl = document.querySelector('input[type=range][name=from]'); const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(sl, String(Math.round((+sl.min + +sl.max) / 3))); sl.dispatchEvent(new Event('input', { bubbles: true })); sl.dispatchEvent(new Event('change', { bubbles: true })); });
  await cap('search', () => { const i = document.querySelector('input[name=search]'); const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(i, '1.4'); i.dispatchEvent(new Event('input', { bubbles: true })); i.dispatchEvent(new Event('change', { bubbles: true })); });
  await cap('search clear', () => { const i = document.querySelector('input[name=search]'); const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; s.call(i, ''); i.dispatchEvent(new Event('input', { bubbles: true })); i.dispatchEvent(new Event('change', { bubbles: true })); });

  // sort headers: find the list header cells and click them, capture param
  const headers = await page.evaluate(() => {
    const cells = [...document.querySelectorAll('*')].filter((e) => /^(Cena|Powierzchnia|Pi[eę]tro|Pokoje|Etap|Lokal|Cena Za)/i.test((e.innerText || '').trim()) && (e.innerText || '').trim().length < 16 && e.children.length <= 1);
    return cells.map((e) => e.innerText.trim());
  });
  console.log('candidate header cells:', JSON.stringify([...new Set(headers)]));
  for (const h of [...new Set(headers)]) {
    await cap('sort:' + h, (txt) => { const el = [...document.querySelectorAll('*')].find((e) => (e.innerText || '').trim() === txt && e.children.length <= 1); if (el) el.click(); }, h);
    await cap('sort:' + h + '(2)', (txt) => { const el = [...document.querySelectorAll('*')].find((e) => (e.innerText || '').trim() === txt && e.children.length <= 1); if (el) el.click(); }, h);
  }
  await browser.close();
})().catch((e) => { console.error('ERR', e); });
