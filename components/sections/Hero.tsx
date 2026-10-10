import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

/** One wave tile, repeated twice so it can slide by -50% in a seamless loop. */
function WaveLayer({
  className,
  d,
  animation,
}: {
  className: string;
  d: string;
  animation: string;
}) {
  return (
    <div className={`absolute inset-x-0 bottom-0 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 2880 160"
        preserveAspectRatio="none"
        className={`h-full w-[200%] ${animation}`}
        aria-hidden="true"
        focusable="false"
      >
        <path d={d} fill="currentColor" />
      </svg>
    </div>
  );
}

const waveA = "M0 80C240 20 480 20 720 80S1200 140 1440 80 1920 20 2160 80 2640 140 2880 80V160H0Z";
const waveB =
  "M0 100C180 60 360 50 540 80S900 140 1080 110 1320 50 1440 100 1800 60 1980 80 2340 140 2520 110 2760 50 2880 100V160H0Z";

export function Hero() {
  // The part after the first "." or "," is highlighted in blue.
  const match = site.tagline.match(/^(.+?[.,])\s+(.+)$/);
  const [first, rest] = match ? [match[1], match[2]] : [site.tagline, ""];
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-brand-navy relative isolate overflow-hidden pt-[var(--header-height)] text-white"
    >
      {/* Layered blue glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_75%_35%,rgba(26,134,197,0.45),transparent_65%),radial-gradient(ellipse_60%_50%_at_10%_90%,rgba(36,93,123,0.6),transparent_70%),linear-gradient(180deg,#041a27_0%,#072739_55%,#0b3550_100%)]"
      />
      {/* Faint node-network grid echoing the logo */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.07]"
        focusable="false"
      >
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <Container className="relative grid min-h-[min(88svh,860px)] items-center gap-12 pt-12 pb-40 lg:grid-cols-[1.25fr_1fr] lg:pt-8">
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-mist-100 backdrop-blur">
            <span className="bg-brand-sky size-2 rounded-full" aria-hidden="true" />
            Youth-led robotics · Bangladesh
          </p>
          <h1
            id="hero-heading"
            className="text-[2.15rem] leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]"
          >
            {first}{" "}
            <span className="from-brand-sky bg-gradient-to-r via-[#8fd0f5] to-white bg-clip-text text-transparent">
              {rest}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-mist-200 sm:text-xl">
            {site.heroSubline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/#projects" arrow>
              Our Projects
            </ButtonLink>
            <ButtonLink href="/#achievements" variant="ghost-light">
              Our Achievements
            </ButtonLink>
            <ButtonLink href="/#team" variant="ghost-light">
              Meet the Team
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[420px] sm:block" aria-hidden="true">
          <div className="bg-brand-bright/40 absolute inset-[8%] rounded-full blur-3xl" />
          <div className="animate-float relative">
            <Logo
              title={null}
              gap="#dce7ee"
              sizes="420px"
              className="w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </Container>

      <WaveLayer
        className="text-brand-bright/25 h-28 sm:h-36"
        d={waveB}
        animation="animate-wave-drift-slow"
      />
      <WaveLayer
        className="h-24 text-mist-700/45 sm:h-28"
        d={waveA}
        animation="animate-wave-drift"
      />
      <WaveLayer
        className="h-14 text-white sm:h-16"
        d={waveA}
        animation="animate-wave-drift-slow"
      />
    </section>
  );
}
