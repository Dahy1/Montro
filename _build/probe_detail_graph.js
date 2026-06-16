// Probe media.vinode.io for the COMPLETE detail-page camera graph: idle loops,
// hierarchical transitions (zone->building->floorplan->apartment + reverses), and
// floor/apartment thumbnails. Outputs the /vmedia paths that exist (200/206).
const https = require('https');
const fs = require('fs');
const path = require('path');

const VID = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/Thumbnails/';
const VID_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/Thumbnails/';

const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
const floors = [...new Set(rows.map((r) => r.floor))].sort((a, b) => a - b);
const aptByFloor = {};
for (const r of rows) (aptByFloor[r.floor] = aptByFloor[r.floor] || []).push(parseInt(r.seg.split('_')[1], 10));
for (const f of floors) aptByFloor[f] = [...new Set(aptByFloor[f])].sort((a, b) => a - b);

// camera states
const ZONE = ['KozielskaZoneA1', 'KozielskaZoneA2', 'KozielskaZoneA3', 'KozielskaZoneA4'];
const BUILDING = 'KozielskaBuildingA1V1';
const BFLOORPLAN = 'KozielskaBuildingA1VFloorPlanA';
const floorPlan = (f) => `PlanAFloorPlan${f}`;
const apart = (f, n) => `PlanAApart${f}-${n}`;

// build transition pair set
const pairs = new Set();
const add = (a, b) => pairs.add(a + '|' + b);
// idles
[...ZONE, BUILDING, BFLOORPLAN].forEach((s) => add(s, s));
floors.forEach((f) => add(floorPlan(f), floorPlan(f)));
floors.forEach((f) => aptByFloor[f].forEach((n) => add(apart(f, n), apart(f, n))));
// zone <-> building
ZONE.forEach((z) => { add(z, BUILDING); add(BUILDING, z); });
// building <-> building-floorplan
add(BUILDING, BFLOORPLAN); add(BFLOORPLAN, BUILDING);
// building-floorplan <-> per-floor plan
floors.forEach((f) => { add(BFLOORPLAN, floorPlan(f)); add(floorPlan(f), BFLOORPLAN); add(BUILDING, floorPlan(f)); add(floorPlan(f), BUILDING); });
// per-floor plan <-> apartments on that floor
floors.forEach((f) => aptByFloor[f].forEach((n) => { add(floorPlan(f), apart(f, n)); add(apart(f, n), floorPlan(f)); add(BFLOORPLAN, apart(f, n)); }));
// floor <-> floor (adjacent)
for (let i = 0; i < floors.length - 1; i++) { add(floorPlan(floors[i]), floorPlan(floors[i + 1])); add(floorPlan(floors[i + 1]), floorPlan(floors[i])); }

const vidUrls = [...pairs].map((p) => { const [a, b] = p.split('|'); return `Sequencer_Camera${a}_Camera${b}.mp4`; });
// thumbnails
const thumbUrls = [];
floors.forEach((f) => thumbUrls.push(`Thumbnail_CameraPlanAFloorPlan${f}.jpeg`));
floors.forEach((f) => aptByFloor[f].forEach((n) => thumbUrls.push(`Thumbnail_CameraPlanAApart${f}-${n}.jpeg`)));
thumbUrls.push(`Thumbnail_CameraKozielskaBuildingA1VFloorPlanA.jpeg`, `Thumbnail_CameraKozielskaBuildingA1V1.jpeg`);

function head(url) {
  return new Promise((resolve) => {
    const req = https.request(new URL(url), { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0', Accept: '*/*', Range: 'bytes=0-1' } }, (res) => {
      res.resume();
      resolve({ url, status: res.statusCode, len: res.headers['content-range'] || res.headers['content-length'] || '' });
    });
    req.on('error', () => resolve({ url, status: 'ERR' }));
    req.setTimeout(20000, () => { req.destroy(); resolve({ url, status: 'TO' }); });
    req.end();
  });
}
async function pool(items, n, fn) { let i = 0; const out = []; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); } })); return out; }

(async () => {
  console.log('probing', vidUrls.length, 'videos +', thumbUrls.length, 'thumbnails =', vidUrls.length + thumbUrls.length, 'requests');
  const vres = await pool(vidUrls, 16, (f) => head(VID + f));
  const tres = await pool(thumbUrls, 16, (f) => head(THUMB + f));
  const okVid = vres.filter((r) => r.status === 200 || r.status === 206).map((r) => VID_LOCAL + r.url.replace(VID, ''));
  const okThumb = tres.filter((r) => r.status === 200 || r.status === 206).map((r) => THUMB_LOCAL + r.url.replace(THUMB, ''));
  console.log('videos exist:', okVid.length, '/', vidUrls.length);
  console.log('thumbnails exist:', okThumb.length, '/', thumbUrls.length);
  const exists = [...okVid, ...okThumb];
  fs.writeFileSync(path.join(__dirname, 'detail_graph_assets.json'), JSON.stringify(exists, null, 1));
  console.log('wrote detail_graph_assets.json with', exists.length, 'existing assets');
})();
