"use client";

import { MotionConfig as FramerMotionConfig } from "framer-motion";

/** Makes every Framer Motion animation honour the visitor's reduced-motion setting. */
export function MotionConfig({ children }: { children: React.ReactNode }) {
  return <FramerMotionConfig reducedMotion="user">{children}</FramerMotionConfig>;
}
