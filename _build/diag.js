// Comprehensive diagnostic of the CLONE: console errors, page errors, failed
// requests, and a walk-through of every interactive feature. Read-only.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const BASE = 'http://localhost:8099';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--window-size=1920,1080'] });
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1920, height: 1080 });

  const errors = [];   // console + page errors
  const failed = [];   // failed/4xx/5xx requests
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text().replace(/\s+/g, ' ').slice(0, 200)); });
  page.on('pageerror', (e) => errors.push('PAGEERR: ' + String(e).replace(/\s+/g, ' ').slice(0, 200)));
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url().replace(BASE, '').slice(0, 110)); });
  page.on('requestfailed', (r) => { const u = r.url(); failed.push('FAIL[' + (r.failure() && r.failure().errorText) + '] ' + u.replace(BASE, '').slice(0, 100)); });

  console.log('### Loading', BASE + '/Kozielska/Zone_A');
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(8000);

  // Snapshot DOM state of key features
  const state = await page.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const txt = (el) => (el && el.innerText || '').replace(/\s+/g, ' ').trim();
    const canvas = q('canvas');
    const videos = [...document.querySelectorAll('video')].map((v) => ({
      src: (v.currentSrc || v.src || '').split('/').pop(), readyState: v.readyState, paused: v.paused,
      w: v.videoWidth, h: v.videoHeight, err: v.error ? v.error.code : null,
    }));
    const buttons = [...document.querySelectorAll('button')].map((b) => txt(b)).filter(Boolean);
    return {
      title: document.title,
      hasCanvas: !!canvas, canvasSize: canvas ? { w: canvas.width, h: canvas.height } : null,
      videoCount: videos.length, videos,
      ctaButtons: buttons.filter((t) => /SPRAWD|OFERT|POR[OÓ]WNAN|FILTR|ZOBACZ|KONTAKT/i.test(t)).slice(0, 20),
      bodySnippet: document.body.innerText.replace(/\s+/g, ' ').slice(0, 300),
    };
  });
  console.log('TITLE:', state.title);
  console.log('CANVAS:', state.hasCanvas, JSON.stringify(state.canvasSize));
  console.log('VIDEOS:', state.videoCount);
  state.videos.forEach((v) => console.log('   ', JSON.stringify(v)));
  console.log('KEY BUTTONS:', JSON.stringify(state.ctaButtons));
  console.log('BODY:', state.bodySnippet);

  await page.screenshot({ path: '_build/screenshots/diag_01_initial.png' });

  // --- Feature 1: hero CTA "SPRAWDŹ OFERTY" -> apartment list ---
  const clickTxt = async (t) => page.evaluate((t) => {
    const el = [...document.querySelectorAll('button,a')].find((b) => new RegExp(t, 'i').test((b.innerText || '')));
    if (el) { el.click(); return (el.innerText || '').replace(/\s+/g, ' ').trim(); } return null;
  }, t);
  console.log('\n### CTA SPRAWDŹ OFERTY ->', await clickTxt('SPRAWD'));
  await sleep(3500);
  await page.screenshot({ path: '_build/screenshots/diag_02_offers.png' });
  const listState = await page.evaluate(() => {
    const cards = document.querySelectorAll('a[href*="/Kozielska/Zone_A/Kozielska_"]');
    const offMatch = document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i);
    return { cardCount: cards.length, offers: offMatch ? offMatch[1] : null, firstHref: cards[0] ? cards[0].getAttribute('href') : null };
  });
  console.log('LIST:', JSON.stringify(listState));

  // --- Feature 2: filters ---
  const filterTest = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const grab = () => { const m = document.body.innerText.match(/OFERT[YA]?:?\s*(\d+)/i); return m ? m[1] : null; };
    const before = grab();
    const toggle = document.querySelector('[class*=Filters][class*=Toggle], [class*=Filtersstyled__Toggle]');
    if (toggle) toggle.click();
    await sleep(800);
    const roomBtn = [...document.querySelectorAll('button')].find((b) => b.innerText.trim() === '2');
    if (roomBtn) roomBtn.click();
    await sleep(1500);
    return { before, after: grab(), hadToggle: !!toggle, hadRoomBtn: !!roomBtn };
  });
  console.log('FILTER:', JSON.stringify(filterTest));

  // --- Feature 3: comparison ---
  const compTest = await clickTxt('Por[oó]wnan');
  console.log('COMPARE click ->', compTest);
  await sleep(1500);

  // --- Feature 4: apartment detail navigation ---
  await page.goto(BASE + '/Kozielska/Zone_A', { waitUntil: 'networkidle2', timeout: 60000 });
  await sleep(4000);
  const navResult = await page.evaluate(() => {
    const a = document.querySelector('a[href*="/Kozielska/Zone_A/Kozielska_"]');
    if (!a) return { clicked: null };
    const href = a.getAttribute('href'); a.click(); return { clicked: href };
  });
  await sleep(6000);
  console.log('\n### APARTMENT DETAIL nav target:', navResult.clicked, '\n    landed URL:', page.url());
  const detailState = await page.evaluate(() => ({
    body: document.body.innerText.replace(/\s+/g, ' ').slice(0, 200),
    hasViewer: !!document.querySelector('canvas, iframe, [class*=panorama], [class*=Pano], [class*=Viewer]'),
    imgs: [...document.querySelectorAll('img')].length,
  }));
  console.log('DETAIL:', JSON.stringify(detailState));
  await page.screenshot({ path: '_build/screenshots/diag_03_detail.png' });

  // --- report ---
  console.log('\n======== CONSOLE/PAGE ERRORS (' + [...new Set(errors)].length + ' unique) ========');
  [...new Set(errors)].forEach((e) => console.log('  ', e));
  console.log('\n======== FAILED REQUESTS (' + [...new Set(failed)].length + ' unique) ========');
  [...new Set(failed)].forEach((f) => console.log('  ', f));

  fs.writeFileSync('_build/diag_result.json', JSON.stringify({ state, listState, filterTest, navResult, landed: page.url(), detailState, errors: [...new Set(errors)], failed: [...new Set(failed)] }, null, 1));
  await browser.close();
})().catch((e) => { console.error('ERR', e); process.exit(1); });
