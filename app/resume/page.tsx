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
import { AnimatedNumber } from "@/components/motion/animated-number";
import { MagneticHover } from "@/components/motion/magnetic-hover";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { PageTransition } from "@/components/page-transition";
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
    "Resume of Asim Ali — in-demand skills in React, Next.js, React Native, Expo, TypeScript, AI agents, RAG, Supabase, Node.js, and Stripe, plus work experience and education.",
  path: "/resume",
  keywords: [
    "Asim Ali resume",
    "React developer CV",
    "Next.js skills",
    "React Native developer skills",
    "AI engineer experience",
  ],
});

export default function ResumePage() {
  const highlightStats = aboutStats.slice(0, 3);

  return (
    <PageTransition>
      <main className="resume-page">
        {/* Only adds .is-visible to the skill / progress bar sections below. */}
        <ScrollRevealEffects selector=".resume-reveal" />
        <SectionTitle title="Resume" />

        <header className="resume-hero">
          <Reveal as="span" className="resume-eyebrow" delay={0.05}>
            <Sparkles size={14} />
            {resumePage.eyebrow}
          </Reveal>
          <h2>{resumePage.headline}</h2>
          <p>{resumePage.intro}</p>

          <Reveal
            as="dl"
            className="resume-stats"
            aria-label="Career highlights"
            delay={0.1}
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
                <dd>
                  <AnimatedNumber value={stat.value} />
                </dd>
              </div>
            ))}
          </Reveal>

          <Reveal
            as="a"
            href="#resume-skills"
            className="resume-scroll-cue"
            delay={0.2}
          >
            <span>See skills</span>
            <ChevronDown size={18} />
          </Reveal>
        </header>

        <section
          id="resume-skills"
          className="resume-skills resume-reveal"
          aria-labelledby="resume-skills-heading"
        >
          <Reveal as="header" className="resume-section-head">
            <span className="resume-eyebrow">Technical skills</span>
            <h3 id="resume-skills-heading">What I ship with</h3>
            <p className="resume-section-lead">
              Ranked by current demand — AI systems and the full-stack React/Node
              foundation that supports them. Soft skills and outdated tooling left
              off intentionally.
            </p>
          </Reveal>

          <Stagger className="resume-skill-groups">
            {skillGroups.map((group) => (
              <MagneticHover
                as="article"
                inStagger
                key={group.id}
                className="resume-skill-group"
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
              </MagneticHover>
            ))}
          </Stagger>
        </section>

        <section
          id="resume-experience"
          className="resume-timeline-section"
          aria-labelledby="resume-experience-heading"
        >
          <Reveal as="header" className="resume-section-head">
            <span className="resume-eyebrow">Experience</span>
            <h3 id="resume-experience-heading">
              <BriefcaseBusiness size={22} strokeWidth={1.8} />
              Working experience
            </h3>
          </Reveal>

          <Stagger as="ul" className="resume-step-list">
            {experienceTimeline.map((item, index) => (
              <StaggerItem
                as="li"
                key={`${item.title}-${item.period}`}
                className="resume-step-item"
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
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section
          className="resume-timeline-section resume-reveal"
          aria-labelledby="resume-education-heading"
        >
          <Reveal as="header" className="resume-section-head">
            <span className="resume-eyebrow">Education</span>
            <h3 id="resume-education-heading">
              <GraduationCap size={22} strokeWidth={1.8} />
              Educational qualifications
            </h3>
          </Reveal>

          <Stagger as="ul" className="resume-step-list">
            {educationTimeline.map((item) => (
              <StaggerItem
                as="li"
                key={`${item.title}-${item.period}`}
                className="resume-step-item"
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
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <Reveal as="aside" className="resume-closing">
          <p>{resumePage.closing}</p>
          <Link href="/contact?from=resume" className="resume-closing-cta">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </Reveal>

        <BackgroundTexture />
      </main>
    </PageTransition>
  );
}
