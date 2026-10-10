"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ZoomIcon } from "@/components/ui/Icons";
import type { GalleryImage } from "@/lib/types";

/** Masonry photo grid with a keyboard-friendly lightbox. */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = index === null ? null : images[index];

  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  return (
    <>
      <ul className="columns-2 gap-4 md:columns-3 [&>li]:mb-4">
        {images.map((img, i) => (
          <li key={img.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-haspopup="dialog"
              className="group relative block w-full overflow-hidden rounded-2xl bg-mist-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 768px) 360px, 50vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="bg-brand-navy/0 group-hover:bg-brand-navy/40 absolute inset-0 grid place-items-center text-white opacity-0 transition group-hover:opacity-100"
              >
                <ZoomIcon className="size-8" />
              </span>
              <span className="sr-only">Open photo: {img.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        aria-label="Photo viewer"
        className="m-auto max-h-[92vh] w-[min(94vw,1100px)] overflow-visible bg-transparent p-0"
      >
        {current && (
          <figure className="relative">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="94vw"
              className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-mist-100">
              {current.caption}{" "}
              <span className="text-mist-300">
                ({(index ?? 0) + 1} / {images.length})
              </span>
            </figcaption>
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                type="button"
                onClick={() => setIndex(null)}
                aria-label="Close photo viewer"
                className="bg-brand-ink/70 hover:bg-brand-ink grid size-11 place-items-center rounded-full text-white backdrop-blur"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="bg-brand-ink/70 hover:bg-brand-ink absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full text-white backdrop-blur"
                >
                  <ChevronLeftIcon className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="bg-brand-ink/70 hover:bg-brand-ink absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full text-white backdrop-blur"
                >
                  <ChevronRightIcon className="size-6" />
                </button>
              </>
            )}
          </figure>
        )}
      </dialog>
    </>
  );
}
