// Functional check after localization: filters change the count, detail shows scaled
// EGP price, price history works, building page works. Confirms nothing broke.
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
  const step = async (n, fn) => { try { const r = await fn(); console.log('  ✓', n, r !== undefined ? '->' + JSON.stringify(r) : ''); } catch (e) { console.log('  ✗', n, '-', e.message); } };
  const offers = () => page.evaluate(() => { const m = document.body.innerText.match(/(\d+)\s*Offers/i); return m ? +m[1] : null; });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(6000);

  await step('open list', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /CHECK OFFERS/i.test(x.innerText)); b && b.click(); }); await sleep(2500); return await offers(); });
  await step('filter rooms=2 (expect 26)', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Filters/i.test(x.innerText)); b && b.click(); }); await sleep(800); await page.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); r && (r.closest('label') || r).click(); }); await sleep(2500); const n = await offers(); if (n !== 26) throw new Error('got ' + n); return n; });
  await step('clear rooms filter', async () => { await page.evaluate(() => { const r = document.querySelector('input[name=roomsCount][value="2"]'); r && (r.closest('label') || r).click(); }); await sleep(1500); return await offers(); });

  let detailPrice;
  await step('open detail (available unit 2_04)', async () => {
    await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/2_04?side=north&floor=2'));
    await sleep(7000);
    const txt = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' '));
    if (!/Available/i.test(txt) || !/Unit M 2\.4/i.test(txt)) throw new Error('detail not rendered');
    detailPrice = await page.evaluate(() => { const m = document.body.innerText.match(/Price:?\s*([\d  ]{6,})\s*EGP/i); return m ? m[1].replace(/\s/g, ' ').trim() : null; });
    return { hasEGP: /EGP/.test(txt), price: detailPrice };
  });
  await step('price history chart (in EGP)', async () => { await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /price history/i.test(x.innerText)); b && b.click(); }); await sleep(2500); const svg = await page.evaluate(() => document.querySelectorAll('svg path, svg rect, [class*=recharts]').length); if (svg < 3) throw new Error('no chart'); return { chartEls: svg }; });
  await step('building page (Etap/Stage direct)', async () => { await page.goto(BASE + '/Kozielska/Zone_A/Kozielska_A1V', { waitUntil: 'networkidle2', timeout: 60000 }); await sleep(6000); const ok = await page.evaluate(() => /Offers/i.test(document.body.innerText) && !/^404/.test(document.body.innerText.trim())); if (!ok) throw new Error('building broke'); return 'ok'; });

  // sample of scaled prices visible
  const prices = await page.evaluate(() => [...new Set((document.body.innerText.match(/[\d  ]{5,}\s*EGP/g) || []).map((s) => s.replace(/\s+/g, ' ').trim()))].slice(0, 6));
  console.log('sample EGP prices on building page:', JSON.stringify(prices));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
