// On a detail page, exercise PDF / PROSPEKT / HISTORIA CEN buttons and the floor
// plan image. Capture: new tabs/popups opened, network to voxdeveloper, console
// errors (CORS etc.), and what the price-history panel renders.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1366,900'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1366, height: 900 });

  const vox = [];
  const errs = [];
  const popups = [];
  page.on('response', (r) => { if (/voxdeveloper/.test(r.url())) vox.push(r.status() + ' ' + r.url().slice(0, 100)); });
  page.on('requestfailed', (r) => { if (/voxdeveloper/.test(r.url())) vox.push('FAIL[' + (r.failure() && r.failure().errorText) + '] ' + r.url().slice(0, 90)); });
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 160)); });
  browser.on('targetcreated', async (t) => { try { if (t.type() === 'page') popups.push(t.url()); } catch (e) {} });

  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(3500);
  // go to an AVAILABLE apartment (1_04 was Available)
  await page.evaluate(() => window.next.router.push('/Kozielska/Zone_A/Kozielska_A1V/1_04?side=north&floor=1'));
  await sleep(6000);

  // inspect the floor-plan <img> (PlanLink) resolution
  const planImg = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')].map((i) => ({ src: i.currentSrc || i.src, ok: i.complete && i.naturalWidth > 0, nw: i.naturalWidth }));
    return imgs.filter((i) => /vox|files|plan|Plan/i.test(i.src) || i.nw === 0).slice(0, 8);
  });
  console.log('PLAN/broken imgs:', JSON.stringify(planImg, null, 1));

  const clickByText = async (t) => page.evaluate((t) => {
    const el = [...document.querySelectorAll('button,a')].find((b) => new RegExp(t, 'i').test(b.innerText || ''));
    if (!el) return null; const tag = el.tagName; const href = el.getAttribute('href'); el.click(); return { tag, href, text: (el.innerText || '').trim().slice(0, 30) };
  }, t);

  console.log('\nclick HISTORIA CEN ->', JSON.stringify(await clickByText('HISTORIA CEN')));
  await sleep(3500);
  const priceHistory = await page.evaluate(() => {
    const txt = document.body.innerText.replace(/\s+/g, ' ');
    const i = txt.search(/HISTORIA CEN/i);
    return i >= 0 ? txt.slice(i, i + 240) : '(not found)';
  });
  console.log('price-history panel text:', priceHistory);
  await page.screenshot({ path: '_build/screenshots/detail_pricehistory.png' });

  console.log('\nclick PDF APARTAMENTU ->', JSON.stringify(await clickByText('PDF APARTAMENTU')));
  await sleep(2500);
  console.log('click PROSPEKT ->', JSON.stringify(await clickByText('PROSPEKT')));
  await sleep(2500);

  console.log('\n--- voxdeveloper network ---'); [...new Set(vox)].forEach((v) => console.log('  ', v));
  console.log('--- popups/new tabs ---'); [...new Set(popups)].filter((u) => u && u !== 'about:blank').forEach((u) => console.log('  ', u.slice(0, 110)));
  console.log('--- console errors ---'); [...new Set(errs)].forEach((e) => console.log('  ', e));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
