interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** `glass` is for dark sections; `solid` for light ones. */
  variant?: "solid" | "glass";
  interactive?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "solid",
  interactive = false,
}: CardProps) {
  const base =
    variant === "glass"
      ? "border border-white/12 bg-white/[0.06] backdrop-blur-md"
      : "border border-mist-100 bg-white shadow-[0_1px_2px_rgba(7,39,57,0.04),0_12px_32px_-12px_rgba(7,39,57,0.14)]";
  const hover = interactive
    ? "transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(7,39,57,0.28)] focus-within:-translate-y-1.5"
    : "";
  return (
    <div className={`rounded-[var(--radius-card)] ${base} ${hover} ${className}`}>{children}</div>
  );
}
