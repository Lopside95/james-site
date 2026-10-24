/**
 * A recreation of the bot's Telegram thread.
 * Deliberately rebuilt rather than screenshotted: real bookings contain
 * customer names, phone numbers and emails, which can't go on a public site.
 * Every value below is fictional.
 */

import React from "react";

const Bubble = ({
  from,
  time,
  children,
}: {
  from: "me" | "bot";
  time: string;
  children: React.ReactNode;
}) => {
  const mine = from === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.95rem] leading-snug",
          mine
            ? "rounded-br-sm bg-[#6b4bd6] text-white"
            : "rounded-bl-sm bg-white/10 text-neutral-100 ring-1 ring-white/10",
        ].join(" ")}
      >
        {children}
        <span className="block pt-1 text-[0.7rem] opacity-60">{time}</span>
      </div>
    </div>
  );
};

const TelegramDemo = () => {
  return (
    <figure className="w-full max-w-sm pr-2">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#17181c] p-3 shadow-xl ring-1 ring-white/10">
        <header className="flex items-center gap-3 px-1 pb-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#6b4bd6] text-sm font-semibold text-white">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-neutral-100">
              Axtra Notifier
            </span>
            <span className="block text-xs text-neutral-400">bot</span>
          </span>
        </header>

        <div className="flex flex-col gap-2.5">
          <Bubble from="me" time="14:02">
            <code>/add 2026-06-13</code>
          </Bubble>

          <Bubble from="bot" time="14:02">
            ✅ Added Saturday 13-06-2026 as a working day
          </Bubble>

          <Bubble from="bot" time="14:05">
            <span className="block pb-2 font-semibold">📅 New Axtra Event</span>
            <span className="block">Saturday, June 13, 2026</span>
            <span className="block">🕑 14:00 – 15:30 · 1h 30m</span>
            <span className="mt-2 block border-t border-white/10 pt-2 text-[0.85rem] opacity-80">
              Booking #28049 · 1.5 Hour
              <br />
              Customer details attached
            </span>
          </Bubble>

          <Bubble from="me" time="14:06">
            <code>/list</code>
          </Bubble>

          <Bubble from="bot" time="14:06">
            <span className="block pb-1 font-semibold">
              Upcoming working days
            </span>
            13 Jun · 14 Jun · 18 Jun
          </Bubble>
        </div>
      </div>
      {/* <figcaption className="pt-3 text-sm opacity-70">
        Rebuilt from the live bot — booking details are fictional, since real
        ones carry customer contact data.
      </figcaption> */}
    </figure>
  );
};

export default TelegramDemo;
