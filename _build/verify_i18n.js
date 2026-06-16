// Verify localization: load zone + list + detail + amenities, confirm no JS errors
// (chunks not corrupted), English UI, EGP currency, Zayed Hills branding, and report
// any residual Polish words / "zł" / "Kozielska" in the visible text.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// distinctive Polish UI words that should be GONE from visible text
const PL = /\b(Oferty|Filtry|Porównanie|Pokoje|Piętro|Cena|Powierzchnia|Udogodnienia|Lokalizacje|Główna|Apartamenty|Dostępny|Sprzedany|Zarezerwowany|Niedostępne|Sprawdź|Wyczyść|Mieszkanie|Strefa|zł|Kozielska)\b/g;

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1600,1000'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1600, height: 1000 });
  const errs = [];
  page.on('pageerror', (e) => errs.push('PAGEERR ' + String(e).slice(0, 160)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|Altone|favicon/.test(m.text())) errs.push('CONSOLE ' + m.text().slice(0, 160)); });

  const scan = async (label) => {
    const t = await page.evaluate(() => document.body.innerText);
    const hits = [...new Set((t.match(/\b(Oferty|Filtry|Porównanie|Pokoje|Piętro|Cena|Powierzchnia|Udogodnienia|Lokalizacje|Główna|Apartamenty|Dostępny|Sprzedany|Zarezerwowany|Niedostępne|Sprawdź|Wyczyść|Mieszkanie|Strefa|zł|Kozielska)\b/g) || []))];
    const title = await page.evaluate(() => document.title);
    console.log(`[${label}] title="${title}" | residual:`, hits.length ? JSON.stringify(hits) : 'NONE');
  };

  console.log('=== ZONE / HERO ===');
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(7000);
  await scan('hero');
  const hero = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 200));
  console.log('   hero text:', hero);
  await page.screenshot({ path: '_build/screenshots/i18n_hero.png' });

  console.log('\n=== LIST ===');
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /CHECK OFFERS|Check offers|SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  await scan('list');
  const list = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 300));
  console.log('   list text:', list);
  await page.screenshot({ path: '_build/screenshots/i18n_list.png' });

  console.log('\n=== DETAIL (available unit) ===');
  await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/2_04?side=north&floor=2'));
  await sleep(7000);
  await scan('detail');
  const detail = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 320));
  console.log('   detail text:', detail);
  await page.screenshot({ path: '_build/screenshots/i18n_detail.png' });

  console.log('\n=== JS ERRORS (chunk corruption check):', errs.length, '===');
  [...new Set(errs)].slice(0, 10).forEach((e) => console.log('   ', e));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
