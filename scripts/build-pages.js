#!/usr/bin/env node
// Builds a static GitHub Pages version of the tour into ./_site.
// The site is served from a sub-path (https://<user>.github.io/<repo>/), so:
//  - Next.js basePath is patched into the runtime and assetPrefix into __NEXT_DATA__,
//  - root-absolute asset URLs (/vmedia, /models, /icons, ...) are prefixed,
//  - server.js's dynamic routes (/api/*, filtered list data) are re-implemented
//    in the browser by a fetch shim injected as the first <script> of every page.
// The project URL segment is the repo name (Montro), so the site root doubles as the
// Next.js [project] route: https://<user>.github.io/Montro/Zone_A/...
// Usage: node scripts/build-pages.js
'use strict';
const fs = require('fs');
const path = require('path');

const REPO = path.join(__dirname, '..');
const SRC = path.join(REPO, 'clone');
const API = path.join(REPO, 'api');
const OUT = path.join(REPO, process.env.OUT || '_site');
const PROJECT = 'Montro';
const BASE = '/' + PROJECT;
const BUILD_ID = 'ANU6VnI3Xn4hJixUdj7K3';
const ZONE = '/Zone_A';
const { TEXT_EDITS, POI } = require('./montro-content');

// voxdoc PDFs are never opened (the PDF placeholder shim blocks them) and would push
// the site over GitHub Pages' 1 GB limit, so they are left out.
const SKIP = new Set(['voxdoc', path.join('static', 'pdf'), '_' + 'darak',
  ...['favicon.png', 'favicon.ong', 'apple-touch-icon.png', 'site.webmanifest'].map((f) => path.join('static', f))]);
const TEXT = new Set(['.html', '.js', '.css', '.json', '.webmanifest']);

// ---------- copy ----------
fs.rmSync(OUT, { recursive: true, force: true });
function copyDir(from, to, rel = '') {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    const r = path.join(rel, name);
    if (SKIP.has(r)) continue;
    const a = path.join(from, name);
    // clone/Kozielska/* becomes the site root (the project segment = repo name).
    if (rel === '' && name === 'Kozielska') { copyDir(a, to, r); continue; }
    const b = path.join(to, name.split('Kozielska').join(PROJECT));
    if (fs.statSync(a).isDirectory()) copyDir(a, b, r);
    else if (TEXT.has(path.extname(name).toLowerCase())) fs.writeFileSync(b, rewrite(fs.readFileSync(a, 'utf8'), name));
    else fs.copyFileSync(a, b);
  }
}

