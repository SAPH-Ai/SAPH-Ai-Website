import Image from "next/image";
import { AwardIconBadge } from "./AwardIconBadge";
import { CalendarIcon } from "@/components/ui/Icons";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { Reveal } from "@/components/ui/Reveal";
import type { Achievement } from "@/lib/types";

export function TimelineItem({
  item,
  tone = "dark",
  headingLevel = "h3",
}: {
  item: Achievement;
  tone?: "dark" | "light";
  headingLevel?: "h2" | "h3";
}) {
  const dark = tone === "dark";
  const Heading = headingLevel;
  return (
    <Reveal as="li" className="relative pb-10 pl-10 last:pb-0 sm:pl-14">
      {/* Node on the timeline rail */}
      <span
        aria-hidden="true"
        className={`absolute top-1 left-0 grid size-7 place-items-center rounded-full ring-4 sm:left-2 ${
          dark ? "bg-brand-bright ring-brand-navy" : "bg-brand-bright ring-white"
        }`}
      >
        <span className="size-2.5 rounded-full bg-white" />
      </span>
      <article
        className={`overflow-hidden rounded-[var(--radius-card)] ${
          dark
            ? "border border-white/12 bg-white/[0.06] backdrop-blur-md"
            : "border border-mist-100 bg-white shadow-[0_12px_32px_-12px_rgba(7,39,57,0.14)]"
        } ${item.image ? "sm:grid sm:grid-cols-[1fr_220px]" : ""}`}
      >
        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {item.date && (
              <span
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${dark ? "text-brand-sky" : "text-brand-mid"}`}
              >
                <CalendarIcon className="size-4" />
                {item.date}
              </span>
            )}
            {item.badge && <AwardIconBadge label={item.badge} />}
            <PlaceholderBadge show={item.placeholder} />
          </div>
          <Heading className="text-lg font-bold">{item.title}</Heading>
          <p className={`mt-2 leading-relaxed ${dark ? "text-mist-200" : "text-brand-navy/75"}`}>
            {item.description}
          </p>
        </div>
        {item.image && (
          <div className="relative aspect-[3/2] sm:aspect-auto">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 640px) 220px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </article>
    </Reveal>
  );
}
