// Download the live SSR HTML for every apartment detail page, rewrite
// media.vinode.io -> /vmedia, inject the tracker shim + clone customization style
// (same as the zone index.html), and save under clone/Kozielska/Zone_A/<bld>/<seg>.html
// so the server can serve direct loads / refreshes of detail URLs.
const fs = require('fs');
const path = require('path');
const https = require('https');

const ORIGIN = 'https://mieszkania.kozielskapark.pl';
const OUTROOT = path.join(__dirname, '..', 'clone', 'Kozielska', 'Zone_A');
const MEDIA_RE = /https:\/\/media\.vinode\.io\/e\//g;
const LOCAL = '/vmedia/';
const CF_RE = /<script\b[^>]*>(?:(?!<\/script>)[\s\S])*?__CF\$cv\$params(?:(?!<\/script>)[\s\S])*?<\/script>/g;

const SHIM = fs.readFileSync(path.join(__dirname, 'tracker-shim.js'), 'utf8');
const CUSTOM_STYLE = '<style data-clone-custom>nav[class*="ApartmentListNavstyled__Wrapper"]{display:none!important;}img[src="/icons/logo.svg"]{display:none!important;}</style>';
const INJECT = CUSTOM_STYLE + '<script data-clone-shim>\n' + SHIM + '\n</script>';

const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'apt_urls.json'), 'utf8'));
const seen = new Set();
const items = rows.filter((r) => { if (seen.has(r.seg)) return false; seen.add(r.seg); return true; });

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'text/html' }, timeout: 40000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      let b = ''; res.setEncoding('utf8'); res.on('data', (c) => (b += c)); res.on('end', () => resolve(b));
    }).on('error', reject).setTimeout(40000, function () { this.destroy(new Error('timeout')); });
  });
}

async function pool(items, n, fn) { let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) await fn(items[i++]); })); }

(async () => {
  let ok = 0, fail = 0, bytes = 0;
  const failures = [];
  await pool(items, 6, async (it) => {
    const url = `${ORIGIN}/Kozielska/Zone_A/${it.bld}/${it.seg}?side=${it.side}&floor=${it.floor}`;
    try {
      let html = await get(url);
      if (!/__NEXT_DATA__/.test(html)) throw new Error('no __NEXT_DATA__');
      html = html.replace(MEDIA_RE, LOCAL).replace(CF_RE, '');
      if (!html.includes('data-clone-shim')) html = html.replace(/<head([^>]*)>/, (m) => m + INJECT);
      const dir = path.join(OUTROOT, it.bld);
      fs.mkdirSync(dir, { recursive: true });
      const out = path.join(dir, it.seg + '.html');
      fs.writeFileSync(out, html);
      ok++; bytes += html.length;
      if (ok % 15 === 0) console.log('  ...', ok, '/', items.length);
    } catch (e) { fail++; failures.push(it.seg + ' :: ' + e.message); }
  });
  console.log(`DONE ok=${ok} fail=${fail} | ${(bytes / 1048576).toFixed(1)} MB`);
  if (failures.length) failures.forEach((f) => console.log('  FAIL', f));
  // sanity
  const sample = path.join(OUTROOT, 'Kozielska_A1V', '1_04.html');
  if (fs.existsSync(sample)) {
    const h = fs.readFileSync(sample, 'utf8');
    console.log('sample 1_04.html:', h.length, 'bytes | shim:', h.includes('data-clone-shim'), '| custom:', h.includes('data-clone-custom'), '| stray media.vinode:', (h.match(/media\.vinode\.io/g) || []).length);
  }
})();
