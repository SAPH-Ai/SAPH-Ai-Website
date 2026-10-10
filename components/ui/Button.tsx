import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-action text-white hover:bg-brand-action-hover shadow-[0_10px_30px_-10px_rgba(26,134,197,0.7)]",
  secondary: "bg-white text-brand-navy hover:bg-mist-100",
  "ghost-light": "border border-white/35 text-white hover:bg-white/10",
  "ghost-dark": "border border-brand-mid/30 text-brand-mid hover:bg-mist-100",
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}
