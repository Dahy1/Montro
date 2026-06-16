// Capture all network traffic for the target page using system Chrome.
const puppeteer = require('puppeteer-core');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://mieszkania.kozielskapark.pl/Kozielska/Zone_A';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  const reqs = new Map(); // url -> {status, type, mime, length}
  page.on('response', async (res) => {
    try {
      const req = res.request();
      const url = res.url();
      const h = res.headers();
      reqs.set(url, {
        url,
        status: res.status(),
        type: req.resourceType(),
        mime: h['content-type'] || '',
        length: h['content-length'] || '',
      });
    } catch (e) {}
  });
  page.on('requestfailed', (req) => {
    const url = req.url();
    if (!reqs.has(url)) reqs.set(url, { url, status: 'FAILED', type: req.resourceType(), mime: '', length: '', failure: req.failure()?.errorText });
  });

  console.log('Navigating...');
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 });
  console.log('Loaded. Waiting for video/deferred assets...');
  await sleep(9000);

  // Interact: scroll apartment slider, hover cards, move mouse to trigger lazy loads
  await page.evaluate(() => {
    document.querySelectorAll('[class*=ScrollContainer], [class*=Slider]').forEach((el) => { el.scrollLeft = el.scrollWidth; });
    window.scrollTo(0, document.body.scrollHeight);
  });
  await sleep(2500);
  await page.mouse.move(960, 540);
  await page.mouse.move(400, 300);
  await sleep(2500);

  // capture page title + dimensions
  const meta = await page.evaluate(() => ({ title: document.title, bodyText: document.body.innerText.slice(0, 400), h: document.body.scrollHeight }));
  console.log('Page meta:', JSON.stringify(meta));

  await page.screenshot({ path: 'original_screenshot.png', fullPage: false });
  console.log('Screenshot saved.');

  const list = [...reqs.values()];
  fs.writeFileSync('network_log.json', JSON.stringify(list, null, 1));
  console.log('Total requests captured:', list.length);

  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
