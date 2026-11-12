import Link from "next/link";
import { ArrowRight, BookOpen, Smartphone } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { Reveal } from "@/components/motion/reveal";
import { getProjectDetail } from "@/data/project-details";
import { aboutProfile } from "@/data/site-content";

const SLUG = "shipwright-mobile";

/** Mobile-app section shared by the home and about pages. */
export function MobileShowcase({ variant }: { variant: "home" | "about" }) {
  const detail = getProjectDetail(SLUG);
  if (!detail) return null;
  const shots = detail.screenshots.slice(0, 3);
  const mobile = aboutProfile.mobile;

  return (
    <Reveal
      as="section"
      id="mobile"
      className={`mshow mshow-${variant}`}
      aria-labelledby={`mshow-heading-${variant}`}
      amount={0.15}
    >
      <div className="mshow-copy">
        <span className="blog-intro-pill">
          <Smartphone size={14} />
          {mobile.eyebrow}
        </span>
        <h2 id={`mshow-heading-${variant}`}>
          {variant === "home"
            ? "Also building iOS & Android apps"
            : mobile.title}
        </h2>
        <p>{mobile.summary}</p>
        {variant === "about" ? (
          <ul className="mshow-points">
            {mobile.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
        <ul className="mproj-badges" aria-label="Platforms">
          {detail.platforms.map((item) => (
            <li
              key={item.platform}
              className={`mproj-badge mproj-${item.platform}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="mshow-actions">
          <Link href={`/projects/${SLUG}`} className="home-recent-cta">
            See Shipwright Mobile <ArrowRight size={16} />
          </Link>
          <Link
            href={`/blog/${detail.articleSlug}`}
            className="home-recent-cta"
          >
            <BookOpen size={15} /> How it&apos;s built
          </Link>
        </div>
      </div>
      <ul className="mshow-phones" aria-label="Shipwright Mobile screens">
        {shots.map((shot) => (
          <li key={shot.src}>
            <PhoneFrame src={shot.src} alt={shot.alt} />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
