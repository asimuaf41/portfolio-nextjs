import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  Smartphone,
} from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { PhoneFrame } from "@/components/phone-frame";
import { PhoneVideo } from "@/components/phone-video";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { getProjectDetail, projectDetails } from "@/data/project-details";
import { contactInfo } from "@/data/site-content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return projectDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }
  return createPageMetadata({
    title: detail.title,
    description: detail.summary,
    path: `/projects/${detail.slug}`,
    keywords: detail.keywords,
    image: detail.screenshots[0]?.src,
    imageAlt: detail.screenshots[0]?.alt,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) notFound();

  const email = contactInfo.emails[0].value;
  const requestHref = `mailto:${email}?subject=${encodeURIComponent(
    "Android test build request: Shipwright Mobile",
  )}&body=${encodeURIComponent(
    "Hi Asim, I'd like to try the Shipwright Mobile Android test build.\n\nName:\nCompany:\nAndroid device / version:",
  )}`;

  return (
    <PageTransition>
      <main className="mproj">
        <SeoJsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: detail.title, path: `/projects/${detail.slug}` },
          ])}
        />

        <Link
          href="/projects"
          transitionTypes={["nav-back"]}
          className="mproj-back"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        <header className="mproj-hero">
          <span className="mproj-icon" aria-hidden="true">
            <Smartphone size={30} strokeWidth={1.7} />
          </span>
          <ul className="mproj-badges" aria-label="Platforms">
            {detail.platforms.map((item) => (
              <li key={item.platform} className={`mproj-badge mproj-${item.platform}`}>
                {item.label}
              </li>
            ))}
          </ul>
          <h1>{detail.title}</h1>
          <p className="mproj-lead">{detail.description}</p>
          <div className="mproj-actions">
            <a href={requestHref} className="case-btn case-btn-primary">
              <Mail size={14} />
              Request Android test build
            </a>
            <Link
              href={`/blog/${detail.articleSlug}`}
              className="case-btn"
            >
              <BookOpen size={14} />
              Read how it&apos;s built
            </Link>
            <a
              href={detail.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-btn"
            >
              <ExternalLink size={14} />
              Web demo
            </a>
            <a
              href={detail.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-btn"
            >
              <Github size={14} />
              View code
            </a>
          </div>
        </header>

        <section className="mproj-section" aria-labelledby="mproj-shots">
          <h2 id="mproj-shots">Screens</h2>
          <ul className="mproj-gallery">
            {detail.screenshots.map((shot) => (
              <li key={shot.src}>
                <PhoneFrame src={shot.src} alt={shot.alt} />
                <span>{shot.caption}</span>
              </li>
            ))}
          </ul>
        </section>

        {detail.iosDemo ? (
          <section className="mproj-section" aria-labelledby="mproj-ios">
            <h2 id="mproj-ios">iOS demo</h2>
            <p className="mproj-note">Recorded on the iOS Simulator.</p>
            <div className="mproj-ios">
              <PhoneVideo {...detail.iosDemo} />
            </div>
          </section>
        ) : null}

        <section className="mproj-section" aria-labelledby="mproj-features">
          <h2 id="mproj-features">Key features</h2>
          <ul className="mproj-features">
            {detail.features.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={16} strokeWidth={2} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mproj-section" aria-labelledby="mproj-stack">
          <h2 id="mproj-stack">Stack</h2>
          <div className="projects-card-tags">
            {detail.stack.map((item) => (
              <span key={item} className="projects-tag">
                {item}
              </span>
            ))}
          </div>
          <p className="mproj-note">
            iOS has been tested on the Simulator only; Android is an installable
            test build shared on request. Not published to any app store.
          </p>
        </section>
      </main>
    </PageTransition>
  );
}
