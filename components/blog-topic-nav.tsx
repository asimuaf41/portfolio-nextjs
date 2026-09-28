import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { blogTopics } from "@/data/blog-topics";
import { topicCount, topicPath } from "@/lib/blog";
import type { BlogCategory } from "@/types/content";

export function BlogTopicNav({
  active = "all",
}: {
  active?: BlogCategory | "all";
}) {
  return (
    <nav className="blog-topics" aria-label="Article topics">
      <Link
        href="/blog"
        className={active === "all" ? "is-active" : undefined}
        aria-current={active === "all" ? "page" : undefined}
      >
        All
        <span>{blogPosts.length}</span>
      </Link>
      {blogTopics.map((topic) => {
        const isActive = active === topic.category;
        return (
          <Link
            key={topic.slug}
            href={topicPath(topic.category)}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {topic.category}
            <span>{topicCount(topic.category)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
