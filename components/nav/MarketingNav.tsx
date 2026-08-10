import Link from "next/link";
import Image from "next/image";

const LINK_CLASS =
  "text-[13px] uppercase tracking-[0.06em] text-ink hover:text-maroon";

export function MarketingNav() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/10 bg-cream/95 px-[5vw] py-4 backdrop-blur">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/assets/loom-mark.png" alt="Loom" width={38} height={35} />
        <span className="font-serif text-[25px] font-medium tracking-[0.02em]">Loom</span>
      </Link>
      <nav className="flex items-center gap-[30px]">
        <Link href="/#workspace" className={LINK_CLASS}>
          The Workspace
        </Link>
        <Link href="/app" className={LINK_CLASS}>
          Marketplace
        </Link>
        <Link href="/#professionals" className={LINK_CLASS}>
          For Professionals
        </Link>
        <Link href="/integrations" className={LINK_CLASS}>
          Integrations
        </Link>
        <Link href="/pricing" className={LINK_CLASS}>
          Pricing
        </Link>
        <Link href="/login" className={LINK_CLASS}>
          Log In
        </Link>
        <Link
          href="/early-access"
          className="bg-maroon px-[22px] py-[11px] text-xs uppercase tracking-[0.08em] text-cream hover:bg-maroon-hover"
        >
          Request Early Access
        </Link>
      </nav>
    </div>
  );
}
