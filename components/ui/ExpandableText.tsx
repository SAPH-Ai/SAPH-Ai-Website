"use client";

import { useEffect, useId, useRef, useState } from "react";

/** Paragraph clamped to a few lines, with a "Read more" toggle when it overflows. */
// Static class names so Tailwind generates them.
const clamp = {
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
} as const;

export function ExpandableText({
  text,
  lines = 6,
  className = "",
  buttonClassName = "",
}: {
  text: string;
  /** Lines shown before "Read more". */
  lines?: keyof typeof clamp;
  className?: string;
  buttonClassName?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const id = useId();
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      if (!expanded) setOverflows(el.scrollHeight > el.clientHeight + 1);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <div>
      <p id={id} ref={ref} className={`${expanded ? "" : clamp[lines]} ${className}`}>
        {text}
      </p>
      {(overflows || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((v) => !v)}
          className={`mt-2 text-sm font-semibold hover:underline ${buttonClassName}`}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
