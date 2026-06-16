// Extract every apartment's PriceChangeHistory URL from the detail JSONs, fetch
// the parsed price history via the live /api/apartmentPriceHistory, and snapshot
// the results into api/priceHistory.json keyed by the XML url. Self-contained.
const fs = require('fs');
const path = require('path');
const https = require('https');

const DETAIL_DIR = path.join(__dirname, '..', 'clone', '_next', 'data', 'ANU6VnI3Xn4hJixUdj7K3', 'Kozielska', 'Zone_A', 'Kozielska_A1V');
const OUT = path.join(__dirname, '..', 'api', 'priceHistory.json');
const LIVE = 'https://mieszkania.kozielskapark.pl/api/apartmentPriceHistory?url=';

const urls = new Set();
for (const f of fs.readdirSync(DETAIL_DIR).filter((x) => x.endsWith('.json'))) {
  const d = JSON.parse(fs.readFileSync(path.join(DETAIL_DIR, f), 'utf8'));
  const u = d.pageProps && d.pageProps.apartment && d.pageProps.apartment.PriceChangeHistory;
  if (u && /^https?:\/\//.test(u)) urls.add(u);
}
console.log('unique PriceChangeHistory urls:', urls.size);

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' }, timeout: 30000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      let b = ''; res.on('data', (c) => (b += c)); res.on('end', () => resolve(b));
    }).on('error', reject).setTimeout(30000, function () { this.destroy(new Error('timeout')); });
  });
}

(async () => {
  const map = {};
  let ok = 0, fail = 0;
  for (const u of urls) {
    try {
      const body = await getJson(LIVE + encodeURIComponent(u));
      map[u] = JSON.parse(body);
      ok++;
      if (ok % 15 === 0) console.log('  ...', ok, '/', urls.size);
    } catch (e) { fail++; console.log('  FAIL', u.slice(-40), e.message); map[u] = []; }
  }
  fs.writeFileSync(OUT, JSON.stringify(map));
  console.log(`DONE ok=${ok} fail=${fail} -> ${OUT} (${Object.keys(map).length} entries)`);
  // sample
  const k = Object.keys(map)[0];
  console.log('sample entry:', k.slice(-30), '=>', JSON.stringify(map[k]).slice(0, 120));
})();
