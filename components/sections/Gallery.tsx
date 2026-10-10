import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Section } from "@/components/layout/Section";
import { gallery } from "@/lib/content";

export function Gallery() {
  if (!gallery.length) return null;
  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Moments from the field"
      intro="Exhibitions, workshops, competitions and community days."
    >
      <GalleryGrid images={gallery} />
    </Section>
  );
}
