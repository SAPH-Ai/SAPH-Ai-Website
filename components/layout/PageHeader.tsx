import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import { Container } from "./Container";
import { WaveDivider } from "./WaveDivider";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  back?: { href: string; label: string };
  children?: React.ReactNode;
}

/** Dark navy banner used at the top of every inner page. */
export function PageHeader({ eyebrow, title, intro, back, children }: PageHeaderProps) {
  return (
    <>
      <header className="bg-brand-navy relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-14 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_80%_at_85%_10%,rgba(26,134,197,0.45),transparent_65%),linear-gradient(180deg,#041a27,#072739)]"
        />
        <Container>
          {back && (
            <Link
              href={back.href}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-mist-200 hover:text-white"
            >
              <ArrowLeftIcon className="size-4" /> {back.label}
            </Link>
          )}
          {eyebrow && (
            <p className="text-brand-sky mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist-200">{intro}</p>}
          {children}
        </Container>
      </header>
      <WaveDivider from="navy" to="white" />
    </>
  );
}
