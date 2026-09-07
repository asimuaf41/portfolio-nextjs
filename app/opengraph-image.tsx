import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const alt = siteConfig.ogImage.alt;
export const size = {
  width: siteConfig.ogImage.width,
  height: siteConfig.ogImage.height,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(circle at 15% 20%, #0b3d7a 0%, transparent 42%), radial-gradient(circle at 85% 10%, #12325a 0%, transparent 40%), linear-gradient(145deg, #06051f 0%, #10121b 55%, #0a1224 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#7fc0ff",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#037fff",
            }}
          />
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Asim Ali
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#c5cce0",
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            React / Next.js & AI Agent Developer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9ca4ba",
              lineHeight: 1.45,
              maxWidth: 880,
            }}
          >
            SaaS platforms · Claude & OpenAI agents · RAG · Node.js APIs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8d94a8",
          }}
        >
          <span>Upwork Top Rated Plus</span>
          <span>asimportfolio-6fd1d.web.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
