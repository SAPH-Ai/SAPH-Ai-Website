import { CounterStrip } from "@/components/achievements/CounterStrip";
import { Timeline } from "@/components/achievements/Timeline";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { achievements, site } from "@/lib/content";

export function Achievements() {
  return (
    <Section
      id="achievements"
      tone="dark"
      eyebrow="Achievements"
      title="Milestones along the way"
      intro="Competitions, exhibitions and recognition for our work."
      className="overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-brand-bright/20 pointer-events-none absolute top-0 right-0 size-[520px] translate-x-1/3 -translate-y-1/4 rounded-full blur-3xl"
      />
      <CounterStrip stats={site.stats} />
      <div className="mx-auto mt-16 max-w-3xl">
        <Timeline items={achievements.slice(0, 4)} />
      </div>
      {achievements.length > 0 && (
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/achievements/" variant="ghost-light" arrow>
            View all achievements
          </ButtonLink>
        </div>
      )}
    </Section>
  );
}
