// Probe media.vinode.io for all Sequencer transition videos among known camera states.
const https = require('https');
const fs = require('fs');

const BASE = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/h264/desktop/';
// Camera states (derived from captured thumbnails + zone naming convention)
const zone = ['KozielskaZoneHero1', 'KozielskaZoneHero2', 'KozielskaZoneA1', 'KozielskaZoneA2', 'KozielskaZoneA3', 'KozielskaZoneA4', 'KozielskaZoneAmenities1'];
const pois = ['Centrummedyczne','Etapjedenlokaleuslugowe','Etapszesclokaleuslugowe','Hamaki','Hotel','Kladka','Ogrod','Padel','Patiowejscie','Patiowejsciedwa','Plachandlowy','Placzabaw','Restaurant','Silownia'].map((n) => 'KozielskaPoiAmenities-' + n);
const states = [...zone, ...pois];

const pairs = [];
for (const a of states) for (const b of states) pairs.push([a, b]);

function head(url) {
  return new Promise((resolve) => {
    const u = new URL(url);
    const req = https.request(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0', Accept: '*/*' } }, (res) => {
      res.resume();
      resolve({ url, status: res.statusCode, len: res.headers['content-length'] || '' });
    });
    req.on('error', () => resolve({ url, status: 'ERR', len: '' }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ url, status: 'TIMEOUT', len: '' }); });
    req.end();
  });
}

async function pool(items, n, fn) {
  const out = []; let i = 0;
  const workers = Array.from({ length: n }, async () => {
    while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); }
  });
  await Promise.all(workers);
  return out;
}

(async () => {
  const results = await pool(pairs, 8, ([a, b]) => head(`${BASE}Sequencer_Camera${a}_Camera${b}.mp4`));
  const found = results.filter((r) => r.status === 200 || r.status === 206);
  let total = 0;
  found.forEach((r) => { total += parseInt(r.len || 0, 10); });
  console.log(`Probed ${pairs.length} combos -> ${found.length} videos exist. Total ${(total / 1048576).toFixed(1)} MB`);
  const list = found.map((r) => r.url.replace(BASE, '')).sort();
  list.forEach((f) => console.log('  ', f));
  fs.writeFileSync('videos_found.json', JSON.stringify(found.map((r) => ({ file: r.url.replace('https://media.vinode.io', ''), len: r.len })), null, 1));
})();
