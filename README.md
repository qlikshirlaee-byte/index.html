# Loom — theloomplatform.com

Static site for Loom, the South Asian celebration marketplace.

## Deploy to GitHub Pages
Upload **everything in this folder** to the root of your repo, keeping the
structure intact:

- index.html — homepage
- app.html — marketplace + dashboards
- pricing.html — vendor pricing
- integrations.html — integrations
- loom-platform-standalone.html — platform overview
- support.js — **required** (the pages won't render without it)
- assets/ — **required** folder of images/logos (upload the whole folder)
- CNAME — custom domain (theloomplatform.com); must sit at the repo root

Then: repo **Settings → Pages → Deploy from a branch**, pick your branch and the
`/ (root)` folder, save. Visit https://theloomplatform.com after a minute.

Important: keep `support.js` and the `assets/` folder next to the HTML files —
the site loads them by relative path. Don't rename files.

## Notes
- The pages need an internet connection to load fonts and the app framework.
- Category / vendor photos are your uploads plus a little stock. Invitations,
  priests and DJs still use stock — send photos to swap them in.
- The marketplace is a front-end prototype: sign-ups, bookings and messages save
  in the visitor's browser, not on a server. A real backend is the next step.
