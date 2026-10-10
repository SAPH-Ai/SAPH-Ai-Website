import { socialIcons } from "./Icons";
import type { SocialLink } from "@/lib/types";

export function SocialLinks({
  links,
  className = "",
  itemClassName = "",
}: {
  links: SocialLink[];
  className?: string;
  itemClassName?: string;
}) {
  const visible = links.filter((l) => l.url);
  if (!visible.length) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {visible.map((link) => {
        const Icon = socialIcons[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`SAPH.Ai on ${link.label} (opens in a new tab)`}
              className={`grid size-11 place-items-center rounded-full transition ${itemClassName}`}
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
