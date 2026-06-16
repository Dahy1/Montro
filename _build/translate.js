// Apply the Polish->English map (i18n_map.js) to all JS chunks and all served HTML
// files. Longest-first; quoted-token + tag-delimited replacement; bare replacement
// only for distinctive strings (diacritics / spaces / ALL-CAPS / long) to avoid
// corrupting minified JS. Idempotent-ish (English values won't re-match Polish keys).
const fs = require('fs');
const path = require('path');
const MAP = require('./i18n_map.js');

const CLONE = path.join(__dirname, '..', 'clone');
const entries = Object.entries(MAP).sort((a, b) => b[0].length - a[0].length);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasDiacritic = (s) => /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(s);
const distinctive = (s) => hasDiacritic(s) || /\s/.test(s) || /[A-ZŁŚŻ]{4,}/.test(s) || s.length >= 12;

function applyJS(text) {
  let n = 0;
  for (const [pl, en] of entries) {
    const q = new RegExp('"' + esc(pl) + '"', 'g');
    text = text.replace(q, () => { n++; return '"' + en + '"'; });
    if (distinctive(pl)) { const b = new RegExp(esc(pl), 'g'); text = text.replace(b, () => { n++; return en; }); }
  }
  return [text, n];
}
function applyHTML(text) {
  let n = 0;
  for (const [pl, en] of entries) {
    const reps = [
      [new RegExp('"' + esc(pl) + '"', 'g'), '"' + en + '"'],
      [new RegExp('>' + esc(pl) + '<', 'g'), '>' + en + '<'],
      [new RegExp('>' + esc(pl) + ' ', 'g'), '>' + en + ' '],
      [new RegExp(' ' + esc(pl) + '<', 'g'), ' ' + en + '<'],
    ];
    for (const [re, to] of reps) text = text.replace(re, () => { n++; return to; });
    if (distinctive(pl)) { const b = new RegExp(esc(pl), 'g'); text = text.replace(b, () => { n++; return en; }); }
  }
  return [text, n];
}

function walk(dir, test, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, test, out);
    else if (test(e.name)) out.push(p);
  }
  return out;
}

const jsFiles = walk(path.join(CLONE, '_next', 'static', 'chunks'), (n) => n.endsWith('.js'));
const htmlFiles = walk(path.join(CLONE, 'Kozielska'), (n) => n.endsWith('.html'));

let jsTotal = 0, htmlTotal = 0;
for (const f of jsFiles) { const [out, n] = applyJS(fs.readFileSync(f, 'utf8')); if (n) { fs.writeFileSync(f, out); jsTotal += n; } }
for (const f of htmlFiles) { const [out, n] = applyHTML(fs.readFileSync(f, 'utf8')); if (n) { fs.writeFileSync(f, out); htmlTotal += n; } }
console.log(`JS: ${jsTotal} replacements across ${jsFiles.length} chunks`);
console.log(`HTML: ${htmlTotal} replacements across ${htmlFiles.length} files`);
