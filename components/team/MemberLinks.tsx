import { FacebookIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import type { Member } from "@/lib/types";

const items = [
  { key: "linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "github", label: "GitHub", Icon: GitHubIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "email", label: "Email", Icon: MailIcon },
] as const;

export function MemberLinks({ member }: { member: Member }) {
  const links = items.filter(({ key }) => member.links[key]);
  if (!links.length) return null;
  return (
    <ul className="flex gap-1.5">
      {links.map(({ key, label, Icon }) => {
        const value = member.links[key]!;
        const href = key === "email" ? `mailto:${value}` : value;
        const external = key !== "email";
        return (
          <li key={key}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={`${member.name} on ${label}${external ? " (opens in a new tab)" : ""}`}
              className="text-brand-mid hover:bg-brand-mid relative z-10 grid size-10 place-items-center rounded-full bg-mist-50 transition hover:text-white"
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
