import { Section } from "@/components/layout/Section";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { FlowLines } from "@/components/ui/FlowLines";
import { publications } from "@/lib/content";

/** Research papers. Renders only when data/publications.json has entries. */
export function Publications() {
  if (!publications.length) return null;
  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Research & Publications"
      intro="Peer-reviewed research behind our work, turning field problems into published, verifiable results."
      className="isolate overflow-hidden"
    >
      <FlowLines className="top-10 -right-24" />
      <ul className="space-y-6">
        {publications.map((pub) => (
          <Reveal as="li" key={pub.id}>
            <article className="relative overflow-hidden rounded-[var(--radius-card)] border border-mist-100 bg-white p-6 shadow-[0_12px_32px_-12px_rgba(7,39,57,0.14)] sm:p-8">
              <div
                aria-hidden="true"
                className="from-brand-bright to-brand-mid absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b"
              />
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-10">
                <div>
                  {(pub.publisher || pub.year) && (
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {pub.publisher && (
                        <span className="bg-brand-mid rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white">
                          {pub.publisher}
                        </span>
                      )}
                      {pub.year && (
                        <span className="text-brand-mid rounded-full bg-mist-100 px-3 py-1 text-xs font-bold">
                          {pub.year}
                        </span>
                      )}
                    </div>
                  )}
                  <h3 className="text-xl leading-snug font-extrabold tracking-tight text-balance sm:text-2xl">
                    {pub.title}
                  </h3>
                  <p className="text-brand-navy/80 mt-3 text-sm leading-relaxed">
                    <span className="font-semibold">Authors: </span>
                    {pub.authors.join(", ")}
                  </p>
                  <p className="text-brand-navy/80 mt-1 text-sm leading-relaxed">
                    <span className="font-semibold">Conference: </span>
                    {pub.venue}
                    {pub.location && ` (${pub.location})`}
                  </p>
                </div>
                <div>
                  <p className="text-brand-navy/80 leading-relaxed">{pub.overview}</p>
                  {pub.results && pub.results.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {pub.results.map((r) => (
                        <li key={r.label} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="bg-brand-bright mt-2 size-2 shrink-0 rounded-full"
                          />
                          <p className="text-brand-navy/80 text-sm leading-relaxed">
                            <span className="text-brand-navy font-bold">{r.label}: </span>
                            {r.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-action hover:bg-brand-action-hover mt-5 inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
                    >
                      {pub.linkLabel || "Read the paper"}
                      <ExternalLinkIcon className="size-4" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
