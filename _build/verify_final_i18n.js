// Comprehensive localization + functionality check across every view, incl.
// amenities/locations (POI names). Reports residual Polish, title, functionality,
// and whether hydration warnings break rendering.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// broad Polish detector: diacritics OR common Polish words
const POL = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]|\b(zł|Cena|Filtry|Oferty|Pokoje|Piętro|Powierzchnia|Udogodnienia|Lokalizacje|Główna|Apartamenty|Dostępny|Sprzedany|Mieszkanie|Strefa|Etap|Budynek|Kozielska|Wszystkie|Wybierz|Plan jednostki|apartamentu|cen|parkingowe|Plac|Sklep|Centrum|Drogeria)\b/;

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  let hydrationErrs = 0, otherErrs = [];
  page.on('pageerror', (e) => { const s = String(e); if (/Minified React error #(418|423|425|421|420)/.test(s)) hydrationErrs++; else otherErrs.push(s.slice(0, 120)); });
  page.on('console', (m) => { if (m.type() === 'error') { const t = m.text(); if (/Minified React error #(418|423|425)/.test(t)) hydrationErrs++; else if (!/Failed to load resource|Altone|favicon|WebSocket|ws:\/\//.test(t)) otherErrs.push('CON ' + t.slice(0, 120)); } });

  const polishIn = async (label) => {
    const lines = await page.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => e.children.length === 0 && e.innerText && e.innerText.trim()).map((e) => e.innerText.trim()));
    const re = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]|\b(zł|Cena|Filtry|Oferty|Pokoje|Piętro|Powierzchnia|Udogodnienia|Lokalizacje|Główna|Apartamenty|Dostępny|Sprzedany|Mieszkanie|Strefa|Etap|Budynek|Kozielska|Wszystkie|Wybierz|apartamentu|parkingowe|Plac |Sklep|Centrum medyczne|Drogeria|Kawiarnia|Warzywniak|Piekarnia)\b/;
    const hits = [...new Set(lines.filter((l) => re.test(l) && l.length < 60))];
    console.log(`[${label}] residual Polish:`, hits.length ? JSON.stringify(hits.slice(0, 12)) : 'NONE');
    return hits;
  };

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(7000);
  console.log('title:', await page.evaluate(() => document.title));
  await polishIn('hero');

  // amenities (Udogodnienia/Amenities)
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Amenities|Udogodnienia/i.test(x.innerText)); if (b) b.click(); });
  await sleep(5000);
  await polishIn('amenities');
  await page.screenshot({ path: '_build/screenshots/i18n_amenities.png' });

  // locations (Lokalizacje/Locations)
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Locations|Lokalizacje/i.test(x.innerText)); if (b) b.click(); });
  await sleep(5000);
  await polishIn('locations');
  await page.screenshot({ path: '_build/screenshots/i18n_locations.png' });

  // list + filter
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Apartments|Apartamenty/i.test(x.innerText)); if (b) b.click(); });
  await sleep(3500);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /CHECK OFFERS|Check offers/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  const offers = await page.evaluate(() => (document.body.innerText.match(/(\d+)\s*Offers/i) || [])[1]);
  await polishIn('list');
  console.log('   offers count:', offers);

  // detail
  await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/2_04?side=north&floor=2'));
  await sleep(6000);
  await polishIn('detail');
  const price = await page.evaluate(() => { const m = document.body.innerText.match(/([\d  ]+)\s*EGP/); return m ? m[0].trim() : null; });
  console.log('   a sample price:', price);

  console.log('\nHYDRATION warnings:', hydrationErrs, '| OTHER errors:', otherErrs.length);
  otherErrs.slice(0, 6).forEach((e) => console.log('   ', e));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
