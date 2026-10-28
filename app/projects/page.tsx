import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  FolderKanban,
  Github,
  Layers3,
  Sparkles,
  Tag,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { MagneticHover } from "@/components/motion/magnetic-hover";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { PageTransition } from "@/components/page-transition";
import { ProjectsGrid } from "@/components/projects-grid";
import { SectionTitle } from "@/components/section-title";
import { projects, projectsPage } from "@/data/site-content";
import { createPageMetadata } from "@/lib/seo";

/** Map portfolio project slugs to published case-study slugs. */
const projectCaseStudySlugs: Record<string, string> = {
  "ai-agent-platform": "ai-agent-studio",
  optifield: "optifield",
  shipwright: "shipwright",
  "e-sign-platform": "e-signature-saas",
  "method-admin-dashboard": "real-estate-saas",
  "method-atlanta": "real-estate-saas",
  "tun-university-network": "tun-university-network",
  "tun-admin-dashboard": "tun-university-network",
  "legal-emirates": "legal-emirates",
};

export const metadata: Metadata = createPageMetadata({
  title: "Projects & Case Studies",
  description:
    "Selected production projects by Asim Ali — OptiField AI lead agent, automation suites, real estate apps, e-signature SaaS, admin dashboards, and education products built with React, Next.js, and Node.js.",
  path: "/projects",
  keywords: [
    "React projects portfolio",
    "Next.js case studies",
    "AI agent platform demo",
    "OptiField HVAC AI agent",
    "field service automation",
    "full-stack project examples",
  ],
});

export default function ProjectsPage() {
  const [featured, ...rest] = projects;
  const totalProjects = projects.length;
  const totalStacks = new Set(projects.flatMap((project) => project.stack))
    .size;
  const totalDomains = new Set(projects.map((project) => project.category))
    .size;

  return (
    <PageTransition>
      <main className="projects-page">
        <SectionTitle title="Projects" />

        <header className="projects-hero">
          <Reveal as="span" className="projects-eyebrow" delay={0.05}>
            <Sparkles size={14} />
            {projectsPage.eyebrow}
          </Reveal>
          <h2>{projectsPage.headline}</h2>
          <p>{projectsPage.intro}</p>

          <Reveal
            as="dl"
            className="projects-stats"
            aria-label="Project statistics"
            delay={0.1}
          >
            <div className="projects-stat">
              <dt>
                <FolderKanban size={14} />
                Projects
              </dt>
              <dd>
                <AnimatedNumber value={totalProjects} />
              </dd>
            </div>
            <div className="projects-stat">
              <dt>
                <Layers3 size={14} />
                Technologies
              </dt>
              <dd>
                <AnimatedNumber value={`${totalStacks}+`} />
              </dd>
            </div>
            <div className="projects-stat">
              <dt>
                <Tag size={14} />
                Domains
              </dt>
              <dd>
                <AnimatedNumber value={totalDomains} />
              </dd>
            </div>
          </Reveal>

          <Reveal
            as="a"
            href="#projects-portfolio"
            className="projects-scroll-cue"
            delay={0.2}
          >
            <span>Browse portfolio</span>
            <ChevronDown size={18} />
          </Reveal>
        </header>

        <section
          className="projects-domains"
          aria-labelledby="projects-domains-heading"
        >
          <Reveal as="header" className="projects-section-head">
            <span className="projects-eyebrow">Domains</span>
            <h3 id="projects-domains-heading">Where the work lives</h3>
          </Reveal>
          <Stagger as="ul" className="projects-domains-grid">
            {projectsPage.domains.map((domain) => (
              <MagneticHover
                as="li"
                inStagger
                key={domain.label}
                className="projects-domain-card"
              >
                <strong>{domain.label}</strong>
                <span>{domain.blurb}</span>
              </MagneticHover>
            ))}
          </Stagger>
        </section>

        <article
          className="projects-featured"
          aria-labelledby="projects-featured-heading"
        >
          <div className="projects-featured-glow" aria-hidden="true" />
          <div className="projects-featured-media">
            <Image
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={680}
              className="h-full w-full object-cover"
              priority
            />
            <span className="projects-featured-category">
              {featured.category}
            </span>
          </div>
          <Reveal className="projects-featured-body" amount={0.2}>
            <span className="projects-featured-label">
              <Sparkles size={13} />
              Featured build
            </span>
            <h3 id="projects-featured-heading">{featured.title}</h3>
            <p>{featured.summary}</p>
            <div className="projects-featured-tags">
              {featured.stack.slice(0, 6).map((item) => (
                <span key={item} className="projects-tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="projects-featured-actions">
              <Link
                href="/case-studies/ai-agent-studio"
                transitionTypes={["nav-forward"]}
                className="projects-btn projects-btn-primary"
              >
                <Sparkles size={14} />
                Read case study
              </Link>
              <a
                href={featured.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-btn"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href={featured.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-btn"
              >
                <Github size={14} />
                View Code
              </a>
              {featured.secondaryCodeUrl ? (
                <a
                  href={featured.secondaryCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-btn"
                >
                  <Github size={14} />
                  Node API
                </a>
              ) : null}
            </div>
          </Reveal>
        </article>

        <section
          id="projects-portfolio"
          className="projects-portfolio"
          aria-labelledby="projects-portfolio-heading"
        >
          <Reveal as="header" className="projects-section-head">
            <span className="projects-eyebrow">Portfolio</span>
            <h3 id="projects-portfolio-heading">More shipped work</h3>
            <p className="projects-section-lead">
              Additional platforms and tools across the same delivery standards —
              demo links and source where available.
            </p>
          </Reveal>

          <ProjectsGrid
            projects={rest}
            caseStudySlugs={projectCaseStudySlugs}
          />
        </section>

        <Reveal as="aside" className="projects-closing">
          <p>{projectsPage.closing}</p>
          <Link href="/contact?from=projects" className="projects-closing-cta">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </Reveal>

        <BackgroundTexture />
      </main>
    </PageTransition>
  );
}
