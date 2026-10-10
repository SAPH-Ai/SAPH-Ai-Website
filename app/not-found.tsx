import type { Metadata } from "next";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-brand-navy relative isolate grid min-h-[80dvh] place-items-center overflow-hidden px-4 pt-[var(--header-height)] text-center text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(26,134,197,0.35),transparent_65%)]"
      />
      <div>
        <Logo title={null} gap="#dce7ee" className="animate-float mx-auto size-28" />
        <p className="text-brand-sky mt-8 text-sm font-semibold tracking-[0.2em] uppercase">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">This page drained away</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-mist-200">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/projects/" variant="ghost-light">
            See our projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
