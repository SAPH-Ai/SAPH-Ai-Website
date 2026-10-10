import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { DashedBadge, PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { getProject, projects } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        eyebrow={project.status}
        title={project.title}
        intro={project.summary}
        back={{ href: "/projects/", label: "All projects" }}
      >
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.category && <DashedBadge>{project.category}</DashedBadge>}
          <PlaceholderBadge show={project.placeholder} />
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-mist-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </PageHeader>

      <Container className="grid gap-12 pt-6 pb-24 lg:grid-cols-[1.5fr_1fr]">
        <article className="min-w-0">
          <div className="relative mb-10 aspect-[3/2] overflow-hidden rounded-[var(--radius-card)] bg-mist-100">
            <Image
              src={project.image}
              alt={`${project.title}${project.placeholder ? " (placeholder image)" : ""}`}
              fill
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
          {project.description.length > 0 && (
            <>
              <h2 className="text-2xl font-extrabold">About this project</h2>
              <div className="text-brand-navy/80 mt-4 space-y-4 text-lg leading-relaxed">
                {project.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
        </article>

        <aside className="lg:pt-2">
          <div className="sticky top-[calc(var(--header-height)+1.5rem)] space-y-5 rounded-[var(--radius-card)] border border-mist-100 bg-mist-50 p-6">
            <h2 className="text-brand-mid text-sm font-semibold tracking-[0.16em] uppercase">
              Project details
            </h2>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3">
              {project.category && (
                <>
                  <dt className="font-semibold">Category</dt>
                  <dd>{project.category}</dd>
                </>
              )}
              <dt className="font-semibold">Status</dt>
              <dd>{project.status}</dd>
              {project.year && (
                <>
                  <dt className="font-semibold">Year</dt>
                  <dd>{project.year}</dd>
                </>
              )}
              <dt className="font-semibold">Topics</dt>
              <dd>{project.tags.join(", ")}</dd>
            </dl>
            {project.links.length > 0 && (
              <ul className="space-y-2 border-t border-mist-200 pt-5">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-mid inline-flex items-center gap-2 font-semibold hover:underline"
                    >
                      {link.label} <ExternalLinkIcon className="size-4" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ButtonLink href="/#contact" className="w-full">
              Talk to us about this project
            </ButtonLink>
          </div>
        </aside>
      </Container>
    </>
  );
}
