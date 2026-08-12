# Vendor image fix

The repo's components/marketing/vendors.ts referenced .png covers; the committed images are .jpg. Every non-wedding vendor cover 404'd.

Upload these over the existing paths on main:

- components/marketing/vendors.ts  (all covers now .jpg)
- components/marketing/MarketplaceTeaser.tsx  (plain <img> + onError fallback to the monogram)
- public/assets/vendors/vivaha-planners.jpg, saffron-sage-catering.jpg, saubhagya-decor.jpg, aperture-films.jpg  (new — wedding covers moved into /vendors)
- supabase/set-vendor-covers.sql  (adds the 4 wedding rows) — re-run in Supabase SQL Editor
