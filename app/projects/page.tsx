import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { ProjectsBrowser } from "@/components/projects/ProjectsBrowser";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Robotics and AI projects by SAPH.Ai for sanitation, water and drainage management.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What we are building"
        intro="Robotics and AI solutions for sanitation, water and drainage. Filter by topic to explore."
      />
      <Container className="pt-6 pb-24">
        <ProjectsBrowser projects={projects} />
      </Container>
    </>
  );
}
