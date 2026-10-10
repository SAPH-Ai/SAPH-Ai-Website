"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}

/** Fades and lifts its children into view once, when scrolled to. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
