"use client";

import Link from "next/link";
import { useEventScope } from "./EventScope";
import { TEASER_VENDORS } from "./vendors";

export function MarketplaceTeaser() {
  const { world } = useEventScope();
  const vendors = TEASER_VENDORS[world.key] ?? TEASER_VENDORS.weddings;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[26px]">
      {vendors.map((v) => (
        <Link
          key={`${world.key}-${v.name}`}
          href="/app"
          className="group block border border-ink/12 bg-card transition-colors hover:border-maroon/40"
        >
          <div
            className="relative flex h-[190px] items-center justify-center overflow-hidden"
            style={{ background: v.color }}
          >
            <span className="font-serif text-[56px] text-cream/90">{v.mono}</span>
            {v.cover ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={v.cover}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : null}
            <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.05em] text-ink">
              {v.category}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-serif text-[23px] font-medium leading-tight text-ink">{v.name}</h3>
            <div className="mt-1.5 text-sm text-gold">★ {v.rating}</div>
            <div className="mt-1 text-[13px] text-faint">
              {v.city} · {v.price}
            </div>
            <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-2">{v.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
