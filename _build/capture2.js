// Enhanced capture: exercise exterior controls (compass rotation, building select, filters)
// to enumerate transition videos and interaction-loaded media.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://mieszkania.kozielskapark.pl/Kozielska/Zone_A';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1920, height: 1080 });

  const media = new Set();
  page.on('response', (res) => {
    const u = res.url();
    if (/media\.vinode\.io/.test(u) || /\.(mp4|webm|glb|exr|ktx2|basis|hdr)(\?|$)/.test(u)) media.set ? null : null;
    if (/media\.vinode\.io/.test(u) || /\/(models|hdr|draco)\//.test(u)) media.add(u);
  });

  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(8000);

  // Dump interactive elements (buttons / svgs / things with onclick-ish classes) with bounding boxes
  const els = await page.evaluate(() => {
    const out = [];
    const sel = 'button, [role=button], a, [class*=compas], [class*=Compass], [class*=rotate], [class*=Arrow], [class*=Nav], canvas, img[src*=Thumbnail], [class*=Thumb]';
    document.querySelectorAll(sel).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.top < 1080 && r.left < 1920) {
        out.push({ tag: el.tagName, cls: (el.className || '').toString().slice(0, 40), txt: (el.innerText || '').slice(0, 20), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height) });
      }
    });
    return out;
  });
  fs.writeFileSync('interactive_elements.json', JSON.stringify(els, null, 1));
  console.log('Interactive els:', els.length);

  // Click compass-ish controls repeatedly + drag the canvas to rotate
  const targets = els.filter((e) => /compas|rotate|arrow|nav/i.test(e.cls));
  console.log('compass-ish targets:', targets.length, JSON.stringify(targets.slice(0, 6)));
  for (let pass = 0; pass < 8; pass++) {
    for (const t of targets) { await page.mouse.click(t.x, t.y); await sleep(1500); }
  }
  // Drag the big canvas to force camera rotation transitions
  const canvas = els.find((e) => e.tag === 'CANVAS' && e.w > 500);
  if (canvas) {
    for (let i = 0; i < 6; i++) {
      await page.mouse.move(canvas.x, canvas.y);
      await page.mouse.down();
      await page.mouse.move(canvas.x - 500, canvas.y, { steps: 12 });
      await page.mouse.up();
      await sleep(2500);
    }
  }
  // Click the 4 thumbnail viewpoints if present
  const thumbs = els.filter((e) => /thumb/i.test(e.cls) || (e.tag === 'IMG'));
  for (const t of thumbs) { await page.mouse.click(t.x, t.y); await sleep(2500); }

  await sleep(3000);
  fs.writeFileSync('media_urls.json', JSON.stringify([...media].sort(), null, 1));
  console.log('Distinct media/model URLs captured:', media.size);
  [...media].sort().forEach((u) => console.log('  ', u.replace('https://media.vinode.io', '')));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
