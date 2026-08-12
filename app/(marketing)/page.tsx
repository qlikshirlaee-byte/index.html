import Link from "next/link";
import { WorkspaceMock } from "@/components/marketing/WorkspaceMock";
import { EventScopeProvider, EventTypeBar, VendorChannel } from "@/components/marketing/EventScope";
import { MarketplaceTeaser } from "@/components/marketing/MarketplaceTeaser";
import { ProDashboards } from "@/components/marketing/ProDashboards";
import { Footer } from "@/components/marketing/Footer";

const TRUST = [
  "Weddings",
  "Brand & Experiential",
  "Film & Production",
  "Fashion & Runway",
  "Festivals & Live",
  "Corporate & Galas",
  "Political & Advocacy",
];

const CHAOS = [
  { t: "Scattered chats", d: "Details buried across email, WhatsApp and DMs — impossible to find when it matters." },
  { t: "Spreadsheet sprawl", d: "Timelines and budgets in files that are always one version behind." },
  { t: "Disconnected money", d: "Invoices, deposits and payments living in apps that never reconcile." },
  { t: "No shared truth", d: "Every vendor working from a different version of the same event." },
];

const PILLARS = [
  { big: "One", sub: "Platform" },
  { big: "One", sub: "Timeline" },
  { big: "One", sub: "Conversation" },
  { big: "One", sub: "Source of truth" },
];

const JOURNEY = [
  { n: "01", t: "Inquiry" },
  { n: "02", t: "Quote" },
  { n: "03", t: "Booking" },
  { n: "04", t: "Timeline" },
  { n: "05", t: "Payments" },
  { n: "06", t: "Event Day" },
  { n: "07", t: "Reviews" },
  { n: "08", t: "Referrals" },
];

const WORKSPACE_FEATURES = [
  { t: "Shared timeline", d: "One schedule everyone plans against." },
  { t: "Tasks & owners", d: "Nothing falls through the cracks." },
  { t: "Documents", d: "Contracts and files in one home." },
  { t: "Payments", d: "Deposits and invoices, in context." },
  { t: "Vendor chat", d: "Every conversation, kept together." },
  { t: "Client updates", d: "Clients see progress in real time." },
  { t: "Live status", d: "Know exactly where the event stands." },
  { t: "Event day", d: "A calm, coordinated run of show." },
];

const BUSINESS = [
  { t: "Clients", d: "every booking, brief and history in one calm CRM." },
  { t: "Payments", d: "deposits, invoices and reminders, handled." },
  { t: "Staff & teams", d: "schedule your crew across every event." },
  { t: "Inventory", d: "track what you own and what goes where." },
  { t: "Bookings", d: "inquiries to confirmed dates, without the back-and-forth." },
];

const NETWORK = [
  { i: "01", t: "A client invites their photographer.", d: "The workspace opens, and the first thread is woven.", line: true },
  { i: "02", t: "The photographer brings the florist she always works with.", d: "A trusted pairing, now on the platform together.", line: true },
  { i: "03", t: "The florist recommends a celebrant. The venue joins for logistics.", d: "Each professional pulls in the people they already trust.", line: true },
  { i: "04", t: "The stylist and DJ come aboard for event day.", d: "A one-off team becomes a remembered network.", line: true },
  { i: "05", t: "The next client finds a web of professionals who already work beautifully together.", d: "Proven teams, real collaboration history — not a cold directory.", line: false },
];

const FLYWHEEL = [
  "A client creates a workspace",
  "Invites professionals",
  "Professionals collaborate",
  "Profiles & reputations grow",
  "Future clients discover them",
  "More bookings",
  "More professionals join",
  "A better marketplace",
  "More clients",
];

const INTEGRATIONS = ["Google Calendar", "Stripe", "WhatsApp", "Gmail", "Outlook", "QuickBooks", "Zoom", "Dropbox"];

const TESTIMONIALS = [
  { quote: "Our team cut coordination time by 60%. For the first time, my clients and I are looking at the same plan.", name: "Anaya Kapoor", role: "Wedding Planner, London" },
  { quote: "In fifteen years of weddings, this was the first where every vendor worked from the same timeline.", name: "Marcus Reyes", role: "Event Photographer, Toronto" },
  { quote: "42 vendors, three days, zero dropped details. Our annual gala ran on Loom.", name: "Priya Menon", role: "Foundation Events Lead, Dubai" },
];

