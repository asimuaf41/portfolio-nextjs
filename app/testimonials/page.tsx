import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { TestimonialsSection } from "@/components/home-testimonials";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Testimonials",
  description:
    "Client feedback for Asim Ali, led by an ongoing full-time React partnership with Method — more than four years and 4,249+ hours.",
  path: "/testimonials",
  keywords: [
    "Asim Ali testimonials",
    "Upwork reviews",
    "Method platform",
    "React developer reviews",
    "client feedback",
  ],
});

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">
      <SectionTitle
        title="Testimonials"
        subtitle="Method leads this page. The reviews below it are separate Upwork contracts."
      />
      <TestimonialsSection />
    </main>
  );
}
