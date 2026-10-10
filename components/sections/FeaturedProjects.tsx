import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/lib/content";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Innovations That Matter"
      intro="A look at what we are building. Each project grows through research, fieldwork and competition."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
      <div className="mt-12 flex justify-center">
        <ButtonLink href="/projects/" variant="ghost-dark" arrow>
          View all projects
        </ButtonLink>
      </div>
    </Section>
  );
}
