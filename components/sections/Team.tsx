import { Section } from "@/components/layout/Section";
import { TeamGrid } from "@/components/team/TeamGrid";
import { ButtonLink } from "@/components/ui/Button";
import { JoinUsButton } from "@/components/ui/JoinUsButton";
import { memberGroups } from "@/lib/content";

export function Team() {
  return (
    <Section
      id="team"
      eyebrow="Our team"
      title="The young minds behind SAPH.Ai"
      intro="Students and young innovators combining robotics, AI and community work. Select a card to read a full profile."
    >
      <TeamGrid groups={memberGroups} />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/team/" variant="ghost-dark" arrow>
          Full team page
        </ButtonLink>
        <JoinUsButton />
      </div>
    </Section>
  );
}
