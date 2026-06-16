// Probe media.vinode.io for the missing ZoneMaster camera states (used by the
// "Lokalizacje"/"Główna" views) + their transitions to every zone/POI state, plus
// Master thumbnails. Emits /vmedia paths that exist and aren't present locally.
const https = require('https');
const fs = require('fs');
const path = require('path');

const VID = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/Thumbnails/';
const VID_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/Thumbnails/';
const DESK = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'h264', 'desktop');
const TDIR = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'Thumbnails');

const POIS = ['Centrummedyczne', 'Etapjedenlokaleuslugowe', 'Etapszesclokaleuslugowe', 'Hamaki', 'Hotel', 'Kladka', 'Ogrod', 'Padel', 'Patiowejscie', 'Patiowejsciedwa', 'Plachandlowy', 'Placzabaw', 'Restaurant', 'Silownia'].map((n) => 'KozielskaPoiAmenities-' + n);
const ZONE = ['KozielskaZoneHero1', 'KozielskaZoneHero2', 'KozielskaZoneA1', 'KozielskaZoneA2', 'KozielskaZoneA3', 'KozielskaZoneA4', 'KozielskaZoneAmenities1', 'KozielskaZoneMaster1', 'KozielskaZoneMaster2', 'KozielskaBuildingA1V1'];
const MASTERS = ['KozielskaZoneMaster1', 'KozielskaZoneMaster2'];
const all = [...ZONE, ...POIS];

const pairs = new Set();
const add = (a, b) => pairs.add(a + '|' + b);
for (const m of MASTERS) { add(m, m); for (const s of all) { add(m, s); add(s, m); } }
// also master<->master
add('KozielskaZoneMaster1', 'KozielskaZoneMaster2'); add('KozielskaZoneMaster2', 'KozielskaZoneMaster1');

const vids = [...pairs].map((p) => { const [a, b] = p.split('|'); return `Sequencer_Camera${a}_Camera${b}.mp4`; });
const thumbs = ['Thumbnail_CameraKozielskaZoneMaster1.jpeg', 'Thumbnail_CameraKozielskaZoneMaster2.jpeg'];

function head(url) {
  return new Promise((resolve) => {
    const req = https.request(new URL(url), { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0', Accept: '*/*', Range: 'bytes=0-1' } }, (res) => { res.resume(); resolve({ url, status: res.statusCode }); });
    req.on('error', () => resolve({ url, status: 'ERR' }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ url, status: 'TO' }); });
    req.end();
  });
}
async function pool(items, n, fn) { let i = 0; const out = []; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); } })); return out; }

(async () => {
  console.log('probing', vids.length, 'master videos +', thumbs.length, 'thumbs');
  const vr = await pool(vids, 16, (f) => head(VID + f));
  const tr = await pool(thumbs, 8, (f) => head(THUMB + f));
  const okV = vr.filter((r) => r.status === 200 || r.status === 206).map((r) => r.url.replace(VID, ''));
  const okT = tr.filter((r) => r.status === 200 || r.status === 206).map((r) => r.url.replace(THUMB, ''));
  console.log('master videos exist:', okV.length, '| thumbs exist:', okT.length);
  const missing = [
    ...okV.filter((f) => !fs.existsSync(path.join(DESK, f))).map((f) => VID_LOCAL + f),
    ...okT.filter((f) => !fs.existsSync(path.join(TDIR, f))).map((f) => THUMB_LOCAL + f),
  ];
  console.log('missing locally:', missing.length);
  missing.forEach((m) => console.log('  ', m.split('/').pop()));
  fs.writeFileSync(path.join(__dirname, 'master_missing.json'), JSON.stringify(missing, null, 1));
})();
