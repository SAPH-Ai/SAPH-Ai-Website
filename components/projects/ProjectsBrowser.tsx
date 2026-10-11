"use client";

import { useMemo, useState } from "react";
import { ProjectFeature } from "./ProjectFeature";
import type { Project } from "@/lib/types";

/** Project grid with a tag filter. */
export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const tags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort((a, b) => a.localeCompare(b)),
    [projects],
  );
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  const chip = (selected: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
      selected
        ? "border-brand-mid bg-brand-mid text-white"
        : "border-mist-200 bg-white text-brand-mid hover:border-brand-mid"
    }`;

  return (
    <>
      <div role="group" aria-label="Filter projects by tag" className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={active === null}
          className={chip(active === null)}
          onClick={() => setActive(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            type="button"
            key={tag}
            aria-pressed={active === tag}
            className={chip(active === tag)}
            onClick={() => setActive(active === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} project{shown.length === 1 ? "" : "s"}
        {active ? ` tagged ${active}` : ""}
      </p>
      {/* Same layout as the home page: 2 columns, sides swap on every other row. */}
      <ul className="grid gap-x-12 gap-y-14 lg:grid-cols-2 lg:gap-y-16">
        {shown.map((project, i) => (
          <li key={project.slug}>
            <ProjectFeature
              project={project}
              reverse={Math.floor(i / 2) % 2 === 1}
              headingLevel="h2"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
