import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/lib/content";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      tone="mist"
      eyebrow="Featured projects"
      title="Innovations That Matter"
      intro="A look at what we are building. Each project grows through research, fieldwork and competition."
      className="overflow-hidden"
    >
      {/* Faint flowing lines, echoing the wave in the logo */}
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 400 300"
        className="text-brand-mid/15 pointer-events-none absolute top-1/3 -right-24 hidden w-[420px] lg:block"
        fill="none"
        stroke="currentColor"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M0 ${120 + i * 12}C100 ${60 + i * 12} 200 ${180 + i * 12} 400 ${100 + i * 12}`}
          />
        ))}
      </svg>

      {/* 2 columns; image and text swap sides on every other row. */}
      <ul className="grid gap-x-12 gap-y-14 lg:grid-cols-2 lg:gap-y-16">
        {featuredProjects.slice(0, 6).map((project, i) => (
          <Reveal as="li" key={project.slug} delay={(i % 2) * 0.1}>
            <ProjectFeature project={project} reverse={Math.floor(i / 2) % 2 === 1} />
          </Reveal>
        ))}
      </ul>
      <div className="mt-20 flex justify-center">
        <ButtonLink href="/projects/" variant="ghost-dark" arrow>
          View all projects
        </ButtonLink>
      </div>
    </Section>
  );
}
