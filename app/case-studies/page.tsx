import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Github,
  Sparkles,
  Target,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { ScrollRevealEffects } from "@/components/scroll-reveal-effects";
import { SectionTitle } from "@/components/section-title";
import {
  caseStudiesPage,
  getPublishedCaseStudies,
} from "@/data/case-studies";
import { blogIconMap } from "@/lib/blog-icons";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies — Real Problems Solved",
  description:
    "In-depth case studies by Asim Ali — AI Agent Studio, Real Estate Operations SaaS, and OptiField autonomous HVAC lead agent. See the real-world problem, technical challenge, what was built, and the result for each production project.",
  path: "/case-studies",
  keywords: [
    "case studies",
    "AI agent case study",
    "OptiField case study",
    "Next.js portfolio case study",
    "production AI platform",
    "freelance developer case studies",
  ],
});

export default function CaseStudiesPage() {
  const studies = getPublishedCaseStudies();

  return (
    <main className="case-studies-page">
      <ScrollRevealEffects selector=".case-reveal" />
      <SectionTitle title="Case Studies" />

      <header className="case-studies-hero case-reveal">
        <span
          className="case-eyebrow case-anim-item"
          style={{ "--i": 0 } as CSSProperties}
        >
          <Sparkles size={14} />
          {caseStudiesPage.eyebrow}
        </span>
        <h2
          className="case-anim-item"
          style={{ "--i": 1 } as CSSProperties}
        >
          {caseStudiesPage.headline}
        </h2>
        <p className="case-anim-item" style={{ "--i": 2 } as CSSProperties}>
          {caseStudiesPage.intro}
        </p>
      </header>

      <section
        className="case-studies-grid case-reveal"
        aria-label="Published case studies"
      >
        {studies.map((study, index) => {
          const Icon = blogIconMap[study.icon];
          return (
            <article
              key={study.slug}
              className={`case-study-card accent-${study.accent} case-stagger`}
              style={{ "--i": index } as CSSProperties}
            >
              <div className="case-study-card-top">
                <span className="case-study-card-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span className="case-study-card-audience">
                  <Target size={12} />
                  {study.targetClient}
                </span>
              </div>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <div className="case-study-card-tags">
                {study.techStack.slice(0, 4).map((tag) => (
                  <span key={tag} className="case-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="case-study-card-actions">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="case-btn case-btn-primary"
                >
                  <FileText size={14} />
                  Read case study
                  <ArrowRight size={14} />
                </Link>
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn"
                  >
                    <ExternalLink size={14} />
                    {study.liveLabel ?? "Live demo"}
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
                    {study.secondaryLiveLabel ?? "Live site"}
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
            </article>
          );
        })}
      </section>

      <aside className="case-studies-closing case-reveal">
        <p>
          If you already see a problem that matches one of these builds —
        </p>
        <Link href="/contact?from=case-studies" className="case-closing-cta">
          Let&apos;s talk <ArrowRight size={16} />
        </Link>
      </aside>

      <BackgroundTexture />
    </main>
  );
}
