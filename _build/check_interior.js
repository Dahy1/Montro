// Inspect the apartment detail page for an interior 360 tour / walk element and any
// tabs (Plan Jednostki / Wnętrze / Spacer), checking what they do (clone vs live).
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run(label, base) {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const ext = [];
  page.on('request', (r) => { const u = r.url(); if (/voxdeveloper|vinode.*interior|panorama|pano|krpano|360|tour/i.test(u)) ext.push(u.slice(0, 90)); });
  await page.goto(base + '/Kozielska/Zone_A/Kozielska_A1V/1_04?side=north&floor=1', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(8000);
  const tabs = await page.evaluate(() => [...document.querySelectorAll('button, [role=tab], a, [class*=Tab]')].map((e) => (e.innerText || '').replace(/\s+/g, ' ').trim()).filter((t) => t && t.length < 30));
  console.log(`\n==== ${label} ====`);
  console.log('buttons/tabs:', JSON.stringify([...new Set(tabs)]));
  // look for interior/360 specific terms
  const interior = await page.evaluate(() => {
    const terms = /wn[eę]trz|spacer|360|wirtualny|tour|panoram|obejrzyj/i;
    return [...document.querySelectorAll('button,a,[role=button],[class*=Tab]')].filter((e) => terms.test(e.innerText || '')).map((e) => e.innerText.replace(/\s+/g, ' ').trim());
  });
  console.log('interior/360 controls:', JSON.stringify([...new Set(interior)]));
  // click "Plan Jednostki" if present and see
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a,[role=tab]')].find((e) => /Plan Jednostki/i.test(e.innerText)); b && b.click(); });
  await sleep(2500);
  console.log('external interior/tour requests:', JSON.stringify([...new Set(ext)].slice(0, 6)));
  await browser.close();
}
(async () => { await run('CLONE', 'http://localhost:8099'); await run('LIVE', 'https://mieszkania.kozielskapark.pl'); })().catch((e) => { console.error('ERR', e); process.exit(1); });
