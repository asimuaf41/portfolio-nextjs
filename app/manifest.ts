import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} Portfolio`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#10121b",
    theme_color: "#037fff",
    lang: siteConfig.language,
    icons: [
      {
        src: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
