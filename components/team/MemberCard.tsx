import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import type { Member } from "@/lib/types";
import { MemberLinks } from "./MemberLinks";

export function MemberCard({
  member,
  onOpen,
  headingLevel = "h4",
}: {
  member: Member;
  onOpen: () => void;
  headingLevel?: "h3" | "h4";
}) {
  const Heading = headingLevel;
  return (
    <Card interactive className="group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-mist-100">
        <Image
          src={member.photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="from-brand-navy/50 absolute inset-0 bg-gradient-to-t via-transparent"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <PlaceholderBadge show={member.placeholder} className="mb-2 self-start" />
        <Heading className="text-lg font-bold">
          {/* Stretched button: the card opens the full profile. */}
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="focus-visible:after:outline-brand-bright text-left after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-2"
          >
            {member.name}
            <span className="sr-only">, view full profile</span>
          </button>
        </Heading>
        <p className="text-brand-mid text-sm font-semibold">{member.role}</p>
        <p className="text-brand-navy/75 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed">
          {member.bio}
        </p>
        <div className="mt-4">
          <MemberLinks member={member} />
        </div>
      </div>
    </Card>
  );
}
