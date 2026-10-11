import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  CommunityIcon,
  DropletIcon,
  GearIcon,
  HealthIcon,
  IndustryIcon,
  MentorIcon,
  NetworkIcon,
  RobotIcon,
  SearchIcon,
  ShieldIcon,
  WavesIcon,
} from "@/components/ui/Icons";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { gallery, site } from "@/lib/content";

// Icons for the "What We Do" cards, by title (data/site.json → "themes"). Unknown titles get a droplet.
const themeIcons: Record<string, typeof DropletIcon> = {
  "On-site Research": SearchIcon,
  Collaboration: CommunityIcon,
  "Practical Solutions": GearIcon,
  "Mentoring Changemakers": MentorIcon,
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
  // The first four gallery photos make up the photo mosaic on the right.
  const photos = gallery.slice(0, 4);
  const tiles = [
    // On large screens the tiles stretch to fill the column height instead of keeping a ratio.
    "col-span-2 aspect-[16/10] lg:aspect-auto", // large, top
    "aspect-square lg:aspect-auto", // two side by side
    "aspect-square lg:aspect-auto",
    "col-span-2 aspect-[21/9] lg:aspect-auto", // wide, bottom
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="text-brand-navy relative bg-white py-20 sm:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        {/* Left: introduction + What We Do? */}
        <div>
          <Reveal>
            <p className="text-brand-mid mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
              About us
            </p>
            <h2
              id="about-heading"
              className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
            >
              What is SAPH.Ai?
            </h2>
            <div className="text-brand-navy/80 mt-6 space-y-5 text-lg leading-relaxed">
              {site.about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {site.themes.length > 0 && (
            <div className="mt-12">
              <Reveal>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">What We Do?</h3>
              </Reveal>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {site.themes.map((item, i) => {
                  const Icon = themeIcons[item.title] ?? DropletIcon;
                  return (
                    <Reveal as="li" key={item.title} delay={i * 0.08}>
                      <Card interactive className="flex h-full flex-col p-5 lg:p-4">
                        <span className="from-brand-bright to-brand-mid shadow-brand-bright/30 grid size-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                          <Icon className="size-6" />
                        </span>
                        <h4 className="mt-4 text-lg leading-snug font-bold lg:text-base">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-brand-navy/75 mt-2 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </Card>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Right: photo mosaic */}
        {photos.length > 0 && (
          <Reveal
            delay={0.1}
            className="grid grid-cols-2 gap-4 lg:mt-14 lg:grid-rows-[1.6fr_1fr_0.9fr]"
          >
            {photos.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-[var(--radius-card)] bg-mist-100 ${tiles[i]}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    tiles[i].includes("col-span-2")
                      ? "(min-width: 1024px) 500px, 100vw"
                      : "(min-width: 1024px) 250px, 50vw"
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
      </Container>
    </section>
  );
}
