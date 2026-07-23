# Loom — theloomplatform.com

Static site for Loom, the South Asian celebration marketplace. Every page is a
single self-contained HTML file (styles, scripts and the logo are embedded), so
the site works on GitHub Pages with no build step.

## Pages
- `index.html` — homepage (hero, categories, diaspora value props, featured vendors, real weddings)
- `app.html` — the marketplace + client/vendor dashboards (booking, messaging, Loom Protection). Data saves in the visitor's browser (prototype).
- `pricing.html` — vendor pricing (Starter / Professional / Studio) + FAQ
- `integrations.html` — integration directory
- `loom-platform-standalone.html` — vendor "run your business" platform overview
- `assets/` — homepage photos used by `index.html` (upload this folder too)
- `CNAME` — custom domain (theloomplatform.com)

## Deploy to GitHub Pages
1. Upload **all files in this folder to the root of your repo** (not inside a
   subfolder). `CNAME` must sit at the repo root for the custom domain to work.
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch**,
   pick your branch and the `/ (root)` folder, save.
3. Wait a minute, then visit **https://theloomplatform.com**.

## Notes
- The homepage uses your supplied wedding photos (in `assets/`). Two tiles
  (Invitations, Catering) still use keyword stock — swap in real photos anytime.
  Keep `index.html` and the `assets/` folder together when uploading.
- The marketplace is a front-end prototype: sign-ups, bookings and messages are
  stored locally in the browser, not on a server. A real backend (database +
  auth + payments) is the next build step before going live.
