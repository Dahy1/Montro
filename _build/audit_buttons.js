// Audit interactive flow on the CLONE, and capture the LIVE apartment-detail requirements.
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function newPage(browser) {
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1920, height: 1080 });
  return page;
}

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'] });

  // ---------- PART 1: CLONE button flow ----------
  console.log('############ CLONE FLOW ############');
  const c = await newPage(browser);
  const cf = [];
  c.on('response', (r) => { if (r.status() >= 400) cf.push(r.status() + ' ' + r.url().replace('http://localhost:8099', '').slice(0, 90)); });
  c.on('requestfailed', (r) => { const u = r.url(); if (!/\.mp4/.test(u)) cf.push('FAIL ' + u.replace('http://localhost:8099', '').slice(0, 90)); });
  c.on('console', (m) => { if (m.type() === 'error') cf.push('CONSOLE: ' + m.text().slice(0, 90)); });
  c.on('pageerror', (e) => cf.push('PAGEERR: ' + String(e).slice(0, 100)));
  await c.goto('http://localhost:8099/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(6000);

  // Click SPRAWDŹ OFERTY (hero CTA -> open apartment list)
  const clickByText = async (page, txt) => page.evaluate((t) => {
    const el = [...document.querySelectorAll('button,a')].find((b) => (b.innerText || '').trim().toUpperCase().includes(t));
    if (el) { el.click(); return true; } return false;
  }, txt);
  console.log('click SPRAWDŹ OFERTY ->', await clickByText(c, 'SPRAWD'));
  await sleep(3000);
  await c.screenshot({ path: 'screenshots/clone_after_cta.png' });

  // Click a camera viewpoint slider item
  const camClick = await c.evaluate(() => { const b = document.querySelector('[class*=SectionItem]'); if (b) { b.click(); return true; } return false; });
  console.log('click camera slider item ->', camClick);
  await sleep(3000);

  // Click first apartment card link -> navigation test
  const beforeUrl = c.url();
  const cardClicked = await c.evaluate(() => { const a = document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_"]'); if (a) { a.click(); return a.getAttribute('href'); } return null; });
  console.log('click apartment card ->', cardClicked);
  await sleep(6000);
  console.log('URL before:', beforeUrl, '\nURL after :', c.url());
  await c.screenshot({ path: 'screenshots/clone_after_apartment.png' });
  console.log('\n--- CLONE failures/errors during flow ---');
  [...new Set(cf)].forEach((f) => console.log('  ', f));

  // ---------- PART 2: LIVE apartment detail requirements ----------
  console.log('\n############ LIVE APARTMENT DETAIL ############');
  const l = await newPage(browser);
  const hosts = {}; const reqs = [];
  l.on('response', (r) => { const u = r.url(); let h = '?'; try { h = new URL(u).host; } catch (e) {} hosts[h] = (hosts[h] || 0) + 1; reqs.push({ u, s: r.status() }); });
  const detailUrl = 'https://mieszkania.kozielskapark.pl/Kozielska/Zone_A/Kozielska_A1V/1_01?side=north&floor=1';
  await l.goto(detailUrl, { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(10000);
  await l.screenshot({ path: 'screenshots/live_apartment_detail.png' });
  const meta = await l.evaluate(() => ({ title: document.title, body: document.body.innerText.replace(/\s+/g, ' ').slice(0, 200) }));
  console.log('detail meta:', JSON.stringify(meta));
  console.log('\n--- hosts on live detail page ---');
  Object.entries(hosts).sort((a, b) => b[1] - a[1]).forEach(([h, n]) => console.log('  ', String(n).padStart(3), h));
  console.log('\n--- interesting detail assets (vinode/voxdeveloper/models/_next data) ---');
  reqs.filter((r) => /vinode|voxdeveloper|\/models\/|_next\/data|\.glb|panorama|\.mp4|tiles|\.ktx2|\.basis|cubemap|pano/i.test(r.u))
    .slice(0, 40).forEach((r) => console.log('  ', r.s, r.u.slice(0, 120)));
  require('fs').writeFileSync('live_detail_requests.json', JSON.stringify(reqs, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
