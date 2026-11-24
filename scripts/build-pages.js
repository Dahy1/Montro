#!/usr/bin/env node
// Builds a static GitHub Pages version of the tour into ./_site.
// The site is served from a sub-path (https://<user>.github.io/<repo>/), so:
//  - Next.js basePath is patched into the runtime and assetPrefix into __NEXT_DATA__,
//  - root-absolute asset URLs (/vmedia, /models, /icons, ...) are prefixed,
//  - server.js's dynamic routes (/api/*, filtered list data) are re-implemented
//    in the browser by a fetch shim injected as the first <script> of every page.
// Usage: BASE=/Darak-Tour node scripts/build-pages.js
'use strict';
const fs = require('fs');
const path = require('path');

const REPO = path.join(__dirname, '..');
const SRC = path.join(REPO, 'clone');
const API = path.join(REPO, 'api');
const OUT = path.join(REPO, process.env.OUT || '_site');
const BASE = (process.env.BASE || '/Darak-Tour').replace(/\/+$/, '');
const DARAK_SITE = process.env.DARAK_SITE || 'https://dahy1.github.io/Darak-Group';
const BUILD_ID = 'ANU6VnI3Xn4hJixUdj7K3';
const ZONE = '/Kozielska/Zone_A';

// voxdoc PDFs are never opened (the PDF placeholder shim blocks them) and would push
// the site over GitHub Pages' 1 GB limit, so they are left out.
const SKIP = new Set(['voxdoc', path.join('static', 'pdf')]);
const TEXT = new Set(['.html', '.js', '.css', '.json', '.webmanifest']);

// ---------- copy ----------
fs.rmSync(OUT, { recursive: true, force: true });
function copyDir(from, to, rel = '') {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    const r = path.join(rel, name);
    if (SKIP.has(r)) continue;
    const a = path.join(from, name), b = path.join(to, name);
    if (fs.statSync(a).isDirectory()) copyDir(a, b, r);
    else if (TEXT.has(path.extname(name).toLowerCase())) fs.writeFileSync(b, rewrite(fs.readFileSync(a, 'utf8'), name));
    else fs.copyFileSync(a, b);
  }
}

