const fs = require('fs'), path = require('path');
function walk(d) { let o = []; for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) o = o.concat(walk(p)); else if (/\.(js|css)$/.test(e.name)) o.push(p); } return o; }
let files = walk('clone/_next'); files.push('page_raw.html');
const assets = new Set(), chunks = new Set();
const assetRe = /["'`(]((?:\/)(?:icons|fonts|models|draco|hdr|images|img|static|textures|assets|sounds|audio|video|media|locales|lang)\/[A-Za-z0-9_./%-]+\.[A-Za-z0-9]{2,5})/g;
const chunkRe = /static\/chunks\/[A-Za-z0-9_./%\[\]-]+?\.js/g;
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = assetRe.exec(t))) assets.add(m[1]);
  while ((m = chunkRe.exec(t))) chunks.add(m[0].replace(/^.*?(static\/chunks)/, '/_next/$1'));
}
const wp = fs.readFileSync('clone/_next/static/chunks/webpack-4294890408b69a6f.js', 'utf8');
function parseMap(s) { const o = {}; if (!s) return o; for (const p of s.matchAll(/(\d+):"([a-f0-9]+)"/g)) o[p[1]] = p[2]; return o; }
const jsObj = wp.match(/static\/chunks\/"\+\(?\{?([^}]*)\}/);
const cssObj = wp.match(/static\/css\/"\+\{?([^}]*)\}/);
const jm = parseMap(jsObj && jsObj[1]), cm = parseMap(cssObj && cssObj[1]);
console.log('=== ASSET PATHS (' + assets.size + ') ===');
[...assets].sort().forEach((a) => console.log(a));
console.log('\n=== explicit chunk refs (' + chunks.size + ') ===');
[...chunks].sort().forEach((c) => console.log(c));
console.log('\n=== webpack JS map: ' + Object.keys(jm).length + ', CSS map: ' + Object.keys(cm).length + ' ===');
console.log('JS:', JSON.stringify(jm));
console.log('CSS:', JSON.stringify(cm));
