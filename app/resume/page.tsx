import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Check,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { SectionTitle } from "@/components/section-title";
import {
  educationTimeline,
  experienceTimeline,
  skills,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Skills, experience timeline, and technical background of Asim Ali.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="resume-page relative">
      <SectionTitle title="My Skills" />
      <section>
        <div className="skill-grid">
          {skills.map((item) => (
            <div key={item.name}>
              <div className="skill-name-row">
                <span>{item.name}</span>
                <span>{item.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-value"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="timeline-block">
        <SectionTitle title="Resume" />
        <h2 className="resume-flow-heading pb-8">
          <GraduationCap size={26} />
          Educational Qualifications
        </h2>
        <ul className="resume-step-list">
          {educationTimeline.map((item, index) => (
            <li key={item.title} className="resume-step-item">
              <span className="resume-step-marker" aria-hidden="true">
                <Check size={14} strokeWidth={2.4} />
              </span>
              <div className="resume-step-row">
                <span className="resume-step-year">{item.period}</span>
                <span
                  className={
                    index === 0
                      ? "resume-step-slash"
                      : "resume-step-slash resume-step-slash-wide"
                  }
                />
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
                      <span style={{ width: `${Number(item.progress)}%` }} />
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="timeline-block">
        <h2 className="resume-flow-heading pb-8">
          <BriefcaseBusiness size={26} />
          Working Experience
        </h2>
        <ul className="resume-step-list">
          {experienceTimeline.map((item, index) => (
            <li key={item.title} className="resume-step-item">
              <span className="resume-step-marker" aria-hidden="true">
                {index === 0 ? (
                  <RefreshCw size={14} strokeWidth={2.2} />
                ) : (
                  <Check size={14} strokeWidth={2.4} />
                )}
              </span>
              <div className="resume-step-row">
                <span className="resume-step-year">{item.period}</span>
                <span
                  className={
                    index === 0
                      ? "resume-step-slash"
                      : "resume-step-slash resume-step-slash-wide"
                  }
                />
                <div className="resume-step-content">
                  <h4>{item.title}</h4>
                  <strong>{item.place}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <BackgroundTexture />
    </main>
  );
}
