// Mirror each apartment's ApartmentLink PDF (the "PDF APARTAMENTU" button — the last
// external runtime call) into clone/voxdoc/apartment/<seg>.pdf and rewrite the URL in
// both the detail JSON and the detail HTML so the clone is fully self-contained.
const fs = require('fs');
const path = require('path');
const https = require('https');

const DETAIL_DIR = path.join(__dirname, '..', 'clone', '_next', 'data', 'ANU6VnI3Xn4hJixUdj7K3', 'Kozielska', 'Zone_A', 'Kozielska_A1V');
const HTML_DIR = path.join(__dirname, '..', 'clone', 'Kozielska', 'Zone_A', 'Kozielska_A1V');
const PDF_DIR = path.join(__dirname, '..', 'clone', 'voxdoc', 'apartment');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest + '.part');
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: '*/*' }, timeout: 60000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); file.close(); fs.rmSync(dest + '.part', { force: true }); return reject(new Error('HTTP ' + res.statusCode)); }
      res.pipe(file); file.on('finish', () => file.close(() => { fs.renameSync(dest + '.part', dest); resolve(fs.statSync(dest).size); }));
    }).on('error', (e) => { file.close(); fs.rmSync(dest + '.part', { force: true }); reject(e); }).setTimeout(60000, function () { this.destroy(new Error('timeout')); });
  });
}
async function pool(items, n, fn) { let i = 0; const out = []; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); } })); return out; }

(async () => {
  fs.mkdirSync(PDF_DIR, { recursive: true });
  const files = fs.readdirSync(DETAIL_DIR).filter((f) => f.endsWith('.json'));
  const jobs = [];
  for (const f of files) {
    const seg = f.replace('.json', '');
    const d = JSON.parse(fs.readFileSync(path.join(DETAIL_DIR, f), 'utf8'));
    const link = d.pageProps && d.pageProps.apartment && d.pageProps.apartment.ApartmentLink;
    if (link && /^https?:\/\/.*voxdeveloper/.test(link)) jobs.push({ seg, link });
  }
  console.log('apartment PDFs to mirror:', jobs.length);
  let ok = 0, fail = 0, bytes = 0; const failures = [];
  await pool(jobs, 6, async (j) => {
    const dest = path.join(PDF_DIR, j.seg + '.pdf');
    try {
      if (!(fs.existsSync(dest) && fs.statSync(dest).size > 0)) bytes += await download(j.link, dest);
      ok++;
    } catch (e) { fail++; failures.push(j.seg + ' ' + e.message); }
  });
  console.log(`downloaded ok=${ok} fail=${fail} | ${(bytes / 1048576).toFixed(1)} MB`);
  if (failures.length) failures.forEach((x) => console.log('  FAIL', x));

  // rewrite links in JSON + HTML
  let jr = 0, hr = 0;
  for (const j of jobs) {
    const local = `/voxdoc/apartment/${j.seg}.pdf`;
    const jf = path.join(DETAIL_DIR, j.seg + '.json');
    let js = fs.readFileSync(jf, 'utf8');
    if (js.includes(j.link)) { js = js.split(j.link).join(local); fs.writeFileSync(jf, js); jr++; }
    const hf = path.join(HTML_DIR, j.seg + '.html');
    if (fs.existsSync(hf)) { let hs = fs.readFileSync(hf, 'utf8'); if (hs.includes(j.link)) { hs = hs.split(j.link).join(local); fs.writeFileSync(hf, hs); hr++; } }
  }
  console.log('rewrote ApartmentLink in', jr, 'JSONs and', hr, 'HTMLs');
})();
