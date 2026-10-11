import { site } from "@/lib/site";
import { ExternalLinkIcon } from "./Icons";

/** "Join Us" link to the membership form (site.json → joinUrl). Hidden if no link is set. */
export function JoinUsButton({
  className = "",
  size = "md",
  onClick,
}: {
  className?: string;
  size?: "sm" | "md";
  onClick?: () => void;
}) {
  if (!site.joinUrl) return null;
  const sizes = {
    sm: "min-h-10 px-5 py-2 text-sm",
    md: "min-h-12 px-6 py-3 text-[0.95rem]",
  };
  return (
    <a
      href={site.joinUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`bg-brand-action hover:bg-brand-action-hover inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white shadow-[0_10px_30px_-10px_rgba(26,134,197,0.7)] transition-colors ${sizes[size]} ${className}`}
    >
      Join Us
      <ExternalLinkIcon className="size-4" />
      <span className="sr-only">(opens a form in a new tab)</span>
    </a>
  );
}
