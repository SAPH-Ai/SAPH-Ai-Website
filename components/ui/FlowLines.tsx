/**
 * Faint flowing lines echoing the wave in the logo. Decorative only.
 * Place inside a `relative isolate overflow-hidden` section and position it with `className`.
 */
export function FlowLines({
  className = "",
  tone = "light",
  flip = false,
}: {
  className?: string;
  /** `light` = blue lines for white/grey sections, `dark` = white lines for navy sections. */
  tone?: "light" | "dark";
  /** Mirror horizontally (for lines entering from the left edge). */
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 300"
      fill="none"
      stroke="currentColor"
      className={`pointer-events-none absolute -z-10 hidden w-[420px] lg:block ${
        tone === "dark" ? "text-white/10" : "text-brand-mid/15"
      } ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 12}C100 ${60 + i * 12} 200 ${180 + i * 12} 400 ${100 + i * 12}`}
        />
      ))}
    </svg>
  );
}
