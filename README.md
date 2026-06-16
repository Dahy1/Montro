# Zayed Hills (Egypt) – Zone A · offline clone

A self-contained, fully-functional clone of
**https://mieszkania.kozielskapark.pl/Kozielska/Zone_A**, re-skinned as the Egyptian
development **"Zayed Hills"** — UI translated to **English**, currency switched to the
**Egyptian Pound (EGP)**, and the location landmarks themed to Sheikh Zayed / Greater Cairo.

The original is a Next.js + react-three-fiber WebGL experience (the "Vinode" virtual-tour
platform). The hero view is a pre-rendered camera **video** state-machine with interactive
3D building outlines; below it is the live apartment list/filters and the amenities section.
Everything needed for the Zone A page has been mirrored locally — no external calls except
Google Fonts (kept exactly as the original loads them).

## Localization (English · Zayed Hills · EGP)

The clone was rebranded and localized in place (see `_build/`):

- **English** — the Polish i18n table baked into `_next/.../pages/_app-*.js` and all the
  SSR-rendered text in the HTML files were translated to English (`_build/i18n_map.js` +
  `translate.js`). Location landmarks were themed for Egypt (e.g. *Grand Egyptian Museum,
  Al-Azhar Park, 26th of July Corridor, Mall of Arabia, Hyper One*).
- **Developer name "Zayed Hills"** — display branding only (page `<title>`, hero heading,
  copy). Internal route slugs (`/Kozielska/…`), the building id `Kozielska_A1V`, asset paths
  (`/vmedia/VinodeKozielska/…`) and the project-config keys are **unchanged**, so routing,
  the 3D camera state-machine and all media keep working.
- **Egyptian Pound** — every monetary value was converted **×13** (a realistic PLN→EGP rate)
  across `api/*.json`, every `_next/data` JSON, `priceHistory.json`, the embedded
  `__NEXT_DATA__` and the rendered prices, and the currency label changed `zł`/`PLN` → `EGP`
  (`_build/scale_prices.js`). Areas, rates, room counts and ids were left untouched.
- A pre-localization snapshot of the touched files is kept in `_build/backup_i18n/`.

> Note: because prices are now baked into the static SSR HTML but the client recomputes them
> live (e.g. the per-m² price), React logs harmless hydration warnings on first paint and
> re-renders client-side — the displayed content (English, EGP, scaled prices) is always
> correct.

## UI accent colour → dark olive green

The warm terracotta brand accent was re-themed to a slightly dark olive green
(`_build/swap_colors.js`), across all SSR `<style>` blocks, the styled-components in the JS
chunks and the CSS:

- `rgb(152 73 49)` (the accent — button hovers, active filters, badges) → **`rgb(96 108 56)` / `#606C38`**
- `#A37554` (lighter tan accent) → **`#8A9A5B`** (light olive)

## PDF links → placeholder popup

The project's PDFs are placeholders, so **every PDF link is intercepted**: clicking
*Apartment PDF*, *Information prospectus* or a card's PDF no longer opens a (wrong) PDF —
instead a blank popup **"(there shall be a PDF here)"** appears and fades after 3 seconds.

This is done by `_build/pdf-placeholder-shim.js`, injected as `<script data-pdf-shim>` into
every HTML file (`_build/inject_pdf_shim.js`). It overrides `window.open` (which is how every
PDF opens) and blocks any `*.pdf` / `/voxdoc/` / `/static/pdf/` URL.

**To re-enable the real PDFs later:**
- Drop the correct files at their existing slots — `/static/pdf/unit_info.pdf` (prospectus)
  and `clone/voxdoc/apartment/<unit>.pdf` (per apartment) — and **delete the
  `<script data-pdf-shim>…</script>` block** from the HTML (re-run with the shim removed, or
  just strip it). The original `window.open(...)` links then work again.
- Each intercepted control is also tagged at runtime with `data-pdf-placeholder="true"` and
  `data-pdf-url="<intended pdf url>"` for easy discovery.

## Run it

Requires Node.js (no npm dependencies — the server uses only Node built-ins).

```bash
npm start            # or:  node server.js
```

Then open **http://localhost:8099/Kozielska/Zone_A**
(`http://localhost:8099/` redirects there too). Set `PORT` to change the port.

## What's included & working

- **Exact HTML / JS / CSS** — the full Next.js app shell (all page chunks for `/`,
  `/[project]`, `/[project]/[zone]`, `…/[building]`, `…/[apartment]`, `/cookie-policy`).
