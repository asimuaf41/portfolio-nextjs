import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  RefreshCw,
  Sparkles,
  Trophy,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { ScrollRevealEffects } from "@/components/scroll-reveal-effects";
import { SectionTitle } from "@/components/section-title";
import {
  aboutStats,
  educationTimeline,
  experienceTimeline,
  resumePage,
  skillGroups,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resume & Skills",
  description:
    "Resume of Asim Ali — in-demand skills in React, Next.js, TypeScript, AI agents, RAG, Supabase, Node.js, and Stripe, plus work experience and education.",
  path: "/resume",
  keywords: [
    "Asim Ali resume",
    "React developer CV",
    "Next.js skills",
    "AI engineer experience",
  ],
});

export default function ResumePage() {
  const highlightStats = aboutStats.slice(0, 3);

  return (
    <main className="resume-page">
      <ScrollRevealEffects selector=".resume-reveal" />
      <SectionTitle title="Resume" />

      <header className="resume-hero resume-reveal">
        <span
          className="resume-eyebrow resume-anim-item"
          style={{ "--i": 0 } as CSSProperties}
        >
          <Sparkles size={14} />
          {resumePage.eyebrow}
        </span>
        <h2 className="resume-anim-item" style={{ "--i": 1 } as CSSProperties}>
          {resumePage.headline}
        </h2>
        <p className="resume-anim-item" style={{ "--i": 2 } as CSSProperties}>
          {resumePage.intro}
        </p>

        <dl
          className="resume-stats resume-anim-item"
          style={{ "--i": 3 } as CSSProperties}
          aria-label="Career highlights"
        >
          {highlightStats.map((stat) => (
            <div key={stat.label} className="resume-stat">
              <dt>
                {stat.label === "Years Experience" ? (
                  <Clock3 size={14} />
                ) : stat.label === "Job Success" ? (
                  <Trophy size={14} />
                ) : (
                  <BriefcaseBusiness size={14} />
                )}
                {stat.label}
              </dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#resume-skills"
          className="resume-scroll-cue resume-anim-item"
          style={{ "--i": 4 } as CSSProperties}
        >
          <span>See skills</span>
          <ChevronDown size={18} />
        </a>
      </header>

      <section
        id="resume-skills"
        className="resume-skills resume-reveal"
        aria-labelledby="resume-skills-heading"
      >
        <header className="resume-section-head">
          <span className="resume-eyebrow">Technical skills</span>
          <h3 id="resume-skills-heading">What I ship with</h3>
          <p className="resume-section-lead">
            Ranked by current demand — AI systems and the full-stack React/Node
            foundation that supports them. Soft skills and outdated tooling left
            off intentionally.
          </p>
        </header>

        <div className="resume-skill-groups">
          {skillGroups.map((group, groupIndex) => (
            <article
              key={group.id}
              className="resume-skill-group resume-stagger"
              style={{ "--i": groupIndex } as CSSProperties}
            >
              <header className="resume-skill-group-head">
                <h4>{group.title}</h4>
                <p>{group.blurb}</p>
              </header>
              <ul className="resume-skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="resume-skill-item">
                    <div className="resume-skill-row">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="resume-skill-track" aria-hidden="true">
                      <span
                        className="resume-skill-value"
                        style={{ "--level": `${skill.level}%` } as CSSProperties}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="resume-experience"
        className="resume-timeline-section resume-reveal"
        aria-labelledby="resume-experience-heading"
      >
        <header className="resume-section-head">
          <span className="resume-eyebrow">Experience</span>
          <h3 id="resume-experience-heading">
            <BriefcaseBusiness size={22} strokeWidth={1.8} />
            Working experience
          </h3>
        </header>

        <ul className="resume-step-list">
          {experienceTimeline.map((item, index) => (
            <li
              key={`${item.title}-${item.period}`}
              className="resume-step-item resume-stagger"
              style={{ "--i": index } as CSSProperties}
            >
              <span
                className={`resume-step-marker${index === 0 ? " is-current" : ""}`}
                aria-hidden="true"
              >
                {index === 0 ? (
                  <RefreshCw size={14} strokeWidth={2.2} />
                ) : (
                  <Check size={14} strokeWidth={2.4} />
                )}
              </span>
              <div className="resume-step-row">
                <span className="resume-step-year">{item.period}</span>
                <span className="resume-step-slash" aria-hidden="true" />
                <div className="resume-step-content">
                  {index === 0 ? (
                    <span className="resume-step-badge">Current</span>
                  ) : null}
                  <h4>{item.title}</h4>
                  <strong>{item.place}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="resume-timeline-section resume-reveal"
        aria-labelledby="resume-education-heading"
      >
        <header className="resume-section-head">
          <span className="resume-eyebrow">Education</span>
          <h3 id="resume-education-heading">
            <GraduationCap size={22} strokeWidth={1.8} />
            Educational qualifications
          </h3>
        </header>

        <ul className="resume-step-list">
          {educationTimeline.map((item, index) => (
            <li
              key={`${item.title}-${item.period}`}
              className="resume-step-item resume-stagger"
              style={{ "--i": index } as CSSProperties}
            >
              <span className="resume-step-marker" aria-hidden="true">
                <Check size={14} strokeWidth={2.4} />
              </span>
              <div className="resume-step-row">
                <span className="resume-step-year">{item.period}</span>
                <span className="resume-step-slash" aria-hidden="true" />
                <div className="resume-step-content">
                  <h4>{item.title}</h4>
                  <strong>{item.place}</strong>
                  <p>{item.detail}</p>
                  {"progress" in item ? (
                    <div
                      className="resume-step-progress"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Number(item.progress)}
                      aria-label={`${item.title} progress`}
                    >
                      <span
                        style={
                          { "--level": `${Number(item.progress)}%` } as CSSProperties
                        }
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <aside className="resume-closing resume-reveal">
        <p>{resumePage.closing}</p>
        <Link href="/contact?from=resume" className="resume-closing-cta">
          Start a conversation <ArrowRight size={16} />
        </Link>
      </aside>

      <BackgroundTexture />
    </main>
  );
}
