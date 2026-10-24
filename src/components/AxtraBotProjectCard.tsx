import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tags: string[];
}

const Bubble = ({
  from,
  children,
}: {
  from: "me" | "bot";
  children: React.ReactNode;
}) => {
  const mine = from === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.9rem] leading-snug",
          mine
            ? "rounded-br-sm bg-[#6b4bd6] text-white"
            : "rounded-bl-sm bg-white/10 text-neutral-100 ring-1 ring-white/10",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};

export function AxtraBotProjectCard({
  title,
  description,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-lg justify-between transition-colors"
    >
      <h3 className="font-semibold tracking-tight md-hidden underline pb-4 pl-4">
        {title}
      </h3>
      <div
        aria-hidden
        className="w-full max-w-[30rem] self-center overflow-hidden rounded-[1.75rem] bg-[#17181c] p-4 shadow-xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 -ml-7 md:my-auto"
      >
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
          <Bubble from="me">
            <code>/add 2026-06-13</code>
          </Bubble>

          <Bubble from="bot">
            ✅ Added Saturday 13-06-2026 as a working day
          </Bubble>

          <Bubble from="bot">
            <span className="block pb-1 font-semibold">📅 New Axtra Event</span>
            <span className="block">Saturday, June 13, 2026</span>
            <span className="block">🕑 14:00 – 15:30 · 1h 30m</span>
          </Bubble>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold tracking-tight max-md:hidden underline">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
