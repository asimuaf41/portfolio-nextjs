import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FolderKanban,
  Github,
  Layers3,
  Sparkles,
  Tag,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Recent software projects with stack details, demos, and source links.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const [featured, ...rest] = projects;
  const totalProjects = projects.length;
  const totalStacks = new Set(projects.flatMap((project) => project.stack))
    .size;

  return (
    <main className="project-page relative">
      <SectionTitle title="Recent Completed Projects" />

      <header className="project-intro">
        <span className="blog-intro-pill">
          <Sparkles size={14} />
          Product engineering portfolio
        </span>
        <h2>High-impact platforms built for real-world business outcomes.</h2>
        <p>
          Full-stack products across real estate, legal, education, and SaaS.
          Focused on scalable architecture, UX quality, and production
          performance.
        </p>

        <dl className="blog-stats" aria-label="Project statistics">
          <div className="blog-stat">
            <dt>
              <FolderKanban size={14} />
              Projects
            </dt>
            <dd>{totalProjects}</dd>
          </div>
          <div className="blog-stat">
            <dt>
              <Layers3 size={14} />
              Tech Stack Items
            </dt>
            <dd>{totalStacks}</dd>
          </div>
          <div className="blog-stat">
            <dt>
              <Tag size={14} />
              Domains
            </dt>
            <dd>5+</dd>
          </div>
        </dl>
      </header>

      <article className="project-featured">
        <div className="project-featured-media">
          <Image
            src={featured.image}
            alt={featured.title}
            width={1200}
            height={680}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="project-featured-body">
          <span className="project-featured-label">Featured Build</span>
          <h3>{featured.title}</h3>
          <p>{featured.summary}</p>
          <div className="project-featured-tags">
            {featured.stack.slice(0, 5).map((item) => (
              <span key={item} className="blog-card-tag">
                {item}
              </span>
            ))}
          </div>
          <div className="project-featured-actions">
            <a
              href={featured.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={featured.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              View Code
            </a>
            {featured.secondaryCodeUrl ? (
              <a
                href={featured.secondaryCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                Node API
              </a>
            ) : null}
          </div>
        </div>
      </article>

      <section
        className="project-grid-v2"
        aria-label="Recent completed projects"
      >
        {rest.map((project) => (
          <article key={project.slug} className="project-card-v2">
            <div className="project-card-v2-media">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={560}
                className="h-full w-full object-cover"
              />
              <div className="project-card-v2-overlay">
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
            <div className="project-card-v2-content">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-card-v2-tags">
                {project.stack.slice(0, 5).map((item) => (
                  <span key={item} className="blog-card-tag">
                    {item}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="project-card-v2-cta">
                Build something similar <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <BackgroundTexture />
    </main>
  );
}
