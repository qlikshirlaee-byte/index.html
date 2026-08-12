# Loom — repo drop (deploy this)

Copy these files into qlikshirlaee-byte/loom, keeping the same paths, then commit + push to `main`. Vercel auto-deploys.

## Files in this drop
```
app/(marketing)/page.tsx                  home — event switcher, industry banner, marketplace teaser, pricing teaser
app/(marketing)/pricing/page.tsx          4-tier pricing (if present in drop)
components/marketing/EventScope.tsx       event-type context + tab bar + vendor channel
components/marketing/WorkspaceMock.tsx    workspace mock, reshapes per event type
components/marketing/ProDashboards.tsx    "For Event Professionals" dashboards
components/marketing/MarketplaceTeaser.tsx vendor cards (matches /app marketplace)
components/marketing/vendors.ts           teaser vendor data — all 24 now have cover photos
components/marketing/worlds.ts            the 7 event worlds
components/marketing/dashboards.ts        per-industry pro dashboard data
components/nav/MarketingNav.tsx           nav
lib/types.ts                              widened categories/cities
public/assets/vendors/*.jpg               24 vendor cover photos (compressed, ~150KB each)
public/assets/industries/*.jpeg           industry banner shots
supabase/seed-all-industries.sql          seeds the 24 non-wedding vendors
supabase/set-vendor-covers.sql            attaches cover photos to those vendors
```

## Deploy steps
1. Copy the tree into the repo root (same paths).
2. `git add -A && git commit -m "Home: industry banner + all 24 vendor photos" && git push origin main`
3. In Supabase → SQL Editor, run `seed-all-industries.sql` (once), then `set-vendor-covers.sql`.
   Re-running `set-vendor-covers.sql` is safe — it is an idempotent update.
4. Confirm at theloomplatform.com: home banner renders above the marketplace section, and every vendor card in /app has a photo.

## Notes
- Vendor photos are JPEG, resized to 1200px wide — the whole public/assets tree is ~4MB, small enough for GitHub's web uploader (the original PNGs were ~52MB, which is what made the browser commit fail).
- Images must be pushed before step 3, or the DB will point at 404s.
- Tailwind tokens used by the new banner: `ink-deep`, `cream`, `gold-light` — all already in app/globals.css.
