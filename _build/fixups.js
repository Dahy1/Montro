// Surgical fixups that must NOT go through the general translate map (they would
// otherwise corrupt route slugs / asset paths / the WebRTC 500000 constant):
//   1) page title  Kozielska -> Zayed Hills  (display only; route param stays)
//   2) hardcoded parking price 50000 -> 650000 (x13) in the apartment chunk
const fs = require('fs');
const path = require('path');
const CLONE = path.join(__dirname, '..', 'clone');

function walk(dir, test, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, test, out);
    else if (test(e.name)) out.push(p);
  }
  return out;
}

// 1a) HTML <title> + meta
let titleHtml = 0;
for (const f of walk(path.join(CLONE, 'Kozielska'), (n) => n.endsWith('.html'))) {
  let h = fs.readFileSync(f, 'utf8');
  const before = h;
  h = h.replace(/<title>Kozielska<\/title>/g, '<title>Zayed Hills</title>')
       .replace(/content="Kozielska"/g, 'content="Zayed Hills"');
  if (h !== before) { fs.writeFileSync(f, h); titleHtml++; }
}
console.log('HTML title/meta rebranded in', titleHtml, 'files');

// 1b) JS project title config:  "title":"Kozielska" -> "title":"Zayed Hills"
// 2)  parking price: formatCurrency(50000) and (apartment.Price + 50000) -> 650000
let jsTitle = 0, parking = 0;
for (const f of walk(path.join(CLONE, '_next', 'static', 'chunks'), (n) => n.endsWith('.js'))) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  s = s.replace(/"title":"Kozielska"/g, () => { jsTitle++; return '"title":"Zayed Hills"'; });
  s = s.replace(/children: "Kozielska"/g, () => { jsTitle++; return 'children: "Zayed Hills"'; }); // client <title>
  s = s.replace(/children:"Kozielska"/g, () => { jsTitle++; return 'children:"Zayed Hills"'; });
  s = s.replace(/\)\(50000\)/g, () => { parking++; return ')(650000)'; });            // formatCurrency(50000)
  s = s.replace(/apartment\.Price \+ 50000/g, () => { parking++; return 'apartment.Price + 650000'; });
  if (s !== before) fs.writeFileSync(f, s);
}
console.log('JS "title":"Kozielska" ->', jsTitle, '| parking 50000->650000 replacements:', parking);
