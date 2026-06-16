// Find what URL the Etap/building labels navigate to (clone), and what the building
// page needs (live data + html).
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run(label, base) {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const dataReqs = [];
  page.on('request', (r) => { const u = r.url(); if (/_next\/data\/.*\.json/.test(u)) dataReqs.push(u.replace(base, '')); });
  await page.goto(base + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => { const x = [...document.querySelectorAll('button')].find((e) => /Akcept|Zgadzam|Accept|Zezw/i.test(e.innerText)); if (x) x.click(); });
  await sleep(700);
  await page.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /SPRAWD/i.test(e.innerText)); if (x) x.click(); });
  await sleep(3000);
  // inspect the Etap element: is it a link? what href? what onclick nav?
  const etapInfo = await page.evaluate(() => {
    const el = [...document.querySelectorAll('*')].find((e) => /^Etap\s*1$/.test((e.innerText || '').trim()) && e.children.length <= 1 && e.offsetParent);
    if (!el) return null;
    let a = el.closest('a'); return { tag: el.tagName, closestA: a ? a.getAttribute('href') : null, cls: (el.className.toString ? el.className.toString().slice(0, 40) : '') };
  });
  console.log(`\n==== ${label} ====`);
  console.log('Etap 1 element:', JSON.stringify(etapInfo));
  dataReqs.length = 0;
  const before = page.url();
  await page.evaluate(() => { const el = [...document.querySelectorAll('*')].find((e) => /^Etap\s*1$/.test((e.innerText || '').trim()) && e.children.length <= 1 && e.offsetParent); if (el) el.click(); });
  await sleep(5000);
  console.log('URL before:', before);
  console.log('URL after :', page.url());
  console.log('data reqs on click:', JSON.stringify([...new Set(dataReqs)]));
  console.log('page body head:', await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 80)));
  await browser.close();
}
(async () => { await run('CLONE', 'http://localhost:8099'); await run('LIVE', 'https://mieszkania.kozielskapark.pl'); })().catch((e) => { console.error(e); process.exit(1); });
