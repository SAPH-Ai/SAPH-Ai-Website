import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Wordmark } from "@/components/brand/Wordmark";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/lib/content";
import { navLinks } from "@/lib/nav";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-mist-200">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo variant="white" title={null} className="size-10" />
            <Wordmark tone="light" className="text-3xl" />
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed">{site.missionLine}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-sm font-semibold tracking-[0.16em] text-white uppercase">
            Quick links
          </h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold tracking-[0.16em] text-white uppercase">
            Connect
          </h2>
          <p>{site.contact.location}</p>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-1 block break-all hover:text-white hover:underline"
          >
            {site.contact.email}
          </a>
          <SocialLinks
            links={site.social}
            className="mt-5"
            itemClassName="bg-white/8 text-white hover:bg-brand-bright"
          />
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-mist-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Made with care by Musarrat Mahjabin.</p>
        </Container>
        {site.disclaimer && (
          <Container className="pb-6">
            <p className="text-xs leading-relaxed text-mist-300/80">
              <span className="font-semibold">Disclaimer:</span> {site.disclaimer}
            </p>
          </Container>
        )}
      </div>
    </footer>
  );
}
