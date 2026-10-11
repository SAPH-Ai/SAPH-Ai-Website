import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "@/components/ui/Icons";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import type { EventItem } from "@/lib/types";

export function EventCard({
  event,
  headingLevel = "h3",
}: {
  event: EventItem;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Card interactive className="group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-mist-100">
        <Image
          src={event.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <PlaceholderBadge show={event.placeholder} className="mb-3 self-start" />
        <p className="text-brand-mid flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
          {event.date && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="size-4" /> {event.date}
            </span>
          )}
          {event.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-4" /> {event.location}
            </span>
          )}
        </p>
        <Heading className="mt-2 text-lg leading-snug font-bold">
          {/* Stretched link: the whole card opens the event page. */}
          <Link
            href={`/events/${event.id}/`}
            className="focus-visible:after:outline-brand-bright after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-2"
          >
            {event.title}
          </Link>
        </Heading>
        <p className="text-brand-navy/75 mt-2 flex-1 leading-relaxed">{event.summary}</p>
        <span
          aria-hidden="true"
          className="text-brand-mid mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
        >
          Details &amp; photos{" "}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Card>
  );
}
