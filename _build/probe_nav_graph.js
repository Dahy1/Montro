// All-pairs probe of the detail "navigation" camera states (zone-building-floorplan
// level, including the no-number PlanAFloorPlan state) + their links to every
// apartment. Emits existing /vmedia video paths not yet present locally.
const https = require('https');
const fs = require('fs');
const path = require('path');

const VID = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/h264/desktop/';
const VID_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/h264/desktop/';
const DESK = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'h264', 'desktop');

const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
const floors = [...new Set(rows.map((r) => r.floor))].sort((a, b) => a - b);
const aparts = [...new Set(rows.map((r) => `PlanAApart${r.floor}-${parseInt(r.seg.split('_')[1], 10)}`))];

// navigation-level states (non-apartment)
const nav = [
  'KozielskaZoneHero1', 'KozielskaZoneHero2', 'KozielskaZoneA1', 'KozielskaZoneA2', 'KozielskaZoneA3', 'KozielskaZoneA4',
  'KozielskaBuildingA1V1', 'KozielskaBuildingA1VFloorPlanA', 'PlanAFloorPlan',
  ...floors.map((f) => `PlanAFloorPlan${f}`),
];

const pairs = new Set();
const add = (a, b) => pairs.add(a + '|' + b);
// all-pairs among nav states (both directions)
for (const a of nav) for (const b of nav) add(a, b);
// nav <-> apartments (both directions) for floorplan-level + building-floorplan
for (const a of aparts) {
  add('PlanAFloorPlan', a); add(a, 'PlanAFloorPlan');
  add('KozielskaBuildingA1VFloorPlanA', a); add(a, 'KozielskaBuildingA1VFloorPlanA');
  const fp = 'PlanAFloorPlan' + a.match(/Apart(\d+)-/)[1];
  add(fp, a); add(a, fp);
  add(a, a); // idle
}

const files = [...pairs].map((p) => { const [a, b] = p.split('|'); return `Sequencer_Camera${a}_Camera${b}.mp4`; });
console.log('probing', files.length, 'candidate videos');

function head(file) {
  return new Promise((resolve) => {
    const req = https.request(new URL(VID + file), { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0', Accept: '*/*', Range: 'bytes=0-1' } }, (res) => { res.resume(); resolve({ file, status: res.statusCode }); });
    req.on('error', () => resolve({ file, status: 'ERR' }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ file, status: 'TO' }); });
    req.end();
  });
}
async function pool(items, n, fn) { let i = 0; const out = []; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); } })); return out; }

(async () => {
  const res = await pool(files, 20, head);
  const exist = res.filter((r) => r.status === 200 || r.status === 206).map((r) => r.file);
  const missingLocal = exist.filter((f) => !fs.existsSync(path.join(DESK, f))).map((f) => VID_LOCAL + f);
  console.log('exist on CDN:', exist.length, '| missing locally:', missingLocal.length);
  fs.writeFileSync(path.join(__dirname, 'nav_graph_missing.json'), JSON.stringify(missingLocal, null, 1));
  console.log('wrote nav_graph_missing.json');
})();
