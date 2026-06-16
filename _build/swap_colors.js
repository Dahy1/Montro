// Re-theme the warm terracotta UI accent to a slightly dark olive green.
//   rgb(152 73 49)  (the brand accent, ~75 uses)  -> rgb(96 108 56)  (#606C38)
//   #A37554         (lighter tan accent, 1 use)   -> #8A9A5B          (light olive)
// Applied to all served HTML (SSR <style> blocks) + JS chunks (styled-components) + CSS.
const fs = require('fs');
const path = require('path');
const CLONE = path.join(__dirname, '..', 'clone');

const SWAPS = [
  [/rgb\(152 73 49/g, 'rgb(96 108 56'],   // tailwind space syntax: rgb(152 73 49 / var(--tw-*-opacity,1))
  [/rgb\(152,\s*73,\s*49/g, 'rgb(96, 108, 56'], // legacy comma form (just in case)
  [/#984931\b/gi, '#606C38'],             // hex form (just in case)
  [/#A37554\b/gi, '#8A9A5B'],             // lighter tan accent
];

function walk(dir, test, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, test, out);
    else if (test(e.name)) out.push(p);
  }
  return out;
}

const files = [
  ...walk(path.join(CLONE, 'Kozielska'), (n) => n.endsWith('.html')),
  ...walk(path.join(CLONE, '_next', 'static', 'chunks'), (n) => n.endsWith('.js')),
  ...walk(path.join(CLONE, '_next', 'static', 'css'), (n) => n.endsWith('.css')),
];

let totalFiles = 0, totalHits = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  let n = 0;
  for (const [re, to] of SWAPS) s = s.replace(re, () => { n++; return to; });
  if (n) { fs.writeFileSync(f, s); totalFiles++; totalHits += n; }
}
console.log(`Re-themed terracotta -> olive green: ${totalHits} replacements across ${totalFiles} files`);
