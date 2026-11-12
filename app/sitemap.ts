import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { getPublishedCaseStudies } from "@/data/case-studies";
import { projectDetails } from "@/data/project-details";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/case-studies", changeFrequency: "weekly", priority: 0.95 },
    { path: "/testimonials", changeFrequency: "monthly", priority: 0.8 },
    { path: "/resume", changeFrequency: "monthly", priority: 0.85 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog/topic/ai", changeFrequency: "weekly", priority: 0.75 },
    {
      path: "/blog/topic/automation",
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      path: "/blog/topic/full-stack",
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      path: "/blog/topic/startups",
      changeFrequency: "weekly",
      priority: 0.75,
    },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.4 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...getPublishedCaseStudies().map((study) => ({
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...projectDetails.map((detail) => ({
      url: `${siteConfig.url}/projects/${detail.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: post.pinned ? 0.85 : 0.7,
    })),
  ];
}