// ---------- URL rewriting ----------
const ASSET_DIRS = 'vmedia|models|icons|static|voxdoc|draco|hdr|_darak|api';
const reAssets = new RegExp(`(["'\`(]|url\\(\\s*['"]?)/(${ASSET_DIRS})(?=[/"'?\`])`, 'g');
function rewrite(s, name) {
  const ext = path.extname(name).toLowerCase();
  s = s.replace(reAssets, `$1${BASE}/$2`);
  if (ext === '.html') {
    s = s.replace(/(["'(])\/_next\//g, `$1${BASE}/_next/`);
    s = s.replace(/href="\/Kozielska/g, `href="${BASE}/Kozielska`);
    s = s.replace(/href="\/favicon/g, `href="${BASE}/favicon`);
    // assetPrefix drives webpack's public path + route-loader CSS/JS for later chunks.
    s = s.replace(/(<script id="__NEXT_DATA__"[^>]*>\{)/, `$1"assetPrefix":"${BASE}",`);
    s = injectHead(s, SHIM);
    s = injectBody(s, NAV);
  }
  if (name.startsWith('main-') && ext === '.js') {
    // Next.js basePath (compiled in as "" because the original had none).
    s = s.split('const basePath =  false || "";').join(`const basePath = ${JSON.stringify(BASE)};`);
    s = s.split('this.basePath =  false || "";').join(`this.basePath = ${JSON.stringify(BASE)};`);
  }
  if (name.startsWith('_app-') && ext === '.js') {
    // App helpers (getProjectName, getZoneName, getApartmentName, ...) parse the URL
    // as /<project>/<zone>/...; hide the Pages sub-path from them.
    const esc = BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\//g, '\\/');
    s = s.split('window.location.pathname').join(`(window.location.pathname.replace(/^${esc}(?=\\/|$)/,"")||"/")`);
  }
  return s;
}
function injectHead(html, snippet) {
  const i = html.indexOf('<head');
  if (i < 0) return html;
  const j = html.indexOf('>', i);
  return html.slice(0, j + 1) + snippet + html.slice(j + 1);
}
function injectBody(html, snippet) {
  if (html.includes('id="darak-tour-nav"')) return html;
  const i = html.indexOf('<body');
  if (i < 0) return html;
  const j = html.indexOf('>', i);
  return html.slice(0, j + 1) + snippet + html.slice(j + 1);
}

// ---------- browser shim replacing server.js dynamic routes ----------
const SHIM = `<script data-pages-shim>(function(){
var B=${JSON.stringify(BASE)},ID=${JSON.stringify(BUILD_ID)};
var ZONE_DATA=B+"/_next/data/"+ID+"/Kozielska/Zone_A.json",BLD_DATA=B+"/_next/data/"+ID+"/Kozielska/Zone_A/Kozielska_A1V.json";
var of=window.fetch.bind(window),cache={};
function getJson(u){return cache[u]||(cache[u]=of(u).then(function(r){return r.json()}).catch(function(){delete cache[u];return null}));}
function apts(){return getJson(B+"/_apidata/apartments.json").then(function(d){return(d&&d.apartments)||[]})}
function num(v){var n=parseFloat(v);return isNaN(n)?null:n}
function filt(list,p){
 if(p.roomsCount){var r=parseInt(p.roomsCount,10);list=list.filter(function(a){return a.TotalRooms===r})}
 if(p.status)list=list.filter(function(a){return a.Status===p.status});
 if(p.balcony==="yes")list=list.filter(function(a){return a.BalconyCombine>0});
 if(p.loggia==="yes")list=list.filter(function(a){return a.LoggiaCombine>0});
 if(p.terrace==="yes")list=list.filter(function(a){return a.TerraceCombine>0});
 var f=num(p.from!=null?p.from:p.priceFrom),t=num(p.to!=null?p.to:p.priceTo);
 if(f!=null)list=list.filter(function(a){return(a.PriceFully||0)>=f});
 if(t!=null)list=list.filter(function(a){return(a.PriceFully||0)<=t});
 if(p.search){var q=String(p.search).toLowerCase();list=list.filter(function(a){return((a.ApartmentName||"")+" "+(a.Number||"")).toLowerCase().indexOf(q)>=0})}
 return list}
function hasF(p){return["roomsCount","status","balcony","loggia","terrace","from","to","priceFrom","priceTo","search"].some(function(k){return p[k]!=null&&p[k]!==""})}
function json(o,s){return new Response(JSON.stringify(o),{status:s||200,headers:{"content-type":"application/json; charset=utf-8"}})}
window.fetch=function(input,init){
 var raw=typeof input==="string"?input:(input&&input.url)||String(input),u;
 try{u=new URL(raw,location.href)}catch(e){return of(input,init)}
 if(u.origin!==location.origin)return of(input,init);
 var path=u.pathname.replace(/\\/{2,}/g,"/"),p={};u.searchParams.forEach(function(v,k){p[k]=v});
 if(path.indexOf("/api/")===0)path=B+path;
 if(path===B+"/api/lang")return Promise.resolve(json({message:"Server error"},500));
 if(path===B+"/api/apartments")return apts().then(function(all){var l=filt(all,p),pg=Math.max(1,parseInt(p.page,10)||1),ps=Math.max(1,parseInt(p.pageSize,10)||l.length||1);return json({apartments:l.slice((pg-1)*ps,pg*ps),totalApartmentCount:l.length})});
 if(path===B+"/api/apartmentsSide")return getJson(B+"/_apidata/apartmentsSide.json").then(function(d){return json(d||{})});
 if(path===B+"/api/apartmentPriceHistory")return getJson(B+"/_apidata/priceHistory.json").then(function(d){return json((d&&d[p.url])||[])});
 if((path===ZONE_DATA||path===BLD_DATA)&&hasF(p))return Promise.all([getJson(path),apts()]).then(function(r){var tpl=r[0];if(!tpl)return of(input,init);var o=JSON.parse(JSON.stringify(tpl)),l=filt(r[1],p);o.pageProps.apartments=l.slice(0,6);o.pageProps.totalApartmentCount=l.length;if(o.pageProps.fragmentedApartmentsCount&&o.pageProps.fragmentedApartmentsCount.apartmentCount)o.pageProps.fragmentedApartmentsCount.apartmentCount={Kozielska_A1V:l.length};return json(o)});
 return of(input,init)};
})();</script>`;

// ---------- Darak navbar (same as server.js) ----------
const NAV = `<div id="darak-tour-nav"><style>
#darak-tour-nav{position:absolute;top:0;left:0;right:0;z-index:2147483000;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:15px clamp(18px,3.5vw,46px);background:rgba(17,17,17,.42);-webkit-backdrop-filter:blur(16px) saturate(1.1);backdrop-filter:blur(16px) saturate(1.1);border-bottom:1px solid rgba(255,255,255,.14);font-family:'Helvetica Neue',Arial,sans-serif;box-sizing:border-box;}
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
<a class="dtn-logo" href="${DARAK_SITE}/" aria-label="Darak Group"><img src="${BASE}/_darak/logo-white.svg" alt="Darak Group" width="574" height="138"></a>
<nav class="dtn-menu">
<a href="${DARAK_SITE}/homes-projects/">Projects</a>
<a href="${DARAK_SITE}/careers/">Careers</a>
<a href="${DARAK_SITE}/about-us/">About</a>
<a href="${DARAK_SITE}/blog/">Journal</a>
<a class="dtn-contact" href="${DARAK_SITE}/contact/">Contact</a>
</nav>
</div>`;

// ---------- build ----------
copyDir(SRC, OUT);

// API snapshots the shim reads.
fs.mkdirSync(path.join(OUT, '_apidata'), { recursive: true });
for (const f of fs.readdirSync(API)) if (f.endsWith('.json')) {
  fs.writeFileSync(path.join(OUT, '_apidata', f), rewrite(fs.readFileSync(path.join(API, f), 'utf8'), f));
}

// Building page: the URL /Kozielska/Zone_A/Kozielska_A1V is also a directory
// (it holds the apartment pages), so it needs an index.html inside it.
const zoneDir = path.join(OUT, 'Kozielska', 'Zone_A');
for (const f of fs.readdirSync(zoneDir)) {
  const m = f.match(/^(.+)\.html$/);
  if (m && fs.existsSync(path.join(zoneDir, m[1])) && fs.statSync(path.join(zoneDir, m[1])).isDirectory()) {
    fs.copyFileSync(path.join(zoneDir, f), path.join(zoneDir, m[1], 'index.html'));
  }
}

// Root + 404 → the zone page (what server.js did for "/").
const redirect = `<!doctype html><meta charset="utf-8"><title>Zayed Hills</title><meta http-equiv="refresh" content="0;url=${BASE}${ZONE}/"><script>location.replace(${JSON.stringify(BASE + ZONE + '/')})</script>`;
fs.writeFileSync(path.join(OUT, 'index.html'), redirect);
fs.writeFileSync(path.join(OUT, '404.html'), redirect);
try { fs.copyFileSync(path.join(SRC, 'static', 'favicon.png'), path.join(OUT, 'favicon.ico')); } catch (e) {}
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`Built ${OUT} for base ${BASE}`);
