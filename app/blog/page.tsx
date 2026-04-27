import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Sparkles,
  Tag as TagIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { blogPosts } from "@/data/blog";
import { blogIconMap, formatBlogDate } from "@/lib/blog-icons";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Hands-on articles about AI agents, Cursor, automation, dashboards, and shipping fast with modern tooling.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  const FeaturedIcon = blogIconMap[featured.icon];
  const totalArticles = blogPosts.length;
  const totalCategories = new Set(blogPosts.map((p) => p.category)).size;
  const totalTags = new Set(blogPosts.flatMap((p) => p.tags)).size;

  return (
    <main className="blog-page">
      <SectionTitle title="Blog" />

      <header className="blog-intro">
        <span className="blog-intro-pill">
          <Sparkles size={14} />
          Notes from the AI x engineering frontier
        </span>
        <h2>Practical writing on AI, automation, and shipping fast.</h2>
        <p>
          Real-world articles on building AI agents, using Cursor productively,
          designing AI-powered dashboards, and turning ideas into shipped
          products — written from the trenches.
        </p>

        <dl className="blog-stats" aria-label="Blog statistics">
          <div className="blog-stat">
            <dt>
              <BookOpen size={14} />
              Articles
            </dt>
            <dd>{totalArticles}</dd>
          </div>
          <div className="blog-stat">
            <dt>
              <TagIcon size={14} />
              Categories
            </dt>
            <dd>{totalCategories}</dd>
          </div>
          <div className="blog-stat">
            <dt>
              <Sparkles size={14} />
              Topics
            </dt>
            <dd>{totalTags}</dd>
          </div>
        </dl>
      </header>

      <Link
        href={`/blog/${featured.slug}`}
        className={`blog-featured accent-${featured.accent}`}
        aria-label={`Read article: ${featured.title}`}
      >
        <div className="blog-featured-glow" aria-hidden="true" />
        <div className="blog-featured-icon" aria-hidden="true">
          <FeaturedIcon size={32} strokeWidth={1.7} />
        </div>
        <div className="blog-featured-body">
          <span className="blog-featured-tag">Featured</span>
          <span className="blog-card-category">{featured.category}</span>
          <h3>{featured.title}</h3>
          <p>{featured.excerpt}</p>
          <div className="blog-card-meta">
            <span>
              <CalendarDays size={13} />
              {formatBlogDate(featured.publishedAt)}
            </span>
            <span>
              <Clock size={13} />
              {featured.readTime}
            </span>
          </div>
          <span className="blog-featured-cta">
            Read article <ArrowRight size={16} />
          </span>
        </div>
      </Link>

      <section className="blog-grid" aria-label="All blog posts">
        {rest.map((post) => {
          const Icon = blogIconMap[post.icon];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`blog-card accent-${post.accent}`}
              aria-label={`Read article: ${post.title}`}
            >
              <div className="blog-card-top">
                <span className="blog-card-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="blog-card-category">{post.category}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-tags">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="blog-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-meta">
                  <span>
                    <CalendarDays size={13} />
                    {formatBlogDate(post.publishedAt)}
                  </span>
                  <span>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>
                <span className="blog-card-cta" aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
