import { TimelineItem } from "./TimelineItem";
import type { Achievement } from "@/lib/types";

export function Timeline({
  items,
  tone = "dark",
  headingLevel = "h3",
}: {
  items: Achievement[];
  tone?: "dark" | "light";
  headingLevel?: "h2" | "h3";
}) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className={`absolute top-2 bottom-2 left-[13px] w-0.5 sm:left-[21px] ${
          tone === "dark"
            ? "from-brand-bright bg-gradient-to-b via-white/20 to-transparent"
            : "from-brand-bright bg-gradient-to-b via-mist-200 to-transparent"
        }`}
      />
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} tone={tone} headingLevel={headingLevel} />
      ))}
    </ol>
  );
}