// ---------- URL rewriting ----------
const ASSET_DIRS = 'vmedia|models|icons|static|voxdoc|draco|hdr|api';
const reAssets = new RegExp(`(["'\`(]|url\\(\\s*['"]?)/(${ASSET_DIRS})(?=[/"'?\`])`, 'g');
function rewrite(s, name) {
  const ext = path.extname(name).toLowerCase();
  for (const [a, b] of TEXT_EDITS) s = s.split(a).join(b);
  if (name.startsWith('_app-') && ext === '.js') s = editPoi(s);
  s = s.split('Kozielska').join(PROJECT);
  s = s.replace(reAssets, `$1${BASE}/$2`);
  if (ext === '.html') {
    s = s.replace(/(["'(])\/_next\//g, `$1${BASE}/_next/`);
    // No favicon: drop the original icon/manifest links and set an empty icon
    // so browsers don't fall back to /favicon.ico.
    s = s.replace(/<link rel="(?:icon|shortcut icon|apple-touch-icon|manifest)"[^>]*>/g, '');
    s = s.replace('</head>', '<link rel="icon" href="data:,"/></head>');
    // assetPrefix drives webpack's public path + route-loader CSS/JS for later chunks.
    s = s.replace(/(<script id="__NEXT_DATA__"[^>]*>\{)/, `$1"assetPrefix":"${BASE}",`);
    s = injectHead(s, SHIM);
  }
  return s;
}
// Replace amenity/location pin titles (and texts) in the app's English i18n table.
function editPoi(s) {
  for (const [key, v] of Object.entries(POI)) {
    const t = JSON.stringify(v.title);
    if (v.text != null) {
      s = s.replace(new RegExp(`"${key}":\\{"title":"[^"]*","text":"[^"]*"\\}`, 'g'), `"${key}":{"title":${t},"text":${JSON.stringify(v.text)}}`);
    } else {
      s = s.replace(new RegExp(`"${key}":\\{"title":"[^"]*"\\}`, 'g'), `"${key}":{"title":${t}}`);
    }
  }
  return s;
}
function injectHead(html, snippet) {
  const i = html.indexOf('<head');
  if (i < 0) return html;
  const j = html.indexOf('>', i);
  return html.slice(0, j + 1) + snippet + html.slice(j + 1);
}
// ---------- browser shim replacing server.js dynamic routes ----------
const SHIM = `<script data-pages-shim>(function(){
var B=${JSON.stringify(BASE)},ID=${JSON.stringify(BUILD_ID)};
var ZONE_DATA=B+"/_next/data/"+ID+"/"+B.slice(1)+"/Zone_A.json",BLD_DATA=B+"/_next/data/"+ID+"/"+B.slice(1)+"/Zone_A/"+B.slice(1)+"_A1V.json";
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
 if(path.indexOf("/_next/")===0){path=B+path;input=B+u.pathname+u.search;}
 if(path===B+"/api/lang")return Promise.resolve(json({message:"Server error"},500));
 if(path===B+"/api/apartments")return apts().then(function(all){var l=filt(all,p),pg=Math.max(1,parseInt(p.page,10)||1),ps=Math.max(1,parseInt(p.pageSize,10)||l.length||1);return json({apartments:l.slice((pg-1)*ps,pg*ps),totalApartmentCount:l.length})});
 if(path===B+"/api/apartmentsSide")return getJson(B+"/_apidata/apartmentsSide.json").then(function(d){return json(d||{})});
 if(path===B+"/api/apartmentPriceHistory")return getJson(B+"/_apidata/priceHistory.json").then(function(d){return json((d&&d[p.url])||[])});
 if((path===ZONE_DATA||path===BLD_DATA)&&hasF(p))return Promise.all([getJson(path),apts()]).then(function(r){var tpl=r[0];if(!tpl)return of(input,init);var o=JSON.parse(JSON.stringify(tpl)),l=filt(r[1],p);o.pageProps.apartments=l.slice(0,6);o.pageProps.totalApartmentCount=l.length;if(o.pageProps.fragmentedApartmentsCount&&o.pageProps.fragmentedApartmentsCount.apartmentCount)o.pageProps.fragmentedApartmentsCount.apartmentCount={[B.slice(1)+"_A1V"]:l.length};return json(o)});
 return of(input,init)};
})();</script>`;

// ---------- build ----------
copyDir(SRC, OUT);

// API snapshots the shim reads.
fs.mkdirSync(path.join(OUT, '_apidata'), { recursive: true });
for (const f of fs.readdirSync(API)) if (f.endsWith('.json')) {
  fs.writeFileSync(path.join(OUT, '_apidata', f), rewrite(fs.readFileSync(path.join(API, f), 'utf8'), f));
}

// Building page: the URL /Zone_A/<project>_A1V is also a directory
// (it holds the apartment pages), so it needs an index.html inside it.
const zoneDir = path.join(OUT, 'Zone_A');
for (const f of fs.readdirSync(zoneDir)) {
  const m = f.match(/^(.+)\.html$/);
  if (m && fs.existsSync(path.join(zoneDir, m[1])) && fs.statSync(path.join(zoneDir, m[1])).isDirectory()) {
    fs.copyFileSync(path.join(zoneDir, f), path.join(zoneDir, m[1], 'index.html'));
  }
}

// Root + 404 → the zone page.
const redirect = `<!doctype html><meta charset="utf-8"><title>Montro Residence</title><link rel="icon" href="data:,"><meta http-equiv="refresh" content="0;url=${BASE}${ZONE}/"><script>location.replace(${JSON.stringify(BASE + ZONE + '/')})</script>`;
fs.writeFileSync(path.join(OUT, 'index.html'), redirect);
fs.writeFileSync(path.join(OUT, '404.html'), redirect);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
// Project logo (map pin + header) -> Montro wordmark.
fs.writeFileSync(path.join(OUT, 'icons', 'logo.svg'), `<svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="55" cy="36" rx="17" ry="11" stroke="white" stroke-width="1.6"/>
<text x="55" y="41" text-anchor="middle" fill="white" font-family="Georgia,'Times New Roman',serif" font-style="italic" font-size="14">MR</text>
<text x="55" y="70" text-anchor="middle" fill="white" font-family="Montserrat,Arial,sans-serif" font-size="15" letter-spacing="4">MONTRO</text>
<text x="55" y="84" text-anchor="middle" fill="white" font-family="Montserrat,Arial,sans-serif" font-size="6.5" letter-spacing="3">RESIDENCE</text>
</svg>`);

console.log(`Built ${OUT} for base ${BASE}`);
