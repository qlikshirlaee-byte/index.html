"use client";

import { createContext, useContext, useState } from "react";
import { WORLDS, type World } from "./worlds";

type Ctx = { world: World; setKey: (k: string) => void; activeKey: string };

const EventScopeContext = createContext<Ctx | null>(null);

export function EventScopeProvider({ children }: { children: React.ReactNode }) {
  const [activeKey, setKey] = useState(WORLDS[0].key);
  const world = WORLDS.find((w) => w.key === activeKey) ?? WORLDS[0];
  return (
    <EventScopeContext.Provider value={{ world, setKey, activeKey }}>
      {children}
    </EventScopeContext.Provider>
  );
}

export function useEventScope() {
  const ctx = useContext(EventScopeContext);
  if (!ctx) throw new Error("useEventScope must be used inside EventScopeProvider");
  return ctx;
}

export function EventTypeBar() {
  const { activeKey, setKey } = useEventScope();
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {WORLDS.map((w) => {
        const active = w.key === activeKey;
        return (
          <button
            key={w.key}
            type="button"
            onClick={() => setKey(w.key)}
            className={`px-[18px] py-2.5 text-sm transition-colors ${
              active
                ? "border border-maroon bg-maroon text-cream"
                : "border border-ink/14 bg-card text-ink-2 hover:border-ink/40"
            }`}
          >
            {w.label}
          </button>
        );
      })}
    </div>
  );
}

export function VendorChannel() {
  const { world } = useEventScope();
  return (
    <div className="bg-panel px-6 py-[26px]">
      <div className="mb-[18px] text-[11px] uppercase tracking-[0.14em] text-faint">
        {world.vendorTitle}
      </div>
      <div className="flex flex-col gap-3.5">
        {world.vendorMsgs.map((m, i) => (
          <div key={i} className={`max-w-[80%] ${m.mine ? "ml-auto self-end" : ""}`}>
            <div className="mb-1 px-1 text-[11px] text-faint">{m.who}</div>
            <div
              className={`px-4 py-3 text-sm leading-relaxed ${
                m.mine ? "bg-maroon text-cream" : "bg-cream text-ink"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-ink/12 pt-3.5 text-xs italic text-faint">
        Sorted in minutes — the client never had to lift a finger.
      </div>
    </div>
  );
}
