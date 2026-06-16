// Accurate filter + sort test: drives the real roomsCount radios, status/feature
// checkboxes, price sliders, and column-header sorting; reads OFERTY count and the
// order of visible rows to confirm each control actually works.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1000 });
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2000);

  const count = () => page.evaluate(() => { const m = document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i); return m ? +m[1] : null; });
  // read the price (last numeric col) of visible rows in order
  const order = () => page.evaluate(() => [...document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]')].slice(0, 6).map((a) => a.getAttribute('href').split('/').pop().split('?')[0]));
  const open = async () => page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); if (b) b.click(); });
  const clickInput = (sel) => page.evaluate((s) => { const el = document.querySelector(s); if (!el) return false; const lbl = el.closest('label') || (el.id && document.querySelector(`label[for="${el.id}"]`)); (lbl || el).click(); el.click(); return true; }, sel);

  console.log('base OFERTY:', await count());
  await open(); await sleep(1000);

  // ---- room filters ----
  for (const v of ['1', '2', '3']) {
    const ok = await clickInput(`input[name="roomsCount"][value="${v}"]`);
    await sleep(1400);
    console.log(`rooms=${v}: applied=${ok} OFERTY=${await count()}`);
    await clickInput(`input[name="roomsCount"][value="${v}"]`); await sleep(900); // unselect
  }

  // ---- status: "Na Sprzedaż" (available) ----
  const stOk = await clickInput('input[name="status"]');
  await sleep(1400);
  console.log('status=NaSprzedaz: applied=' + stOk + ' OFERTY=' + await count());
  await clickInput('input[name="status"]'); await sleep(900);

  // ---- feature checkboxes ----
  for (const f of ['balcony', 'loggia', 'terrace']) {
    const ok = await clickInput(`input[name="${f}"]`);
    await sleep(1300);
    console.log(`${f}: applied=${ok} OFERTY=${await count()}`);
    await clickInput(`input[name="${f}"]`); await sleep(800);
  }

  // ---- price range: drag the "to" slider down via value set + input event ----
  const priceRes = await page.evaluate(async () => {
    const sl = document.querySelector('input[type=range][name="to"]');
    if (!sl) return { had: false };
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    const before = document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i)[1];
    setter.call(sl, String(Math.round((+sl.min + +sl.max) / 2.2)));
    sl.dispatchEvent(new Event('input', { bubbles: true }));
    sl.dispatchEvent(new Event('change', { bubbles: true }));
    await new Promise((r) => setTimeout(r, 1500));
    const after = (document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i) || [])[1];
    return { had: true, before, after };
  });
  console.log('price "to" lowered:', JSON.stringify(priceRes));
  await sleep(500);

  // ---- sorting by column headers ----
  await page.reload({ waitUntil: 'networkidle2' }); await sleep(3500);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2000);
  for (const col of ['Cena', 'Powierzchnia', 'Pi[eę]tro']) {
    const before = await order();
    const clicked = await page.evaluate((c) => {
      const re = new RegExp('^' + c + '$', 'i');
      const cand = [...document.querySelectorAll('th,span,div,button,p')].filter((e) => { const t = (e.innerText || '').trim(); return re.test(t.replace(/\s*[▲▼↑↓]\s*$/, '')); });
      const h = cand.sort((a, b) => (a.innerText.length - b.innerText.length))[0];
      if (!h) return false; h.click(); return true;
    }, col);
    await sleep(1300);
    const after = await order();
    const clickedAgain = await page.evaluate((c) => { const re = new RegExp('^' + c + '$', 'i'); const h = [...document.querySelectorAll('th,span,div,button,p')].find((e) => re.test((e.innerText || '').trim().replace(/\s*[▲▼↑↓]\s*$/, ''))); if (h) { h.click(); return true; } return false; }, col);
    await sleep(1300);
    const after2 = await order();
    console.log(`sort ${col}: clicked=${clicked} | before=${before.join(',')} | asc?=${after.join(',')} | desc?=${after2.join(',')} | changed=${before.join() !== after.join() || after.join() !== after2.join()}`);
  }

  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
