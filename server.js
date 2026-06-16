// Static server for the Kozielska Zone_A clone.
// Serves clone/ with: slash-collapse, %5B decoding, query-strip, Range support,
// API snapshot routes, and /api/lang 500 to match the original.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'clone');
const API = path.join(__dirname, 'api');
const PORT = process.env.PORT || 8099;
const PAGE = '/Kozielska/Zone_A';

// The main Darak Group marketing site the navbar links back to (override in prod).
const DARAK_SITE = process.env.DARAK_SITE || 'http://localhost:8765';

// Glass Darak navbar injected into every tour HTML page. Absolute (NOT fixed/sticky):
// it overlays the top of the 3D hero and scrolls away with the page.
const NAV = `<div id="darak-tour-nav"><style>
#darak-tour-nav{position:absolute;top:0;left:0;right:0;z-index:2147483000;
  display:flex;align-items:center;justify-content:space-between;gap:24px;
  padding:15px clamp(18px,3.5vw,46px);
  background:rgba(17,17,17,.42);-webkit-backdrop-filter:blur(16px) saturate(1.1);backdrop-filter:blur(16px) saturate(1.1);
  border-bottom:1px solid rgba(255,255,255,.14);
  font-family:'Helvetica Neue',Arial,sans-serif;box-sizing:border-box;}
#darak-tour-nav *{box-sizing:border-box;}
#darak-tour-nav .dtn-logo{display:flex;align-items:center;text-decoration:none;}
#darak-tour-nav .dtn-logo img{height:26px;width:auto;display:block;}
#darak-tour-nav .dtn-menu{display:flex;align-items:center;gap:clamp(16px,2vw,34px);}
#darak-tour-nav .dtn-menu a{color:rgba(255,255,255,.92);text-decoration:none;font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;transition:color .25s ease;}
#darak-tour-nav .dtn-menu a:hover{color:#fff;}
#darak-tour-nav .dtn-contact{display:inline-flex;align-items:center;color:#111;background:#fff;border-radius:999px;padding:9px 18px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;text-decoration:none;transition:opacity .25s ease;}
#darak-tour-nav .dtn-contact:hover{opacity:.85;}
@media (max-width:820px){#darak-tour-nav .dtn-menu a:not(.dtn-contact){display:none;}}
</style>
<a class="dtn-logo" href="${DARAK_SITE}/" aria-label="Darak Group"><img src="/_darak/logo-white.svg" alt="Darak Group" width="574" height="138"></a>
<nav class="dtn-menu">
<a href="${DARAK_SITE}/homes-projects/">Projects</a>
<a href="${DARAK_SITE}/careers/">Careers</a>
<a href="${DARAK_SITE}/about-us/">About</a>
<a href="${DARAK_SITE}/blog/">Journal</a>
<a class="dtn-contact" href="${DARAK_SITE}/contact/">Contact</a>
</nav>
</div>`;

function injectNav(html) {
  if (html.indexOf('id="darak-tour-nav"') !== -1) return html; // idempotent
  const i = html.indexOf('<body');
  if (i === -1) return html;
  const j = html.indexOf('>', i);
  if (j === -1) return html;
  return html.slice(0, j + 1) + NAV + html.slice(j + 1);
}

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json',
  '.exr': 'image/x-exr', '.bin': 'application/octet-stream', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json', '.map': 'application/json', '.pdf': 'application/pdf', '.xml': 'application/xml; charset=utf-8',
};
const ctype = (p) => TYPES[path.extname(p).toLowerCase()] || 'application/octet-stream';

