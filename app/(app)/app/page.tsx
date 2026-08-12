import { Suspense } from "react";
import { getVendors } from "@/lib/queries/vendors";
import { FilterBar } from "@/components/marketplace/FilterBar";
import { CategoryChips } from "@/components/marketplace/CategoryChips";
import { VendorGrid } from "@/components/marketplace/VendorGrid";

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; city?: string; sort?: string; cat?: string }>;
}) {
  const params = await searchParams;
  const vendors = await getVendors({
    q: params.q,
    city: params.city,
    cat: params.cat,
    sort: params.sort as "featured" | "rating" | "reviews" | undefined,
  });

  return (
    <div>
      <section className="mx-auto max-w-[1280px] px-[5vw] pb-10 pt-16">
        <div className="mb-[18px] text-xs uppercase tracking-[0.3em] text-maroon">
          The Marketplace
        </div>
        <h1 className="max-w-[820px] font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.06]">
          Find the people who make every event{" "}
          <em className="font-normal italic text-maroon">unforgettable.</em>
        </h1>
        <p className="mt-[18px] max-w-[640px] text-base leading-[1.7] text-ink-2">
          Weddings, brand activations, shoots, runway shows, festivals, galas
          and rallies — browse venues, crews, studios, caterers, AV teams and
          producers, see their work, and request a booking in one place.
        </p>
      </section>

      <section className="sticky top-[73px] z-40 mx-auto max-w-[1280px] bg-cream px-[5vw] pt-2">
        <Suspense fallback={<div className="h-[73px]" />}>
          <FilterBar />
        </Suspense>
        <Suspense fallback={null}>
          <CategoryChips />
        </Suspense>
      </section>

      <section className="mx-auto max-w-[1280px] px-[5vw] pb-24">
        <VendorGrid vendors={vendors} />
      </section>
    </div>
  );
}
