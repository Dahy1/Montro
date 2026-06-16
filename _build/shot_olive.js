const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const p = await b.newPage(); await p.setViewport({ width: 1600, height: 1000 });
  await p.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(6000);
  await p.screenshot({ path: '_build/screenshots/olive_hero.png' });
  // open list + select a room filter (active state uses the accent)
  await p.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /CHECK OFFERS/i.test(e.innerText)); x && x.click(); }); await sleep(2500);
  await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find((e) => /Filters/i.test(e.innerText)); x && x.click(); }); await sleep(1000);
  await p.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); r && (r.closest('label') || r).click(); }); await sleep(1500);
  // also toggle a feature checkbox + comparison to surface accent usage
  await p.evaluate(() => { const r = document.querySelector('input[name=balcony]'); r && (r.closest('label') || r).click(); }); await sleep(1200);
  await p.screenshot({ path: '_build/screenshots/olive_list.png' });
  // report the computed accent color of an element using it
  const accent = await p.evaluate(() => {
    const el = [...document.querySelectorAll('*')].find((e) => { const c = getComputedStyle(e).backgroundColor; return /rgb\(96, ?108, ?56/.test(c); });
    return el ? getComputedStyle(el).backgroundColor : 'not-found-on-screen';
  });
  console.log('olive accent computed on a visible element:', accent);
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
