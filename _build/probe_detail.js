// Navigate Zone_A -> click first apartment (SPA nav now that JSON exists),
// capture what the detail page renders and what it fetches.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });

  const reqs = [];
  page.on('response', (r) => reqs.push({ s: r.status(), u: r.url() }));
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERR ' + String(e).slice(0, 160)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text().slice(0, 160)); });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);
  // open offers + click first card via SPA
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  reqs.length = 0; // focus on detail nav
  const target = await page.evaluate(() => {
    const a = document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]');
    if (!a) return null; const h = a.getAttribute('href'); a.click(); return h;
  });
  console.log('clicked SPA href:', target);
  await sleep(8000);
  console.log('URL now:', page.url());

  const dom = await page.evaluate(() => {
    const txt = document.body.innerText.replace(/\s+/g, ' ');
    return {
      bodyLen: txt.length,
      body: txt.slice(0, 400),
      is404: /404|not found/i.test(txt.slice(0, 60)),
      canvases: document.querySelectorAll('canvas').length,
      iframes: [...document.querySelectorAll('iframe')].map((f) => f.src).slice(0, 5),
      imgs: [...document.querySelectorAll('img')].map((i) => i.currentSrc || i.src).filter((s) => !/data:/.test(s)).slice(0, 12),
      pdfLinks: [...document.querySelectorAll('a[href*=".pdf"], a[href*="voxdeveloper"]')].map((a) => a.href).slice(0, 8),
      buttons: [...document.querySelectorAll('button')].map((b) => b.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 25),
    };
  });
  console.log('DOM:', JSON.stringify(dom, null, 1));
  await page.screenshot({ path: '_build/screenshots/detail_spa.png', fullPage: true });

  console.log('\n--- external / interesting requests during detail nav ---');
  reqs.filter((r) => /voxdeveloper|vinode|\.glb|\.pdf|\.json|panorama|pano|tiles|\.ktx2|\.basis|floorplan/i.test(r.u))
    .forEach((r) => console.log('  ', r.s, r.u.slice(0, 130)));
  console.log('\n--- errors ---');
  [...new Set(errors)].forEach((e) => console.log('  ', e));
  fs.writeFileSync('_build/probe_detail_result.json', JSON.stringify({ target, url: page.url(), dom, reqs, errors: [...new Set(errors)] }, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
