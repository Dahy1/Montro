// Static-asset cleanup:
//  1. Strip the Cloudflare challenge-platform injector (<script>...__CF$cv$params...)
//     from every served HTML file — it only 404s on /cdn-cgi/... here and is a
//     bot-detection beacon (the clone's whole point is "no trackers / never phones home").
//  2. Provide the favicon.ong (original typo) + apple-touch-icon.png as copies of
//     favicon.png so the <link> tags resolve instead of 404ing.
const fs = require('fs');
const path = require('path');
const CLONE = path.join(__dirname, '..', 'clone');

// 1) strip CF injector from all html files under clone/Kozielska
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const htmlFiles = walk(path.join(CLONE, 'Kozielska'));
let stripped = 0;
for (const f of htmlFiles) {
  let h = fs.readFileSync(f, 'utf8');
  // remove any <script>...</script> block that contains the Cloudflare challenge marker
  const re = /<script\b[^>]*>(?:(?!<\/script>)[\s\S])*?__CF\$cv\$params(?:(?!<\/script>)[\s\S])*?<\/script>/g;
  const before = h.length;
  h = h.replace(re, '');
  if (h.length !== before) { fs.writeFileSync(f, h); stripped++; }
}
console.log('CF injector stripped from', stripped, '/', htmlFiles.length, 'html files');

// 2) favicon copies
const favPng = path.join(CLONE, 'static', 'favicon.png');
if (fs.existsSync(favPng)) {
  for (const name of ['favicon.ong', 'apple-touch-icon.png']) {
    const dst = path.join(CLONE, 'static', name);
    if (!fs.existsSync(dst)) { fs.copyFileSync(favPng, dst); console.log('created', name); }
  }
}
console.log('done');
