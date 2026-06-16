// Definitively inspect the list rendering on BOTH live and clone: how many row
// elements, the scroll container, whether sorting/price reorder the visible list.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function inspect(label, base) {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  await page.goto(base + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Akcept|Zgadzam|Accept|Zezw/i.test(x.innerText)); if (b) b.click(); });
  await sleep(700);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);

  const info = await page.evaluate(() => {
    const links = [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')];
    // find the scroll container holding these links
    let cont = null;
    if (links[0]) { let p = links[0].parentElement; while (p) { if (p.scrollHeight > p.clientHeight + 30) { cont = p; break; } p = p.parentElement; } }
    // rows: count elements that look like a unit row (have the price text)
    const allUnitTexts = [...document.querySelectorAll('*')].filter((e) => /Lokal M \d/.test(e.textContent || '') && e.querySelectorAll('*').length < 30);
    return {
      linkCount: links.length,
      firstLinks: links.slice(0, 10).map((a) => a.getAttribute('href').split('/').pop().split('?')[0]),
      contClient: cont ? cont.clientHeight : null,
      contScroll: cont ? cont.scrollHeight : null,
      ofery: (document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i) || [])[1],
    };
  });
  // scroll the container fully and recount
  await page.evaluate(async () => {
    const links = [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')];
    let cont = null; if (links[0]) { let p = links[0].parentElement; while (p) { if (p.scrollHeight > p.clientHeight + 30) { cont = p; break; } p = p.parentElement; } }
    if (cont) for (let i = 0; i < 30; i++) { cont.scrollTop = cont.scrollHeight; await new Promise((r) => setTimeout(r, 120)); }
  });
  await sleep(1500);
  const afterScroll = await page.evaluate(() => {
    const links = [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')];
    return { linkCount: links.length, last: links.slice(-4).map((a) => a.getAttribute('href').split('/').pop().split('?')[0]) };
  });
  console.log(`\n==== ${label} ====`);
  console.log('initial links:', info.linkCount, info.firstLinks.join(','));
  console.log('container client/scroll H:', info.contClient, '/', info.contScroll, '| OFERTY:', info.ofery);
  console.log('after scrolling links:', afterScroll.linkCount, '| last:', afterScroll.last.join(','));
  await browser.close();
}

(async () => {
  await inspect('CLONE', 'http://localhost:8099');
  await inspect('LIVE', 'https://mieszkania.kozielskapark.pl');
})().catch((e) => { console.error('ERR', e); process.exit(1); });
