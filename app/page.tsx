import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  FileText,
  PenLine,
  Target,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { BlogMeta } from "@/components/blog-meta";
import { HomeAutomation } from "@/components/home-automation";
import { HomeHeroIntro } from "@/components/home-hero-intro";
import { HomeWorkflow } from "@/components/home-workflow";
import {
  caseStudiesPage,
  getPublishedCaseStudies,
} from "@/data/case-studies";
import { popularPosts, postsByDate } from "@/lib/blog";
import { blogIconMap } from "@/lib/blog-icons";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "hire React developer",
    "AI agent freelancer",
    "AI automation n8n",
    "Trigger.dev",
    "Next.js SaaS developer",
    "Upwork Top Rated Plus",
    "developer case studies",
  ],
});

export default function HomePage() {
  const recentPosts = postsByDate().slice(0, 3);
  const mostRead = popularPosts(
    3,
    recentPosts.map((post) => post.slug),
  );
  const studies = getPublishedCaseStudies();

  return (
    <main className="home-page">
      <section className="home-hero">
        <HomeHeroIntro />
        <BackgroundTexture />
      </section>

      <section
        id="case-studies"
        className="home-case-studies"
        aria-labelledby="home-case-studies-heading"
      >
        <header className="home-recent-head">
          <div>
            <span className="blog-intro-pill">
              <FileText size={14} />
              {caseStudiesPage.eyebrow}
            </span>
            <h2 id="home-case-studies-heading">
              Case studies that prove I solve your problem
            </h2>
            <p>
              Not screenshots — real problems, technical challenges, what I
              built, and the result. Read these when you want to know if I have
              shipped something like yours.
            </p>
          </div>
          <Link href="/case-studies" className="home-recent-cta">
            All case studies <ArrowRight size={16} />
          </Link>
        </header>

        <div className="home-case-grid">
          {studies.map((study, index) => {
            const Icon = blogIconMap[study.icon];
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className={`home-case-card accent-${study.accent}`}
                style={{ animationDelay: `${index * 90}ms` }}
                aria-label={`Read case study: ${study.title}`}
              >
                <div className="home-case-card-top">
                  <span className="home-case-card-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="home-case-card-audience">
                    <Target size={11} />
                    {study.targetClient}
                  </span>
                </div>
                <h3>{study.title}</h3>
                <p className="home-case-card-impact">{study.impact}</p>
                <p>{study.summary}</p>
                <span className="home-case-card-delivery">
                  <Clock3 size={12} />
                  {study.delivery}
                </span>
                <span className="home-case-card-cta">
                  Read case study <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <HomeWorkflow />

      <HomeAutomation />

      <section
        id="recent-writing"
        className="home-recent"
        aria-label="Latest and most read articles"
      >
        <header className="home-recent-head">
          <div>
            <span className="blog-intro-pill">
              <PenLine size={14} />
              Recent writing & research
            </span>
            <h2>Latest from the blog</h2>
            <p>
              Fresh notes on agents, n8n automation, full-stack AI, and
              shipping an MVP — plus the pieces I rank highest below.
            </p>
          </div>
          <Link href="/blog" className="home-recent-cta">
            View all articles <ArrowRight size={16} />
          </Link>
        </header>

        <div className="home-recent-grid">
          {recentPosts.map((post, index) => {
            const Icon = blogIconMap[post.icon];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`home-recent-card accent-${post.accent}`}
                style={{ animationDelay: `${index * 90}ms` }}
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
                <BlogMeta post={post} className="home-recent-card-foot" />
              </Link>
            );
          })}
        </div>

        <header className="home-recent-head">
          <div>
            <h2>Most read</h2>
            <p>
              Ranked guides on Cursor, weekend MVPs, and streaming agents into
              a real UI — the next stop after the latest three.
            </p>
          </div>
        </header>

        <div className="home-recent-grid">
          {mostRead.map((post, index) => {
            const Icon = blogIconMap[post.icon];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`home-recent-card accent-${post.accent}`}
                style={{ animationDelay: `${index * 90}ms` }}
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
                <BlogMeta post={post} className="home-recent-card-foot" />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