- **3D hero experience** — the complete camera-transition video state machine: zone views
  (Hero1/2 ⇄ A1–A4 ⇄ Amenities1 ⇄ **Master1/2** ⇄ Building stages A1V1–A1V6) plus the
  building-outline GLB models, the HDR environment map and the Draco decoder. The nav menu
  (Główna / Apartamenty / Udogodnienia / Lokalizacje) drives the camera correctly.
- **Apartment list, filters, sorting & comparison** — all 72 apartments. Server-side filters
  (rooms / status / balcony / loggia / terrace) are reproduced by `server.js` (the original
  re-fetches `Zone_A.json?…` per filter, validated to match the live counts), and `/api/apartments`
  honours `page`/`pageSize` so infinite scroll loads the list once instead of duplicating it.
- **Apartment detail pages** (`…/[building]/[apartment]`) — fully working for all 71 units:
  SPA navigation **and** direct load / refresh, the 3D floor-plan camera flythrough
  (building → floor-plan → unit, incl. the `BuildingA1VFloorPlanA` overview with -in/-out
  intros), unit data, **price history** (`/api/apartmentPriceHistory`, snapshotted from the
  live XMLs), the apartment **PDF** (mirrored locally) and the shared **prospectus** PDF.
- **Building pages** (`…/[building]`) — the "Etap 1–6" stage selectors navigate to the
  building view with its own filtered apartment list.
- **Amenities POI tour** — all 14 points of interest (Restaurant, Siłownia, Hotel, Plac zabaw,
  Padel, Ogród, etc.) with their full any-to-any camera transition graph + thumbnails.
- **Fonts** — Montserrat still loads from Google Fonts (identical to the original). The site's
  own `Altone`/`AbarHigh` `@font-face` files 404 on the real server too, so they fall back the
  same way here.
- **Trackers removed** — Google Tag Manager / Analytics, Meta Pixel, Hotjar and the Cloudflare
  challenge-platform beacon are neutralised (shim + the CF injector stripped from every HTML),
  so the clone never phones home — **zero external calls except Google Fonts**, verified across
  the whole journey. `/api/lang` returns `500` exactly like the original.

## Not included (boundary)

- **Other zones/buildings** (only `Zone_A` / building `Kozielska_A1V` was requested — that is
  the only building the live Zone A data exposes).
- The live site exposes **no** apartment interior 360° walk element on the detail page (the
  detail UI is identical to the original: 3D floor-plan view + PDF/prospectus/price-history),
  so there is nothing further to mirror there.

## Layout

```
server.js          Zero-dependency server: static serving (Range/video, slash-collapse,
                   %5B decoding) + dynamic routes that reproduce the original's
                   getServerSideProps behaviour:
                     • /_next/data/.../Zone_A.json and .../Kozielska_A1V.json — filtered
                       (rooms/status/balcony/loggia/terrace) on the fly
                     • /api/apartments — filtered + paginated (page/pageSize)
                     • /api/apartmentPriceHistory — served from a local snapshot
                     • /Kozielska/Zone_A/<building>[/<apartment>] — SSR HTML for direct loads
                     • /api/lang → 500, /favicon.ico → png (matches the original)
clone/             The mirrored site (document root).
  Kozielska/Zone_A/index.html              The zone page.
  Kozielska/Zone_A/Kozielska_A1V.html      Building page (direct-load snapshot).
  Kozielska/Zone_A/Kozielska_A1V/*.html    71 apartment detail pages (direct-load snapshots).
  _next/                                   JS chunks, CSS, route data JSON (zone + building +
                                           71 apartment .json files).
  vmedia/                                  All media.vinode.io assets — the full camera-video
                                           state machine (zone, building stages, floor plans,
                                           apartments, amenity POIs), thumbnails, 72 unit plans.
  voxdoc/apartment/*.pdf                   Mirrored apartment PDFs (the "PDF APARTAMENTU" button).
  static/                                  favicon(s), prospectus PDF (unit_info.pdf).
  icons/ models/ hdr/ draco/               3D assets and UI icons.
api/               apartments.json, apartmentsSide.json, priceHistory.json snapshots.
_build/            Capture/download/rewrite/verify pipeline + screenshots (provenance; not
                   needed to run the clone).
```

## How it was built (see `_build/`)

1. `capture.js` / `capture2.js` — drove headless Chrome to record every runtime request.
2. `probe_videos.js` — HEAD-probed the CDN to enumerate the complete 35-video transition graph.
3. `download.js` — fetched all app + media assets (idempotent, accepts 206).
4. `rewrite.js` + `tracker-shim.js` — rewrote `media.vinode.io` → `/vmedia` and injected the
   tracker neutraliser.
5. `verify.js` — reloaded the local clone, audited the network (0 trackers, 0 stray external
   calls) and screenshotted it against the original.
