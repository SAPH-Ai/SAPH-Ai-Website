import Image from "next/image";
import { Section } from "@/components/layout/Section";
import {
  CommunityIcon,
  DropletIcon,
  HealthIcon,
  IndustryIcon,
  MentorIcon,
  NetworkIcon,
  RobotIcon,
  ShieldIcon,
  WavesIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { gallery, site } from "@/lib/content";

// Icons for the theme chips (data/site.json → "themes"). Unknown themes get a droplet.
const themeIcons: Record<string, typeof DropletIcon> = {
  AI: NetworkIcon,
  Robotics: RobotIcon,
  "Public Health": HealthIcon,
  Education: MentorIcon,
  "Local Industries": IndustryIcon,
  Communities: CommunityIcon,
  Sanitation: ShieldIcon,
  Water: DropletIcon,
  Drainage: WavesIcon,
};

export function About() {
  // The first three gallery photos double as the About photo grid.
  const [main, second, third] = gallery;
  return (
    <Section id="about" eyebrow="About us" title="What is SAPH.Ai?">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal className="text-brand-navy/80 space-y-5 text-lg leading-relaxed">
          {site.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <ul className="flex flex-wrap gap-2.5 pt-3" aria-label="Key themes">
            {site.themes.map((theme) => {
              const Icon = themeIcons[theme] ?? DropletIcon;
              return (
                <li
                  key={theme}
                  className="text-brand-mid inline-flex items-center gap-2 rounded-full border border-mist-200 bg-mist-50 px-4 py-2 text-sm font-semibold"
                >
                  <Icon className="size-4" />
                  {theme}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {main && (
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {[main, second, third].filter(Boolean).map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-[var(--radius-card)] bg-mist-100 ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    i === 0 ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 280px, 50vw"
                  }
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="from-brand-navy/30 absolute inset-0 bg-gradient-to-t to-transparent mix-blend-multiply"
                />
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </Section>
  );
}
