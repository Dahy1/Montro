const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const p = await b.newPage(); await p.setUserAgent(UA); await p.setViewport({ width: 1600, height: 1000 });
  // hero
  await p.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(7000);
  await p.screenshot({ path: '_build/screenshots/final_hero.png' });
  // detail (available apartment)
  await p.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /SPRAWD/i.test(e.innerText)); x && x.click(); }); await sleep(2000);
  await p.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/2_04?side=north&floor=2')); await sleep(8000);
  await p.screenshot({ path: '_build/screenshots/final_detail.png' });
  console.log('detail body:', await p.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 90)));
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
