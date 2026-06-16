const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'] });
  const p = await browser.newPage(); await p.setUserAgent(UA); await p.setViewport({ width: 1920, height: 1080 });
  await p.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(6000);
  const r = await p.evaluate(() => {
    const res = { heroLogoChain: [], navLogoInNav: null };
    const imgs = [...document.querySelectorAll('img[src="/icons/logo.svg"]')];
    imgs.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const inNav = !!img.closest('nav');
      const chain = [];
      let el = img; for (let i = 0; i < 5 && el; i++) { chain.push(el.tagName + '.' + (el.className ? el.className.toString().split(' ')[0] : '')); el = el.parentElement; }
      res.heroLogoChain.push({ size: Math.round(rect.width) + 'x' + Math.round(rect.height), inNav, chain });
    });
    // test filter + comparison existence/behavior
    const filterToggle = document.querySelector('[class*=FiltersstyledToggle], [class*=Filtersstyled__Toggle]');
    const compareBtn = [...document.querySelectorAll('button')].find((b) => /Por[oó]wnanie/i.test(b.innerText));
    res.hasFilterToggle = !!filterToggle;
    res.hasCompareBtn = !!compareBtn;
    return res;
  });
  console.log(JSON.stringify(r, null, 1));
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
