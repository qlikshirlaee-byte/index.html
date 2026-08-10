"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Textarea, Label } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { SimpleFooter } from "@/components/marketing/Footer";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzepeqql";

type Role = "vendor" | "planner" | "client";

const ROLES: { key: Role; label: string }[] = [
  { key: "vendor", label: "Vendor" },
  { key: "planner", label: "Planner" },
  { key: "client", label: "Planning an event" },
];

const COPY: Record<Role, { label: string; ph: string; msg: string }> = {
  vendor: {
    label: "Business name & category",
    ph: "e.g. Aperture Films · Photography",
    msg: "What kind of events do you take on? Roughly how many a year?",
  },
  planner: {
    label: "Studio name",
    ph: "e.g. Vivaha Planners",
    msg: "How many events do you coordinate at once today, and with what tools?",
  },
  client: {
    label: "Event type & date",
    ph: "e.g. Wedding · August 2026",
    msg: "Tell us a little about your event and where you are in planning.",
  },
};

const PERKS = [
  { t: "Founding pricing, locked", d: "Early cohort members keep preferential commission and subscription rates as we grow." },
  { t: "A direct line to the team", d: "You shape the roadmap. We build the platform around how you actually run events." },
  { t: "First pick of the marketplace", d: "Vendors and planners who join now build reputation and collaboration history before anyone else." },
  { t: "Hands-on onboarding", d: "We set up your first event workspace with you — no cold start, no guesswork." },
];

export default function EarlyAccessPage() {
  const [role, setRole] = useState<Role>("vendor");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const c = COPY[role];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("bad status");
      setDone(true);
    } catch {
      setError(
        "Something went wrong — please try again, or email hello@theloomplatform.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <section className="mx-auto max-w-[1180px] px-[6vw] pb-[100px] pt-20">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="mb-[22px] text-xs uppercase tracking-[0.32em] text-maroon animate-weave-in">
            Founding Cohort
          </div>
          <h1 className="mb-5 font-serif text-[clamp(40px,5.4vw,64px)] font-normal leading-[1.08] animate-weave-in">
            Request early access to{" "}
            <em className="italic text-maroon">Loom.</em>
          </h1>
          <p className="m-0 text-lg leading-[1.7] text-ink-2 animate-weave-in">
            We&apos;re onboarding a small founding group of vendors, planners
            and couples before we open wider. Tell us who you are and we&apos;ll
            be in touch personally.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1.05fr_0.95fr]">
          {/* PERKS */}
          <div className="animate-weave-in">
            <div className="mb-5 text-xs uppercase tracking-[0.24em] text-maroon">
              Why join the founding cohort
            </div>
            {PERKS.map((p) => (
              <div
                key={p.t}
                className="flex gap-4 border-t border-ink/12 py-5"
              >
                <span className="font-serif text-2xl leading-none text-gold">
                  ◆
                </span>
                <div>
                  <div className="mb-1.5 font-serif text-[21px] text-ink">
                    {p.t}
                  </div>
                  <p className="m-0 text-[14.5px] leading-[1.65] text-muted">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-7 border-l-[3px] border-maroon bg-panel px-6 py-5">
              <p className="mb-2 font-serif text-[19px] italic leading-[1.4] text-maroon">
                &ldquo;We only take on vendors we can support properly.&rdquo;
              </p>
              <p className="m-0 text-[13.5px] text-muted">
                Limited spots this cohort — we review every request by hand.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-ink/12 bg-card p-9 shadow-[0_30px_70px_-50px_rgba(42,35,32,0.5)] animate-weave-in">
            {done ? (
              <div className="px-1.5 py-[30px] text-center">
                <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full bg-sage text-3xl text-cream">
                  ✓
                </div>
                <h2 className="mb-3 font-serif text-3xl font-normal">
                  You&apos;re on the list.
                </h2>
                <p className="mx-auto max-w-[340px] text-[15px] leading-[1.7] text-muted">
                  Thank you — we&apos;ve received your request and will reach out
                  personally within a few days. Keep an eye on your inbox.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-block text-xs uppercase tracking-[0.1em] text-maroon hover:text-maroon-hover"
                >
                  ← Back to Loom
                </Link>
              </div>
            ) : (
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.14em] text-faint">
                  I am a…
                </div>
                <div className="mb-6 flex gap-2">
                  {ROLES.map((r) => {
                    const active = role === r.key;
                    return (
                      <button
                        key={r.key}
                        type="button"
                        onClick={() => setRole(r.key)}
                        className={
                          "flex-1 cursor-pointer border px-2 py-3 text-[12.5px] uppercase tracking-[0.06em] " +
                          (active
                            ? "border-ink bg-ink text-cream"
                            : "border-ink/20 bg-card-alt text-ink-2")
                        }
                      >
                        {r.label}
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={onSubmit}>
                  <input type="hidden" name="role" value={role} />

                  <div className="mb-[18px]">
                    <Label htmlFor="ea-name">Full name</Label>
                    <Input
                      id="ea-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>

                  <div className="mb-[18px]">
                    <Label htmlFor="ea-email">Email</Label>
                    <Input
                      id="ea-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full"
                    />
                  </div>

                  <div className="mb-[18px]">
                    <Label htmlFor="ea-detail">{c.label}</Label>
                    <Input
                      id="ea-detail"
                      name="detail"
                      required
                      placeholder={c.ph}
                      className="w-full"
                    />
                  </div>

                  <div className="mb-[18px]">
                    <Label htmlFor="ea-city">City</Label>
                    <Input
                      id="ea-city"
                      name="city"
                      required
                      placeholder="e.g. Toronto"
                      className="w-full"
                    />
                  </div>

                  <div className="mb-2">
                    <Label htmlFor="ea-message">
                      Anything else?{" "}
                      <span className="normal-case tracking-normal text-faint-2">
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="ea-message"
                      name="message"
                      rows={3}
                      placeholder={c.msg}
                      className="w-full"
                    />
                  </div>

                  {error && (
                    <div className="my-2.5 text-[13.5px] text-maroon">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    fullWidth
                    disabled={submitting}
                    className="mt-3.5 py-[17px]"
                  >
                    {submitting ? "Sending…" : "Request early access"}
                  </Button>
                  <p className="m-0 mt-4 text-center text-xs leading-[1.6] text-faint-2">
                    No spam. We&apos;ll only email you about your early-access
                    request.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}
