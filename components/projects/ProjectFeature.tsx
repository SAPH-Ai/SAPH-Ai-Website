import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { Project } from "@/lib/types";

/** A project as a floating image with its details beside it (no card box). */
export function ProjectFeature({
  project,
  reverse = false,
  headingLevel = "h3",
}: {
  project: Project;
  /** Put the text on the left and the image on the right. */
  reverse?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const label = [project.status, project.category].filter(Boolean).join(" · ");
  return (
    <article className="group grid items-center gap-6 sm:grid-cols-[2fr_3fr]">
      <div className={`relative ${reverse ? "sm:order-2" : ""}`}>
        {/* Soft glow behind the image; photos with transparent backgrounds float on it. */}
        <div
          aria-hidden="true"
          className="bg-brand-bright/10 absolute inset-[6%] rounded-full blur-2xl"
        />
        <div className="relative aspect-square">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, 100vw"
            className="rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      <div className={reverse ? "sm:order-1" : ""}>
        {label && (
          <p className="text-brand-mid mb-2 text-xs font-semibold tracking-[0.16em] uppercase">
            {label}
          </p>
        )}
        <Heading className="text-xl leading-tight font-extrabold tracking-tight text-balance">
          {project.title}
        </Heading>
        <p className="text-brand-navy/75 mt-2 text-sm leading-relaxed lg:line-clamp-4">
          {project.summary}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-brand-mid rounded-full bg-mist-100 px-2.5 py-1 text-xs font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}/`}
          className="text-brand-mid mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
        >
          Learn more<span className="sr-only"> about {project.title}</span>
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
