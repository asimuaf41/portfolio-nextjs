import { blogPosts } from "@/data/blog";
import { blogTopicByCategory, blogTopics } from "@/data/blog-topics";
import type { BlogCategory, BlogPost } from "@/types/content";

const PROSE_WORDS_PER_MINUTE = 200;
const CODE_WORDS_PER_MINUTE = 40;
const NEW_POST_DAYS = 45;

export { blogTopics };

export function topicPath(category: BlogCategory) {
  return `/blog/topic/${blogTopicByCategory(category).slug}`;
}

function wordCount(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

function articleText(post: BlogPost) {
  const prose = [post.intro, post.conclusion];
  const code: string[] = [];
  for (const section of post.sections) {
    prose.push(section.heading);
    if (section.paragraphs) prose.push(...section.paragraphs);
    if (section.bullets) prose.push(...section.bullets);
    if (section.callout) {
      prose.push(section.callout.title, section.callout.text);
    }
    if (section.code) code.push(section.code.snippet);
  }
  return { prose: prose.join(" "), code: code.join(" ") };
}

/** Prose at a careful reading pace, code slower, so walkthroughs stay longer than short essays. */
export function readTimeMinutes(post: BlogPost) {
  const { prose, code } = articleText(post);
  const minutes =
    wordCount(prose) / PROSE_WORDS_PER_MINUTE +
    wordCount(code) / CODE_WORDS_PER_MINUTE;
  return Math.max(1, Math.round(minutes));
}

export function formatReadTime(post: BlogPost) {
  const minutes = readTimeMinutes(post);
  return `${minutes} min read`;
}

export function isoDuration(minutes: number) {
  return `PT${minutes}M`;
}

export function isNewPost(publishedAt: string, now = Date.now()) {
  const published = new Date(publishedAt).getTime();
  return now - published <= NEW_POST_DAYS * 24 * 60 * 60 * 1000;
}

export function postsByDate() {
  return [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function pinnedPosts() {
  return blogPosts
    .filter((post) => post.pinned)
    .sort((a, b) => (a.pinOrder ?? 99) - (b.pinOrder ?? 99));
}

export function popularPosts(limit: number, excludeSlugs: string[] = []) {
  const excluded = new Set(excludeSlugs);
  return [...blogPosts]
    .filter((post) => !excluded.has(post.slug))
    .sort((a, b) => a.popularity - b.popularity)
    .slice(0, limit);
}

export function postsInCategory(category: BlogCategory) {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => {
      const pinA = a.pinned ? (a.pinOrder ?? 99) : 100;
      const pinB = b.pinned ? (b.pinOrder ?? 99) : 100;
      if (pinA !== pinB) return pinA - pinB;
      return b.publishedAt.localeCompare(a.publishedAt);
    });
}

export function topicCount(category: BlogCategory) {
  return blogPosts.filter((post) => post.category === category).length;
}

export function relatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter(
      (item) => item.category === post.category && item.slug !== post.slug,
    )
    .sort((a, b) => a.popularity - b.popularity)
    .slice(0, limit);
}

/** Pins, then the popular highlight, then the archive. Each article appears once. */
export function blogPageSections() {
  const pinned = pinnedPosts();
  const popular = popularPosts(
    4,
    pinned.map((post) => post.slug),
  );
  const shown = new Set(
    [...pinned, ...popular].map((post) => post.slug),
  );
  const archive = postsByDate().filter((post) => !shown.has(post.slug));
  return { pinned, popular, archive };
}
