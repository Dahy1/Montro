// Probe media.vinode.io for all 6 building-stage camera states (KozielskaBuildingA1V1..6,
// the "Etap 1-6" views): idles, transitions among stages + to zone/floorplan/apartments,
// and stage thumbnails. Emit existing /vmedia paths not present locally.
const https = require('https');
const fs = require('fs');
const path = require('path');

const VID = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/Thumbnails/';
const VID_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/Thumbnails/';
const DESK = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'h264', 'desktop');
const TDIR = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'Thumbnails');

const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
const floors = [...new Set(rows.map((r) => r.floor))].sort((a, b) => a - b);
const stages = [1, 2, 3, 4, 5, 6].map((n) => `KozielskaBuildingA1V${n}`);
const others = ['KozielskaZoneA1', 'KozielskaZoneA2', 'KozielskaZoneA3', 'KozielskaZoneA4', 'KozielskaZoneMaster1', 'KozielskaZoneMaster2', 'KozielskaBuildingA1VFloorPlanA', 'KozielskaZoneHero1', 'KozielskaZoneHero2', ...floors.map((f) => `PlanAFloorPlan${f}`), 'PlanAFloorPlan'];
const all = [...stages, ...others];

const pairs = new Set();
const add = (a, b) => pairs.add(a + '|' + b);
for (const s of stages) { add(s, s); for (const o of all) { add(s, o); add(o, s); } }

const vids = [...pairs].map((p) => { const [a, b] = p.split('|'); return `Sequencer_Camera${a}_Camera${b}.mp4`; });
const thumbs = stages.map((s) => `Thumbnail_Camera${s}.jpeg`);

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
  console.log('probing', vids.length, 'stage videos +', thumbs.length, 'thumbnails');
  const vr = await pool(vids, 18, (f) => head(VID + f));
  const tr = await pool(thumbs, 8, (f) => head(THUMB + f));
  const okV = vr.filter((r) => r.status === 200 || r.status === 206).map((r) => r.url.replace(VID, ''));
  const okT = tr.filter((r) => r.status === 200 || r.status === 206).map((r) => r.url.replace(THUMB, ''));
  console.log('stage videos exist:', okV.length, '| thumbs exist:', okT.length);
  const missing = [
    ...okV.filter((f) => !fs.existsSync(path.join(DESK, f))).map((f) => VID_LOCAL + f),
    ...okT.filter((f) => !fs.existsSync(path.join(TDIR, f))).map((f) => THUMB_LOCAL + f),
  ];
  console.log('missing locally:', missing.length);
  fs.writeFileSync(path.join(__dirname, 'stages_missing.json'), JSON.stringify(missing, null, 1));
})();
