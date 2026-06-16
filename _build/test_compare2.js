// Properly test comparison: inspect an apartment card's controls, click the compare
// toggle, verify the "Porównanie N" counter increments and the comparison view shows
// the selected units.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run(label, base) {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  await page.goto(base + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4500);
  await page.evaluate(() => { const x = [...document.querySelectorAll('button')].find((e) => /Akcept|Zgadzam|Accept|Zezw/i.test(e.innerText)); if (x) x.click(); });
  await sleep(600);
  await page.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /SPRAWD/i.test(e.innerText)); if (x) x.click(); });
  await sleep(2500);

  // inspect first card's interactive controls
  const cardInfo = await page.evaluate(() => {
    const link = document.querySelector('a[href*="/Kozielska_A1V/"]');
    const card = link && link.closest('li, [class*=Card], [class*=Item], [class*=Row]');
    if (!card) return null;
    const ctrls = [...card.querySelectorAll('button, input[type=checkbox], [role=button], svg, [class*=ompar], [class*=heart], [class*=Add], [class*=Check]')].map((e) => ({ tag: e.tagName, cls: (e.className && e.className.toString ? e.className.toString().slice(0, 45) : ''), label: e.getAttribute('aria-label') || e.title || '' }));
    return { cardTag: card.tagName, cardCls: (card.className.toString ? card.className.toString().slice(0, 45) : ''), ctrls: ctrls.slice(0, 12) };
  });
  console.log(`\n==== ${label} ====`);
  console.log('first card:', JSON.stringify(cardInfo, null, 1));

  const counter = () => page.evaluate(() => { const m = document.body.innerText.match(/Por[oó]wnanie\s*(\d+)/i); return m ? +m[1] : null; });
  console.log('counter before:', await counter());
  // click the first non-link control in 2 cards (likely the compare toggle)
  const clicked = await page.evaluate(async () => {
    const links = [...document.querySelectorAll('a[href*="/Kozielska_A1V/"]')].slice(0, 3);
    let n = 0;
    for (const l of links) {
      const card = l.closest('li, [class*=Card], [class*=Item], [class*=Row]');
      const ctrl = card && [...card.querySelectorAll('button, input[type=checkbox], [role=button]')].find((e) => !/SPRAWD|szczeg|detail/i.test(e.innerText || ''));
      if (ctrl) { ctrl.click(); n++; await new Promise((r) => setTimeout(r, 500)); }
    }
    return n;
  });
  await sleep(1200);
  console.log('clicked', clicked, 'card controls | counter after:', await counter());
  // open comparison
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /^Por[oó]wnanie/i.test((x.innerText || '').trim())); if (b) b.click(); });
  await sleep(2500);
  const view = await page.evaluate(() => ({ units: (document.body.innerText.match(/Lokal M [\d.]+/g) || []).slice(0, 6), body: document.body.innerText.replace(/\s+/g, ' ').slice(0, 100) }));
  console.log('comparison view units:', JSON.stringify(view.units));
  await page.screenshot({ path: `_build/screenshots/compare_${label}.png` });
  await browser.close();
}
(async () => { await run('CLONE', 'http://localhost:8099'); await run('LIVE', 'https://mieszkania.kozielskapark.pl'); })().catch((e) => { console.error('ERR', e); process.exit(1); });
