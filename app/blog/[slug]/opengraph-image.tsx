import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const alt = "Blog article by Asim Ali";
export const size = {
  width: siteConfig.ogImage.width,
  height: siteConfig.ogImage.height,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const title = post?.title ?? "Article";
  const category = post?.category ?? "Blog";
  const excerpt = post?.excerpt ?? siteConfig.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(circle at 90% 15%, #0b3d7a 0%, transparent 38%), linear-gradient(150deg, #06051f 0%, #10121b 60%, #0a1224 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            fontWeight: 700,
            color: "#7fc0ff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: title.length > 70 ? 42 : 52,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9ca4ba",
              lineHeight: 1.45,
              maxWidth: 980,
            }}
          >
            {excerpt.length > 160 ? `${excerpt.slice(0, 157)}...` : excerpt}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#8d94a8",
          }}
        >
          <span>Asim Ali</span>
          <span>asimportfolio-6fd1d.web.app/blog</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
