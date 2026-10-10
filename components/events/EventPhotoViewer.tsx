"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import type { EventPhoto } from "@/lib/types";

const navButton =
  "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-brand-ink/70 text-white backdrop-blur hover:bg-brand-ink";

/** Large photo with previous/next arrows, thumbnails and ← → keyboard support. */
export function EventPhotoViewer({ photos }: { photos: EventPhoto[] }) {
  const [index, setIndex] = useState(0);
  const many = photos.length > 1;
  const step = (delta: number) => setIndex((i) => (i + delta + photos.length) % photos.length);
  const current = photos[index];

  return (
    <section
      aria-label="Event photos"
      className="bg-brand-ink overflow-hidden rounded-[var(--radius-card)]"
      onKeyDown={(e) => {
        if (!many) return;
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-contain"
        />
        {many && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className={`${navButton} left-3`}
            >
              <ChevronLeftIcon className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className={`${navButton} right-3`}
            >
              <ChevronRightIcon className="size-6" />
            </button>
            <p
              aria-live="polite"
              className="bg-brand-ink/70 absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
            >
              Photo {index + 1} of {photos.length}
            </p>
          </>
        )}
      </div>
      {many && (
        <ul className="bg-brand-navy flex gap-2 overflow-x-auto p-3">
          {photos.map((photo, i) => (
            <li key={photo.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}: ${photo.alt}`}
                aria-current={i === index}
                className={`relative block h-14 w-20 overflow-hidden rounded-lg ring-2 transition sm:h-16 sm:w-24 ${
                  i === index ? "ring-brand-sky" : "opacity-60 ring-transparent hover:opacity-100"
                }`}
              >
                <Image src={photo.src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
