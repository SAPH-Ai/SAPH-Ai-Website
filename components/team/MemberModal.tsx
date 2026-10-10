"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import type { Member } from "@/lib/types";
import { MemberLinks } from "./MemberLinks";

/** Full profile in a native <dialog> (focus trap, Escape and focus return built in). */
export function MemberModal({ member, onClose }: { member: Member | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (member && !dialog.open) dialog.showModal();
    if (!member && dialog.open) dialog.close();
  }, [member]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="member-modal-name"
      className="text-brand-navy m-auto w-[min(92vw,720px)] overflow-hidden rounded-[var(--radius-card)] bg-white p-0 shadow-2xl"
    >
      {member && (
        <div className="grid sm:grid-cols-[240px_1fr]">
          <div className="relative aspect-square bg-mist-100 sm:aspect-auto">
            <Image
              src={member.photo}
              alt={`Photo of ${member.name}`}
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
          <div className="relative max-h-[70vh] overflow-y-auto p-7 sm:max-h-[520px]">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="text-brand-mid absolute top-3 right-3 grid size-10 place-items-center rounded-full hover:bg-mist-100"
            >
              <CloseIcon className="size-5" />
            </button>
            <PlaceholderBadge show={member.placeholder} className="mb-3" />
            <h2 id="member-modal-name" className="pr-10 text-2xl font-extrabold">
              {member.name}
            </h2>
            <p className="text-brand-mid font-semibold">{member.role}</p>
            <div className="text-brand-navy/80 mt-5 space-y-4 leading-relaxed">
              {(member.intro.length ? member.intro : [member.bio]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6">
              <MemberLinks member={member} />
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
