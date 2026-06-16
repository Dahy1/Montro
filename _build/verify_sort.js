// Clean sort check: click each sortable column header and read the apartment href
// order of the first rows, comparing clone vs live for parity.
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
  const order = () => page.evaluate(() => [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')].slice(0, 8).map((a) => a.getAttribute('href').split('/').pop().split('?')[0]));
  // find clickable header by its text within the list header row
  const clickHeader = (txt) => page.evaluate((t) => {
    const els = [...document.querySelectorAll('th,button,span,div,p')].filter((e) => (e.innerText || '').trim().replace(/\s*[▲▼↑↓]\s*/g, '') === t && e.offsetParent !== null);
    // choose the smallest such element (the header label, not a container)
    const el = els.sort((a, b) => a.innerText.length - b.innerText.length)[0];
    if (!el) return false; el.click(); return true;
  }, txt);

  console.log(`\n==== ${label} ====`);
  console.log('base order:', (await order()).join(','));
  for (const col of ['Cena', 'Powierzchnia', 'Piętro']) {
    const c1 = await clickHeader(col); await sleep(1500); const o1 = await order();
    const c2 = await clickHeader(col); await sleep(1500); const o2 = await order();
    console.log(`${col}: click=${c1}/${c2} | asc=${o1.join(',')} | desc=${o2.join(',')} | reordered=${o1.join() !== o2.join()}`);
  }
  await browser.close();
}
(async () => { await run('CLONE', 'http://localhost:8099'); await run('LIVE', 'https://mieszkania.kozielskapark.pl'); })().catch((e) => { console.error('ERR', e); process.exit(1); });
