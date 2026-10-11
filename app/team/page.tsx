import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { TeamGrid } from "@/components/team/TeamGrid";
import { JoinUsButton } from "@/components/ui/JoinUsButton";
import { memberGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the young innovators behind SAPH.Ai.",
  alternates: { canonical: "/team/" },
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="The young minds behind SAPH.Ai"
        intro="Students and young innovators combining robotics, AI and community work. Select a card to read a full profile."
      />
      <Container className="pt-6 pb-24">
        <div className="mb-10">
          <JoinUsButton size="sm" />
        </div>
        <TeamGrid groups={memberGroups} groupHeading="h2" />
      </Container>
    </>
  );
}
