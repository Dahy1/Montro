/* PDF placeholder shim --------------------------------------------------------
   The project's PDFs are placeholders / wrong, so every PDF link is intercepted:
   instead of opening the (wrong) PDF we show a blank popup that fades after 3s.

   REUSE LATER: when the correct PDFs are ready, either
     (a) drop the real files at their existing slots and DELETE this whole
         <script data-pdf-shim> block from the HTML (then the original
         window.open(...) links work again), or
     (b) read the recorded slots: every intercepted control is tagged with
         data-pdf-placeholder="true" and data-pdf-url="<intended pdf url>".
   Known PDF slots:  /static/pdf/unit_info.pdf  and  /voxdoc/apartment/<unit>.pdf
   --------------------------------------------------------------------------- */
(function () {
  var PDF_RE = /\.pdf(\?|#|$)|\/voxdoc\/|voxdeveloper\.com|\/static\/pdf\//i;

  function injectStyle() {
    if (document.getElementById('pdf-placeholder-style')) return;
    var s = document.createElement('style');
    s.id = 'pdf-placeholder-style';
    s.textContent =
      '.pdf-placeholder-pop{position:fixed;inset:0;z-index:2147483647;display:flex;' +
      'align-items:center;justify-content:center;pointer-events:none;opacity:1;' +
      'transition:opacity .5s ease}' +
      '.pdf-placeholder-pop.pdf-out{opacity:0}' +
      '.pdf-placeholder-pop>div{background:rgba(18,18,18,.94);color:#fff;' +
      'font-family:Montserrat,system-ui,Arial,sans-serif;font-size:18px;letter-spacing:.02em;' +
      'padding:26px 40px;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.45);' +
      'border:1px solid rgba(255,255,255,.12)}';
    (document.head || document.documentElement).appendChild(s);
  }

  function popup() {
    injectStyle();
    var wrap = document.createElement('div');
    wrap.className = 'pdf-placeholder-pop';
    var box = document.createElement('div');
    box.textContent = '(there shall be a PDF here)';
    wrap.appendChild(box);
    document.body.appendChild(wrap);
    // visible immediately, then fade away after 3s
    setTimeout(function () {
      wrap.classList.add('pdf-out');
      setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 600);
    }, 3000);
  }

  // remember the last control the user activated, so we can tag it for later reuse
  var lastEl = null;
  function remember(e) { lastEl = e.target; }
  document.addEventListener('pointerdown', remember, true);

  function tag(el, url) {
    try {
      var t = el && el.closest ? (el.closest('button,a,[role="button"]') || el) : el;
      if (t && t.setAttribute) { t.setAttribute('data-pdf-placeholder', 'true'); if (url) t.setAttribute('data-pdf-url', String(url)); }
    } catch (e) {}
  }

  // 1) every PDF opens via window.open(url,"_blank") -> intercept it
  var rawOpen = window.open;
  window.open = function (url) {
    try {
      if (url && PDF_RE.test(String(url))) { tag(lastEl, url); popup(); return null; }
    } catch (e) {}
    return rawOpen.apply(this, arguments);
  };

  // 2) capture clicks (before React): record the control, and block <a href=*.pdf>
  document.addEventListener('click', function (e) {
    try {
      lastEl = e.target;
      var a = e.target && e.target.closest && e.target.closest('a[href]');
      if (a && PDF_RE.test(a.getAttribute('href') || '')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        tag(a, a.getAttribute('href'));
        popup();
      }
    } catch (err) {}
  }, true);
})();
