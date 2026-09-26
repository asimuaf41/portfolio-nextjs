import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers3,
  Target,
} from "lucide-react";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { blogIconMap } from "@/lib/blog-icons";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  siteConfig,
} from "@/lib/seo";

type Params = { slug: string };

const sectionOrder = [
  { id: "problem", label: "The Problem" },
  { id: "challenge", label: "The Challenge" },
  { id: "built", label: "What I Built" },
  { id: "result", label: "The Result" },
  { id: "tech-stack", label: "Tech Stack" },
] as const;

export function generateStaticParams() {
  return caseStudies
    .filter((study) => study.published)
    .map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || !study.published) {
    return createPageMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: `/case-studies/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    keywords: study.keywords,
    type: "article",
    tags: study.techStack,
    section: "Case Studies",
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || !study.published) notFound();

  const Icon = blogIconMap[study.icon];
  const published = caseStudies.filter((item) => item.published);
  const currentIndex = published.findIndex((item) => item.slug === slug);
  const prevStudy = currentIndex > 0 ? published[currentIndex - 1] : null;
  const nextStudy =
    currentIndex >= 0 && currentIndex < published.length - 1
      ? published[currentIndex + 1]
      : null;

  return (
    <main className={`case-article accent-${study.accent}`}>
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.summary,
          author: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          mainEntityOfPage: `${siteConfig.url}/case-studies/${study.slug}`,
          keywords: study.keywords.join(", "),
          inLanguage: siteConfig.language,
        }}
      />
      <SeoJsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />

      <Link href="/case-studies" className="case-article-back">
        <ArrowLeft size={15} />
        Back to case studies
      </Link>

      <header className="case-article-hero">
        <div className="case-article-hero-glow" aria-hidden="true" />
        <span className="case-article-icon" aria-hidden="true">
          <Icon size={36} strokeWidth={1.7} />
        </span>
        <span className="case-article-audience">
          <Target size={13} />
          {study.targetClient}
        </span>
        <h1>{study.title}</h1>
        <p className="case-article-summary">{study.summary}</p>
        <div className="case-article-actions">
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-btn case-btn-primary"
            >
              <ExternalLink size={14} />
              {study.liveLabel ?? "View live demo"}
            </a>
          ) : null}
          {study.secondaryLiveUrl ? (
            <a
              href={study.secondaryLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-btn"
            >
              <ExternalLink size={14} />
              {study.secondaryLiveLabel ?? "View live site"}
            </a>
          ) : null}
          {study.codeUrl ? (
            <a
              href={study.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-btn"
            >
              <Github size={14} />
              View code
            </a>
          ) : null}
        </div>
      </header>

      <div className="case-article-layout">
        <article className="case-article-body">
          <section id="problem" className="case-article-section">
            <h2>The Problem</h2>
            {study.problem.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </section>

          <section id="challenge" className="case-article-section">
            <h2>The Challenge</h2>
            {study.challenge.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </section>

          <section id="built" className="case-article-section">
            <h2>What I Built</h2>
            <p>{study.builtIntro}</p>

            <div className="case-feature-grid">
              {study.features.map((feature) => (
                <div key={feature.title} className="case-feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>

            {study.additionalFeatures.length > 0 ? (
              <>
                <p className="case-additional-label">Additional features built:</p>
                <ul className="case-article-bullets">
                  {study.additionalFeatures.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {study.builtOutro ? <p>{study.builtOutro}</p> : null}
          </section>

          <section id="result" className="case-article-section">
            <h2>The Result</h2>
            {study.result.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-result-link"
              >
                {study.liveLabel ?? "Live demo"}:{" "}
                {study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                <ExternalLink size={14} />
              </a>
            ) : null}
            {study.secondaryLiveUrl ? (
              <a
                href={study.secondaryLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-result-link"
              >
                {study.secondaryLiveLabel ?? "Live site"}:{" "}
                {study.secondaryLiveUrl
                  .replace(/^https?:\/\//, "")
                  .replace(/\/$/, "")}
                <ExternalLink size={14} />
              </a>
            ) : null}
            {study.codeUrl ? (
              <a
                href={study.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-result-link"
              >
                Source:{" "}
                {study.codeUrl.replace(
                  /^https?:\/\/(www\.)?github\.com\//,
                  "",
                )}
                <Github size={14} />
              </a>
            ) : null}
          </section>

          <section id="tech-stack" className="case-article-section">
            <h2>Tech Stack</h2>
            <div className="case-stack-list" aria-label="Technologies used">
              {study.techStack.map((item) => (
                <span key={item} className="case-tag case-tag-lg">
                  <Layers3 size={12} />
                  {item}
                </span>
              ))}
            </div>
          </section>

          <aside className="case-article-cta">
            <h3>Need something like this?</h3>
            <p>
              If you need a production system for{" "}
              {study.targetClient.toLowerCase()} that solves a problem like
              this — not a throwaway demo — let&apos;s talk about what to build
              first.
            </p>
            <Link
              href={`/contact?from=case-study-${study.slug}`}
              className="case-btn case-btn-primary"
            >
              Start a conversation <ArrowRight size={14} />
            </Link>
          </aside>
        </article>

        <aside className="case-article-toc" aria-label="Table of contents">
          <div className="case-article-toc-inner">
            <span className="case-article-toc-title">On this page</span>
            <ol>
              {sectionOrder.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span className="case-article-toc-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      {(prevStudy || nextStudy) && (
        <nav className="case-article-nav" aria-label="Other case studies">
          {prevStudy ? (
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className={`case-article-nav-card accent-${prevStudy.accent}`}
            >
              <span className="case-article-nav-label">
                <ArrowLeft size={14} /> Previous
              </span>
              <span className="case-article-nav-title">{prevStudy.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextStudy ? (
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className={`case-article-nav-card accent-${nextStudy.accent} is-next`}
            >
              <span className="case-article-nav-label">
                Next <ArrowRight size={14} />
              </span>
              <span className="case-article-nav-title">{nextStudy.title}</span>
            </Link>
          ) : null}
        </nav>
      )}
    </main>
  );
}
