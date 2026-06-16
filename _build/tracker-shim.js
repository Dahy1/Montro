/* Local-clone tracker neutralizer: prevents the app's runtime analytics
   (GTM, GA, Meta Pixel, Hotjar, Cloudflare Insights) from loading or phoning home.
   Injected as the first <script> in <head> so it runs before app code. */
(function () {
  var BLOCK = /googletagmanager\.com|google-analytics\.com|analytics\.google|connect\.facebook\.net|facebook\.com\/(tr|en_US\/fbevents)|fbevents|hotjar\.com|hotjar\.io|cloudflareinsights\.com|doubleclick\.net|clarity\.ms|\/cdn-cgi\/(rum|challenge-platform)/i;
  // No-op stubs so app code that calls these never errors.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {};
  var fbq = function () { (fbq.queue = fbq.queue || []).push(arguments); };
  fbq.loaded = true; fbq.version = '2.0'; fbq.queue = [];
  window.fbq = window._fbq = window.fbq || fbq;
  window.hj = window.hj || function () { (window.hj.q = window.hj.q || []).push(arguments); };
  window.ga = window.ga || function () {};

  function blockedSrc(node) {
    try {
      if (node && node.tagName === 'SCRIPT') {
        var s = node.src || (node.getAttribute && node.getAttribute('src')) || '';
        if (s && BLOCK.test(s)) return true;
      }
    } catch (e) {}
    return false;
  }
  var ap = Node.prototype.appendChild, ib = Node.prototype.insertBefore;
  Node.prototype.appendChild = function (n) { if (blockedSrc(n)) return n; return ap.call(this, n); };
  Node.prototype.insertBefore = function (n, r) { if (blockedSrc(n)) return n; return ib.call(this, n, r); };

  var rawFetch = window.fetch;
  if (rawFetch) window.fetch = function (u) {
    try { var url = typeof u === 'string' ? u : (u && u.url) || ''; if (BLOCK.test(url)) return Promise.resolve(new Response('', { status: 204 })); } catch (e) {}
    return rawFetch.apply(this, arguments);
  };
  if (navigator.sendBeacon) {
    var rb = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function (u, d) { try { if (BLOCK.test(u)) return true; } catch (e) {} return rb(u, d); };
  }
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (m, u) {
    try { if (BLOCK.test(u)) { this.__blocked = true; return open.call(this, m, 'data:text/plain,'); } } catch (e) {}
    return open.apply(this, arguments);
  };
})();
