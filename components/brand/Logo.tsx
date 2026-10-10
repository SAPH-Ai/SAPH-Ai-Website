import Image from "next/image";

const SOURCES = {
  color: "/brand/saph-mark.png",
  white: "/brand/saph-mark-white.png",
  black: "/brand/saph-mark-black.png",
} as const;

export type LogoVariant = keyof typeof SOURCES;

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  /** Accessible name. Pass `null` when the logo sits next to visible brand text. */
  title?: string | null;
  /**
   * Colour shown through the lines between the layers (they are transparent in the
   * artwork). Set it on dark backgrounds, e.g. "#dce7ee", so the lines stay visible.
   */
  gap?: string;
  /** Rendered width, for the browser's image size hint. */
  sizes?: string;
  priority?: boolean;
}

/** The official SAPH.Ai mark (PNG artwork from assets-source/, built by `npm run brand`). */
export function Logo({
  variant = "color",
  className = "",
  title = "SAPH.Ai logo",
  gap,
  sizes = "64px",
  priority = false,
}: LogoProps) {
  return (
    <span className={`relative inline-block aspect-square ${className}`}>
      {gap && (
        <span
          aria-hidden="true"
          className="absolute inset-[1.5%] rounded-[14%]"
          style={{ backgroundColor: gap }}
        />
      )}
      <Image
        src={SOURCES[variant]}
        alt={title ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
    </span>
  );
}
