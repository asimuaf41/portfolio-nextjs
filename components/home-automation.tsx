import Link from "next/link";
import {
  ArrowRight,
  Headset,
  Newspaper,
  Receipt,
  UserCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { MagneticHover } from "@/components/motion/magnetic-hover";
import { Stagger } from "@/components/motion/stagger";
import { automationOffer } from "@/data/site-content";

const workflowIcons: Record<string, LucideIcon> = {
  UserCheck,
  Headset,
  Newspaper,
  Receipt,
};

export function HomeAutomation() {
  return (
    <section
      id="automation"
      className="home-automation"
      aria-labelledby="home-automation-heading"
    >
      <header className="home-automation-head">
        <div>
          <span className="blog-intro-pill">
            <Workflow size={14} />
            {automationOffer.eyebrow}
          </span>
          <h2 id="home-automation-heading">{automationOffer.headline}</h2>
          <p>{automationOffer.intro}</p>
        </div>
        <Link href="/about#automation" className="home-recent-cta">
          Full automation suite <ArrowRight size={16} />
        </Link>
      </header>

      <Stagger as="ul" className="home-automation-grid">
        {automationOffer.workflows.map((item) => {
          const Icon = workflowIcons[item.icon] ?? UserCheck;
          return (
            <MagneticHover
              as="li"
              inStagger
              key={item.title}
              className="home-automation-card"
            >
              <span className="home-automation-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </MagneticHover>
          );
        })}
      </Stagger>

      <footer className="home-automation-foot">
        <div className="home-automation-tools" aria-label="Automation tools">
          {automationOffer.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <div className="home-automation-notes">
          <p>{automationOffer.turnaround}</p>
          <Link href="/about#automation-dashboard" className="home-automation-dash">
            Optional React dashboard for leads, scores, and manual triggers
            <ArrowRight size={14} />
          </Link>
        </div>
      </footer>
    </section>
  );
}