const VISION = [
  "Every event creates trusted relationships.",
  "Every vendor gains reputation.",
  "Every successful collaboration becomes easier to repeat.",
  "Every booking strengthens the network.",
];

const TIERS = [
  {
    name: "Solo",
    price: "$29",
    from: false,
    meta: "/month · 1 user",
    who: "Independent professionals",
    commission: "0% commission",
    note: "during early access · then 8%",
    dark: false,
    featured: false,
  },
  {
    name: "Studio",
    price: "$99",
    from: false,
    meta: "/month · up to 8 users",
    who: "Growing teams",
    commission: "0% commission",
    note: "during early access · then 5%",
    dark: false,
    featured: true,
  },
  {
    name: "Agency",
    price: "$249",
    from: false,
    meta: "/month · unlimited users",
    who: "Production at scale",
    commission: "0% commission",
    note: "then 3%, capped at $1,500",
    dark: false,
    featured: false,
  },
  {
    name: "Enterprise",
    price: "$999",
    from: true,
    meta: "/month · custom contract",
    who: "Multi-brand groups",
    commission: "Commission negotiated",
    note: "from 1.5%, or bought out",
    dark: true,
    featured: false,
  },
];

function Eyebrow({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div
      className={`mb-5 text-xs uppercase tracking-[0.3em] ${gold ? "text-gold-light" : "text-maroon"}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <EventScopeProvider>
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="mx-auto max-w-[1000px] px-[8vw] pb-[90px] pt-[110px] text-center">
        <div className="mb-7 text-xs uppercase tracking-[0.32em] text-maroon">
          Weaving Connections for Unforgettable Events
        </div>
        <h1 className="mb-6 font-serif text-[clamp(46px,6.4vw,76px)] font-normal leading-[1.06]">
          Your event deserves <em className="italic text-maroon">one source of truth.</em>
        </h1>
        <p className="mx-auto mb-[22px] max-w-[660px] text-lg font-medium leading-relaxed">
          Loom is the shared workspace where clients, vendors and planners run
          an entire event together — marketplace, timeline, conversations,
          payments and files, all in one place.
        </p>
        <p className="mx-auto mb-3.5 max-w-[620px] text-[18px] leading-[1.75] text-ink-2">
          Every unforgettable event is built on hundreds of moving parts. Loom
          weaves together every client, vendor, payment, timeline and
          conversation into one connected workspace — so every celebration
          unfolds seamlessly.
        </p>
        <p className="mx-auto mb-10 font-serif text-[17.5px] italic text-maroon">
          Because missed messages become missed moments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/signup"
            className="bg-maroon px-10 py-[17px] text-[13px] uppercase tracking-[0.1em] text-cream hover:bg-maroon-hover"
          >
            Start Planning
          </Link>
          <Link
            href="/#professionals"
            className="border border-ink/30 px-10 py-[17px] text-[13px] uppercase tracking-[0.1em] hover:border-ink"
          >
            For Event Professionals
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.14em] text-faint">
          {TRUST.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* HERO PRODUCT GLIMPSE */}
      <section className="mx-auto max-w-[1220px] px-[6vw] pb-24">
        <div className="mb-7 text-center">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-faint">
            Built for every kind of event — pick one to see it
          </div>
          <EventTypeBar />
        </div>
        <WorkspaceMock />
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {["Shared Workspace", "Marketplace", "Timeline", "Conversations", "Payments"].map((c) => (
            <span key={c} className="border border-ink/14 bg-card px-[18px] py-2.5 text-sm">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-ink-deep px-[8vw] py-24 text-cream">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-[60px] max-w-[720px] text-center">
            <Eyebrow gold>Why Loom Exists</Eyebrow>
            <h2 className="mb-5 font-serif text-[clamp(30px,4.2vw,48px)] font-normal leading-[1.15]">
              Today, every event lives in a dozen places at once.
            </h2>
            <p className="text-base leading-[1.75] text-[#cbbdb0]">
              Emails and WhatsApp threads. Spreadsheets and shared calendars.
              Invoices in one app, payments in another, contracts somewhere
              else entirely. Nothing talks to anything — and the coordination
              falls on you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {CHAOS.map((c) => (
              <div key={c.t} className="border border-cream/16 p-[26px_22px]">
                <div className="mb-2.5 font-serif text-[22px] text-gold-light">{c.t}</div>
                <p className="text-[13.5px] leading-relaxed text-[#b7a99c]">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-[640px] text-center font-serif text-[clamp(22px,3vw,32px)] italic leading-snug">
            That fragmentation isn&apos;t a workflow. It&apos;s stress.
          </p>
        </div>
      </section>

      {/* HOW LOOM WEAVES */}
      <section className="px-[8vw] py-[110px] text-center">
        <div className="mx-auto max-w-[900px]">
          <Eyebrow>How Loom Weaves It Together</Eyebrow>
          <h2 className="mb-[22px] font-serif text-[clamp(32px,4.6vw,54px)] font-normal leading-[1.12]">
            Loom becomes the central point of coordination.
          </h2>
          <p className="mx-auto mb-[46px] max-w-[680px] text-[17.5px] leading-[1.7] text-ink-2">
            Not another event management tool —{" "}
            <strong className="font-medium text-maroon">
              the operating system that connects every person, every tool,
              every payment and every conversation into one coordinated event.
            </strong>
          </p>
          <div className="mx-auto flex max-w-[820px] flex-wrap justify-center">
            {PILLARS.map((p) => (
              <div key={p.sub} className="min-w-[170px] flex-1 px-4 py-5">
                <div className="font-serif text-[clamp(30px,4vw,42px)] leading-[1.1] text-maroon">
                  {p.big}
                </div>
                <div className="mt-3 text-[13px] uppercase tracking-[0.12em] text-faint">
                  {p.sub}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-11 max-w-[660px] font-serif text-[clamp(19px,2.4vw,25px)] italic leading-relaxed text-maroon">
            One source of truth — so nobody ever asks, &ldquo;Which version is
            the latest?&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-[1.8] text-ink-2">
            One platform for the whole event — the marketplace to find your
            people, the tools to run your business, and a shared workspace
            where everyone works from the same truth.
          </p>
        </div>
      </section>

      {/* EVENT JOURNEY */}
      <section className="bg-panel px-[8vw] py-[100px]">
        <div className="mx-auto max-w-[1180px] text-center">
          <Eyebrow>One Continuous Flow</Eyebrow>
          <h2 className="mb-[52px] font-serif text-[clamp(30px,4.2vw,48px)] font-normal leading-[1.14]">
            From first inquiry to the last thank-you.
          </h2>
          <div className="flex flex-wrap items-stretch justify-center">
            {JOURNEY.map((j, i) => (
              <div key={j.n} className="flex items-center">
                <div className="min-w-[132px] border border-maroon/18 bg-cream px-[22px] py-[18px] text-center">
                  <div className="font-serif text-sm tracking-[0.06em] text-gold">{j.n}</div>
                  <div className="mt-1 text-[15px] font-medium">{j.t}</div>
                </div>
                {i < JOURNEY.length - 1 && (
                  <span className="px-2.5 text-xl text-maroon">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-[52px] font-serif text-[clamp(20px,2.6vw,28px)] italic text-maroon">
            Every step happens inside Loom.
          </p>
        </div>
      </section>

      {/* SHARED WORKSPACE */}
      <section id="workspace" className="bg-panel px-[8vw] py-[100px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto mb-[54px] max-w-[760px] text-center">
            <Eyebrow>The Shared Event Workspace</Eyebrow>
            <h2 className="mb-5 font-serif text-[clamp(32px,4.6vw,54px)] font-normal leading-[1.12]">
              Everyone. Every detail. <em className="italic text-maroon">One place.</em>
            </h2>
            <p className="text-[16.5px] leading-[1.75] text-ink-2">
              When a client books an event, Loom opens a single shared
              workspace. Every vendor, the planner and the client collaborate
              inside it — working from the same timeline, the same files, the
              same conversation. No more chasing updates. Nothing falls
              through.
            </p>
          </div>
          <WorkspaceMock />
          <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORKSPACE_FEATURES.map((w) => (
              <div key={w.t} className="flex items-start gap-3">
                <span className="font-serif text-xl leading-none text-gold">◆</span>
                <div>
                  <div className="text-[14.5px] font-medium">{w.t}</div>
                  <div className="mt-1 text-[12.5px] leading-relaxed text-muted">{w.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR-TO-VENDOR */}
      <section className="px-[8vw] py-[100px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Vendors, Talking to Vendors</Eyebrow>
            <h2 className="mb-[22px] font-serif text-[clamp(30px,4vw,48px)] font-normal leading-[1.12]">
              The people running your day can finally talk{" "}
              <em className="italic text-maroon">to each other.</em>
            </h2>
            <p className="mb-5 text-base leading-[1.78] text-ink-2">
              The photographer needs the décor timeline. The caterer needs the
              venue&apos;s kitchen access. The DJ needs the run of show.
              Today, all of it routes through the client — every question a
              delay, every answer a game of telephone.
            </p>
            <p className="text-base leading-[1.78] text-ink-2">
              Inside a Loom workspace, vendors coordinate directly. They sort
              out the details between themselves, in context, without waiting
              on the client — so the timeline keeps moving and the client
              stays out of the logistics.
            </p>
          </div>
          <VendorChannel />
        </div>
      </section>

      {/* INDUSTRY BANNER */}
      <section aria-label="Every kind of event" className="border-y border-ink/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            {
              img: "/assets/industries/political-advocacy.jpeg",
              eyebrow: "Political & Advocacy",
              title: "Rallies, town halls and field operations.",
              body: "Venues cleared, press credentialed, volunteers dispatched — every moving part on one timeline.",
            },
            {
              img: "/assets/industries/festivals-live.jpeg",
              eyebrow: "Festivals & Live Events",
              title: "Stages, crews and gates that open on time.",
              body: "Production, audio, logistics and security coordinating in the same workspace, load-in to load-out.",
            },
          ].map((b) => (
            <div
              key={b.eyebrow}
              className="relative min-h-[360px] bg-ink-deep bg-cover bg-center"
              style={{ backgroundImage: `url('${b.img}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/20 to-ink-deep/[0.85]" />
              <div className="relative flex h-full flex-col justify-end p-10">
                <div className="mb-3 text-[11.5px] uppercase tracking-[0.28em] text-gold-light">
                  {b.eyebrow}
                </div>
                <div className="font-serif text-[clamp(26px,3vw,36px)] leading-[1.16] text-cream">
                  {b.title}
                </div>
                <p className="mt-3 max-w-[420px] text-sm leading-[1.7] text-cream/75">
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETPLACE */}
      <section id="marketplace" className="mx-auto max-w-[1320px] px-[8vw] py-[110px]">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <Eyebrow>The Marketplace</Eyebrow>
          <h2 className="mb-[18px] font-serif text-[clamp(30px,4.2vw,48px)] font-normal leading-[1.14]">
            Find the people who bring it to life.
          </h2>
          <p className="text-base leading-[1.75] text-ink-2">
            Discover professionals with real collaboration history — teams
            that have already worked beautifully together on Loom. Book them,
            and they flow straight into your workspace.
          </p>
        </div>
        <div className="mb-10 flex justify-center">
          <EventTypeBar />
        </div>
        <MarketplaceTeaser />
        <div className="mt-10 text-center">
          <Link
            href="/app"
            className="inline-block border border-ink/30 px-[38px] py-4 text-[13px] uppercase tracking-[0.1em] hover:border-ink"
          >
            Explore the Marketplace
          </Link>
        </div>
      </section>

      {/* FOR PROFESSIONALS */}
      <section id="professionals" className="bg-ink-deep px-[8vw] py-[100px] text-cream">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow gold>For Event Professionals</Eyebrow>
            <h2 className="mb-[22px] font-serif text-[clamp(30px,4vw,48px)] font-normal leading-[1.12]">
              Run your business. Deliver unforgettable events. Never choose
              between the two again.
            </h2>
            <p className="mb-[30px] text-[15.5px] leading-[1.78] text-[#cbbdb0]">
              Clients, bookings, staff, inventory and payments — woven into
              one calm, connected home for your work. Loom handles the
              coordination so your craft gets your attention.
            </p>
            <div className="flex flex-col gap-4">
              {BUSINESS.map((b) => (
                <div key={b.t} className="flex gap-3.5 border-b border-cream/14 pb-3.5">
                  <span className="text-[13px] text-gold-light">◆</span>
                  <div>
                    <span className="text-[15px] font-medium">{b.t}</span>
                    <span className="text-sm text-[#b7a99c]"> — {b.d}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/signup"
              className="mt-9 inline-block bg-cream px-[38px] py-4 text-[13px] uppercase tracking-[0.1em] text-ink hover:bg-gold-light"
            >
              Grow With Loom
            </Link>
          </div>
          <ProDashboards />
        </div>
      </section>

      {/* NETWORK EFFECT */}
      <section className="bg-ink-deep px-[8vw] py-[110px] text-cream">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto mb-[60px] max-w-[700px] text-center">
            <Eyebrow gold>The Network Effect</Eyebrow>
            <h2 className="mb-5 font-serif text-[clamp(32px,4.6vw,54px)] font-normal leading-[1.12]">
              Every event grows <em className="italic text-gold-light">the network.</em>
            </h2>
            <p className="text-[16.5px] leading-[1.75] text-[#cbbdb0]">
              Every event brings together people who&apos;ve never worked
              together before. Loom doesn&apos;t just organize the event — it
              remembers those relationships.
            </p>
          </div>
          <div className="mx-auto flex max-w-[640px] flex-col">
            {NETWORK.map((n) => (
              <div key={n.i} className="flex items-start gap-5">
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-gold font-serif text-[15px] text-gold-light">
                    {n.i}
                  </div>
                  {n.line && (
                    <div className="min-h-[26px] w-px flex-1 bg-gradient-to-b from-gold to-gold/25" />
                  )}
                </div>
                <div className="pb-[26px]">
                  <div className="font-serif text-[22px] leading-snug">{n.t}</div>
                  <div className="mt-1 text-sm leading-relaxed text-[#b7a99c]">{n.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[54px] border-t border-cream/14 pt-11">
            <div className="mb-[26px] text-center text-xs uppercase tracking-[0.3em] text-gold-light">
              The Loom Flywheel
            </div>
            <div className="mx-auto flex max-w-[960px] flex-wrap items-center justify-center gap-x-2 gap-y-3">
              {FLYWHEEL.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="border border-gold/45 px-[15px] py-2.5 text-sm">{s}</span>
                  <span className="text-gold">→</span>
                </div>
              ))}
              <span className="pl-0.5 font-serif italic text-gold-light">repeat, forever</span>
            </div>
          </div>
          <div className="mt-11 text-center">
            <p className="mb-2.5 font-serif text-[clamp(22px,3vw,32px)] italic leading-snug">
              The next booking starts with a stronger network than the last.
            </p>
            <p className="text-[13px] uppercase tracking-[0.18em] text-gold-light">
              Every event makes the marketplace smarter
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="px-[8vw] py-[100px] text-center">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow>Integrations</Eyebrow>
          <h2 className="mb-[18px] font-serif text-[clamp(30px,4.2vw,48px)] font-normal leading-[1.14]">
            Loom doesn&apos;t replace your tools. It connects them.
          </h2>
          <p className="mb-10 text-base leading-[1.75] text-ink-2">
            Loom weaves into your calendar, payments, messaging and email —
            so the tools you rely on finally work as one, without leaving
            your workspace.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            {INTEGRATIONS.map((i) => (
              <span key={i} className="border border-ink/20 bg-card px-6 py-3 text-sm text-ink-2">
                {i}
              </span>
            ))}
          </div>
          <Link href="/integrations" className="mt-9 inline-block text-[13px] uppercase tracking-[0.1em] text-maroon">
            See all integrations →
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-panel px-[8vw] py-[100px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-[52px] text-center">
            <Eyebrow>Trusted by the people behind the moments</Eyebrow>
            <h2 className="mb-3.5 font-serif text-[clamp(30px,4.2vw,48px)] font-normal">
              Calm, connected, unforgettable.
            </h2>
            <p className="mx-auto max-w-[560px] text-[15.5px] text-ink-2">
              Teams on Loom report less time coordinating, fewer dropped
              details, and events that run on schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[26px] md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-cream p-[34px_30px]">
                <div className="mb-4 text-lg text-gold">★★★★★</div>
                <p className="mb-6 font-serif text-xl leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="mt-1 text-[12.5px] text-faint">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section id="pricing" className="px-[8vw] py-[110px] text-center">
        <div className="mx-auto mb-[34px] max-w-[720px]">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mb-[18px] font-serif text-[clamp(30px,4.2vw,48px)] font-normal leading-[1.14]">
            Clients plan for free. You only pay for your own account.
          </h2>
          <p className="text-base leading-[1.75] text-ink-2">
            One monthly plan for your practice — and during early access, zero
            commission on every event you win. Clients never pay, because they
            aren&apos;t your customers; they&apos;re the reason professionals
            become one.
          </p>
        </div>

        <div className="mx-auto mb-[30px] grid max-w-[1000px] grid-cols-1 gap-3.5 text-left sm:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative p-[26px_20px] ${
                t.featured
                  ? "bg-maroon text-cream"
                  : t.dark
                  ? "bg-ink-deep text-cream"
                  : "border border-ink/12 bg-card"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold px-3 py-[5px] text-[10px] uppercase tracking-[0.14em] text-ink">
                  Most Popular
                </div>
              )}
              <div className={`mb-2.5 font-serif text-[21px] ${t.dark ? "text-gold-light" : ""}`}>
                {t.name}
              </div>
              <div className="font-serif text-[40px] leading-none">
                {t.from && (
                  <span className={`font-sans text-sm ${t.dark ? "text-cream/70" : "text-faint"}`}>
                    from{" "}
                  </span>
                )}
                {t.price}
              </div>
              <div
                className={`mt-1.5 text-[12.5px] ${
                  t.featured || t.dark ? "text-cream/70" : "text-faint"
                }`}
              >
                {t.meta}
              </div>
              <div
                className={`mt-3.5 border-t pt-3 ${
                  t.featured || t.dark ? "border-cream/20" : "border-ink/10"
                }`}
              >
                <div
                  className={`text-[12.5px] font-medium ${
                    t.featured || t.dark ? "text-gold-light" : "text-maroon"
                  }`}
                >
                  {t.commission}
                </div>
                <div
                  className={`mt-[3px] text-[11.5px] ${
                    t.featured || t.dark ? "text-cream/70" : "text-faint"
                  }`}
                >
                  {t.note}
                </div>
              </div>
              <div
                className={`mt-3 text-[12.5px] ${
                  t.featured || t.dark ? "text-gold-light" : "text-maroon"
                }`}
              >
                {t.who}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-[34px] flex max-w-[1000px] flex-wrap items-center justify-center gap-3.5 border-l-[3px] border-gold bg-panel px-6 py-[18px]">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#9c6b3f]">
            Founding vendors
          </span>
          <span className="font-serif text-xl">
            The first 100 accounts pay{" "}
            <em className="italic text-maroon">half price for a full year.</em>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/pricing"
            className="bg-maroon px-10 py-[17px] text-[13px] uppercase tracking-[0.1em] text-cream hover:bg-maroon-hover"
          >
            View Full Pricing
          </Link>
          <Link
            href="/signup"
            className="border border-ink/30 px-10 py-[17px] text-[13px] uppercase tracking-[0.1em] hover:border-ink"
          >
            Start Free
          </Link>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-panel px-[8vw] py-[110px] text-center">
        <div className="mx-auto max-w-[780px]">
          <Eyebrow>What Loom Becomes</Eyebrow>
          <h2 className="mb-9 font-serif text-[clamp(32px,4.6vw,54px)] font-normal leading-[1.12]">
            Every event makes <em className="italic text-maroon">the next one better.</em>
          </h2>
          <div className="mb-9 flex flex-col gap-3.5">
            {VISION.map((v) => (
              <div key={v} className="font-serif text-[clamp(19px,2.4vw,25px)] leading-snug">
                {v}
              </div>
            ))}
          </div>
          <p className="font-serif text-[clamp(21px,2.8vw,29px)] italic text-maroon">
            Because unforgettable events shouldn&apos;t start from scratch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-deep px-[8vw] py-[120px] text-center text-cream">
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-light">
          The connective infrastructure for unforgettable events
        </div>
        <h2 className="mx-auto mb-5 max-w-[820px] font-serif text-[clamp(34px,5vw,60px)] font-normal leading-[1.1]">
          Run the entire event from one place.
        </h2>
        <p className="mx-auto mb-10 max-w-[520px] text-[16.5px] leading-[1.7] text-[#cbbdb0]">
          Every unforgettable event begins with people. Every unforgettable
          business is built on relationships. Loom remembers both.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/signup"
            className="bg-cream px-[42px] py-[17px] text-[13px] uppercase tracking-[0.1em] text-ink hover:bg-gold-light"
          >
            Get Started
          </Link>
          <Link
            href="/#professionals"
            className="border border-cream/40 px-[42px] py-[17px] text-[13px] uppercase tracking-[0.1em] hover:border-cream"
          >
            For Professionals
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </EventScopeProvider>
  );
}
