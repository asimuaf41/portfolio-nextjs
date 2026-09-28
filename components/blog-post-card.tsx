import Link from "next/link";
import { ArrowRight, Pin } from "lucide-react";
import { BlogMeta } from "@/components/blog-meta";
import { isNewPost } from "@/lib/blog";
import { blogIconMap } from "@/lib/blog-icons";
import type { BlogPost } from "@/types/content";

export function BlogPostCard({
  post,
  index = 0,
  showPinned = false,
}: {
  post: BlogPost;
  index?: number;
  showPinned?: boolean;
}) {
  const Icon = blogIconMap[post.icon];
  const showNew = isNewPost(post.publishedAt);

  return (
    <Link
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
        {showPinned || showNew ? (
          <span className="blog-card-flags">
            {showPinned && post.pinned ? (
              <span className="blog-flag blog-flag-pin">
                <Pin size={11} />
                Pinned
              </span>
            ) : null}
            {showNew ? <span className="blog-flag blog-flag-new">New</span> : null}
          </span>
        ) : null}
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
        <BlogMeta post={post} />
        <span className="blog-card-cta" aria-hidden="true">
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
