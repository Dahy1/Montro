// Inspect navbar, hero logo, and all interactive elements on a target URL.
// Usage: node inspect.js <url>
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const URL = process.argv[2] || 'http://localhost:8099/Kozielska/Zone_A';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1920, height: 1080 });
  const fails = [];
  page.on('response', (r) => { if (r.status() >= 400) fails.push(r.status() + ' ' + r.url().slice(0, 120)); });
  page.on('requestfailed', (r) => fails.push('FAIL ' + r.url().slice(0, 120)));

  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(7000);

  const info = await page.evaluate(() => {
    const out = { nav: [], logos: [], buttons: [] };
    document.querySelectorAll('nav, header').forEach((n) => out.nav.push({ tag: n.tagName, cls: n.className.toString().slice(0, 60), text: n.innerText.replace(/\s+/g, ' ').slice(0, 80) }));
    document.querySelectorAll('img[src*="logo"], [class*="ogo"], svg[class*="ogo"]').forEach((n) => {
      const r = n.getBoundingClientRect();
      out.logos.push({ tag: n.tagName, cls: n.className.toString().slice(0, 60), src: n.getAttribute && (n.getAttribute('src') || ''), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) });
    });
    document.querySelectorAll('button, a, [role=button]').forEach((b) => {
      const r = b.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return;
      out.buttons.push({ tag: b.tagName, cls: b.className.toString().slice(0, 50), text: (b.innerText || b.getAttribute('aria-label') || '').replace(/\s+/g, ' ').slice(0, 30), href: b.getAttribute('href') || '', x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) });
    });
    return out;
  });
  console.log('URL:', URL);
  console.log('\n=== NAV / HEADER elements ===');
  info.nav.forEach((n) => console.log(' ', n.tag, '|', n.cls, '|', n.text));
  console.log('\n=== LOGO-ish elements ===');
  info.logos.forEach((l) => console.log(' ', l.tag, '|', l.cls, '| src=' + l.src, '| @', l.x + ',' + l.y, l.w + 'x' + l.h));
  console.log('\n=== BUTTONS / LINKS (' + info.buttons.length + ') ===');
  info.buttons.forEach((b) => console.log('  [' + b.tag + '] "' + b.text + '" href=' + b.href + ' cls=' + b.cls + ' @' + b.x + ',' + b.y));
  console.log('\n=== HTTP failures during load ===');
  [...new Set(fails)].forEach((f) => console.log(' ', f));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
