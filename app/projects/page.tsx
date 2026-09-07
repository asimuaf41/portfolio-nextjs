import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
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
import { ScrollRevealEffects } from "@/components/scroll-reveal-effects";
import { SectionTitle } from "@/components/section-title";
import { projects, projectsPage } from "@/data/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects & Case Studies",
  description:
    "Selected production projects by Asim Ali — AI agent platforms, real estate apps, e-signature SaaS, admin dashboards, and education products built with React, Next.js, and Node.js.",
  path: "/projects",
  keywords: [
    "React projects portfolio",
    "Next.js case studies",
    "AI agent platform demo",
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
    <main className="projects-page">
      <ScrollRevealEffects selector=".projects-reveal" />
      <SectionTitle title="Projects" />

      <header className="projects-hero projects-reveal">
        <span
          className="projects-eyebrow projects-anim-item"
          style={{ "--i": 0 } as CSSProperties}
        >
          <Sparkles size={14} />
          {projectsPage.eyebrow}
        </span>
        <h2
          className="projects-anim-item"
          style={{ "--i": 1 } as CSSProperties}
        >
          {projectsPage.headline}
        </h2>
        <p className="projects-anim-item" style={{ "--i": 2 } as CSSProperties}>
          {projectsPage.intro}
        </p>

        <dl
          className="projects-stats projects-anim-item"
          style={{ "--i": 3 } as CSSProperties}
          aria-label="Project statistics"
        >
          <div className="projects-stat">
            <dt>
              <FolderKanban size={14} />
              Projects
            </dt>
            <dd>{totalProjects}</dd>
          </div>
          <div className="projects-stat">
            <dt>
              <Layers3 size={14} />
              Technologies
            </dt>
            <dd>{totalStacks}+</dd>
          </div>
          <div className="projects-stat">
            <dt>
              <Tag size={14} />
              Domains
            </dt>
            <dd>{totalDomains}</dd>
          </div>
        </dl>

        <a
          href="#projects-portfolio"
          className="projects-scroll-cue projects-anim-item"
          style={{ "--i": 4 } as CSSProperties}
        >
          <span>Browse portfolio</span>
          <ChevronDown size={18} />
        </a>
      </header>

      <section
        className="projects-domains projects-reveal"
        aria-labelledby="projects-domains-heading"
      >
        <header className="projects-section-head">
          <span className="projects-eyebrow">Domains</span>
          <h3 id="projects-domains-heading">Where the work lives</h3>
        </header>
        <ul className="projects-domains-grid">
          {projectsPage.domains.map((domain, index) => (
            <li
              key={domain.label}
              className="projects-domain-card projects-stagger"
              style={{ "--i": index } as CSSProperties}
            >
              <strong>{domain.label}</strong>
              <span>{domain.blurb}</span>
            </li>
          ))}
        </ul>
      </section>

      <article
        className="projects-featured projects-reveal"
        aria-labelledby="projects-featured-heading"
      >
        <div className="projects-featured-glow" aria-hidden="true" />
        <div
          className="projects-featured-media projects-stagger"
          style={{ "--i": 0 } as CSSProperties}
        >
          <Image
            src={featured.image}
            alt={featured.title}
            width={1200}
            height={680}
            className="h-full w-full object-cover"
            priority
          />
          <span className="projects-featured-category">{featured.category}</span>
        </div>
        <div
          className="projects-featured-body projects-stagger"
          style={{ "--i": 1 } as CSSProperties}
        >
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
            <a
              href={featured.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-btn projects-btn-primary"
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
        </div>
      </article>

      <section
        id="projects-portfolio"
        className="projects-portfolio projects-reveal"
        aria-labelledby="projects-portfolio-heading"
      >
        <header className="projects-section-head">
          <span className="projects-eyebrow">Portfolio</span>
          <h3 id="projects-portfolio-heading">More shipped work</h3>
          <p className="projects-section-lead">
            Additional platforms and tools across the same delivery standards —
            demo links and source where available.
          </p>
        </header>

        <div className="projects-grid">
          {rest.map((project, index) => (
            <article
              key={project.slug}
              className="projects-card projects-stagger"
              style={{ "--i": index % 4 } as CSSProperties}
            >
              <div className="projects-card-media">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={560}
                  className="h-full w-full object-cover"
                />
                <span className="projects-card-category">{project.category}</span>
                <div className="projects-card-overlay">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={13} />
                    Live
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={13} />
                    Code
                  </a>
                  {project.secondaryCodeUrl ? (
                    <a
                      href={project.secondaryCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={13} />
                      API
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="projects-card-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="projects-card-tags">
                  {project.stack.slice(0, 5).map((item) => (
                    <span key={item} className="projects-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/contact?from=projects" className="projects-card-cta">
                  Build something similar <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="projects-closing projects-reveal">
        <p>{projectsPage.closing}</p>
        <Link href="/contact?from=projects" className="projects-closing-cta">
          Start a conversation <ArrowRight size={16} />
        </Link>
      </aside>

      <BackgroundTexture />
    </main>
  );
}
