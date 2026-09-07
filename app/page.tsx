import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, PenLine } from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { HomeHeroIntro } from "@/components/home-hero-intro";
import { blogPosts } from "@/data/blog";
import { blogIconMap, formatBlogDate } from "@/lib/blog-icons";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "hire React developer",
    "AI agent freelancer",
    "Next.js SaaS developer",
    "Upwork Top Rated Plus",
  ],
});

export default function HomePage() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="home-page">
      <section className="home-hero">
        <HomeHeroIntro />
        <BackgroundTexture />
      </section>

      <section
        id="recent-writing"
        className="home-recent"
        aria-label="Recent articles"
      >
        <header className="home-recent-head">
          <div>
            <span className="blog-intro-pill">
              <PenLine size={14} />
              Recent writing & research
            </span>
            <h2>Latest from the blog</h2>
            <p>
              Fresh notes on multi-agent orchestration, production RAG,
              streaming tool-calling agents, and shipping fast with Cursor +
              Claude.
            </p>
          </div>
          <Link href="/blog" className="home-recent-cta">
            View all articles <ArrowRight size={16} />
          </Link>
        </header>

        <div className="home-recent-grid">
          {recentPosts.map((post, index) => {
            const Icon = blogIconMap[post.icon];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`home-recent-card accent-${post.accent}`}
                style={{ animationDelay: `${index * 90}ms` }}
                aria-label={`Read article: ${post.title}`}
              >
                <div className="home-recent-card-top">
                  <span className="blog-card-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="home-recent-card-foot">
                  <span>
                    <CalendarDays size={13} />
                    {formatBlogDate(post.publishedAt)}
                  </span>
                  <span>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
