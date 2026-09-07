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
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — AI Agents, RAG & Shipping Notes",
  description:
    "Practical articles by Asim Ali on multi-agent AI, production RAG with pgvector, streaming tool-calling, Cursor workflows, automation, and shipping faster with modern tooling.",
  path: "/blog",
  keywords: [
    "AI agent blog",
    "RAG tutorials",
    "Claude API articles",
    "Cursor AI development",
    "Next.js AI engineering",
  ],
});

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const [featured, ...rest] = posts;
  const FeaturedIcon = blogIconMap[featured.icon];
  const totalArticles = posts.length;
  const totalCategories = new Set(posts.map((p) => p.category)).size;
  const totalTags = new Set(posts.flatMap((p) => p.tags)).size;

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
          Real-world articles on multi-agent systems, production RAG, streaming
          tool-calling agents, Cursor workflows, and turning ideas into shipped
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
        className={`blog-featured accent-${featured.accent} blog-reveal`}
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
        {rest.map((post, index) => {
          const Icon = blogIconMap[post.icon];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`blog-card accent-${post.accent} blog-reveal`}
              style={{ animationDelay: `${120 + index * 70}ms` }}
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
