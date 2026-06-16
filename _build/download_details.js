// Download all apartment-detail _next/data JSONs from the live site, rewrite
// media.vinode.io -> /vmedia, save under clone/. Idempotent. Collects the set of
// external asset URLs (rohe.voxdeveloper.com / media.vinode.io) referenced.
const fs = require('fs');
const path = require('path');
const https = require('https');

const BUILD_ID = 'ANU6VnI3Xn4hJixUdj7K3';
const ORIGIN = 'https://mieszkania.kozielskapark.pl';
const OUTDIR = path.join(__dirname, '..', 'clone', '_next', 'data', BUILD_ID, 'Kozielska', 'Zone_A', 'Kozielska_A1V');
const MEDIA_RE = /https:\/\/media\.vinode\.io\/e\//g;
const LOCAL = '/vmedia/';

const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
// dedupe by segment (collisions resolve to same URL)
const seen = new Set();
const items = rows.filter((r) => { if (seen.has(r.seg)) return false; seen.add(r.seg); return true; });

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }, timeout: 30000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      let data = ''; res.setEncoding('utf8');
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

(async () => {
  fs.mkdirSync(OUTDIR, { recursive: true });
  const externals = new Set();
  let ok = 0, fail = 0, skip = 0;
  for (const it of items) {
    const out = path.join(OUTDIR, it.seg + '.json');
    const q = `side=${it.side}&floor=${it.floor}&project=Kozielska&zone=Zone_A&building=${it.bld}&apartment=${it.seg}`;
    const url = `${ORIGIN}/_next/data/${BUILD_ID}/Kozielska/Zone_A/${it.bld}/${it.seg}.json?${q}`;
    try {
      let body = await get(url);
      // collect external asset refs (pre-rewrite)
      for (const m of body.matchAll(/https?:\/\/(?:rohe\.voxdeveloper\.com|media\.vinode\.io)[^"'\\]+/gi)) externals.add(m[0]);
      const rewritten = body.replace(MEDIA_RE, LOCAL);
      fs.writeFileSync(out, rewritten);
      ok++;
      if (ok % 10 === 0) console.log('  ...', ok, '/', items.length);
    } catch (e) {
      fail++; console.log('  FAIL', it.seg, e.message);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'detail_externals.json'), JSON.stringify([...externals], null, 1));
  console.log(`DONE: ok=${ok} fail=${fail} skip=${skip} | unique external asset URLs=${externals.size}`);
  // summarize external hosts/paths
  const hosts = {};
  for (const u of externals) { try { const h = new URL(u).host; hosts[h] = (hosts[h] || 0) + 1; } catch (e) {} }
  console.log('external hosts:', JSON.stringify(hosts));
})();
