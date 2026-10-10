import { Container } from "./Container";
import { Reveal } from "@/components/ui/Reveal";

export type SectionTone = "light" | "mist" | "dark";

const toneClasses: Record<SectionTone, string> = {
  light: "bg-white text-brand-navy",
  mist: "bg-mist-50 text-brand-navy",
  dark: "bg-brand-navy text-white",
};

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  className = "",
  children,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const dark = tone === "dark";
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`relative py-20 sm:py-24 ${toneClasses[tone]} ${className}`}
    >
      <Container>
        {title && (
          <Reveal className="mb-12 max-w-3xl">
            {eyebrow && (
              <p
                className={`mb-3 text-sm font-semibold tracking-[0.18em] uppercase ${dark ? "text-brand-sky" : "text-brand-mid"}`}
              >
                {eyebrow}
              </p>
            )}
            <h2
              id={headingId}
              className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
            >
              {title}
            </h2>
            {intro && (
              <p
                className={`mt-4 text-lg leading-relaxed text-pretty ${dark ? "text-mist-200" : "text-brand-navy/75"}`}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
