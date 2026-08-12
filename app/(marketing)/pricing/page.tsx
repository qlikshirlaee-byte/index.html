"use client";

import Link from "next/link";
import { useState } from "react";
import { SimpleFooter } from "@/components/marketing/Footer";

const CLARITY = [
  { t: "Clients never pay", d: "they aren't the customer — they're the reason professionals become one. Every client is an acquisition engine." },
  { t: "You pay for what you win", d: "a subscription plus a small commission on events you book — never a fee just to join a workspace." },
  { t: "It travels with you", d: "the same account works across every workspace you join." },
];

const SOLO_FEATURES = [
  "Full business management — clients, bookings, payments",
  "Join unlimited client workspaces",
  "Marketplace listing & profile",
  "Direct vendor & client messaging",
  "Invoices and deposits built in",
];

const STUDIO_FEATURES = [
  "Everything in Solo",
  "Up to 8 team member logins",
  "Shared team calendar & staff scheduling",
  "Inventory tracking",
  "Priority marketplace placement",
  "Booking & revenue analytics",
];

const AGENCY_FEATURES = [
  "Everything in Studio",
  "Unlimited team members",
  "Multi-brand & sub-team management",
  "Featured placement & verified badge",
  "Advanced reporting & exports",
  "Dedicated onboarding & support",
];

const ENTERPRISE_FEATURES = [
  "Everything in Agency",
  "SSO / SAML & directory sync",
  "Multi-org hierarchy & permissions",
  "API access and webhooks",
  "White-labelled client workspaces",
  "Custom MSA, DPA & security review",
  "99.9% uptime SLA & dedicated manager",
];

const FEES = [
  { rate: "0%", title: "Commission, during early access", body: "Every event you book through Loom right now costs you nothing beyond your plan. Commission begins only when Loom Payments launches — and founding accounts are told well in advance." },
  { rate: "1.5–8%", title: "Per event, once payments launch", body: "8% on Solo, 5% on Studio, 3% on Agency and from 1.5% on Enterprise — capped per event on Agency and above, so a single large production never carries an outsized fee." },
  { rate: "$0", title: "For your clients", body: "Clients browse, book, message and coordinate their whole event at no cost, on every plan, forever." },
];

const FAQS = [
  { q: "What is founding pricing?", a: "The first 100 professional accounts pay half of every published price for twelve months from signup. The rate is locked at signup — later increases do not touch it — and it applies to Solo, Studio and Agency alike." },
  { q: "Why is commission 0% right now?", a: "Because money does not yet move through Loom. Commission is charged at payout, so until Loom Payments launches there is nothing to deduct and nothing to charge. Your plan is the whole cost." },
  { q: "What happens when commission starts?", a: "You will be told at least sixty days before, and it only ever applies to events booked and paid through Loom after that date. Events you win off-platform are never touched." },
  { q: "Who owns the shared event workspace?", a: "The client — the host or organiser. The event is theirs, so the workspace is theirs, and it is always free. You and the other vendors are invited in as collaborators. Billing only ever attaches to a professional's own account." },
  { q: "When should I move to Enterprise?", a: "When you need single sign-on, more than one brand or operating company under one roof, an API, or a contract your procurement team can sign. If none of that is familiar, Agency is the right ceiling." },
  { q: "Which plan is right for me?", a: "Solo if you work on your own, Studio for a small team running several events at once, Agency for production companies at scale, and Enterprise for groups running multiple brands or regions." },
  { q: "Can I cancel anytime?", a: "Anytime, no penalty. You keep access through the end of your billing period, and your marketplace listing stays live." },
];

function FeatureList({ items, accent, tone }: { items: string[]; accent: string; tone?: string }) {
  return (
    <div className="flex flex-col gap-[11px]">
      {items.map((f) => (
        <div key={f} className={`flex gap-2.5 text-[13.5px] leading-[1.5] ${tone ?? ""}`}>
          <span style={{ color: accent }}>✦</span>
          <span>{f}</span>
        </div>
      ))}
    </div>
  );
}

