import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import {
  CommunityIcon,
  MentorIcon,
  ResearchIcon,
  RobotIcon,
  SearchIcon,
  TrophyIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { activities, site } from "@/lib/content";
import type { ActivityIcon } from "@/lib/types";

const icons: Record<ActivityIcon, typeof ResearchIcon> = {
  search: SearchIcon,
  research: ResearchIcon,
  robot: RobotIcon,
  trophy: TrophyIcon,
  community: CommunityIcon,
  mentor: MentorIcon,
};

export function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      tone="mist"
      eyebrow="What we do"
      title="From research to real-world impact"
      intro={site.whatWeDoIntro}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((a, i) => {
          const Icon = icons[a.icon] ?? ResearchIcon;
          return (
            <Reveal as="li" key={a.id} delay={i * 0.08} className="flex">
              <Card interactive className="group relative flex w-full flex-col overflow-hidden p-7">
                <div
                  aria-hidden="true"
                  className="bg-brand-bright/8 absolute -top-16 -right-16 size-40 rounded-full transition-transform duration-500 group-hover:scale-125"
                />
                <span className="from-brand-bright to-brand-mid shadow-brand-bright/30 relative mb-6 grid size-13 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg">
                  <Icon className="size-6" />
                </span>
                <h3 className="relative text-lg font-bold">{a.title}</h3>
                <p className="text-brand-navy/75 relative mt-3 leading-relaxed">{a.summary}</p>
              </Card>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
