"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { Member } from "@/lib/types";
import { MemberCard } from "./MemberCard";
import { MemberModal } from "./MemberModal";

interface TeamGridProps {
  groups: { id: string; title: string; members: Member[] }[];
  /** Heading level of the group titles; card names sit one level below. */
  groupHeading?: "h2" | "h3";
}

export function TeamGrid({ groups, groupHeading = "h3" }: TeamGridProps) {
  const [selected, setSelected] = useState<Member | null>(null);
  const GroupHeading = groupHeading;
  const cardHeading = groupHeading === "h2" ? "h3" : "h4";

  return (
    <>
      <div className="space-y-14">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={`team-${group.id}`}>
            <GroupHeading
              id={`team-${group.id}`}
              className="text-brand-navy mb-6 flex items-center gap-4 text-xl font-bold"
            >
              {group.title}
              <span aria-hidden="true" className="h-px flex-1 bg-mist-200" />
            </GroupHeading>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {group.members.map((member, i) => (
                <Reveal as="li" key={member.slug} delay={(i % 4) * 0.06}>
                  <MemberCard
                    member={member}
                    headingLevel={cardHeading}
                    onOpen={() => setSelected(member)}
                  />
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