const annual = (m: number) => Math.round((m * 10) / 12);

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const price = (m: number) => (yearly ? annual(m) : m);
  const billingNote = yearly ? "Billed yearly · two months free" : "Billed monthly";

  const toggle = (active: boolean) =>
    `px-[26px] py-[13px] text-xs uppercase tracking-[0.09em] transition-colors ${
      active ? "bg-maroon text-cream" : "text-faint hover:text-ink"
    }`;

  return (
    <div>
      <section className="mx-auto max-w-[920px] px-[5vw] pb-8 pt-[82px] text-center">
        <div className="mb-[22px] text-xs uppercase tracking-[0.3em] text-maroon">Pricing</div>
        <h1 className="mb-6 font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.05]">
          Clients plan for free.
          <br />
          <em className="italic text-maroon">You only pay for your own account.</em>
        </h1>
        <p className="mx-auto mb-3.5 max-w-[650px] text-lg leading-[1.7] text-ink-2">
          No charge just for joining a workspace. One monthly plan for your practice — and during
          early access, <strong className="font-medium text-ink">zero commission on every event you win.</strong>
        </p>
        <p className="text-[15px] text-faint">14-day free trial · No card required · Cancel anytime</p>
      </section>

      {/* OWNERSHIP CLARITY */}
      <section className="mx-auto max-w-[1100px] px-[5vw] py-5">
        <div className="grid grid-cols-1 gap-11 bg-ink-deep p-11 text-cream md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-3.5 text-xs uppercase tracking-[0.25em] text-gold">Who owns the workspace?</div>
            <p className="font-serif text-[29px] leading-[1.35]">
              The client does. It&apos;s <em className="italic text-gold-light">their</em> event, their home for
              it — always free. You&apos;re invited in as a professional, and your account comes with you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {CLARITY.map((c) => (
              <div key={c.t} className="flex gap-3.5 border-b border-cream/20 pb-3.5">
                <span className="text-[13px] text-gold-light">◆</span>
                <div>
                  <span className="text-[15px] font-medium">{c.t}</span>
                  <span className="text-[14.5px] text-cream/70"> — {c.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING BANNER */}
      <section className="mx-auto max-w-[1100px] px-[5vw] pb-3">
        <div className="flex flex-wrap items-center justify-center gap-[18px] bg-ink-deep px-[34px] py-[26px] text-center text-cream">
          <span className="bg-gold px-[15px] py-[7px] text-[11px] uppercase tracking-[0.16em] text-ink">
            Founding vendors
          </span>
          <span className="font-serif text-[25px] leading-[1.3]">
            The first 100 accounts pay <em className="italic text-gold-light">half price for a full year</em> —
            every tier, locked at signup.
          </span>
        </div>
      </section>

      {/* TIERS */}
      <section className="mx-auto max-w-[1240px] px-[5vw] pb-8 pt-[34px]">
        <div className="mb-[34px] flex justify-center">
          <div className="flex border border-ink/20 bg-card">
            <button type="button" onClick={() => setYearly(false)} className={toggle(!yearly)}>
              Monthly
            </button>
            <button type="button" onClick={() => setYearly(true)} className={toggle(yearly)}>
              Annual · 2 months free
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {/* Solo */}
          <div className="flex flex-col border border-ink/12 bg-card p-[34px_28px]">
            <div className="mb-1.5 font-serif text-[25px] font-medium">Solo</div>
            <p className="mb-[22px] min-h-[62px] text-[13.5px] leading-relaxed text-faint">
              For independent professionals running events on their own.
            </p>
            <div className="mb-1 flex items-baseline gap-[5px]">
              <span className="font-serif text-[48px] leading-none">${price(29)}</span>
              <span className="text-sm text-faint">/month</span>
            </div>
            <div className="mb-3.5 min-h-[18px] text-[12.5px] text-faint">{billingNote}</div>
            <div className="mb-5 border-y border-ink/10 py-3">
              <div className="text-[13.5px] font-medium text-maroon">0% commission during early access</div>
              <div className="mt-[3px] text-xs text-faint">8% per event once Loom Payments launches</div>
            </div>
            <div className="mb-[22px] text-[12.5px] text-faint">1 user · unlimited workspaces</div>
            <Link
              href="/signup"
              className="mb-6 border border-ink py-[13px] text-center text-[11.5px] uppercase tracking-[0.1em] text-ink hover:bg-ink hover:text-cream"
            >
              Start Free Trial
            </Link>
            <FeatureList items={SOLO_FEATURES} accent="#7a2b2e" />
          </div>

          {/* Studio */}
          <div className="relative flex flex-col bg-maroon p-[34px_28px] text-cream shadow-[0_30px_70px_-30px_rgba(122,43,46,0.6)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold px-[15px] py-1.5 text-[10.5px] uppercase tracking-[0.15em] text-ink">
              Most Popular
            </div>
            <div className="mb-1.5 font-serif text-[25px] font-medium">Studio</div>
            <p className="mb-[22px] min-h-[62px] text-[13.5px] leading-relaxed text-cream/80">
              For growing teams juggling several events at once.
            </p>
            <div className="mb-1 flex items-baseline gap-[5px]">
              <span className="font-serif text-[48px] leading-none">${price(99)}</span>
              <span className="text-sm text-cream/70">/month</span>
            </div>
            <div className="mb-3.5 min-h-[18px] text-[12.5px] text-cream/70">{billingNote}</div>
            <div className="mb-5 border-y border-cream/20 py-3">
              <div className="text-[13.5px] font-medium text-gold-light">0% commission during early access</div>
              <div className="mt-[3px] text-xs text-cream/70">5% per event once Loom Payments launches</div>
            </div>
            <div className="mb-[22px] text-[12.5px] text-cream/70">Up to 8 users · higher event volume</div>
            <Link
              href="/signup"
              className="mb-6 bg-cream py-[13px] text-center text-[11.5px] uppercase tracking-[0.1em] text-maroon hover:bg-white"
            >
              Start Free Trial
            </Link>
            <FeatureList items={STUDIO_FEATURES} accent="#e3b975" />
          </div>

          {/* Agency */}
          <div className="flex flex-col border border-ink/12 bg-card p-[34px_28px]">
            <div className="mb-1.5 font-serif text-[25px] font-medium">Agency</div>
            <p className="mb-[22px] min-h-[62px] text-[13.5px] leading-relaxed text-faint">
              For production companies and agencies running events at scale.
            </p>
            <div className="mb-1 flex items-baseline gap-[5px]">
              <span className="font-serif text-[48px] leading-none">${price(249)}</span>
              <span className="text-sm text-faint">/month</span>
            </div>
            <div className="mb-3.5 min-h-[18px] text-[12.5px] text-faint">{billingNote}</div>
            <div className="mb-5 border-y border-ink/10 py-3">
              <div className="text-[13.5px] font-medium text-maroon">0% commission during early access</div>
              <div className="mt-[3px] text-xs text-faint">3% per event, capped at $1,500</div>
            </div>
            <div className="mb-[22px] text-[12.5px] text-faint">Unlimited users · unlimited volume</div>
            <Link
              href="/signup"
              className="mb-6 border border-ink py-[13px] text-center text-[11.5px] uppercase tracking-[0.1em] text-ink hover:bg-ink hover:text-cream"
            >
              Start Free Trial
            </Link>
            <FeatureList items={AGENCY_FEATURES} accent="#7a2b2e" />
          </div>

          {/* Enterprise */}
          <div className="flex flex-col border border-ink-deep bg-ink-deep p-[34px_28px] text-cream">
            <div className="mb-1.5 font-serif text-[25px] font-medium text-gold-light">Enterprise</div>
            <p className="mb-[22px] min-h-[62px] text-[13.5px] leading-relaxed text-cream/[0.78]">
              For multi-brand groups, networks and organisations with procurement.
            </p>
            <div className="mb-1 flex items-baseline gap-1.5">
              <span className="text-[15px] text-cream/70">from</span>
              <span className="font-serif text-[48px] leading-none">${price(999)}</span>
              <span className="text-sm text-cream/70">/month</span>
            </div>
            <div className="mb-3.5 min-h-[18px] text-[12.5px] text-cream/70">Custom contract · annual only</div>
            <div className="mb-5 border-y border-cream/20 py-3">
              <div className="text-[13.5px] font-medium text-gold-light">Commission negotiated</div>
              <div className="mt-[3px] text-xs text-cream/70">From 1.5%, or bought out entirely</div>
            </div>
            <div className="mb-[22px] text-[12.5px] text-cream/70">Unlimited orgs, brands &amp; users</div>
            <Link
              href="/early-access"
              className="mb-6 bg-gold-light py-[13px] text-center text-[11.5px] uppercase tracking-[0.1em] text-ink hover:bg-cream"
            >
              Talk to Us
            </Link>
            <FeatureList items={ENTERPRISE_FEATURES} accent="#e3b975" tone="text-cream/[0.92]" />
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-faint">
          Founding pricing is half of every figure above, locked for twelve months. Clients always use Loom free.
        </p>
      </section>

      {/* TRANSPARENT FEES */}
      <section className="mx-auto max-w-[1100px] px-[5vw] pb-8 pt-[70px]">
        <div className="mb-11 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-maroon">No fine print</div>
          <h2 className="mb-3 font-serif text-[clamp(30px,4vw,46px)] font-normal">
            Everything else, out in the open.
          </h2>
          <p className="mx-auto max-w-[620px] text-[15.5px] text-ink-2">
            Beyond your subscription, here is every cent Loom ever charges — and when.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEES.map((f) => (
            <div key={f.title} className="border border-ink/12 bg-card p-[30px_28px]">
              <div className="mb-2 font-serif text-[34px] text-maroon">{f.rate}</div>
              <div className="mb-2.5 text-base font-medium">{f.title}</div>
              <p className="text-sm leading-relaxed text-ink-2">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-[13.5px] italic text-faint">
          Clients never see a fee — the platform is funded entirely by the professionals who win the work.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[820px] px-[5vw] pb-[70px] pt-[60px]">
        <h2 className="mb-10 text-center font-serif text-[34px] font-normal">Questions, answered</h2>
        <div className="flex flex-col">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-ink/12 py-6">
              <div className="mb-2 text-[17px] font-medium">{f.q}</div>
              <p className="text-[15px] leading-relaxed text-ink-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto mb-20 max-w-[1100px] px-[5vw]">
        <div className="bg-ink-deep p-[64px_48px] text-center text-cream">
          <h2 className="mb-4 font-serif text-[clamp(30px,4.4vw,50px)] font-normal">Start free. Grow into it.</h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[17px] leading-[1.7] text-cream/85">
            Set up your account in ten minutes and join your first workspace today. No card, no risk.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-cream px-10 py-[17px] text-[13px] uppercase tracking-[0.1em] text-ink hover:bg-gold-light"
          >
            Claim Founding Pricing
          </Link>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}
