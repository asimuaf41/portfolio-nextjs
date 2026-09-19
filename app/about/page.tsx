import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Database,
  ExternalLink,
  Figma,
  Gauge,
  LayoutDashboard,
  Mails,
  Radio,
  ServerCog,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { AboutScrollEffects } from "@/components/about-scroll-effects";
import { BackgroundTexture } from "@/components/background-texture";
import { SectionTitle } from "@/components/section-title";
import {
  aboutFacts,
  aboutProfile,
  aboutStats,
  automationOffer,
  freelancePlatforms,
  services,
  UPWORK_PROFILE_URL,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/seo";

const helpIconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  ServerCog,
  Database,
  Bot,
  Brain,
  Workflow,
  Mails,
  Zap,
  Activity,
  Radio,
  Gauge,
  Smartphone,
  Figma,
};

const serviceIcons: Record<string, LucideIcon> = {
  "AI Business Automation": Workflow,
  "AI Agent Development": Bot,
  "RAG & Document Intelligence": Brain,
  "React / Next.js SaaS & Rescue": BriefcaseBusiness,
  "Supabase & Stripe Integrations": CreditCard,
  "APIs, Data & Real-time Systems": ServerCog,
  "Admin Dashboards & Internal Tools": LayoutDashboard,
};

export const metadata: Metadata = createPageMetadata({
  title: "About Asim Ali",
  description:
    "Meet Asim Ali — Top Rated Plus React/Next.js & AI agent developer. 6,200+ Upwork hours, RAG systems, Claude API, n8n and Trigger.dev automation, multi-agent orchestration, and full-stack SaaS delivery.",
  path: "/about",
  keywords: [
    "AI automation n8n",
    "Trigger.dev",
    "about Asim Ali",
    "AI agent developer bio",
    "React Next.js freelancer Pakistan",
    "Top Rated Plus Upwork",
  ],
});

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutScrollEffects />
      <SectionTitle title="About Me" />

      <section
        className="about-hero about-reveal"
        aria-labelledby="about-heading"
      >
        <div className="about-hero-media">
          <div className="about-hero-frame">
            <Image
              src="/about-image.jpg"
              alt="Asim Ali working on laptop"
              width={500}
              height={600}
              className="about-image"
              priority
            />
            <a
              href={UPWORK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="about-hero-badge"
              aria-label="Upwork Top Rated Plus — open Upwork profile"
            >
              <span className="about-hero-badge-face about-hero-badge-idle">
                <Sparkles size={13} />
                Top Rated Plus
              </span>
              <span className="about-hero-badge-face about-hero-badge-hover">
                <Sparkles size={13} />
                Upwork Top Rated Plus
                <ExternalLink size={12} />
              </span>
            </a>
          </div>
        </div>

        <div className="about-hero-copy">
          <span className="about-eyebrow">{aboutProfile.eyebrow}</span>
          <h2 id="about-heading">
            I am <span>Asim Ali</span>
          </h2>
          <p className="about-headline">{aboutProfile.headline}</p>
          <p>{aboutProfile.hook}</p>
          <p>{aboutProfile.credibility}</p>

          <div className="about-stats" aria-label="Professional highlights">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="facts-grid">
            {aboutFacts.map((fact) => (
              <div className="fact-item" key={fact.key}>
                <strong>{fact.key}</strong>
                <span>{fact.value}</span>
              </div>
            ))}
          </div>

          <a href="#about-services" className="about-scroll-indicator">
            <span>See services</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </section>

      <section className="about-focus about-reveal">
        <div className="about-focus-glow" aria-hidden="true" />
        <div className="about-focus-icon" aria-hidden="true">
          <Bot size={28} strokeWidth={1.7} />
        </div>
        <div>
          <h3>AI-powered products, end to end</h3>
          <p>{aboutProfile.focus}</p>
        </div>
      </section>

      <section className="about-featured about-reveal">
        <div className="about-featured-body">
          <span className="about-featured-label">
            <Zap size={13} />
            {aboutProfile.featured.label}
          </span>
          <h3>{aboutProfile.featured.title}</h3>
          <p>{aboutProfile.featured.summary}</p>
          <a
            href={aboutProfile.featured.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-featured-cta"
          >
            Try live demo <ExternalLink size={14} />
          </a>
        </div>
        <ul
          className="about-capability-list"
          aria-label="AI agent capabilities"
        >
          {aboutProfile.agentCapabilities.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} strokeWidth={2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="automation"
        className="about-automation about-reveal"
        aria-labelledby="about-automation-heading"
      >
        <header className="about-automation-head">
          <span className="about-eyebrow">{automationOffer.eyebrow}</span>
          <h3 id="about-automation-heading">{automationOffer.suite.title}</h3>
          <p>{automationOffer.suite.intro}</p>
        </header>

        <ul className="about-automation-modules">
          {automationOffer.suite.modules.map((module) => (
            <li key={module.title} className="about-automation-module">
              <span>{module.step}</span>
              <div>
                <h4>{module.title}</h4>
                <p>{module.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="about-automation-meta">
          <div className="home-automation-tools" aria-label="Suite technologies">
            {automationOffer.suite.tech.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <p className="about-automation-result">{automationOffer.suite.result}</p>
        </div>

        <aside
          id="automation-dashboard"
          className="about-dashboard"
          aria-labelledby="about-dashboard-heading"
        >
          <div className="about-dashboard-copy">
            <span className="about-featured-label">
              <LayoutDashboard size={13} />
              {automationOffer.dashboard.eyebrow}
            </span>
            <h4 id="about-dashboard-heading">
              {automationOffer.dashboard.title}
            </h4>
            <p>{automationOffer.dashboard.copy}</p>
          </div>
          <div className="about-dashboard-plans">
            {automationOffer.dashboard.plans.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? "about-dashboard-plan is-featured"
                    : "about-dashboard-plan"
                }
              >
                <span>{plan.name}</span>
                <strong>{plan.price}</strong>
                <p>{plan.note}</p>
              </article>
            ))}
            <Link
              href="/contact?from=automation"
              className="about-featured-cta"
            >
              Discuss a workflow <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </section>

      <section className="about-story-grid about-reveal">
        <article className="about-story-card">
          <div className="about-story-icon">
            <Workflow size={22} />
          </div>
          <h3>The practical result</h3>
          <p>{aboutProfile.result}</p>
        </article>
        <article className="about-story-card">
          <div className="about-story-icon">
            <ServerCog size={22} />
          </div>
          <h3>Full-stack web development</h3>
          <p>{aboutProfile.fullstack}</p>
        </article>
        <article className="about-story-card">
          <div className="about-story-icon">
            <LayoutDashboard size={22} />
          </div>
          <h3>SaaS & operations platforms</h3>
          <p>{aboutProfile.saas}</p>
        </article>
      </section>

      <section
        className="about-help about-reveal"
        aria-labelledby="about-help-heading"
      >
        <header className="about-help-head">
          <span className="about-eyebrow">What I can help with</span>
          <h3 id="about-help-heading">Capabilities clients hire me for</h3>
        </header>
        <ul className="about-help-grid">
          {aboutProfile.helpWith.map((item) => {
            const Icon = helpIconMap[item.icon] ?? Sparkles;
            return (
              <li key={item.label} className="about-help-item">
                <span className="about-help-icon" aria-hidden="true">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <aside className="about-closing about-reveal">
        <p>{aboutProfile.closing}</p>
        <Link href="/contact?from=about" className="about-closing-cta">
          Start a conversation <ArrowRight size={16} />
        </Link>
      </aside>

      <div id="about-services" className="about-services-block">
        <SectionTitle title="Services" />
        <p className="about-services-lead about-reveal">
          Focused offers — pick the lane that matches your project, or combine
          them into one delivery. Includes AI automation, Supabase, and Stripe
          when your product needs workflows, auth, data, or billing.
        </p>
        <div className="service-grid">
          {services.map((item) => {
            const Icon = serviceIcons[item.title] ?? Sparkles;
            return (
              <article key={item.title} className="service-card about-reveal">
                <div className="service-icon">
                  <Icon size={28} strokeWidth={1.7} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <section
        className="about-platforms about-reveal"
        aria-labelledby="about-platforms-heading"
      >
        <header className="about-help-head">
          <span className="about-eyebrow">Find me on</span>
          <h3 id="about-platforms-heading">Freelance platforms</h3>
          <p>
            Hire or review my work across the networks I actively use for client
            projects.
          </p>
        </header>
        <ul className="about-platforms-grid">
          {freelancePlatforms.map((platform) => (
            <li key={platform.name}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-platform-card"
              >
                <span className="about-platform-name">
                  {platform.name}
                  <ExternalLink size={13} />
                </span>
                <span className="about-platform-blurb">{platform.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <BackgroundTexture />
    </main>
  );
}
