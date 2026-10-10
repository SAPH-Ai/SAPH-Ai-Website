import Image from "next/image";
import { site } from "@/lib/site";

interface WordmarkProps {
  /** `light` = white letters for dark backgrounds, `dark` = black letters for light backgrounds. */
  tone?: "dark" | "light";
  /** Size it with font-size (e.g. `text-2xl`): the wordmark is as tall as the capital letters. */
  className?: string;
  priority?: boolean;
}

/** The official "SAPH.Ai" wordmark (PNG artwork from assets-source/, built by `npm run brand`). */
export function Wordmark({ tone = "dark", className = "", priority = false }: WordmarkProps) {
  return (
    <Image
      src={tone === "light" ? "/brand/saph-wordmark-light.png" : "/brand/saph-wordmark-dark.png"}
      alt={site.name}
      width={1200}
      height={220}
      priority={priority}
      className={`inline-block h-[0.8em] w-auto ${className}`}
    />
  );
}
