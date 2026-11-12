"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { MagneticHover } from "@/components/motion/magnetic-hover";
import { Reveal } from "@/components/motion/reveal";
import { SegmentedControl } from "@/components/motion/segmented-control";
import { duration, ease, enterTransition } from "@/lib/motion";
import type { Project } from "@/types/content";

const ALL = "All";

/** Filterable project cards; the filter state is the only reason this is a client component. */
export function ProjectsGrid({
  projects,
  caseStudySlugs,
}: {
  projects: Project[];
  caseStudySlugs: Record<string, string>;
}) {
  const [category, setCategory] = useState<string>(ALL);
  const options = [ALL, ...new Set(projects.map((project) => project.category))].map(
    (value) => ({ value, label: value }),
  );
  const visible =
    category === ALL
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <>
      <Reveal className="mb-4">
        <SegmentedControl
          label="Filter projects by category"
          options={options}
          value={category}
          onChange={setCategory}
        />
      </Reveal>

      <Reveal amount={0.05}>
        <div className="projects-grid relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <MagneticHover
                as="article"
                key={project.slug}
                layout
                className="projects-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: enterTransition }}
                exit={{
                  opacity: 0,
                  y: 8,
                  transition: { duration: duration.fast, ease: ease.in },
                }}
              >
                <div className="projects-card-media">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={560}
                    className="h-full w-full object-cover"
                  />
                  <span className="projects-card-category">
                    {project.category}
                  </span>
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
                  {project.detailHref ? (
                    <Link
                      href={project.detailHref}
                      transitionTypes={["nav-forward"]}
                      className="projects-card-cta"
                    >
                      View project <ArrowRight size={14} />
                    </Link>
                  ) : caseStudySlugs[project.slug] ? (
                    <Link
                      href={`/case-studies/${caseStudySlugs[project.slug]}`}
                      transitionTypes={["nav-forward"]}
                      className="projects-card-cta"
                    >
                      Read case study <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      href="/contact?from=projects"
                      className="projects-card-cta"
                    >
                      Build something similar <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </MagneticHover>
            ))}
          </AnimatePresence>
        </div>
      </Reveal>
    </>
  );
}
