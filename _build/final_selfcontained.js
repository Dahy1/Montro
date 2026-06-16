// Final check: across the full journey (incl. opening the apartment PDF), confirm the
// clone makes NO external calls except Google Fonts, and no unexpected 4xx/5xx.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const external = new Set(); const failed = new Set();
  const allowExternal = /localhost|fonts\.googleapis\.com|fonts\.gstatic\.com|data:|blob:|about:/;
  page.on('request', (r) => { const u = r.url(); if (!allowExternal.test(u)) external.add(new URL(u).host); });
  page.on('response', (r) => { if (r.status() >= 400 && /localhost/.test(r.url()) && !/api\/lang|Altone|favicon\.ong|apple-touch/.test(r.url())) failed.add(r.status() + ' ' + r.url().replace(BASE, '')); });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(6000);
  // list + detail + price history + PDF open + amenities
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); b && b.click(); });
  await sleep(2000);
  await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/1_04?side=north&floor=1'));
  await sleep(6000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /HISTORIA CEN/i.test(x.innerText)); b && b.click(); });
  await sleep(2000);
  // capture PDF target (without truly navigating cross-tab): read the link/handler target
  const pdfTarget = await page.evaluate(() => {
    const b = [...document.querySelectorAll('button,a')].find((x) => /PDF APARTAMENTU/i.test(x.innerText));
    if (!b) return null; const a = b.closest('a') || b.querySelector('a'); return a ? a.href : 'button(opens via JS)';
  });
  // fetch the PDF as a resource to confirm it's local
  const pdfFetch = await page.evaluate(async () => { try { const r = await fetch('/voxdoc/apartment/1_04.pdf', { method: 'HEAD' }); return r.status + ' ' + r.headers.get('content-type'); } catch (e) { return 'ERR ' + e.message; } });
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 60000 }); await sleep(3000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Udogodnienia/i.test(x.innerText)); b && b.click(); });
  await sleep(5000);

  console.log('=== EXTERNAL hosts contacted (should be only Google Fonts, already allow-listed out) ===');
  console.log([...external].length ? [...external].join('\n') : '   (none — fully self-contained)');
  console.log('\n=== PDF APARTAMENTU target:', pdfTarget, '| HEAD /voxdoc/...1_04.pdf =>', pdfFetch);
  console.log('\n=== unexpected localhost 4xx/5xx ===');
  console.log([...failed].length ? [...failed].join('\n') : '   (none)');
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
