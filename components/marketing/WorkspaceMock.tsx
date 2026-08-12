"use client";

import { useEventScope } from "./EventScope";
import { STATUS_STYLE } from "./worlds";

const NAV_ITEMS = ["Overview", "Timeline", "Tasks", "Documents", "Payments", "Messages"];

export function WorkspaceMock() {
  const { world } = useEventScope();
  const doneCount = world.tasks.filter((t) => t.done).length;

  return (
    <div className="bg-ink-deep p-3.5 shadow-[0_40px_90px_-50px_rgba(42,35,32,0.7)]">
      <div className="flex gap-1.5 px-3.5 py-2.5">
        <span className="h-[11px] w-[11px] rounded-full bg-maroon" />
        <span className="h-[11px] w-[11px] rounded-full bg-gold" />
        <span className="h-[11px] w-[11px] rounded-full bg-ink-2" />
      </div>
      <div className="flex min-h-[540px] flex-wrap overflow-hidden bg-card-alt text-left font-sans">
        {/* sidebar */}
        <div className="flex w-[196px] flex-none flex-col border-r border-ink/10 bg-sand py-5">
          <div className="px-5 pb-1 font-serif text-xl">{world.eventName}</div>
          <div className="px-5 pb-[22px] text-[11px] uppercase tracking-[0.1em] text-faint">
            {world.eventMeta}
          </div>
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 border-l-2 px-5 py-2.5 text-[13.5px] ${
                i === 0
                  ? "border-maroon bg-card-alt font-medium text-maroon"
                  : "border-transparent text-ink-2"
              }`}
            >
              <span className={`text-[11px] ${i === 0 ? "text-maroon" : "text-faint-2"}`}>◆</span>
              {item}
              {item === "Messages" && (
                <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-maroon px-1 text-[10px] font-medium text-cream">
                  3
                </span>
              )}
            </div>
          ))}
          <div className="mt-auto px-5 pt-5">
            <div className="mb-2.5 text-[10.5px] uppercase tracking-[0.1em] text-faint-2">
              In this workspace
            </div>
            <div className="flex gap-1.5">
              {world.avatars.map(([mono, color], i) => (
                <span
                  key={`${mono}-${i}`}
                  className="flex h-[26px] w-[26px] items-center justify-center rounded-full text-[11px] font-medium text-cream"
                  style={{ background: color }}
                >
                  {mono}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* overview column */}
        <div className="flex min-w-[300px] flex-1 flex-col gap-4 p-[22px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="font-serif text-2xl">Overview</div>
            <span className="bg-maroon px-3.5 py-2 text-[11.5px] uppercase tracking-[0.06em] text-cream">
              {world.countdown}
            </span>
          </div>
          <div className="border border-ink/10 bg-card p-4">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.1em] text-faint">Shared Timeline</span>
              <span className="rounded-full bg-sage-pill px-2.5 py-1 text-[10.5px] uppercase text-sage">
                On track
              </span>
            </div>
            {world.timeline.map((row) => (
              <div key={row.title} className="flex items-center gap-3 border-t border-ink/7 py-2.5">
                <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-gold" />
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px]">{row.title}</div>
                  <div className="text-[11.5px] text-faint">{row.when}</div>
                </div>
                <span
                  className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-cream"
                  style={{ background: row.color }}
                >
                  {row.mono}
                </span>
                <span
                  className="whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] uppercase"
                  style={{ background: STATUS_STYLE[row.s].bg, color: STATUS_STYLE[row.s].fg }}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
          <div className="border border-ink/10 bg-card p-4">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.1em] text-faint">Tasks &amp; Owners</span>
              <span className="text-[11.5px] text-faint">
                {doneCount} of {world.tasks.length} done
              </span>
            </div>
            {world.tasks.map((task) => (
              <div key={task.title} className="flex items-center gap-2.5 border-t border-ink/7 py-2">
                <span
                  className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded text-[11px] text-white ${
                    task.done ? "border-[1.5px] border-sage bg-sage" : "border-[1.5px] border-ink/25 bg-card"
                  }`}
                >
                  {task.done ? "✓" : ""}
                </span>
                <div className={`flex-1 text-[13.5px] ${task.done ? "text-faint line-through" : ""}`}>
                  {task.title}
                </div>
                <span
                  className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-cream"
                  style={{ background: task.color }}
                >
                  {task.mono}
                </span>
                <span className="whitespace-nowrap text-[11.5px] text-faint">{task.when}</span>
              </div>
            ))}
          </div>
        </div>

        {/* activity column */}
        <div className="flex min-w-[240px] flex-1 flex-col gap-4 p-[22px] pl-0">
          <div className="border border-ink/10 bg-card p-4">
            <div className="mb-3.5 flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-faint">
              <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-sage" />
              Recent activity
            </div>
            {world.activity.map((line) => (
              <div key={line} className="flex gap-2.5 border-t border-ink/7 py-2">
                <span className="mt-[5px] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-sage" />
                <div className="text-[12.5px] leading-snug">{line}</div>
              </div>
            ))}
          </div>
          <div className="border border-ink/10 bg-card p-4">
            <div className="mb-3.5 text-xs uppercase tracking-[0.1em] text-faint">Vendor Chat</div>
            <div className="flex flex-col gap-3">
              {world.chat.map((c, i) => (
                <ChatBubble
                  key={i}
                  who={c.who}
                  text={c.text}
                  mono={c.mono}
                  color={c.color}
                  align={c.mine ? "right" : "left"}
                  mine={c.mine}
                />
              ))}
            </div>
          </div>
          <div className="border border-ink/10 bg-card p-4">
            <div className="mb-3.5 text-xs uppercase tracking-[0.1em] text-faint">Client Update</div>
            <div className="flex gap-2.5">
              <span
                className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-cream"
                style={{ background: world.clientUpdate.color }}
              >
                {world.clientUpdate.mono}
              </span>
              <div>
                <div className="mb-1 text-[11px] text-faint">{world.clientUpdate.who}</div>
                <div className="text-[12.5px] leading-relaxed">{world.clientUpdate.text}</div>
              </div>
            </div>
          </div>
          <div className="border border-ink/10 bg-card p-4">
            <div className="mb-3.5 text-xs uppercase tracking-[0.1em] text-faint">Payments</div>
            <div className="flex justify-between border-b border-ink/7 pb-2.5">
              <span className="text-[12.5px] text-ink-2">Deposits paid</span>
              <span className="font-serif text-lg text-sage">{world.payments.paid}</span>
            </div>
            <div className="flex justify-between pt-2.5">
              <span className="text-[12.5px] text-ink-2">{world.payments.dueLabel}</span>
              <span className="font-serif text-lg">{world.payments.due}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  who,
  text,
  mono,
  color,
  align = "left",
  mine = false,
}: {
  who: string;
  text: string;
  mono: string;
  color: string;
  align?: "left" | "right";
  mine?: boolean;
}) {
  return (
    <div className={`flex gap-2.5 ${align === "right" ? "flex-row-reverse" : ""}`}>
      <span
        className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-cream"
        style={{ background: color }}
      >
        {mono}
      </span>
      <div className="max-w-[78%]">
        <div className={`mb-1 text-[11px] text-faint ${align === "right" ? "text-right" : ""}`}>{who}</div>
        <div
          className={`px-2.5 py-2 text-[12.5px] leading-snug ${mine ? "bg-maroon text-cream" : "bg-panel text-ink"}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
