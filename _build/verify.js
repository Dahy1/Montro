// Load the LOCAL clone, audit all network traffic, screenshot, and exercise rotation.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:8099/Kozielska/Zone_A';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Hosts we INTENTIONALLY still allow (Google Fonts) vs ones that must never succeed.
const ALLOW_EXTERNAL = /fonts\.gstatic\.com|fonts\.googleapis\.com/;
const TRACKERS = /googletagmanager|google-analytics|facebook|hotjar|cloudflareinsights|doubleclick|clarity/;
// 404s that are 404 on the ORIGINAL too (so expected in the clone):
const EXPECTED_404 = /favicon\.ong|apple-touch-icon\.png|\/fonts\/(altone|abarhigh)\//;

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--window-size=1920,1080'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1920, height: 1080 });
  const reqs = [];
  const consoleErrs = [];
  page.on('response', (res) => { const u = res.url(); reqs.push({ url: u, status: res.status(), host: (() => { try { return new URL(u).host; } catch (e) { return '?'; } })() }); });
  page.on('requestfailed', (r) => reqs.push({ url: r.url(), status: 'FAILED:' + (r.failure() && r.failure().errorText), host: (() => { try { return new URL(r.url()).host; } catch (e) { return '?'; } })() }));
  page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 160)); });
  page.on('pageerror', (e) => consoleErrs.push('PAGEERROR: ' + String(e).slice(0, 160)));

  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(9000);
  await page.screenshot({ path: 'clone_screenshot.png' });

  // exercise rotation by dragging the canvas (should swap transition videos, all local)
  const canvas = await page.evaluate(() => { const c = document.querySelector('canvas'); if (!c) return null; const r = c.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; });
  if (canvas) { for (let i = 0; i < 4; i++) { await page.mouse.move(canvas.x, canvas.y); await page.mouse.down(); await page.mouse.move(canvas.x - 500, canvas.y, { steps: 10 }); await page.mouse.up(); await sleep(2500); } }
  await sleep(2000);
  await page.screenshot({ path: 'clone_screenshot_rotated.png' });

  // ---- Audit ----
  const hosts = {}; reqs.forEach((r) => (hosts[r.host] = (hosts[r.host] || 0) + 1));
  const localHosts = Object.keys(hosts).filter((h) => /localhost/.test(h));
  const extOk = reqs.filter((r) => !/localhost/.test(r.host) && ALLOW_EXTERNAL.test(r.host));
  const extBad = reqs.filter((r) => !/localhost/.test(r.host) && !ALLOW_EXTERNAL.test(r.host));
  const trackerHits = extBad.filter((r) => TRACKERS.test(r.host) && r.status !== 'FAILED' && String(r.status)[0] !== '4' && String(r.status)[0] !== '5');
  const unexpected404 = reqs.filter((r) => (r.status === 404 || String(r.status).startsWith('FAILED')) && /localhost/.test(r.host) && !EXPECTED_404.test(r.url));

  console.log('=== hosts ===');
  Object.entries(hosts).sort((a, b) => b[1] - a[1]).forEach(([h, n]) => console.log(String(n).padStart(3), h));
  console.log('\nTotal requests:', reqs.length);
  console.log('External allowed (Google Fonts):', extOk.length);
  console.log('External OTHER (should be 0 or blocked):', extBad.length);
  extBad.slice(0, 20).forEach((r) => console.log('   ', r.status, r.host, r.url.slice(0, 80)));
  console.log('\nTRACKER hits that SUCCEEDED (must be 0):', trackerHits.length);
  console.log('UNEXPECTED local 404/fail (must be 0):', unexpected404.length);
  unexpected404.slice(0, 30).forEach((r) => console.log('   ', r.status, r.url.replace('http://localhost:8099', '')));
  console.log('\nConsole errors:', consoleErrs.length);
  consoleErrs.slice(0, 12).forEach((e) => console.log('   ', e));

  fs.writeFileSync('verify_requests.json', JSON.stringify(reqs, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
