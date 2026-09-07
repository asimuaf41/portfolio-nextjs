import type { Metadata } from "next";
import { BackgroundTexture } from "@/components/background-texture";
import { GalleryClient } from "@/components/gallery-client";
import { SectionTitle } from "@/components/section-title";
import { galleryImages } from "@/data/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Photo gallery from Asim Ali’s portfolio — personal moments and project snapshots from a React/Next.js & AI engineering career.",
  path: "/gallery",
  keywords: ["Asim Ali gallery", "developer portfolio photos"],
});

export default function GalleryPage() {
  return (
    <main className="relative">
      <SectionTitle title="Gallery" />
      <GalleryClient images={galleryImages} />
      <BackgroundTexture />
    </main>
  );
}
