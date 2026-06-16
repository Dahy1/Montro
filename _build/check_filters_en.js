const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const p = await b.newPage(); await p.setViewport({ width: 1600, height: 1000 });
  await p.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(5000);
  await p.evaluate(() => { const x = [...document.querySelectorAll('button,a')].find((e) => /CHECK OFFERS/i.test(e.innerText)); x && x.click(); }); await sleep(2500);
  await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find((e) => /Filters/i.test(e.innerText)); x && x.click(); }); await sleep(1200);
  const labels = await p.evaluate(() => [...document.querySelectorAll('label, [class*=Filter] span, [class*=Filter] p, [class*=RadioInput], [class*=Checkbox]')].map((e) => e.innerText.replace(/\s+/g, ' ').trim()).filter((t) => t && t.length < 25));
  console.log('filter labels:', JSON.stringify([...new Set(labels)]));
  const taras = await p.evaluate(() => /\bTaras\b/.test(document.body.innerText));
  console.log('still has "Taras":', taras);
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
