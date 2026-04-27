import type { Metadata } from "next";
import { BackgroundTexture } from "@/components/background-texture";
import { GalleryClient } from "@/components/gallery-client";
import { SectionTitle } from "@/components/section-title";
import { galleryImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Personal and project gallery images from Asim Ali portfolio.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main className="relative">
      <SectionTitle title="Gallery" />
      <GalleryClient images={galleryImages} />
      <BackgroundTexture />
    </main>
  );
}
