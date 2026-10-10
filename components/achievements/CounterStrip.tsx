"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Stat } from "@/lib/types";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    const format = (v: number) => `${Math.round(v).toLocaleString("en-US")}${suffix}`;
    if (reduce) {
      el.textContent = format(value);
      return;
    }
    // Write straight to the DOM: no React re-render per animation frame.
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => (el.textContent = format(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        0{suffix}
      </span>
      <span className="sr-only">
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
    </>
  );
}

export function CounterStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/12 bg-white/10 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-brand-navy/80 flex flex-col-reverse gap-1 px-6 py-7 text-center backdrop-blur"
        >
          <dt className="text-sm font-medium text-mist-200">
            {stat.label}
            {stat.value === null && (
              <span className="block text-xs text-mist-300">(add number in site.json)</span>
            )}
          </dt>
          <dd className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {stat.value === null ? (
              <span aria-label="Not yet added">—</span>
            ) : (
              <Counter value={stat.value} suffix={stat.suffix} />
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
