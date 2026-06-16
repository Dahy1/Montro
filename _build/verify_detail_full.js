// Full detail-page verification: (1) direct load (page.goto) renders, not 404;
// (2) camera flythrough has no missing /vmedia; (3) price history renders;
// (4) SPA nav from list works. Screenshots + structured report.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function newPage(browser, bucket) {
  const page = await browser.newPage();
  await page.setUserAgent(UA); await page.setViewport({ width: 1440, height: 900 });
  page.on('response', (r) => { if (r.status() >= 400 && !/google|gstatic|cdn-cgi|favicon|api\/lang|Altone/.test(r.url())) bucket.push(r.status() + ' ' + r.url().replace(BASE, '').slice(0, 100)); });
  return page;
}

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1440,900'] });

  // ===== (1) DIRECT LOAD of an AVAILABLE apartment =====
  const fails1 = [];
  const p1 = await newPage(browser, fails1);
  await p1.goto(BASE + '/Kozielska/Zone_A/Kozielska_A1V/1_04?side=north&floor=1', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(9000);
  const d1 = await p1.evaluate(() => {
    const t = document.body.innerText.replace(/\s+/g, ' ');
    return { is404: /^404/.test(t.trim()), len: t.length, hasUnit: /Lokal/i.test(t), hasPrice: /z[lł]/i.test(t), canvases: document.querySelectorAll('canvas').length, head: t.slice(0, 120) };
  });
  console.log('(1) DIRECT LOAD: 404?', d1.is404, '| canvases:', d1.canvases, '| hasUnit:', d1.hasUnit, '| len:', d1.len);
  console.log('    head:', d1.head);
  await p1.screenshot({ path: '_build/screenshots/verify_detail_direct.png' });

  // price history on the direct-loaded page
  const ph = await p1.evaluate(async () => {
    const btn = [...document.querySelectorAll('button,a')].find((b) => /HISTORIA CEN/i.test(b.innerText));
    if (!btn) return { had: false };
    btn.click(); await new Promise((r) => setTimeout(r, 3000));
    // look for an svg chart / recharts / list of dates
    const svg = document.querySelectorAll('svg path, svg rect, [class*=recharts]').length;
    const dates = (document.body.innerText.match(/20\d\d[-./]\d\d/g) || []).slice(0, 6);
    return { had: true, svgEls: svg, dates };
  });
  console.log('    HISTORIA CEN -> chart els:', ph.svgEls, '| dates seen:', JSON.stringify(ph.dates));
  await p1.screenshot({ path: '_build/screenshots/verify_detail_pricehistory.png' });

  // ===== (2) SPA NAV from list =====
  const fails2 = [];
  const p2 = await newPage(browser, fails2);
  await p2.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4000);
  await p2.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  const spa = await p2.evaluate(() => { const a = document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]'); if (!a) return null; const h = a.getAttribute('href'); a.click(); return h; });
  await sleep(8000);
  const d2 = await p2.evaluate(() => ({ url: location.pathname, is404: /^404/.test(document.body.innerText.trim()), hasUnit: /Lokal/i.test(document.body.innerText) }));
  console.log('(2) SPA NAV ->', spa, '| landed:', d2.url, '| 404?', d2.is404, '| hasUnit:', d2.hasUnit);

  console.log('\n--- (1) direct-load failed reqs (filtered) ---'); [...new Set(fails1)].forEach((f) => console.log('  ', f));
  console.log('--- (2) spa-nav failed reqs (filtered) ---'); [...new Set(fails2)].forEach((f) => console.log('  ', f));
  fs.writeFileSync('_build/verify_detail_full_result.json', JSON.stringify({ d1, ph, spa, d2, fails1: [...new Set(fails1)], fails2: [...new Set(fails2)] }, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
