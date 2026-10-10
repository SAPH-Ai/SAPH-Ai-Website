import type { Metadata } from "next";
import { EventCard } from "@/components/events/EventCard";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Events, exhibitions and activities by SAPH.Ai.",
  alternates: { canonical: "/events/" },
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Events & activities"
        intro="Where you can find us. Open an event to see the details and photos."
      />
      <Container className="pt-6 pb-24">
        {events.length ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <li key={event.id}>
                <EventCard event={event} headingLevel="h2" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-brand-navy/75 text-lg">No events yet. Check back soon!</p>
        )}
      </Container>
    </>
  );
}
