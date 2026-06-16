const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const p = await b.newPage(); await p.setViewport({ width: 1600, height: 1000 });
  await p.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(6000);
  // hover the hero CTA "CHECK OFFERS"
  const box = await p.evaluate(() => { const el = [...document.querySelectorAll('button,a')].find((e) => /CHECK OFFERS/i.test(e.innerText)); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; });
  if (box) { await p.mouse.move(box.x, box.y); await sleep(900); }
  // report the CTA's hover bg color
  const c = await p.evaluate(() => { const el = [...document.querySelectorAll('button,a')].find((e) => /CHECK OFFERS/i.test(e.innerText)); return el ? getComputedStyle(el).backgroundColor : null; });
  console.log('CTA hover background:', c);
  await p.screenshot({ path: '_build/screenshots/olive_hover_cta.png' });
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
