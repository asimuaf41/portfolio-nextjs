import { CalendarDays, Clock } from "lucide-react";
import { formatReadTime } from "@/lib/blog";
import { formatBlogDate, formatBlogDateLong } from "@/lib/blog-icons";
import type { BlogPost } from "@/types/content";

export function BlogMeta({
  post,
  className = "blog-card-meta",
  showDate = true,
  dateStyle = "short",
  iconSize = 13,
}: {
  post: BlogPost;
  className?: string;
  showDate?: boolean;
  dateStyle?: "short" | "long";
  iconSize?: number;
}) {
  const date =
    dateStyle === "long"
      ? formatBlogDateLong(post.publishedAt)
      : formatBlogDate(post.publishedAt);

  return (
    <div className={className}>
      {showDate ? (
        <span>
          <CalendarDays size={iconSize} />
          {date}
        </span>
      ) : null}
      <span>
        <Clock size={iconSize} />
        {formatReadTime(post)}
      </span>
      <span
        className={`blog-difficulty blog-difficulty-${post.difficulty.toLowerCase()}`}
      >
        {post.difficulty}
      </span>
    </div>
  );
}
