// Probe the full POI/amenities camera graph. The original probe used bare POI names
// but the real states use -1/-2 suffixes (e.g. Patiowejscie-1). Probe each POI base
// with suffix variants: idle + Amenities1<->POI + POI<->POI thumbnails, download missing.
const https = require('https');
const fs = require('fs');
const path = require('path');

const VID = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB = 'https://media.vinode.io/e/VinodeKozielska/Kozielska4/Thumbnails/';
const VID_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/h264/desktop/';
const THUMB_LOCAL = '/vmedia/VinodeKozielska/Kozielska4/Thumbnails/';
const DESK = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'h264', 'desktop');
const TDIR = path.join(__dirname, '..', 'clone', 'vmedia', 'VinodeKozielska', 'Kozielska4', 'Thumbnails');

const bases = ['Centrummedyczne', 'Etapjedenlokaleuslugowe', 'Etapszesclokaleuslugowe', 'Hamaki', 'Hotel', 'Kladka', 'Ogrod', 'Padel', 'Patiowejscie', 'Patiowejsciedwa', 'Plachandlowy', 'Placzabaw', 'Restaurant', 'Silownia'];
const suffixes = ['', '-1', '-2', '-3'];
const AMEN = 'KozielskaZoneAmenities1';

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
  // 1) find which POI states actually exist (idle loop)
  const idleCandidates = [];
  for (const b of bases) for (const s of suffixes) idleCandidates.push(`KozielskaPoiAmenities-${b}${s}`);
  const idleRes = await pool(idleCandidates.map((st) => ({ st, url: VID + `Sequencer_Camera${st}_Camera${st}.mp4` })), 18, (x) => head(x.url).then((r) => ({ st: x.st, ok: r.status === 200 || r.status === 206 })));
  const states = idleRes.filter((r) => r.ok).map((r) => r.st);
  console.log('existing POI states:', states.length);

  // 2) build idle + Amenities<->POI + ALL POI<->POI transitions + thumbnail
  const vids = new Set();
  for (const st of states) { vids.add(`Sequencer_Camera${st}_Camera${st}.mp4`); vids.add(`Sequencer_Camera${AMEN}_Camera${st}.mp4`); vids.add(`Sequencer_Camera${st}_Camera${AMEN}.mp4`); }
  for (const a of states) for (const b of states) if (a !== b) vids.add(`Sequencer_Camera${a}_Camera${b}.mp4`);
  const thumbs = states.map((st) => `Thumbnail_Camera${st}.jpeg`);
  const vr = await pool([...vids], 18, (f) => head(VID + f).then((r) => ({ f, ok: r.status === 200 || r.status === 206 })));
  const tr = await pool(thumbs, 10, (f) => head(THUMB + f).then((r) => ({ f, ok: r.status === 200 || r.status === 206 })));
  const okV = vr.filter((r) => r.ok).map((r) => r.f);
  const okT = tr.filter((r) => r.ok).map((r) => r.f);
  const missing = [
    ...okV.filter((f) => !fs.existsSync(path.join(DESK, f))).map((f) => VID_LOCAL + f),
    ...okT.filter((f) => !fs.existsSync(path.join(TDIR, f))).map((f) => THUMB_LOCAL + f),
  ];
  console.log('POI videos exist:', okV.length, '| thumbs exist:', okT.length, '| missing locally:', missing.length);
  missing.forEach((m) => console.log('  ', m.split('/').pop()));
  fs.writeFileSync(path.join(__dirname, 'poi_missing.json'), JSON.stringify(missing, null, 1));
})();
