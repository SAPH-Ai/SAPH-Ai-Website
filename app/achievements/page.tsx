import type { Metadata } from "next";
import { Timeline } from "@/components/achievements/Timeline";
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
      <Container className="max-w-3xl pt-6 pb-24">
        <Timeline items={achievements} tone="light" headingLevel="h2" />
      </Container>
    </>
  );
}
