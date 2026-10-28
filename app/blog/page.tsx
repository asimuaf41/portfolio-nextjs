import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Pin, Sparkles, Tag as TagIcon } from "lucide-react";
import { BlogMeta } from "@/components/blog-meta";
import { BlogPostCard } from "@/components/blog-post-card";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { PageTransition } from "@/components/page-transition";
import { BlogTopicNav } from "@/components/blog-topic-nav";
import { SectionTitle } from "@/components/section-title";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { blogPosts } from "@/data/blog";
import { blogPageSections, isNewPost } from "@/lib/blog";
import { blogIconMap } from "@/lib/blog-icons";
import { createPageMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — AI, Automation, Full-Stack, and Startups",
  description:
    "Articles by Asim Ali on AI agents and RAG, n8n automation, full-stack Next.js systems, and shipping an MVP. Pinned flagship pieces, a most-popular list, and reading time on every post.",
  path: "/blog",
  keywords: [
    "AI agent blog",
    "n8n automation",
    "full-stack AI",
    "startup MVP",
    "RAG tutorials",
    "Claude API articles",
    "Cursor AI development",
    "Next.js AI engineering",
  ],
});

export default function BlogPage() {
  const { pinned, popular, archive } = blogPageSections();
  const [lead, ...alsoPinned] = pinned;
  const ordered = [...pinned, ...popular, ...archive];
  const totalCategories = new Set(blogPosts.map((post) => post.category)).size;
  const totalTags = new Set(blogPosts.flatMap((post) => post.tags)).size;

  if (!lead) {
    return (
      <main className="blog-page">
        <SectionTitle title="Blog" />
        <p>No articles yet.</p>
      </main>
    );
  }

  const LeadIcon = blogIconMap[lead.icon];

  return (
    <PageTransition>
      <main className="blog-page">
        <SeoJsonLd
          data={itemListJsonLd({
            name: "Asim Ali — Blog",
            description:
              "Articles on AI, automation, full-stack engineering, and startups.",
            path: "/blog",
            items: ordered.map((post) => ({
              name: post.title,
              path: `/blog/${post.slug}`,
            })),
          })}
        />

        <SectionTitle title="Blog" />

        <header className="blog-intro">
          <span className="blog-intro-pill">
            <Sparkles size={14} />
            Notes from the AI x engineering frontier
          </span>
          <h2>Practical writing on AI, automation, full-stack, and startups.</h2>
          <p>
            Real-world articles on agents, RAG, n8n workflows, streaming
            tool-calling, Cursor, and turning an idea into a shipped MVP —
            grouped so you can start with the pieces I would hand a new reader.
          </p>

          <dl className="blog-stats" aria-label="Blog statistics">
            <div className="blog-stat">
              <dt>
                <BookOpen size={14} />
                Articles
              </dt>
              <dd>
                <AnimatedNumber value={blogPosts.length} />
              </dd>
            </div>
            <div className="blog-stat">
              <dt>
                <TagIcon size={14} />
                Topics
              </dt>
              <dd>
                <AnimatedNumber value={totalCategories} />
              </dd>
            </div>
            <div className="blog-stat">
              <dt>
                <Sparkles size={14} />
                Tags
              </dt>
              <dd>
                <AnimatedNumber value={totalTags} />
              </dd>
            </div>
          </dl>
        </header>

        <BlogTopicNav active="all" />

        <section className="blog-block" aria-labelledby="pinned-heading">
          <Reveal as="header" className="blog-block-head">
            <h2 id="pinned-heading">Pinned</h2>
            <p>The three articles I want a new reader to open first.</p>
          </Reveal>

          <Link
            href={`/blog/${lead.slug}`}
            transitionTypes={["nav-forward"]}
            className={`blog-featured accent-${lead.accent} blog-reveal`}
            aria-label={`Read article: ${lead.title}`}
          >
            <div className="blog-featured-glow" aria-hidden="true" />
            <div className="blog-featured-icon" aria-hidden="true">
              <LeadIcon size={32} strokeWidth={1.7} />
            </div>
            <div className="blog-featured-body">
              <div className="blog-kicker">
                <span className="blog-flag blog-flag-pin">
                  <Pin size={12} />
                  Pinned
                </span>
                {isNewPost(lead.publishedAt) ? (
                  <span className="blog-flag blog-flag-new">New</span>
                ) : null}
                <span className="blog-card-category">{lead.category}</span>
              </div>
              <h3>{lead.title}</h3>
              <p>{lead.excerpt}</p>
              <BlogMeta post={lead} />
              <span className="blog-featured-cta">
                Read article <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {alsoPinned.length > 0 ? (
            <Stagger className="blog-grid">
              {alsoPinned.map((post) => (
                <BlogPostCard key={post.slug} post={post} showPinned />
              ))}
            </Stagger>
          ) : null}
        </section>

        <section className="blog-block" aria-labelledby="popular-heading">
          <Reveal as="header" className="blog-block-head">
            <h2 id="popular-heading">Most popular</h2>
            <p>
              Ranked by the pieces that best show how I think about shipping,
              tooling, and production systems.
            </p>
          </Reveal>
          <Stagger as="ol" className="blog-popular">
            {popular.map((post, index) => (
              <StaggerItem
                as="li"
                key={post.slug}
                className={`accent-${post.accent}`}
              >
                <span className="blog-popular-rank">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="blog-popular-body">
                  <Link
                    href={`/blog/${post.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="blog-popular-title"
                  >
                    {post.title}
                  </Link>
                  <div className="blog-popular-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <BlogMeta post={post} showDate={false} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {archive.length > 0 ? (
          <section className="blog-block" aria-labelledby="archive-heading">
            <Reveal as="header" className="blog-block-head">
              <h2 id="archive-heading">All articles</h2>
              <p>Archive, newest first.</p>
            </Reveal>
            <Stagger className="blog-grid">
              {archive.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </Stagger>
          </section>
        ) : null}
      </main>
    </PageTransition>
  );
}
