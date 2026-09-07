import type { Metadata } from "next";

export const siteConfig = {
  name: "Asim Ali",
  shortName: "Asim Portfolio",
  title: "Asim Ali | React/Next.js & AI Agent Developer",
  description:
    "Hire Asim Ali — Top Rated Plus full-stack engineer building React/Next.js SaaS, AI agents with Claude & OpenAI, RAG systems, and production Node.js APIs.",
  url: "https://asimportfolio-6fd1d.web.app",
  locale: "en_US",
  language: "en",
  email: "asimuaf41@gmail.com",
  phone: "+923026046119",
  location: "Sangla Hill, Nankana Sahib, Pakistan",
  twitterHandle: "@MianAsimAli6",
  ogImage: {
    /** Stable share card (also regenerated via app/opengraph-image.tsx). */
    url: "/og-share.png",
    width: 1200,
    height: 630,
    alt: "Asim Ali — React/Next.js & AI Agent Developer",
  },
  profileImage: "/asim-30-june-profile.jpg",
  keywords: [
    "Asim Ali",
    "React developer",
    "Next.js developer",
    "AI agent developer",
    "full-stack JavaScript",
    "Claude API",
    "OpenAI",
    "RAG",
    "Supabase",
    "Node.js freelancer",
    "Upwork Top Rated Plus",
  ],
  sameAs: [
    "https://www.linkedin.com/in/asim-ali-857a4113b/",
    "https://github.com/asimuaf41",
    "https://twitter.com/MianAsimAli6",
    "https://www.upwork.com/freelancers/asimali170",
  ],
} as const;

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  /** Use absolute title (skip "%s | Asim Ali" template). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  section?: string;
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalized = path === "/" ? "" : path;
  return `${siteConfig.url}${normalized}`;
}

function resolveImage(image?: string) {
  const url = image ?? siteConfig.ogImage.url;
  return {
    url,
    width: siteConfig.ogImage.width,
    height: siteConfig.ogImage.height,
    alt: siteConfig.ogImage.alt,
  };
}

/** Build Next.js Metadata with canonical, Open Graph, and Twitter cards. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  imageAlt,
  type = "website",
  absoluteTitle = false,
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors = [siteConfig.name],
  tags,
  section,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = {
    ...resolveImage(image),
    alt: imageAlt ?? title,
  };
  const mergedKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords]),
  );

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: mergedKeywords,
    authors: authors.map((name) => ({ name, url: siteConfig.url })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name} Portfolio`,
      locale: siteConfig.locale,
      type,
      images: [ogImage],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors,
            tags,
            section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.profileImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: "React / Next.js & AI Agent Developer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sangla Hill",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI agents",
      "Claude API",
      "OpenAI",
      "RAG",
      "Supabase",
      "Stripe",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  publishedAt,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(path),
    image: [absoluteUrl(`${path}/opengraph-image.png`)],
    keywords: tags.join(", "),
    inLanguage: siteConfig.language,
  };
}
