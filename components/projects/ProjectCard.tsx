import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { DashedBadge, PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import type { Project } from "@/lib/types";

export function ProjectCard({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Card interactive className="group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-mist-100">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="bg-brand-navy/80 absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.category && <DashedBadge>{project.category}</DashedBadge>}
          <PlaceholderBadge show={project.placeholder} />
        </div>
        <Heading className="text-lg leading-snug font-bold">
          {/* Stretched link: the whole card is clickable, with a single tab stop. */}
          <Link
            href={`/projects/${project.slug}/`}
            className="focus-visible:after:outline-brand-bright after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-2"
          >
            {project.title}
          </Link>
        </Heading>
        <p className="text-brand-navy/75 mt-2 flex-1 leading-relaxed">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-brand-mid rounded-full bg-mist-100 px-2.5 py-1 text-xs font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="text-brand-mid mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
        >
          Read more{" "}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Card>
  );
}
