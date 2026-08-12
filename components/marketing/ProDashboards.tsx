"use client";

import { useEventScope } from "./EventScope";
import { DashboardMock } from "./DashboardMock";
import { DASHBOARDS } from "./dashboards";

export function ProDashboards() {
  const { world } = useEventScope();
  const pair = DASHBOARDS[world.key] ?? DASHBOARDS.weddings;

  return (
    <div className="flex flex-col gap-6">
      {pair.map((d, i) => (
        <div key={`${world.key}-${i}`}>
          <div
            className={`mb-2.5 text-[11px] uppercase tracking-[0.16em] text-gold-light ${
              i === 1 ? "ml-10" : ""
            }`}
          >
            {d.label}
          </div>
          <DashboardMock
            offset={i === 1}
            mono={d.mono}
            color={d.color}
            name={d.name}
            category={d.category}
            stats={d.stats}
            listLabel={d.listLabel}
            rows={d.rows}
          />
        </div>
      ))}
    </div>
  );
}
