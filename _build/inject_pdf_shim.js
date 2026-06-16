// Inject the PDF placeholder shim (pdf-placeholder-shim.js) into every served HTML
// file, right after the tracker shim. Idempotent (skips files already containing it).
const fs = require('fs');
const path = require('path');
const CLONE = path.join(__dirname, '..', 'clone');
const SHIM = fs.readFileSync(path.join(__dirname, 'pdf-placeholder-shim.js'), 'utf8');
const BLOCK = '<script data-pdf-shim>\n' + SHIM + '\n</script>';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

let injected = 0, updated = 0;
for (const f of walk(path.join(CLONE, 'Kozielska'))) {
  let html = fs.readFileSync(f, 'utf8');
  if (html.includes('data-pdf-shim')) {
    // replace existing block so edits to the shim take effect
    html = html.replace(/<script data-pdf-shim>[\s\S]*?<\/script>/, BLOCK);
    updated++;
  } else if (html.includes('<script data-clone-shim>')) {
    // place right after the tracker shim block
    html = html.replace(/(<script data-clone-shim>[\s\S]*?<\/script>)/, '$1' + BLOCK);
    injected++;
  } else {
    html = html.replace(/<head([^>]*)>/, (m) => m + BLOCK);
    injected++;
  }
  fs.writeFileSync(f, html);
}
console.log(`PDF shim: injected into ${injected} files, updated in ${updated} files`);
