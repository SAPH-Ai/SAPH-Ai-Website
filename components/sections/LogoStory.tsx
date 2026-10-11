import { AnimatedLogo } from "@/components/brand/AnimatedLogo";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/layout/Container";
import { NetworkIcon, WavesIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function LogoStory() {
  const story = site.logoStory;
  return (
    <section
      id="logo-story"
      aria-labelledby="logo-story-heading"
      className="text-brand-navy relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#e6eef3_0%,#c3d4df_45%,#7fa3b8_100%)] py-20 sm:py-24"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="mx-auto w-full max-w-[400px]">
          <AnimatedLogo className="aspect-square w-full" />
          <div className="mt-10 flex justify-center">
            <Wordmark className="text-5xl" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-brand-mid mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Logo story
          </p>
          <h2
            id="logo-story-heading"
            className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            Where nature meets technology
          </h2>
          <p className="text-brand-navy/80 mt-4 text-lg leading-relaxed">{story.intro}</p>

          <dl className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-2xl bg-white/60 p-5 backdrop-blur-md">
              <dt className="bg-brand-bright grid size-11 shrink-0 place-items-center rounded-xl text-white">
                <NetworkIcon className="size-5" />
                <span className="sr-only">The upper line with nodes</span>
              </dt>
              <dd className="leading-relaxed">{story.nodes}</dd>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/60 p-5 backdrop-blur-md">
              <dt className="bg-brand-navy grid size-11 shrink-0 place-items-center rounded-xl text-white">
                <WavesIcon className="size-5" />
                <span className="sr-only">The lower wave</span>
              </dt>
              <dd className="leading-relaxed">{story.wave}</dd>
            </div>
          </dl>
          <p className="text-brand-navy/80 mt-6 leading-relaxed">{story.together}</p>
        </Reveal>
      </Container>
    </section>
  );
}
