import Image from "next/image";
import { CalendarIcon, ExternalLinkIcon, MapPinIcon, TrophyIcon } from "@/components/ui/Icons";
import { ExpandableText } from "@/components/ui/ExpandableText";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import type { Achievement } from "@/lib/types";
import { AwardIconBadge } from "./AwardIconBadge";

export function AchievementCard({
  item,
  tone = "light",
  headingLevel = "h3",
}: {
  item: Achievement;
  tone?: "dark" | "light";
  headingLevel?: "h2" | "h3";
}) {
  const dark = tone === "dark";
  const Heading = headingLevel;
  const links = item.links ?? [];

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] ${
        dark
          ? "border border-white/12 bg-white/[0.06] backdrop-blur-md"
          : "border border-mist-100 bg-white shadow-[0_12px_32px_-12px_rgba(7,39,57,0.14)]"
      }`}
    >
      {/* Photo slot: shows the image when one is set in achievements.json. */}
      <div
        className={`relative aspect-[16/9] shrink-0 ${
          dark ? "bg-white/[0.04]" : "bg-gradient-to-br from-mist-50 to-mist-100"
        }`}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`grid h-full place-items-center ${dark ? "text-white/20" : "text-brand-mid/25"}`}
          >
            <TrophyIcon className="size-12" />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
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
          {item.location && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                dark ? "bg-white/10 text-mist-100" : "text-brand-mid bg-mist-100"
              }`}
            >
              <MapPinIcon className="size-3.5" />
              {item.location}
            </span>
          )}
          <PlaceholderBadge show={item.placeholder} />
        </div>
        <Heading className="text-lg leading-snug font-bold">{item.title}</Heading>
        <div className="mt-2 flex-1">
          <ExpandableText
            text={item.description}
            lines={4}
            className={`leading-relaxed ${dark ? "text-mist-200" : "text-brand-navy/75"}`}
            buttonClassName={dark ? "text-brand-sky" : "text-brand-mid"}
          />
        </div>

        {links.length > 0 && (
          <div className={`mt-5 border-t pt-4 ${dark ? "border-white/10" : "border-mist-100"}`}>
            <p
              className={`mb-2 text-xs font-semibold tracking-[0.12em] uppercase ${dark ? "text-mist-300" : "text-brand-navy/75"}`}
            >
              Media &amp; verification
            </p>
            <ul className="flex flex-wrap gap-2">
              {links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      dark
                        ? "hover:bg-brand-bright bg-white/10 text-white"
                        : "text-brand-mid hover:bg-brand-mid bg-mist-100 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ExternalLinkIcon className="size-3.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
