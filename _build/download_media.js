// Download a list of /vmedia/* assets from media.vinode.io/e/* into clone/vmedia.
// Reads missing list from harvest_media_result.json (or a passed JSON array file).
// Idempotent: skips files already present with non-zero size. Streams, follows 206.
const fs = require('fs');
const path = require('path');
const https = require('https');

const CLONE = path.join(__dirname, '..', 'clone');
const CDN_ORIGIN = 'https://media.vinode.io/e'; // /vmedia/X  ->  /e/X

function localToCdn(p) { return CDN_ORIGIN + p.replace(/^\/vmedia/, ''); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const tmp = dest + '.part';
    const file = fs.createWriteStream(tmp);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': '*/*', 'Range': 'bytes=0-' }, timeout: 60000 }, (res) => {
      if (res.statusCode !== 200 && res.statusCode !== 206) { res.resume(); file.close(); fs.rmSync(tmp, { force: true }); return reject(new Error('HTTP ' + res.statusCode)); }
      res.pipe(file);
      file.on('finish', () => file.close(() => { fs.renameSync(tmp, dest); resolve(fs.statSync(dest).size); }));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', (e) => { file.close(); fs.rmSync(tmp, { force: true }); reject(e); });
  });
}

async function pool(items, n, fn) {
  let i = 0; const out = [];
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx], idx); } }));
  return out;
}

(async () => {
  const srcFile = process.argv[2] || path.join(__dirname, 'harvest_media_result.json');
  const raw = JSON.parse(fs.readFileSync(srcFile, 'utf8'));
  let list = Array.isArray(raw) ? raw : (raw.missing || []);
  // normalize to array of /vmedia paths
  let paths = list.map((x) => (typeof x === 'string' ? x : x.u)).filter((p) => p && p.startsWith('/vmedia/'));
  paths = [...new Set(paths)];
  console.log('To download:', paths.length, 'media files');
  let ok = 0, skip = 0, fail = 0, bytes = 0;
  const failures = [];
  await pool(paths, 6, async (p) => {
    const dest = path.join(CLONE, p.replace(/^\//, ''));
    try {
      if (fs.existsSync(dest) && fs.statSync(dest).size > 0) { skip++; return; }
      const sz = await download(localToCdn(p), dest);
      ok++; bytes += sz;
      if (ok % 10 === 0) console.log('   downloaded', ok, '| ', (bytes / 1048576).toFixed(1), 'MB');
    } catch (e) { fail++; failures.push(p + ' :: ' + e.message); }
  });
  console.log(`DONE ok=${ok} skip=${skip} fail=${fail} | total ${(bytes / 1048576).toFixed(1)} MB`);
  if (failures.length) { console.log('FAILURES:'); failures.forEach((f) => console.log('  ', f)); }
})();
