import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventPhotoViewer } from "@/components/events/EventPhotoViewer";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { CalendarIcon, ExternalLinkIcon, MapPinIcon } from "@/components/ui/Icons";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { eventPhotos, events, getEvent } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  // Static export needs at least one page; with no events this renders a 404.
  return events.length ? events.map((e) => ({ id: e.id })) : [{ id: "none" }];
}

export async function generateMetadata({ params }: PageProps<"/events/[id]">): Promise<Metadata> {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) return {};
  return {
    title: event.title,
    description: event.summary,
    alternates: { canonical: `/events/${event.id}/` },
    openGraph: { images: [{ url: event.cover }] },
  };
}

export default async function EventPage({ params }: PageProps<"/events/[id]">) {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Event"
        title={event.title}
        intro={event.summary}
        back={{ href: "/events/", label: "All events" }}
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-mist-100">
          <PlaceholderBadge show={event.placeholder} />
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
        </div>
      </PageHeader>

      <Container className="grid gap-12 pt-6 pb-24 lg:grid-cols-[1.6fr_1fr]">
        <div className="min-w-0">
          <EventPhotoViewer photos={eventPhotos(event)} />
        </div>
        <article className="min-w-0">
          <h2 className="text-2xl font-extrabold">About this event</h2>
          <div className="text-brand-navy/80 mt-4 space-y-4 text-lg leading-relaxed">
            {(event.description.length ? event.description : [event.summary]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-action hover:bg-brand-action-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
              >
                More about this event <ExternalLinkIcon className="size-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            <ButtonLink href="/events/" variant="ghost-dark">
              All events
            </ButtonLink>
          </div>
        </article>
      </Container>
    </>
  );
}
