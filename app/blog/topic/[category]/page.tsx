import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogPostCard } from "@/components/blog-post-card";
import { Stagger } from "@/components/motion/stagger";
import { PageTransition } from "@/components/page-transition";
import { BlogTopicNav } from "@/components/blog-topic-nav";
import { SectionTitle } from "@/components/section-title";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { blogTopicBySlug, blogTopics } from "@/data/blog-topics";
import { postsInCategory } from "@/lib/blog";
import { createPageMetadata, itemListJsonLd } from "@/lib/seo";

type Params = { category: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogTopics.map((topic) => ({ category: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const topic = blogTopicBySlug(category);
  if (!topic) {
    return createPageMetadata({
      title: "Topic Not Found",
      description: "The requested blog topic could not be found.",
      path: `/blog/topic/${category}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: topic.title,
    description: topic.description,
    path: `/blog/topic/${topic.slug}`,
    keywords: [topic.category, "Asim Ali blog", topic.title],
  });
}

export default async function BlogTopicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const topic = blogTopicBySlug(category);
  if (!topic) notFound();

  const posts = postsInCategory(topic.category);

  return (
    <PageTransition>
      <main className="blog-page">
        <SeoJsonLd
          data={itemListJsonLd({
            name: topic.title,
            description: topic.description,
            path: `/blog/topic/${topic.slug}`,
            items: posts.map((post) => ({
              name: post.title,
              path: `/blog/${post.slug}`,
            })),
          })}
        />

        <SectionTitle title="Blog" />

        <header className="blog-intro">
          <Link
            href="/blog"
            transitionTypes={["nav-back"]}
            className="blog-article-back"
          >
            <ArrowLeft size={15} />
            All articles
          </Link>
          <h2>{topic.category}</h2>
          <p className="blog-topic-lead">{topic.intro}</p>
        </header>

        <BlogTopicNav active={topic.category} />

        <section className="blog-block" aria-label={`${topic.category} articles`}>
          <Stagger className="blog-grid">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} showPinned />
            ))}
          </Stagger>
        </section>
      </main>
    </PageTransition>
  );
}
