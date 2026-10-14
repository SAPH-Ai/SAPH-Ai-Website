import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { FlowLines } from "@/components/ui/FlowLines";
import { gallery } from "@/lib/content";

/** Photos shown on the home page; the rest are on /gallery. */
const HOME_LIMIT = 6;

export function Gallery() {
  if (!gallery.length) return null;
  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Moments from the field"
      intro="Exhibitions, workshops, competitions and community days."
      className="isolate overflow-hidden"
    >
      <FlowLines className="top-8 -right-24" />
      <GalleryGrid images={gallery.slice(0, HOME_LIMIT)} />
      <div className="mt-12 flex justify-center">
        <ButtonLink href="/gallery/" variant="ghost-dark" arrow>
          See more photos
        </ButtonLink>
      </div>
    </Section>
  );
}
