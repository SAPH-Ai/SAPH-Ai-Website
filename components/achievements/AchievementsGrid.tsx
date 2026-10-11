import { Reveal } from "@/components/ui/Reveal";
import type { Achievement } from "@/lib/types";
import { AchievementCard } from "./AchievementCard";

export function AchievementsGrid({
  items,
  tone = "light",
  headingLevel = "h3",
}: {
  items: Achievement[];
  tone?: "dark" | "light";
  headingLevel?: "h2" | "h3";
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item.id} delay={(i % 3) * 0.08}>
          <AchievementCard item={item} tone={tone} headingLevel={headingLevel} />
        </Reveal>
      ))}
    </ul>
  );
}
