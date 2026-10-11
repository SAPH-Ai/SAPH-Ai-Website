import type { Metadata } from "next";
import { AchievementsGrid } from "@/components/achievements/AchievementsGrid";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { achievements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Competitions, exhibitions and recognition for SAPH.Ai.",
  alternates: { canonical: "/achievements/" },
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones along the way"
        intro="Competitions, exhibitions and recognition for our work."
      />
      <Container className="pt-6 pb-24">
        <AchievementsGrid items={achievements} headingLevel="h2" />
      </Container>
    </>
  );
}
