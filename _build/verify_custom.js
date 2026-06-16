const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'] });
  const p = await browser.newPage(); await p.setUserAgent(UA); await p.setViewport({ width: 1920, height: 1080 });
  await p.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(6000);

  const vis = await p.evaluate(() => {
    const navEl = document.querySelector('nav[class*="ApartmentListNavstyled__Wrapper"]');
    const heroLogo = [...document.querySelectorAll('img[src="/icons/logo.svg"]')].map((i) => { const r = i.getBoundingClientRect(); const cs = getComputedStyle(i); return { w: Math.round(r.width), h: Math.round(r.height), display: cs.display, visible: r.width > 0 && cs.display !== 'none' }; });
    const navVisible = navEl ? (getComputedStyle(navEl).display !== 'none' && navEl.getBoundingClientRect().height > 0) : false;
    return { navExists: !!navEl, navVisible, logos: heroLogo };
  });
  console.log('navbar visible:', vis.navVisible, '| logos:', JSON.stringify(vis.logos));
  await p.screenshot({ path: 'screenshots/clone_custom_hero.png' });

  // ---- Test client-side buttons ----
  // open apartment list
  await p.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find((x) => /SPRAWD/i.test(x.innerText)); if (b) b.click(); });
  await sleep(2500);
  // toggle a room filter (button labelled "2") and read OFERTY count before/after
  const filterTest = await p.evaluate(async () => {
    const grab = () => { const m = document.body.innerText.match(/OFERTY:\s*(\d+)/i); return m ? m[1] : null; };
    const before = grab();
    // find filter toggle then a "Pokoje" option button "2"
    const toggle = document.querySelector('[class*=Filtersstyled__Toggle]'); if (toggle) toggle.click();
    await new Promise((r) => setTimeout(r, 800));
    const roomBtn = [...document.querySelectorAll('button')].find((b) => b.innerText.trim() === '2');
    if (roomBtn) roomBtn.click();
    await new Promise((r) => setTimeout(r, 1500));
    return { before, after: grab(), hadToggle: !!toggle, hadRoomBtn: !!roomBtn };
  });
  console.log('FILTER test:', JSON.stringify(filterTest));
  await p.screenshot({ path: 'screenshots/clone_custom_filter.png' });

  // comparison toggle
  const compTest = await p.evaluate(async () => {
    const b = [...document.querySelectorAll('button')].find((x) => /Por[oó]wnanie/i.test(x.innerText));
    if (!b) return { had: false };
    b.click(); await new Promise((r) => setTimeout(r, 1000));
    return { had: true, text: b.innerText.replace(/\s+/g, ' ').slice(0, 30) };
  });
  console.log('COMPARE test:', JSON.stringify(compTest));

  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
