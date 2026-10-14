import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from SAPH.Ai exhibitions, workshops, competitions and community days.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from the field"
        intro="Exhibitions, workshops, competitions and community days. Select a photo to enlarge it."
        back={{ href: "/#gallery", label: "Back to home" }}
      />
      <Container className="pt-6 pb-24">
        {gallery.length ? (
          <GalleryGrid images={gallery} />
        ) : (
          <p className="text-brand-navy/75 text-lg">Photos coming soon.</p>
        )}
      </Container>
    </>
  );
}
