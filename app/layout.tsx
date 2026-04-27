import type { Metadata } from "next";
import Script from "next/script";
import { SiteLayout } from "@/components/site-layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asimportfolio-6fd1d.web.app"),
  title: {
    default: "Asim Ali | Full-Stack JavaScript Engineer",
    template: "%s | Asim Ali",
  },
  description:
    "Portfolio of Asim Ali, a full-stack JavaScript engineer focused on modern React, Next.js, and SEO-first web applications.",
  openGraph: {
    title: "Asim Ali Portfolio",
    description:
      "Modern portfolio with case studies, projects, and engineering insights.",
    images: ["/profile.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asim Ali Portfolio",
    description:
      "Full-stack engineer portfolio with projects and performance-focused implementations.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script id="tawkto-widget" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/601d7c06c31c9117cb764004/1etpiouqr";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Asim Ali Portfolio",
              url: "https://asimportfolio-6fd1d.web.app",
            }),
          }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