function sendFile(req, res, file, status) {
  let st;
  try { st = fs.statSync(file); if (!st.isFile()) throw 0; } catch (e) {
    res.writeHead(404, { 'content-type': 'text/plain' }); return res.end('404 Not Found');
  }
  const type = ctype(file);
  // HTML pages: inject the glass Darak navbar (read + rewrite, no Range needed).
  if (path.extname(file).toLowerCase() === '.html') {
    let html;
    try { html = fs.readFileSync(file, 'utf8'); }
    catch (e) { res.writeHead(500, { 'content-type': 'text/plain' }); return res.end('500'); }
    const buf = Buffer.from(injectNav(html), 'utf8');
    res.writeHead(status || 200, {
      'content-type': type, 'content-length': buf.length,
      'cache-control': 'no-store', 'access-control-allow-origin': '*',
    });
    if (req.method === 'HEAD') return res.end();
    return res.end(buf);
  }
  const range = req.headers.range;
  // Range support (video seeking etc.)
  if (range && /^bytes=/.test(range)) {
    const m = range.replace('bytes=', '').split('-');
    let start = parseInt(m[0], 10); let end = m[1] ? parseInt(m[1], 10) : st.size - 1;
    if (isNaN(start)) start = 0; if (isNaN(end) || end >= st.size) end = st.size - 1;
    if (start > end || start >= st.size) { res.writeHead(416, { 'content-range': `bytes */${st.size}` }); return res.end(); }
    res.writeHead(206, {
      'content-type': type, 'content-range': `bytes ${start}-${end}/${st.size}`,
      'accept-ranges': 'bytes', 'content-length': end - start + 1, 'cache-control': 'public, max-age=31536000',
      'access-control-allow-origin': '*',
    });
    if (req.method === 'HEAD') return res.end();
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(status || 200, {
    'content-type': type, 'content-length': st.size, 'accept-ranges': 'bytes',
    'cache-control': 'public, max-age=3600', 'access-control-allow-origin': '*',
  });
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
}

function sendJson(res, status, file) {
  try { const b = fs.readFileSync(file); res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' }); res.end(b); }
  catch (e) { res.writeHead(500, { 'content-type': 'application/json' }); res.end('{"message":"Server error"}'); }
}

// Price-history snapshot: { <voxdeveloper xml url>: [ {date_modified, price}, ... ] }
// Mirrors the original /api/apartmentPriceHistory which proxied + parsed those XMLs.
let _priceHistory;
function priceHistory() {
  if (_priceHistory) return _priceHistory;
  try { _priceHistory = JSON.parse(fs.readFileSync(path.join(API, 'priceHistory.json'), 'utf8')); }
  catch (e) { _priceHistory = {}; }
  return _priceHistory;
}

// ---- Server-side apartment filtering (the original does this in getServerSideProps
// for the list + /api/apartments). The static clone must replicate it so the
// Filtry panel and infinite-scroll pagination behave exactly like the live site. ----
const BUILD_ID = 'ANU6VnI3Xn4hJixUdj7K3';
const ZONE_DATA = `/_next/data/${BUILD_ID}/Kozielska/Zone_A.json`;
const ZONE_DATA_FILE = path.join(ROOT, '_next', 'data', BUILD_ID, 'Kozielska', 'Zone_A.json');
const BUILDING_DATA = `/_next/data/${BUILD_ID}/Kozielska/Zone_A/Kozielska_A1V.json`;
const BUILDING_DATA_FILE = path.join(ROOT, '_next', 'data', BUILD_ID, 'Kozielska', 'Zone_A', 'Kozielska_A1V.json');

let _allApts;
const _tplCache = {};
function allApartments() {
  if (_allApts) return _allApts;
  try { _allApts = JSON.parse(fs.readFileSync(path.join(API, 'apartments.json'), 'utf8')).apartments || []; }
  catch (e) { _allApts = []; }
  return _allApts;
}
function listTemplate(file) {
  if (_tplCache[file]) return _tplCache[file];
  try { _tplCache[file] = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { _tplCache[file] = null; }
  return _tplCache[file];
}
// Build a filtered list-data response (zone or building) from a template snapshot.
function filteredListData(tplFile, p) {
  const tpl = listTemplate(tplFile);
  if (!tpl) return null;
  const filtered = filterApartments(p);
  const out = JSON.parse(JSON.stringify(tpl));
  out.pageProps.apartments = filtered.slice(0, 6);
  out.pageProps.totalApartmentCount = filtered.length;
  if (out.pageProps.fragmentedApartmentsCount && out.pageProps.fragmentedApartmentsCount.apartmentCount) {
    out.pageProps.fragmentedApartmentsCount.apartmentCount = { Kozielska_A1V: filtered.length };
  }
  return out;
}

// Validated against the live site: rooms = exact TotalRooms, status = 'Available',
// balcony/loggia/terrace = *Combine > 0, price = PriceFully range, search = name/number.
function filterApartments(p) {
  let list = allApartments();
  const num = (v) => { const n = parseFloat(v); return isNaN(n) ? null : n; };
  if (p.roomsCount) { const r = parseInt(p.roomsCount, 10); list = list.filter((a) => a.TotalRooms === r); }
  if (p.status) list = list.filter((a) => a.Status === p.status);
  if (p.balcony === 'yes') list = list.filter((a) => a.BalconyCombine > 0);
  if (p.loggia === 'yes') list = list.filter((a) => a.LoggiaCombine > 0);
  if (p.terrace === 'yes') list = list.filter((a) => a.TerraceCombine > 0);
  const from = num(p.from != null ? p.from : p.priceFrom), to = num(p.to != null ? p.to : p.priceTo);
  if (from != null) list = list.filter((a) => (a.PriceFully || 0) >= from);
  if (to != null) list = list.filter((a) => (a.PriceFully || 0) <= to);
  if (p.search) { const q = String(p.search).toLowerCase(); list = list.filter((a) => `${a.ApartmentName || ''} ${a.Number || ''}`.toLowerCase().includes(q)); }
  return list;
}
function queryParams(reqUrl) {
  const out = {}; const qi = reqUrl.indexOf('?');
  if (qi < 0) return out;
  try { for (const [k, v] of new URLSearchParams(reqUrl.slice(qi + 1))) out[k] = v; } catch (e) {}
  return out;
}
function hasFilter(p) { return ['roomsCount', 'status', 'balcony', 'loggia', 'terrace', 'from', 'to', 'priceFrom', 'priceTo', 'search'].some((k) => p[k] != null && p[k] !== ''); }

const server = http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(req.url.split('?')[0]); } catch (e) { pathname = req.url.split('?')[0]; }
  pathname = pathname.replace(/\/{2,}/g, '/'); // collapse // -> /

  // --- API routes (dynamic on original; snapshots here) ---
  if (pathname === '/api/lang') { res.writeHead(500, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' }); return res.end('{"message":"Server error"}'); }
  // Apartment list: filtered + paginated (page/pageSize), like the live endpoint.
  if (pathname === '/api/apartments') {
    const p = queryParams(req.url);
    const filtered = filterApartments(p);
    const page = Math.max(1, parseInt(p.page, 10) || 1);
    const pageSize = Math.max(1, parseInt(p.pageSize, 10) || filtered.length || 1);
    const slice = filtered.slice((page - 1) * pageSize, page * pageSize);
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'cache-control': 'no-store' });
    return res.end(JSON.stringify({ apartments: slice, totalApartmentCount: filtered.length }));
  }
  if (pathname === '/api/apartmentsSide') return sendJson(res, 200, path.join(API, 'apartmentsSide.json'));
  // Apartment price history: client calls /api/apartmentPriceHistory?url=<voxdeveloper xml>
  if (pathname === '/api/apartmentPriceHistory') {
    let url = '';
    const qi = req.url.indexOf('?');
    if (qi >= 0) { try { url = new URLSearchParams(req.url.slice(qi + 1)).get('url') || ''; } catch (e) {} }
    const body = JSON.stringify(priceHistory()[url] || []);
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' });
    return res.end(body);
  }

  // --- Zone / building list data (Next.js getServerSideProps): filter when present ---
  // The Filtry panel re-fetches these with roomsCount/status/balcony/... query params;
  // the static files are unfiltered snapshots, so filter on the fly to match live.
  if (pathname === ZONE_DATA || pathname === BUILDING_DATA) {
    const file = pathname === ZONE_DATA ? ZONE_DATA_FILE : BUILDING_DATA_FILE;
    const p = queryParams(req.url);
    if (!hasFilter(p)) return sendFile(req, res, file);
    const out = filteredListData(file, p);
    if (!out) return sendFile(req, res, file);
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'cache-control': 'no-store' });
    return res.end(JSON.stringify(out));
  }

  // Browser default favicon request (the live site 307s this to the png).
  if (pathname === '/favicon.ico') return sendFile(req, res, path.join(ROOT, 'static', 'favicon.png'));

  // --- Page route ---
  if (pathname === '/' || pathname === PAGE || pathname === PAGE + '/') {
    return sendFile(req, res, path.join(ROOT, 'Kozielska', 'Zone_A', 'index.html'));
  }

  // --- Building + apartment detail pages: SSR HTML snapshots for direct loads ---
  // SPA navigation uses /_next/data JSON; a hard load / refresh needs the HTML.
  const apt = pathname.match(/^\/Kozielska\/Zone_A\/([^/]+)\/([^/]+)\/?$/);   // building/apartment
  const bld = pathname.match(/^\/Kozielska\/Zone_A\/([^/]+)\/?$/);            // building
  if (apt) {
    const file = path.join(ROOT, 'Kozielska', 'Zone_A', apt[1], apt[2] + '.html');
    try { if (fs.statSync(file).isFile()) return sendFile(req, res, file); } catch (e) {}
  } else if (bld) {
    const file = path.join(ROOT, 'Kozielska', 'Zone_A', bld[1] + '.html');
    try { if (fs.statSync(file).isFile()) return sendFile(req, res, file); } catch (e) {}
  }

  // --- Static files under clone/ (path-traversal safe) ---
  const target = path.normalize(path.join(ROOT, pathname));
  if (!target.startsWith(ROOT)) { res.writeHead(403); return res.end('403'); }
  sendFile(req, res, target);
});

server.listen(PORT, () => console.log(`Clone server running:  http://localhost:${PORT}${PAGE}`));
