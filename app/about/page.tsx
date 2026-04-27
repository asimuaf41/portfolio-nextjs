import type { Metadata } from "next";
import { BriefcaseBusiness, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";
import { BackgroundTexture } from "@/components/background-texture";
import { SectionTitle } from "@/components/section-title";
import { aboutFacts, aboutIntro, services } from "@/data/site-content";

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
        {services.map((item, idx) => (
          <article key={item.title} className="service-card">
            <div className="service-icon">
              {idx === 0 ? <BriefcaseBusiness size={36} /> : null}
              {idx === 1 ? <Smartphone size={36} /> : null}
              {idx === 2 ? <ShieldCheck size={36} /> : null}
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
