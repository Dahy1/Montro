// Inject clone customizations (hide navbar + hero logo) into the served index.html.
// Idempotent: safe to re-run.
const fs = require('fs');
const path = require('path');

const INDEX = path.join(__dirname, '..', 'clone', 'Kozielska', 'Zone_A', 'index.html');
const STYLE = '<style data-clone-custom>' +
  // remove the top navigation bar (incl. its logo)
  'nav[class*="ApartmentListNavstyled__Wrapper"]{display:none!important;}' +
  // remove the large logo in the hero (and any other instance of the logo mark)
  'img[src="/icons/logo.svg"]{display:none!important;}' +
  '</style>';

let html = fs.readFileSync(INDEX, 'utf8');
if (html.includes('data-clone-custom')) {
  // replace existing block so edits to STYLE take effect
  html = html.replace(/<style data-clone-custom>[\s\S]*?<\/style>/, STYLE);
  console.log('Updated existing customization block.');
} else {
  // insert right before the tracker shim (top of <head>)
  if (html.includes('<script data-clone-shim>')) {
    html = html.replace('<script data-clone-shim>', STYLE + '<script data-clone-shim>');
  } else {
    html = html.replace(/<head([^>]*)>/, (m) => m + STYLE);
  }
  console.log('Inserted new customization block.');
}
fs.writeFileSync(INDEX, html);
console.log('Wrote', INDEX, '(' + html.length + ' bytes)');
console.log('Contains data-clone-custom:', html.includes('data-clone-custom'));
