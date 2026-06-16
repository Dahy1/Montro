// Inspect + exercise the apartment-list filters and column sorting.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1000 });
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(4000);

  // open offers
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);

  const grabCount = () => page.evaluate(() => { const m = document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i); return m ? m[1] : null; });
  const rowCount = () => page.evaluate(() => document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]').length);

  console.log('initial OFERTY:', await grabCount(), '| visible rows:', await rowCount());

  // Inspect the filter panel: find the toggle + dump controls
  const filterInfo = await page.evaluate(() => {
    const findBtn = (re) => [...document.querySelectorAll('button')].find((b) => re.test(b.innerText || ''));
    const toggle = findBtn(/Filtr/i);
    if (toggle) toggle.click();
    return { hadToggle: !!toggle, toggleText: toggle ? toggle.innerText.replace(/\s+/g, ' ').trim() : null };
  });
  await sleep(1200);
  // Dump the filter panel structure
  const panel = await page.evaluate(() => {
    // grab a region that likely holds filter controls
    const inputs = [...document.querySelectorAll('input')].map((i) => ({ type: i.type, name: i.name || i.placeholder || '', min: i.min, max: i.max, value: i.value }));
    const labels = [...document.querySelectorAll('label, [class*=Filter] button, [class*=filter] button')].map((e) => e.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 40);
    const allBtns = [...document.querySelectorAll('button')].map((b) => b.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean);
    return { inputs, labels, allBtns };
  });
  console.log('filter toggle:', JSON.stringify(filterInfo));
  console.log('inputs:', JSON.stringify(panel.inputs));
  console.log('labels/filter-btns:', JSON.stringify(panel.labels));
  console.log('all buttons:', JSON.stringify([...new Set(panel.allBtns)].slice(0, 40)));
  await page.screenshot({ path: '_build/screenshots/filters_panel.png', fullPage: true });

  // Try clicking a room-count filter (buttons labelled 1..5 or "Kawalerka" etc.)
  for (const label of ['1', '2', '3', '4']) {
    const before = await grabCount();
    const clicked = await page.evaluate((t) => {
      const b = [...document.querySelectorAll('button')].find((x) => x.innerText.trim() === t);
      if (b) { b.click(); return true; } return false;
    }, label);
    await sleep(1500);
    const after = await grabCount();
    console.log(`room "${label}": clicked=${clicked} ${before} -> ${after}`);
    if (clicked) { await page.evaluate((t) => { const b = [...document.querySelectorAll('button')].find((x) => x.innerText.trim() === t); if (b) b.click(); }, label); await sleep(800); }
  }

  // Try sorting by clicking column headers (Cena, Powierzchnia, Piętro)
  for (const col of ['Cena', 'Powierzchnia', 'Pi[eę]tro', 'Pokoje']) {
    const res = await page.evaluate(async (c) => {
      const re = new RegExp(c, 'i');
      const firstHrefBefore = (document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]') || {}).getAttribute && document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]').getAttribute('href');
      const h = [...document.querySelectorAll('th, [class*=Header] *, [class*=header] *, button, span, div')].find((e) => re.test(e.innerText || '') && (e.innerText || '').length < 24);
      if (!h) return { found: false };
      h.click(); await new Promise((r) => setTimeout(r, 1200));
      const firstHrefAfter = document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_A1V/"]').getAttribute('href');
      return { found: true, changed: firstHrefBefore !== firstHrefAfter, before: firstHrefBefore, after: firstHrefAfter };
    }, col);
    console.log(`sort "${col}":`, JSON.stringify(res));
  }

  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
