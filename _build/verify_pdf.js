// Verify the PDF placeholder: clicking APARTMENT PDF / INFORMATION PROSPECTUS / card
// PDF shows the fading popup, opens NO new tab/PDF, and tags the control for reuse.
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
  let newTabs = 0;
  browser.on('targetcreated', (t) => { if (t.type() === 'page') newTabs++; });

  await page.goto(BASE + '/Kozielska/Zone_A/Kozielska_A1V/2_04?side=north&floor=2', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(8000);

  const clickBtn = async (re) => page.evaluate((r) => {
    const b = [...document.querySelectorAll('button,a')].find((x) => new RegExp(r, 'i').test((x.innerText || '').trim()));
    if (!b) return null; b.click(); return (b.innerText || '').trim();
  }, re);
  const popState = () => page.evaluate(() => {
    const p = document.querySelector('.pdf-placeholder-pop');
    return { present: !!p, text: p ? p.innerText.trim() : null, opacity: p ? getComputedStyle(p).opacity : null,
             marked: document.querySelectorAll('[data-pdf-placeholder="true"]').length,
             urls: [...document.querySelectorAll('[data-pdf-url]')].map((e) => e.getAttribute('data-pdf-url')) };
  });

  newTabs = 0;
  console.log('click APARTMENT PDF ->', await clickBtn('APARTMENT PDF|apartment pdf'));
  await sleep(700);
  let s = await popState();
  console.log('  popup:', s.present, '| text:', JSON.stringify(s.text), '| opacity:', s.opacity, '| newTabs:', newTabs, '| marked:', s.marked, '| urls:', JSON.stringify(s.urls));
  await page.screenshot({ path: '_build/screenshots/pdf_popup.png' });
  // wait for fade-out (3s + .4s)
  await sleep(3800);
  const after = await popState();
  console.log('  after ~3.5s -> popup present:', after.present);

  newTabs = 0;
  console.log('click INFORMATION PROSPECTUS ->', await clickBtn('INFORMATION PROSPECTUS|information prospectus'));
  await sleep(700);
  s = await popState();
  console.log('  popup:', s.present, '| newTabs:', newTabs, '| urls:', JSON.stringify(s.urls));

  // card PDF on the list
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 60000 });
  await sleep(4000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /CHECK OFFERS/i.test(x.innerText)); b && b.click(); });
  await sleep(2500);
  newTabs = 0;
  const cardPdf = await page.evaluate(() => {
    // card pdf is usually an icon button; click the first control whose title/aria/text mentions pdf, else a download-ish icon in a card
    const card = document.querySelector('a[href*="/Kozielska_A1V/"]');
    const root = card && card.closest('li,[class*=Card],[class*=Item],div');
    const btns = root ? [...root.querySelectorAll('button,a,[role=button]')] : [];
    const b = btns.find((x) => /pdf/i.test((x.getAttribute('aria-label') || x.title || x.innerText || x.className || '')));
    if (b) { b.click(); return 'clicked card pdf'; } return 'no card pdf control found (ok if none)';
  });
  await sleep(700);
  s = await popState();
  console.log('card PDF ->', cardPdf, '| popup:', s.present, '| newTabs:', newTabs);
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
