const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const p = await b.newPage(); await p.setViewport({ width: 1600, height: 1000 });
  await p.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(4000);
  await p.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /SPRAWD/i.test(e.innerText)); if (x) x.click(); }); await sleep(2500);
  await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find((e) => /Filtr/i.test(e.innerText)); if (x) x.click(); }); await sleep(900);
  await p.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); if (r) (r.closest('label') || r).click(); }); await sleep(2500);
  await p.screenshot({ path: '_build/screenshots/filtered_rooms2.png' });
  console.log('OFERTY after rooms=2:', await p.evaluate(() => (document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i) || [])[1]));
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
