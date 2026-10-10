import { EventCard } from "@/components/events/EventCard";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { events } from "@/lib/content";

/** Renders only when data/events.json has entries. Shows the first three. */
export function Events() {
  if (!events.length) return null;
  return (
    <Section
      id="events"
      tone="mist"
      eyebrow="Events"
      title="Events & activities"
      intro="Where you can find us. Open an event to see the details and photos."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.slice(0, 3).map((event, i) => (
          <Reveal as="li" key={event.id} delay={i * 0.08}>
            <EventCard event={event} />
          </Reveal>
        ))}
      </ul>
      <div className="mt-12 flex justify-center">
        <ButtonLink href="/events/" variant="ghost-dark" arrow>
          View all events
        </ButtonLink>
      </div>
    </Section>
  );
}
