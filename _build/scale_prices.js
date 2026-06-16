// Scale every monetary value by RATE (PLN->EGP) across: api/*.json, all _next/data
// JSONs, priceHistory.json, and the HTML files (__NEXT_DATA__ numbers + rendered
// "<n> zł" text). Areas / rates / counts / ids are left untouched. Run BEFORE
// translate.js (this keeps the " zł" suffix; translate then converts zł -> EGP).
const fs = require('fs');
const path = require('path');
const RATE = 13;
const CLONE = path.join(__dirname, '..', 'clone');
const API = path.join(__dirname, '..', 'api');

// keys whose numeric value is a currency amount (case-sensitive)
const PRICE_KEYS = new Set([
  'Price', 'PriceFully', 'PriceM2', 'PriceM2Usable', 'PriceVat', 'VatRefund', 'MinPrice',
  'PriceTransactionContract', 'PriceTransactionContractNet', 'PriceTransaction', 'PriceParking', 'PriceBalcony',
  'price', 'pricemkw', // crmData + priceHistory
]);

function scaleObj(node) {
  if (Array.isArray(node)) { for (const x of node) scaleObj(x); return; }
  if (node && typeof node === 'object') {
    for (const k of Object.keys(node)) {
      const v = node[k];
      if (typeof v === 'number' && PRICE_KEYS.has(k)) node[k] = Math.round(v * RATE);
      else scaleObj(v);
    }
  }
}

function scaleJsonFile(file) {
  let data; try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return false; }
  scaleObj(data);
  fs.writeFileSync(file, JSON.stringify(data));
  return true;
}

// reformat a space-grouped number string (e.g. "597 800") scaled by RATE
function scaleNumStr(numStr) {
  const n = parseFloat(numStr.replace(/\s/g, '').replace(',', '.'));
  if (isNaN(n)) return numStr;
  const scaled = Math.round(n * RATE);
  return scaled.toLocaleString('en-US').replace(/,/g, ' '); // space thousands sep (matches original style)
}

function scaleHtml(file) {
  let html = fs.readFileSync(file, 'utf8');
  // 1) __NEXT_DATA__ numbers (escape only chars that break a JSON <script> block)
  html = html.replace(/(<script id="__NEXT_DATA__"[^>]*>)([\s\S]*?)(<\/script>)/, (m, open, json, close) => {
    try {
      const data = JSON.parse(json);
      scaleObj(data);
      const out = JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
      return open + out + close;
    } catch (e) { return m; }
  });
  // 2) rendered prices "<grouped number> zł" -> "<scaled> zł"
  html = html.replace(/(\d{1,3}(?: \d{3})*(?:[.,]\d+)?) zł/g, (m, num) => scaleNumStr(num) + ' zł');
  fs.writeFileSync(file, html);
}

function walk(dir, test, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, test, out);
    else if (test(e.name)) out.push(p);
  }
  return out;
}

let jsonCount = 0;
for (const f of ['apartments.json', 'apartmentsSide.json', 'priceHistory.json']) { if (scaleJsonFile(path.join(API, f))) jsonCount++; }
for (const f of walk(path.join(CLONE, '_next', 'data'), (n) => n.endsWith('.json'))) { if (scaleJsonFile(f)) jsonCount++; }
console.log('scaled JSON files:', jsonCount);

const htmlFiles = walk(path.join(CLONE, 'Kozielska'), (n) => n.endsWith('.html'));
for (const f of htmlFiles) scaleHtml(f);
console.log('scaled HTML files:', htmlFiles.length, `(rate x${RATE})`);
