import { Section } from "@/components/layout/Section";
import { TeamGrid } from "@/components/team/TeamGrid";
import { ButtonLink } from "@/components/ui/Button";
import { JoinUsButton } from "@/components/ui/JoinUsButton";
import { FlowLines } from "@/components/ui/FlowLines";
import { memberGroups } from "@/lib/content";

// The home page shows one row per group; everyone else is on the full team page.
const HOME_LIMIT: Record<string, number> = { leads: 2, members: 4 };

export function Team() {
  const homeGroups = memberGroups.map((g) => ({
    ...g,
    members: g.members.slice(0, HOME_LIMIT[g.id] ?? 4),
  }));
  return (
    <Section
      id="team"
      eyebrow="Our team"
      title="The young minds behind SAPH.Ai"
      intro="Students and young innovators combining robotics, AI and community work. Select a card to read a full profile."
      className="isolate overflow-hidden"
    >
      <FlowLines className="top-1/2 -left-24" flip />
      <TeamGrid groups={homeGroups} />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/team/" variant="ghost-dark" arrow>
          Full team page
        </ButtonLink>
        <JoinUsButton />
      </div>
    </Section>
  );
}
