// Test the remaining features: comparison (Porównanie add/view), amenities POI
// thumbnails, and the contact (kontakt) action. Capture 404s + state changes.
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
  const miss = new Set();
  page.on('response', (r) => { if (r.status() === 404 && /vmedia|_next\/data|api\//.test(r.url()) && !/api\/lang/.test(r.url())) miss.add(r.status() + ' ' + r.url().split('/').slice(-1)[0].slice(0, 50)); });
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(5000);

  // ---- COMPARISON ----
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  // each apartment card has a compare toggle; click a few "Porównanie" affordances on cards
  const compBefore = await page.evaluate(() => (document.body.innerText.match(/Por[oó]wnanie\s*(\d+)/i) || [])[1]);
  const added = await page.evaluate(async () => {
    // find compare buttons inside apartment cards (often an icon button near each card)
    const cards = [...document.querySelectorAll('a[href*="/Kozielska_A1V/"]')].slice(0, 3);
    let n = 0;
    for (const c of cards) {
      const card = c.closest('[class*=Card], [class*=Item], li, div');
      const btn = card && [...card.querySelectorAll('button, [class*=ompar], [class*=heart], svg')].find((b) => /por[oó]wn|compar|add/i.test((b.getAttribute('aria-label') || b.title || b.className || '').toString()));
      if (btn) { btn.click(); n++; await new Promise((r) => setTimeout(r, 400)); }
    }
    return n;
  });
  await sleep(1200);
  const compAfter = await page.evaluate(() => (document.body.innerText.match(/Por[oó]wnanie\s*(\d+)/i) || [])[1]);
  console.log('COMPARISON: counter', compBefore, '-> after clicking', added, 'card toggles ->', compAfter);
  // open comparison view
  const openComp = await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /^Por[oó]wnanie/i.test((x.innerText || '').trim())); if (b) { b.click(); return true; } return false; });
  await sleep(2500);
  const compView = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 120));
  console.log('opened comparison view:', openComp, '| body:', compView);
  await page.screenshot({ path: '_build/screenshots/comparison.png' });

  // ---- AMENITIES / POI ----
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 60000 });
  await sleep(5000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Udogodnienia/i.test(x.innerText)); if (b) b.click(); });
  await sleep(5000);
  const poiThumbs = await page.evaluate(() => document.querySelectorAll('[class*=Poi] img, [class*=Amenit] img, [class*=SectionItem] img, [class*=Slider] img').length);
  const vid1 = await page.evaluate(() => { const v = document.querySelector('video'); return v ? (v.currentSrc || '').split('/').pop() : null; });
  console.log('\nAMENITIES: video=', vid1, '| poi/amenity thumbnails=', poiThumbs);
  // click a POI thumbnail
  const poiClick = await page.evaluate(() => { const t = [...document.querySelectorAll('[class*=Poi] img, [class*=SectionItem], [class*=Slider] [class*=Item]')][2]; if (t) { t.click(); return true; } return false; });
  await sleep(4000);
  const vid2 = await page.evaluate(() => { const v = document.querySelector('video'); return v ? (v.currentSrc || '').split('/').pop() : null; });
  console.log('after POI click:', poiClick, '| video=', vid2);
  await page.screenshot({ path: '_build/screenshots/amenities.png' });

  console.log('\n404s during remaining-feature flow:', miss.size); [...miss].forEach((m) => console.log('  ', m));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
