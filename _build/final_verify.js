// Comprehensive final journey: hero -> nav transitions -> list -> filter -> detail
// (SPA) -> price history -> building page -> amenities POI. One session, capturing
// ALL console errors + failed requests, classifying expected vs unexpected.
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
  const failed = []; const consoleErr = [];
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url().replace(BASE, '')); });
  page.on('requestfailed', (r) => { const u = r.url(); if (!/\.mp4/.test(u)) failed.push('FAIL ' + u.replace(BASE, '')); });
  page.on('console', (m) => { if (m.type() === 'error') consoleErr.push(m.text().slice(0, 120)); });

  const step = async (name, fn) => { try { await fn(); console.log('  ✓', name); } catch (e) { console.log('  ✗', name, '-', e.message); } await sleep(500); };
  const playing = () => page.evaluate(() => { const v = document.querySelector('video'); return v && !v.paused && v.readyState >= 2; });

  console.log('FINAL JOURNEY:');
  await step('load hero + video plays', async () => { await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(7000); if (!await playing()) throw new Error('video not playing'); });
  await step('nav Udogodnienia (amenities)', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Udogodnienia/i.test(x.innerText)); b && b.click(); }); await sleep(4500); if (!await playing()) throw new Error('no video'); });
  await step('nav Lokalizacje (master)', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Lokalizacje/i.test(x.innerText)); b && b.click(); }); await sleep(4500); if (!await playing()) throw new Error('no video'); });
  await step('nav Apartamenty -> list', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /Apartamenty/i.test(x.innerText)); b && b.click(); }); await sleep(4000); });
  await step('open offers (SPRAWDŹ OFERTY)', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); b && b.click(); }); await sleep(2500); const n = await page.evaluate(() => document.querySelectorAll('a[href*="/Kozielska_A1V/"]').length); if (n < 1) throw new Error('no apartments'); });
  await step('filter rooms=2 -> OFERTY 26', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filtr/i.test(x.innerText)); b && b.click(); }); await sleep(800); await page.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); r && (r.closest('label') || r).click(); }); await sleep(2500); const c = await page.evaluate(() => (document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i) || [])[1]); if (c !== '26') throw new Error('OFERTY=' + c + ' (expected 26)'); });
  await step('clear filter + open apartment detail (SPA)', async () => { await page.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); r && (r.closest('label') || r).click(); }); await sleep(1500); await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/1_04?side=north&floor=1')); await sleep(7000); const ok = await page.evaluate(() => /Lokal/i.test(document.body.innerText) && !/^404/.test(document.body.innerText.trim())); if (!ok) throw new Error('detail not rendered'); });
  await step('price history chart', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /HISTORIA CEN/i.test(x.innerText)); b && b.click(); }); await sleep(2500); const svg = await page.evaluate(() => document.querySelectorAll('svg path, svg rect, [class*=recharts]').length); if (svg < 3) throw new Error('no chart'); });
  await step('building page (direct)', async () => { await page.goto(BASE + '/Kozielska/Zone_A/Kozielska_A1V', { waitUntil: 'networkidle2', timeout: 60000 }); await sleep(6000); const ok = await page.evaluate(() => !/^404/.test(document.body.innerText.trim()) && document.querySelectorAll('a[href*="/Kozielska_A1V/"]').length > 0); if (!ok) throw new Error('building page broken'); });

  const expected = (s) => /Altone|AbarHigh|api\/lang|ws:\/\/localhost|WebSocket|favicon\.ong|apple-touch|cdn-cgi/i.test(s);
  const badFailed = [...new Set(failed)].filter((f) => !expected(f));
  const badConsole = [...new Set(consoleErr)].filter((c) => !expected(c) && !/Failed to load resource/.test(c));
  console.log('\n=== UNEXPECTED failed requests:', badFailed.length, '===');
  badFailed.forEach((f) => console.log('   ', f));
  console.log('=== UNEXPECTED console errors:', badConsole.length, '===');
  badConsole.forEach((c) => console.log('   ', c));
  console.log('\n=== expected/faithful items (sample) ===');
  [...new Set(failed)].filter(expected).slice(0, 5).forEach((f) => console.log('   ', f));
  fs.writeFileSync('_build/final_verify_result.json', JSON.stringify({ badFailed, badConsole, allFailed: [...new Set(failed)] }, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
