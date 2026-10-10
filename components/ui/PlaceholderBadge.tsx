import { showPlaceholders } from "@/lib/site";

/** Orange dashed pill, used for project categories and "Placeholder" tags. */
export function DashedBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-dashed border-amber-500 bg-amber-50 px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide text-amber-800 uppercase ${className}`}
    >
      {children}
    </span>
  );
}

/** Small "Placeholder" tag shown on seeded content until real content replaces it. */
export function PlaceholderBadge({ show, className = "" }: { show?: boolean; className?: string }) {
  if (!show || !showPlaceholders) return null;
  return <DashedBadge className={className}>Placeholder</DashedBadge>;
}
