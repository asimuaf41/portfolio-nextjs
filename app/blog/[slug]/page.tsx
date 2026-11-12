import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  Lightbulb,
  ListOrdered,
  TriangleAlert,
} from "lucide-react";
import { BlogMeta } from "@/components/blog-meta";
import { BlogPostCard } from "@/components/blog-post-card";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { PageTransition } from "@/components/page-transition";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { blogPosts } from "@/data/blog";
import { isoDuration, readTimeMinutes, relatedPosts, topicPath } from "@/lib/blog";
import { blogIconMap, slugifyHeading } from "@/lib/blog-icons";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  createPageMetadata,
} from "@/lib/seo";
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
  if (!post) {
    return createPageMetadata({
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: post.tags,
    tags: post.tags,
    section: post.category,
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
    image: post.image?.src ?? `/blog/${post.slug}/opengraph-image.png`,
    imageAlt: post.image?.alt ?? post.title,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const posts = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const Icon = blogIconMap[post.icon];
  const minutes = readTimeMinutes(post);
  const siblings = relatedPosts(post);
  const currentIndex = posts.findIndex((item) => item.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : null;

  const sectionsWithIds = post.sections.map((section) => ({
    ...section,
    id: slugifyHeading(section.heading),
  }));

  return (
    <PageTransition>
      <main className={`blog-article accent-${post.accent}`}>
        <SeoJsonLd
          data={articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            tags: post.tags,
            section: post.category,
            timeRequired: isoDuration(minutes),
            educationalLevel: post.difficulty,
          })}
        />
        <SeoJsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])}
        />

        <Link
          href="/blog"
          transitionTypes={["nav-back"]}
          className="blog-article-back"
        >
          <ArrowLeft size={15} />
          Back to all articles
        </Link>

        <header className="blog-article-hero blog-reveal">
          <div className="blog-article-hero-glow" aria-hidden="true" />
          <span className="blog-article-icon" aria-hidden="true">
            <Icon size={36} strokeWidth={1.7} />
          </span>
          <Link href={topicPath(post.category)} className="blog-card-category">
            {post.category}
          </Link>
          <h1>{post.title}</h1>
          <p className="blog-article-excerpt">{post.excerpt}</p>
          <BlogMeta
            post={post}
            className="blog-article-meta"
            dateStyle="long"
            iconSize={14}
          />
          <div className="blog-article-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-card-tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {post.image ? (
          <figure className="blog-article-banner blog-reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image.src}
              alt={post.image.alt}
              width={1400}
              height={1400}
              loading="eager"
            />
          </figure>
        ) : null}

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

                  {section.images?.map((image) => (
                    <figure key={image.src} className="blog-article-figure">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 480px) 80vw, 320px"
                      />
                      {image.caption ? (
                        <figcaption>{image.caption}</figcaption>
                      ) : null}
                    </figure>
                  ))}

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

        {siblings.length > 0 ? (
          <section className="blog-block" aria-labelledby="related-heading">
            <Reveal as="header" className="blog-block-head">
              <h2 id="related-heading">More in {post.category}</h2>
              <p>Other articles in this topic.</p>
            </Reveal>
            <Stagger className="blog-grid">
              {siblings.map((item) => (
                <BlogPostCard key={item.slug} post={item} />
              ))}
            </Stagger>
          </section>
        ) : null}

        {(prevPost || nextPost) && (
          <nav className="blog-article-nav" aria-label="Other articles">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                transitionTypes={["nav-back"]}
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
                transitionTypes={["nav-forward"]}
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
    </PageTransition>
  );
}
