import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  FileText,
  Github,
  Sparkles,
  Target,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { MagneticHover } from "@/components/motion/magnetic-hover";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { PageTransition } from "@/components/page-transition";
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
    "In-depth case studies by Asim Ali — AI agents, Shipwright, OptiField Stripe SaaS, real estate ops, e-signature, EdTech, and legal platforms. See the problem, challenge, build, and result for each production project.",
  path: "/case-studies",
  keywords: [
    "case studies",
    "AI agent case study",
    "OptiField case study",
    "Stripe SaaS case study",
    "e-signature SaaS",
    "EdTech case study",
    "Next.js portfolio case study",
    "freelance developer case studies",
  ],
});

export default function CaseStudiesPage() {
  const studies = getPublishedCaseStudies();

  return (
    <PageTransition>
      <main className="case-studies-page">
        <SectionTitle title="Case Studies" />

        <header className="case-studies-hero">
          <Reveal as="span" className="case-eyebrow" delay={0.05}>
            <Sparkles size={14} />
            {caseStudiesPage.eyebrow}
          </Reveal>
          <h2>{caseStudiesPage.headline}</h2>
          <p>{caseStudiesPage.intro}</p>
        </header>

        <Stagger
          as="section"
          className="case-studies-grid"
          aria-label="Published case studies"
        >
          {studies.map((study) => {
            const Icon = blogIconMap[study.icon];
            return (
              <MagneticHover
                as="article"
                inStagger
                key={study.slug}
                className={`case-study-card accent-${study.accent}`}
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
                <p className="case-study-card-impact">{study.impact}</p>
                <p>{study.summary}</p>
                <dl className="case-metrics case-metrics-compact" aria-label="Key outcomes">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="case-metric">
                      <dt>{metric.value}</dt>
                      <dd>{metric.label}</dd>
                    </div>
                  ))}
                </dl>
                <span className="case-delivery-chip">
                  <Clock3 size={12} />
                  {study.delivery}
                </span>
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
                    transitionTypes={["nav-forward"]}
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
              </MagneticHover>
            );
          })}
        </Stagger>

        <Reveal as="aside" className="case-studies-closing">
          <p>
            If you already see a problem that matches one of these builds —
          </p>
          <Link href="/contact?from=case-studies" className="case-closing-cta">
            Let&apos;s talk <ArrowRight size={16} />
          </Link>
        </Reveal>

        <BackgroundTexture />
      </main>
    </PageTransition>
  );
}
