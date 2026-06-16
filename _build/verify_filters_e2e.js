// End-to-end: filters change OFERTY + displayed rows; scrolling loads the full
// list without duplication; sorting reorders. Compares clone behaviour to live.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run(label, base) {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  await page.goto(base + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4500);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Akcept|Zgadzam|Accept|Zezw/i.test(x.innerText)); if (b) b.click(); });
  await sleep(600);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);

  const ofery = () => page.evaluate(() => +(document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i) || [])[1]);
  const rows = () => page.evaluate(() => [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')].slice(0, 6).map((a) => a.getAttribute('href').split('/').pop().split('?')[0]));
  const scrollFull = async () => { await page.evaluate(async () => { const ls = [...document.querySelectorAll('a[href*="/Kozielska_A1V/"]')]; let c = null; if (ls[0]) { let p = ls[0].parentElement; while (p) { if (p.scrollHeight > p.clientHeight + 30) { c = p; break; } p = p.parentElement; } } if (c) for (let i = 0; i < 25; i++) { c.scrollTop = c.scrollHeight; await new Promise((r) => setTimeout(r, 150)); } }); await sleep(1200); };

  console.log(`\n==== ${label} ====`);
  console.log('initial OFERTY:', await ofery(), '| rows:', (await rows()).join(','));
  await scrollFull();
  const total = await page.evaluate(() => document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]').length);
  console.log('rows after full scroll (live~66-72, was 2094 buggy):', total);

  // apply rooms=2 filter
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); if (b) b.click(); });
  await sleep(900);
  await page.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); if (r) (r.closest('label') || r).click(); });
  await sleep(2500);
  console.log('after rooms=2 -> OFERTY:', await ofery(), '| rows:', (await rows()).join(','));

  // sorting: click "Cena" header twice, read first-6 price order from the rows
  const readPrices = () => page.evaluate(() => [...document.querySelectorAll('a[href*="/Kozielska_A1V/"]')].slice(0, 6).map((a) => { const m = (a.textContent || '').match(/([\d  ]{5,})\s*z/); return m ? +m[1].replace(/[^\d]/g, '') : null; }).filter(Boolean));
  const p0 = await readPrices();
  await page.evaluate(() => { const h = [...document.querySelectorAll('th,span,div,button,p')].find((e) => /^Cena$/i.test((e.innerText || '').trim())); if (h) h.click(); });
  await sleep(1500);
  const p1 = await readPrices();
  await page.evaluate(() => { const h = [...document.querySelectorAll('th,span,div,button,p')].find((e) => /^Cena$/i.test((e.innerText || '').trim())); if (h) h.click(); });
  await sleep(1500);
  const p2 = await readPrices();
  console.log('prices before sort:', JSON.stringify(p0));
  console.log('prices sort asc?  :', JSON.stringify(p1), 'sorted=', JSON.stringify(p1) === JSON.stringify([...p1].sort((a, b) => a - b)));
  console.log('prices sort desc? :', JSON.stringify(p2), 'sorted=', JSON.stringify(p2) === JSON.stringify([...p2].sort((a, b) => b - a)));
  await browser.close();
}

(async () => {
  await run('CLONE', 'http://localhost:8099');
  await run('LIVE', 'https://mieszkania.kozielskapark.pl');
})().catch((e) => { console.error('ERR', e); process.exit(1); });
