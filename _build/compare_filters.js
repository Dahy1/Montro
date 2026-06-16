// Run the SAME filter interaction on the clone and the live site; compare whether
// the room filter changes the displayed apartments + what network calls fire.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run(label, base) {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const api = [];
  page.on('request', (r) => { const u = r.url(); if (/\/api\/apartment|graphql|rooms|filter/i.test(u)) api.push(u.replace(base, '').slice(0, 120)); });
  try {
    await page.goto(base + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
    await sleep(5000);
    // accept cookies if present
    await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Akcept|Zgadzam|Accept|Zezw/i.test(x.innerText)); if (b) b.click(); });
    await sleep(800);
    await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
    await sleep(2500);
    const read = () => page.evaluate(() => {
      const m = document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i);
      const rows = [...document.querySelectorAll('a[href*="/Kozielska_A1V/"], a[href*="/Kozielska/Zone_A/Kozielska_"]')].slice(0, 8).map((a) => a.getAttribute('href').split('/').pop().split('?')[0]);
      return { offry: m ? m[1] : null, rows };
    });
    const before = await read();
    api.length = 0;
    // open filters, select 1 room
    await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); if (b) b.click(); });
    await sleep(1000);
    const applied = await page.evaluate(() => {
      const r = document.querySelector('input[name="roomsCount"][value="1"]');
      if (!r) return false;
      const lbl = r.closest('label') || (r.id && document.querySelector(`label[for="${r.id}"]`));
      (lbl || r).click();
      return true;
    });
    await sleep(2500);
    const after = await read();
    console.log(`\n==== ${label} (${base}) ====`);
    console.log('applied 1-room:', applied);
    console.log('before:', JSON.stringify(before));
    console.log('after :', JSON.stringify(after));
    console.log('rows changed:', before.rows.join() !== after.rows.join());
    console.log('api calls after filter:', JSON.stringify([...new Set(api)]));
  } catch (e) { console.log(label, 'ERROR', e.message); }
  await browser.close();
}

(async () => {
  await run('CLONE', 'http://localhost:8099');
  await run('LIVE', 'https://mieszkania.kozielskapark.pl');
})().catch((e) => { console.error(e); process.exit(1); });
