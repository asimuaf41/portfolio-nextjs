import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Info,
  Lightbulb,
  ListOrdered,
  Tag,
  TriangleAlert,
} from "lucide-react";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { blogPosts } from "@/data/blog";
import {
  blogIconMap,
  formatBlogDateLong,
  slugifyHeading,
} from "@/lib/blog-icons";
import type { BlogCallout } from "@/types/content";

type Params = { slug: string };

const calloutMeta: Record<
  BlogCallout["variant"],
  { icon: typeof Info; label: string }
> = {
  tip: { icon: Lightbulb, label: "Tip" },
  warning: { icon: TriangleAlert, label: "Heads up" },
  note: { icon: Info, label: "Note" },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const Icon = blogIconMap[post.icon];
  const currentIndex = blogPosts.findIndex((item) => item.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  const sectionsWithIds = post.sections.map((section) => ({
    ...section,
    id: slugifyHeading(section.heading),
  }));

  return (
    <main className={`blog-article accent-${post.accent}`}>
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          author: { "@type": "Person", name: "Asim Ali" },
          keywords: post.tags.join(", "),
        }}
      />

      <Link href="/blog" className="blog-article-back">
        <ArrowLeft size={15} />
        Back to all articles
      </Link>

      <header className="blog-article-hero">
        <div className="blog-article-hero-glow" aria-hidden="true" />
        <span className="blog-article-icon" aria-hidden="true">
          <Icon size={36} strokeWidth={1.7} />
        </span>
        <span className="blog-card-category">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="blog-article-excerpt">{post.excerpt}</p>
        <div className="blog-article-meta">
          <span>
            <CalendarDays size={14} />
            {formatBlogDateLong(post.publishedAt)}
          </span>
          <span>
            <Clock size={14} />
            {post.readTime}
          </span>
          <span>
            <Tag size={14} />
            {post.tags.length} tags
          </span>
        </div>
        <div className="blog-article-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="blog-article-layout">
        <article className="blog-article-body">
          <p className="blog-article-intro">{post.intro}</p>

          {sectionsWithIds.map((section) => {
            const Callout = section.callout
              ? calloutMeta[section.callout.variant].icon
              : null;
            const calloutLabel = section.callout
              ? calloutMeta[section.callout.variant].label
              : null;

            return (
              <section
                key={section.id}
                id={section.id}
                className="blog-article-section"
              >
                <h2>{section.heading}</h2>

                {section.paragraphs?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {section.bullets ? (
                  <ul className="blog-article-bullets">
                    {section.bullets.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.code ? (
                  <figure className="blog-article-code">
                    <figcaption>
                      <span className="blog-article-code-lang">
                        {section.code.language}
                      </span>
                    </figcaption>
                    <pre>
                      <code>{section.code.snippet}</code>
                    </pre>
                  </figure>
                ) : null}

                {section.callout && Callout ? (
                  <aside
                    className={`blog-article-callout callout-${section.callout.variant}`}
                  >
                    <span className="blog-article-callout-icon">
                      <Callout size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <strong>
                        {calloutLabel} — {section.callout.title}
                      </strong>
                      <p>{section.callout.text}</p>
                    </div>
                  </aside>
                ) : null}
              </section>
            );
          })}

          <aside className="blog-article-conclusion">
            <h3>Final thoughts</h3>
            <p>{post.conclusion}</p>
          </aside>
        </article>

        <aside className="blog-article-toc" aria-label="Table of contents">
          <div className="blog-article-toc-inner">
            <span className="blog-article-toc-title">
              <ListOrdered size={14} />
              On this page
            </span>
            <ol>
              {sectionsWithIds.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span className="blog-article-toc-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      {(prevPost || nextPost) && (
        <nav className="blog-article-nav" aria-label="Other articles">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className={`blog-article-nav-card accent-${prevPost.accent}`}
            >
              <span className="blog-article-nav-label">
                <ArrowLeft size={14} /> Previous
              </span>
              <span className="blog-article-nav-title">{prevPost.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className={`blog-article-nav-card accent-${nextPost.accent} is-next`}
            >
              <span className="blog-article-nav-label">
                Next <ArrowRight size={14} />
              </span>
              <span className="blog-article-nav-title">{nextPost.title}</span>
            </Link>
          ) : null}
        </nav>
      )}
    </main>
  );
}
