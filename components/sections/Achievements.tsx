import { AchievementsGrid } from "@/components/achievements/AchievementsGrid";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { FlowLines } from "@/components/ui/FlowLines";
import { achievements } from "@/lib/content";

export function Achievements() {
  return (
    <Section
      id="achievements"
      tone="dark"
      eyebrow="Achievements"
      title="Milestones along the way"
      intro="Competitions, exhibitions and recognition for our work."
      className="isolate overflow-hidden"
    >
      <FlowLines className="top-24 -left-24" tone="dark" flip />
      <div
        aria-hidden="true"
        className="bg-brand-bright/20 pointer-events-none absolute top-0 right-0 size-[520px] translate-x-1/3 -translate-y-1/4 rounded-full blur-3xl"
      />
      <div>
        <AchievementsGrid items={achievements.slice(0, 6)} tone="dark" />
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
