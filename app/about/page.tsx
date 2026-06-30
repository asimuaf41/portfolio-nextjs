import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Sparkles,
  Bot,
  Smartphone,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { BackgroundTexture } from "@/components/background-texture";
import { SectionTitle } from "@/components/section-title";
import { aboutFacts, aboutIntro, services } from "@/data/site-content";

// Map service index/title to matching icon for visual context and keep icons stable if order shifts.
const serviceIcons: { [key: string]: React.ReactNode } = {
  "MERN/Next.js Web Engineering & Rescue": <BriefcaseBusiness size={36} />,
  "AI & Automation Integration": <Sparkles size={36} />,
  "AI Agent Development (OpenClaw, n8n & More)": <Bot size={36} />,
  "Mobile Applications (React Native)": <Smartphone size={36} />,
  "API Development & Optimization": <ServerCog size={36} />,
  "Quality Assurance & Testing Automation": <ShieldCheck size={36} />,
};

export const metadata: Metadata = {
  title: "About",
  description:
    "About Asim Ali, full-stack JavaScript engineer experienced with React, Next.js, and Node.js systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <SectionTitle title="About Me" />
      <div className="about-grid">
        <Image
          src="/asim-working.jpg"
          alt="Asim Ali working on laptop"
          width={500}
          height={500}
          className="about-image"
        />
        <div className="about-text">
          <h2>
            I am <span style={{ color: "#037fff" }}>Asim Ali</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: aboutIntro }} />

          <div className="facts-grid">
            {aboutFacts.map((fact) => (
              <div className="fact-item" key={fact.key}>
                <strong>{fact.key}</strong>: {fact.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionTitle title="Services" />
      <div className="service-grid">
        {services.map((item) => (
          <article key={item.title} className="service-card">
            <div className="service-icon">
              {serviceIcons[item.title] || null}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <BackgroundTexture />
    </main>
  );
}
