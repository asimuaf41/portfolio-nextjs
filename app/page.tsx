import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock,
  Facebook,
  Github,
  Linkedin,
  PenLine,
  Twitter,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { blogPosts } from "@/data/blog";
import { homeHighlights, personalInfo, socialProfiles } from "@/data/home";
import { blogIconMap, formatBlogDate } from "@/lib/blog-icons";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full-stack JavaScript engineer portfolio with modern projects, case studies, and SEO-first solutions.",
  alternates: { canonical: "/" },
};

const socialIconMap = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <main className="home-page">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Asim Ali",
          jobTitle: "Full-Stack JavaScript Engineer",
          url: "https://asimportfolio-6fd1d.web.app",
        }}
      />
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            Hi, I am{" "}
            <span style={{ color: "#037fff" }}>{personalInfo.name}</span>
          </h1>
          <p>{personalInfo.detail}</p>
          <div className="home-highlight-row">
            {homeHighlights.map((item) => (
              <div key={item.label} className="home-highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="social-row">
            {socialProfiles.map((social) => {
              const Icon =
                socialIconMap[social.icon as keyof typeof socialIconMap];
              return (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon ? <Icon size={18} /> : social.label.slice(0, 2)}
                </a>
              );
            })}
          </div>
          <a href="#recent-writing" className="home-scroll-indicator">
            <span>See latest research</span>
            <ChevronDown size={18} />
          </a>
        </div>
        <BackgroundTexture />
      </section>

      <section
        id="recent-writing"
        className="home-recent"
        aria-label="Recent articles"
      >
        <header className="home-recent-head">
          <div>
            <span className="blog-intro-pill">
              <PenLine size={14} />
              Recent writing & research
            </span>
            <h2>Latest from the blog</h2>
            <p>
              Notes on building AI agents, automating workflows, and shipping
              fast with the modern Cursor + Claude stack.
            </p>
          </div>
          <Link href="/blog" className="home-recent-cta">
            View all articles <ArrowRight size={16} />
          </Link>
        </header>

        <div className="home-recent-grid">
          {recentPosts.map((post) => {
            const Icon = blogIconMap[post.icon];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`home-recent-card accent-${post.accent}`}
                aria-label={`Read article: ${post.title}`}
              >
                <div className="home-recent-card-top">
                  <span className="blog-card-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="home-recent-card-foot">
                  <span>
                    <CalendarDays size={13} />
                    {formatBlogDate(post.publishedAt)}
                  </span>
                  <span>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
