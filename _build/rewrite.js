// Rewrite absolute media.vinode.io URLs -> local /vmedia, inject tracker shim,
// emit the page HTML at clone/Kozielska/Zone_A/index.html, and prep API snapshots.
const fs = require('fs');
const path = require('path');

const MEDIA_RE = /https:\/\/media\.vinode\.io\/e\//g;
const LOCAL = '/vmedia/';
// Cloudflare challenge-platform injector (bot beacon) — strip it: it only 404s on
// /cdn-cgi/ here and contradicts the clone's "no trackers / never phones home" goal.
const CF_RE = /<script\b[^>]*>(?:(?!<\/script>)[\s\S])*?__CF\$cv\$params(?:(?!<\/script>)[\s\S])*?<\/script>/g;

function rw(s) { return s.replace(MEDIA_RE, LOCAL); }

// 1) Page HTML
let html = fs.readFileSync('page_raw.html', 'utf8');
const before = (html.match(MEDIA_RE) || []).length;
html = rw(html).replace(CF_RE, '');
const shim = fs.readFileSync('tracker-shim.js', 'utf8');
const inject = '<script data-clone-shim>\n' + shim + '\n</script>';
// Insert right after the opening <head ...>
html = html.replace(/<head([^>]*)>/, (m) => m + inject);
const outHtml = 'clone/Kozielska/Zone_A/index.html';
fs.mkdirSync(path.dirname(outHtml), { recursive: true });
fs.writeFileSync(outHtml, html);
console.log('HTML: rewrote', before, 'media URLs, injected shim ->', outHtml, '(' + html.length + ' bytes)');

// 2) _next/data route JSON
const dataPath = 'clone/_next/data/ANU6VnI3Xn4hJixUdj7K3/Kozielska/Zone_A.json';
let dj = fs.readFileSync(dataPath, 'utf8');
const djn = (dj.match(MEDIA_RE) || []).length;
fs.writeFileSync(dataPath, rw(dj));
console.log('data JSON: rewrote', djn, 'media URLs');

// 3) API snapshots (served by server.js). Rewrite media URLs (no-op if none).
for (const [src, dst] of [['api_apartments.json', 'api/apartments.json'], ['api_apartmentsSide.json', 'api/apartmentsSide.json']]) {
  let s = fs.readFileSync(src, 'utf8');
  const n = (s.match(MEDIA_RE) || []).length;
  fs.mkdirSync('api', { recursive: true });
  fs.writeFileSync(dst, rw(s));
  console.log('API', src, '-> ', dst, '(rewrote', n, 'media URLs)');
}

// 4) Sanity: ensure no stray media.vinode.io remains in served HTML/data
const stray = (fs.readFileSync(outHtml, 'utf8').match(/media\.vinode\.io/g) || []).length
  + (fs.readFileSync(dataPath, 'utf8').match(/media\.vinode\.io/g) || []).length;
console.log('Remaining media.vinode.io refs in HTML+data:', stray);
