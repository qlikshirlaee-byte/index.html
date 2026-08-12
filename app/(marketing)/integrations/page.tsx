import Link from "next/link";
import { SimpleFooter } from "@/components/marketing/Footer";

type Item = { name: string; mono: string; color: string; body: string };
type Group = { name: string; blurb: string; items: Item[] };

const GROUPS: Group[] = [
  {
    name: "Payments",
    blurb: "Get paid, protected",
    items: [
      { name: "Stripe", mono: "S", color: "#635bff", body: "Take deposits and final payments by card, held securely until the booking is complete." },
      { name: "PayPal", mono: "P", color: "#003087", body: "Offer clients a familiar checkout and receive funds directly to your account." },
      { name: "Square", mono: "SQ", color: "#2a2320", body: "Sync in-person and online payments so every booking reconciles automatically." },
    ],
  },
  {
    name: "Scheduling",
    blurb: "Never double-book",
    items: [
      { name: "Google Calendar", mono: "G", color: "#4285f4", body: "Two-way sync keeps your Loom bookings and personal calendar perfectly aligned." },
      { name: "Apple Calendar", mono: "A", color: "#5f6b52", body: "Confirmed events appear on your devices the moment a client books." },
      { name: "Calendly", mono: "C", color: "#006bff", body: "Route consultation calls through Calendly and log them against the client." },
    ],
  },
  {
    name: "Portfolio &amp; Social",
    blurb: "Show your best work",
    items: [
      { name: "Instagram", mono: "IG", color: "#c13584", body: "Pull your latest posts straight into your Loom profile gallery." },
      { name: "Pinterest", mono: "Pin", color: "#7a2b2e", body: "Share mood boards with clients and link pins to your services." },
      { name: "Dropbox", mono: "Db", color: "#0061ff", body: "Deliver galleries and final files to clients without leaving Loom." },
    ],
  },
  {
    name: "Accounting",
    blurb: "Books that balance themselves",
    items: [
      { name: "QuickBooks", mono: "QB", color: "#2ca01c", body: "Push invoices and payments to QuickBooks for effortless bookkeeping." },
      { name: "Xero", mono: "X", color: "#13b5ea", body: "Keep income and expenses tidy with automatic booking sync." },
      { name: "Wave", mono: "W", color: "#1c6ea4", body: "Free invoicing and accounting, connected to every Loom booking." },
    ],
  },
  {
    name: "Marketing",
    blurb: "Stay top of mind",
    items: [
      { name: "Mailchimp", mono: "MC", color: "#c99a4a", body: "Add new clients to your list and send seasonal campaigns automatically." },
      { name: "Google Reviews", mono: "GR", color: "#4285f4", body: "Invite happy clients to review you the moment their event wraps." },
      { name: "Zapier", mono: "Zap", color: "#ff4a00", body: "Connect Loom to 6,000+ apps with no-code automations." },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div>
      <section className="mx-auto max-w-[900px] px-[5vw] pb-10 pt-[90px] text-center">
        <div className="mb-[22px] text-xs uppercase tracking-[0.3em] text-maroon">Integrations</div>
        <h1 className="mb-6 font-serif text-[clamp(40px,6vw,68px)] font-normal leading-[1.05]">
          Loom doesn&apos;t replace your tools. <em className="italic text-maroon">It connects them.</em>
        </h1>
        <p className="mx-auto max-w-[600px] text-lg leading-[1.7] text-ink-2">
          Loom connects to the payment, scheduling and portfolio tools running
          your business — across weddings, brand launches, shoots, festivals and
          campaigns — with international payments and multi-currency support for
          clients and vendors across borders. Plus full API &amp; webhook access
          for anything else.
        </p>
      </section>

      <section className="mx-auto max-w-[1180px] px-[5vw] pb-10 pt-10">
        {GROUPS.map((g) => (
          <div key={g.name} className="mb-14">
            <div className="mb-[22px] flex items-baseline gap-3.5 border-b border-ink/12 pb-3">
              <h2 className="font-serif text-[28px] font-medium">{g.name}</h2>
              <span className="text-[13px] text-faint">{g.blurb}</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <div
                  key={it.name}
                  className="flex flex-col gap-3.5 border border-ink/10 bg-card p-[26px] hover:border-maroon/35"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center font-serif text-xl text-cream"
                      style={{ background: it.color }}
                    >
                      {it.mono}
                    </div>
                    <div className="text-[17px] font-medium">{it.name}</div>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-2">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* API STRIP */}
      <section className="mx-auto mb-[70px] max-w-[1180px] px-[5vw]">
        <div className="grid grid-cols-1 items-center gap-10 bg-ink-deep p-[56px_48px] text-cream md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-3.5 text-xs uppercase tracking-[0.25em] text-gold">Developers</div>
            <h2 className="mb-3.5 font-serif text-[36px] font-normal">
              Build anything on the Loom API.
            </h2>
            <p className="text-base leading-[1.7] text-cream/82">
              Full REST API and webhooks let you connect Loom to any system —
              sync bookings to your CRM, push payments to your accounting stack,
              or trigger custom automations.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/app"
              className="inline-block bg-cream px-9 py-4 text-[13px] uppercase tracking-[0.1em] text-ink hover:bg-white"
            >
              Request API Access
            </Link>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}
