import Image from "next/image";
import Link from "next/link";
import { SimpleFooter } from "@/components/marketing/Footer";

type Module = {
  id: string;
  num: string;
  title: string;
  desc: string;
  points: string[];
  img: string;
  bg: string;
  imageFirst: boolean;
};

const MODULES: Module[] = [
  {
    id: "clients",
    num: "01",
    title: "Clients",
    desc: "A living record of every relationship — preferences, briefs, history and every conversation, always current.",
    points: [
      "Full client profiles &amp; history",
      "Preferences and briefs on file",
      "Direct messaging &amp; communications",
      "Shared notes across your team",
      "Client self-service portal",
    ],
    img: "/assets/screenshot-clients.png",
    bg: "bg-cream",
    imageFirst: false,
  },
  {
    id: "projects",
    num: "02",
    title: "Projects &amp; Booking",
    desc: "One calendar for every booking, consult and event — across every location your business runs in.",
    points: [
      "Unified booking calendar across all locations",
      "Project stages from intake to delivery",
      "Assign each project to a studio, client site, or venue",
      "Location-level availability &amp; scheduling rules",
      "Automated client reminders",
      "Conflict &amp; double-booking prevention",
    ],
    img: "/assets/screenshot-projects.png",
    bg: "bg-panel",
    imageFirst: true,
  },
  {
    id: "inventory",
    num: "03",
    title: "Inventory &amp; Vendors",
    desc: "Track every piece and every vendor relationship from sourcing through return.",
    points: [
      "Vendor directory &amp; order tracking",
      "Piece-level status and current location",
      "Purchase orders &amp; sourcing history",
      "Low-stock and return alerts",
      "Vendor performance and reliability notes",
    ],
    img: "/assets/screenshot-inventory.png",
    bg: "bg-cream",
    imageFirst: false,
  },
  {
    id: "billing",
    num: "04",
    title: "Billing",
    desc: "Merchant services, accounting and bookkeeping tied directly to the project and client they belong to.",
    points: [
      "Integrated merchant services for payments",
      "Project-linked invoicing",
      "Automatic bookkeeping &amp; reconciliation",
      "Accounting-ready reports and exports",
      "Recurring and installment billing",
      "Automatic payment tracking &amp; alerts",
    ],
    img: "/assets/screenshot-billing.png",
    bg: "bg-panel",
    imageFirst: true,
  },
  {
    id: "staff",
    num: "05",
    title: "Staff &amp; Access",
    desc: "Bring on crew, assistants and managers with permissions scoped to their role, clients and locations.",
    points: [
      "Role-based managerial access",
      "Per-location and per-client permissions",
      "Staff onboarding &amp; offboarding",
      "Activity and assignment tracking",
      "Custom access levels per team member",
      "Approval workflows for sensitive actions",
    ],
    img: "/assets/screenshot-staff.png",
    bg: "bg-cream",
    imageFirst: false,
  },
];

const INTEGRATIONS = ["Google Calendar", "QuickBooks", "Stripe", "Gmail", "Dropbox"];

export default function PlatformPage() {
  return (
    <div>
      <section className="mx-auto max-w-[940px] px-[8vw] pb-20 pt-[100px] text-center">
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-maroon">The Platform</div>
        <h1 className="mb-6 font-serif text-[clamp(38px,5.4vw,66px)] font-normal leading-[1.1]">
          Everything your events business runs on, in one place.
        </h1>
        <p className="mx-auto max-w-[600px] text-[16.5px] leading-[1.7] text-ink-2">
          Beyond the marketplace, Loom gives creatives and vendors the tools to
          run the whole business — weddings, brand launches, shoots, festivals
          and campaigns alike — with clients, bookings, inventory and billing in
          one connected system, so every enquiry, event and invoice stays in
          sync.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-3.5 px-[8vw] pb-10">
        {MODULES.map((m) => (
          <a
            key={m.id}
            href={`#${m.id}`}
            className="border border-ink/20 px-[22px] py-2.5 text-[13px] hover:border-maroon hover:text-maroon"
          >
            {m.title}
          </a>
        ))}
      </section>

      {MODULES.map((m) => (
        <section
          key={m.id}
          id={m.id}
          className={`${m.bg} grid grid-cols-1 items-center gap-14 border-t border-ink/10 px-[8vw] py-[90px] md:grid-cols-2`}
        >
          <div className={m.imageFirst ? "md:order-2" : "md:order-1"}>
            <div className="mb-4 font-serif text-[15px] text-gold">{m.num}</div>
            <h2 className="mb-5 font-serif text-[clamp(28px,3.6vw,44px)] font-normal">{m.title}</h2>
            <p className="mb-6 max-w-[460px] text-[15.5px] leading-[1.8] text-ink-2">{m.desc}</p>
            <ul className="flex flex-col gap-3.5">
              {m.points.map((p) => (
                <li key={p} className="flex items-baseline gap-2.5 text-[14.5px]">
                  <span className="text-gold">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative h-[440px] ${m.imageFirst ? "md:order-1" : "md:order-2"}`}>
            <Image src={m.img} alt={`${m.title} screenshot`} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
          </div>
        </section>
      ))}

      <section className="bg-ink-deep px-[8vw] py-[100px] text-center text-cream">
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-light">Works With Your Stack</div>
        <h2 className="mb-12 font-serif text-[clamp(30px,3.8vw,46px)] font-normal">
          Connects to the tools you already use.
        </h2>
        <div className="flex flex-wrap justify-center gap-[60px] opacity-85">
          {INTEGRATIONS.map((i) => (
            <div key={i} className="font-serif text-xl">
              {i}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-panel px-[8vw] py-[130px] text-center">
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-maroon">Ready When You Are</div>
        <h2 className="mb-9 font-serif text-[clamp(32px,4.4vw,54px)] font-normal">
          See Loom running your business.
        </h2>
        <Link
          href="/app"
          className="inline-block bg-maroon px-11 py-[18px] text-[13px] uppercase tracking-[0.1em] text-cream hover:bg-maroon-hover"
        >
          Start Free Trial
        </Link>
      </section>

      <SimpleFooter />
    </div>
  );
}
