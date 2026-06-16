// Master downloader: app-origin assets + all media.vinode.io media into clone/.
const https = require('https');
const fs = require('fs');
const path = require('path');

const APP = 'https://mieszkania.kozielskapark.pl';
const VIN = 'https://media.vinode.io';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const ROOT = 'clone';

// ---- App-origin asset paths (saved at clone/<path>) ----
const appPaths = [
  // lazy + sibling-route page chunks (for navigation completeness)
  '/_next/static/chunks/137.2333822389b5d4fe.js',
  '/_next/static/chunks/603.512fc6bc0cb60ae8.js',
  '/_next/static/chunks/pages/index-33e738f9f54ac7fa.js',
  '/_next/static/chunks/pages/404-af0c82d968f97df0.js',
  '/_next/static/chunks/pages/_error-56138c94a508b26d.js',
  '/_next/static/chunks/pages/cookie-policy-bbd97cb4fcec08db.js',
  '/_next/static/chunks/pages/[project]-9dcb74b832a1f978.js',
  '/_next/static/chunks/pages/[project]/[zone]/[building]-49b510529b4c0975.js',
  '/_next/static/chunks/pages/[project]/[zone]/[building]/[apartment]-77dbbab8a4f3d117.js',
  // fonts
  // NOTE: /fonts/{altone,abarhigh}/*.ttf are referenced in CSS but 404 on the ORIGINAL
  // server too (browser falls back to Montserrat). Intentionally not downloaded.
  // icons
  '/icons/logo.svg', '/icons/compas_Icon_01.svg', '/icons/pointOfInterest/pin.svg',
  '/icons/interior/poi.png', '/icons/interior/poiHover.png', '/icons/interior/icon_default.png',
  '/icons/interior/bathroom.png', '/icons/interior/livingroom.png', '/icons/interior/corridor.png',
  '/icons/interior/bedroom.png', '/icons/interior/kitchen.png',
  // 3d env + decoders
  '/hdr/city_small.exr', '/draco/draco_decoder.wasm', '/draco/draco_wasm_wrapper.js',
  // models: exterior outlines
  '/models/BuildingA_Outlines.glb', '/models/BuildingB_Outlines.glb', '/models/BuildingC_Outlines.glb',
  '/models/BuildingD_Outlines.glb', '/models/BuildingE_Outlines.glb', '/models/BuildingF_Outlines.glb', '/models/BuildingX_Outlines.glb',
  // models: floorplans (only BuildingA exists on server; B-F 404 on original too)
  '/models/floorplan/BuildingA_Floorplans.glb',
  // models: interior collisions (X_Collision & Gaming_Collision 404 on original too)
  '/models/interior/RiverResidence_A_F_Collision.glb', '/models/interior/RiverResidence_B_F_Collision.glb',
  '/models/interior/RiverResidence_C_F_Collision.glb', '/models/interior/RiverResidence_D_F_Collision.glb',
  '/models/interior/RiverResidence_E_F_Collision.glb', '/models/interior/RiverResidence_F_F_Collision.glb',
  '/models/interior/RiverResidence_G_F_Collision.glb',
];

// ---- Media (media.vinode.io). Stored at clone/vmedia/<collapsed path after /e/> ----
const amenities = ['centrummedyczne','silownia','centrummedyczne','hotel','drogeria','warzywniak','supermarket','miesny','placzabaw','ogrod','hamaki','kladka','patiowejscie','patiowejsciedwa','piekarnia','restauracja','zabka','kawiarnia','jubiler','kwiaciarnia','paczkomat','padel'];
const plans = ['1.1','1.2','1.3','1.4','1.5','1.6'];
const thumbs = JSON.parse(fs.readFileSync('media_urls.json','utf8'))
  .filter((u) => /Thumbnails\//.test(u))
  .map((u) => u.replace(VIN + '/e/', ''));
const videos = JSON.parse(fs.readFileSync('videos_found.json','utf8'))
  .map((v) => v.file.replace(/^\/e\//, '')); // VinodeKozielska/Kozielska4/h264/desktop/x.mp4

const mediaItems = [];
[...new Set(amenities)].forEach((a) => mediaItems.push({ url: `${VIN}/e//VinodeKozielska//Kozielska4/amenities/${a}.png`, out: `${ROOT}/vmedia/VinodeKozielska/Kozielska4/amenities/${a}.png` }));
plans.forEach((p) => mediaItems.push({ url: `${VIN}/e//VinodeKozielska//Kozielska4/plans/${p}.png`, out: `${ROOT}/vmedia/VinodeKozielska/Kozielska4/plans/${p}.png` }));
[...new Set(thumbs)].forEach((t) => mediaItems.push({ url: `${VIN}/e/${t}`, out: `${ROOT}/vmedia/${t}` }));
[...new Set(videos)].forEach((v) => mediaItems.push({ url: `${VIN}/e/${v}`, out: `${ROOT}/vmedia/${v}` }));

const appItems = appPaths.map((p) => ({ url: APP + p.split('/').map(encodeURIComponent).join('/'), out: ROOT + p }));

function get(url, out, redirs = 0) {
  return new Promise((resolve) => {
    // idempotent: skip if already downloaded with content
    try { const st = fs.statSync(out); if (st.size > 0) return resolve({ url, status: 200, size: st.size, out, cached: true }); } catch (e) {}
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const file = fs.createWriteStream(out);
    const req = https.get(url, { headers: { 'User-Agent': UA, Accept: '*/*', Referer: APP + '/Kozielska/Zone_A' } }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirs < 5) {
        file.close(); res.resume();
        return resolve(get(new URL(res.headers.location, url).href, out, redirs + 1));
      }
      if (res.statusCode !== 200 && res.statusCode !== 206) { file.close(); fs.unlink(out, () => {}); res.resume(); return resolve({ url, status: res.statusCode, size: 0 }); }
      let size = 0; res.on('data', (c) => (size += c.length));
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve({ url, status: 200, size, out })));
    });
    req.on('error', (e) => { file.close(); fs.unlink(out, () => {}); resolve({ url, status: 'ERR:' + e.code, size: 0 }); });
    req.setTimeout(120000, () => { req.destroy(); resolve({ url, status: 'TIMEOUT', size: 0 }); });
  });
}

async function pool(items, n, fn) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); } }));
  return out;
}

(async () => {
  const all = [...appItems, ...mediaItems];
  console.log(`Downloading ${appItems.length} app assets + ${mediaItems.length} media files = ${all.length} total`);
  const results = await pool(all, 6, (it) => get(it.url, it.out));
  let ok = 0, bad = [], bytes = 0;
  results.forEach((r) => { if (r.status === 200) { ok++; bytes += r.size; } else bad.push(r); });
  console.log(`\nOK: ${ok}/${all.length}, total ${(bytes / 1048576).toFixed(1)} MB`);
  if (bad.length) { console.log('FAILURES:'); bad.forEach((b) => console.log('  ', b.status, b.url)); }
  // size report by category
  const cat = {};
  results.filter((r) => r.status === 200).forEach((r) => { const c = r.out.replace(ROOT + '/', '').split('/').slice(0, 2).join('/'); cat[c] = (cat[c] || 0) + r.size; });
  console.log('\nBy category (MB):');
  Object.entries(cat).sort((a, b) => b[1] - a[1]).forEach(([c, b]) => console.log('  ', (b / 1048576).toFixed(2).padStart(8), c));
})();
