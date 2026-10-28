import Link from "next/link";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { homeHighlights } from "@/data/home";

/** Matches `.home-highlight-card:nth-child(1)` reveal delay in globals.css (seconds). */
const COUNT_START_DELAY = 1.85;

function HighlightStat({
  label,
  target,
  suffix,
  href,
  external,
  delay,
}: {
  label: string;
  target: number;
  suffix: string;
  href: string;
  external?: boolean;
  delay: number;
}) {
  const content = (
    <>
      <span className="home-highlight-glow" aria-hidden="true" />
      <span className="home-highlight-shape" aria-hidden="true" />
      <strong>
        <AnimatedNumber value={`${target}${suffix}`} delay={delay} />
      </strong>
      <span>{label}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className="home-highlight-card"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}: ${target}${suffix}. Open Upwork reviews`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="home-highlight-card"
      aria-label={`${label}: ${target}${suffix}. Go to ${label === "Projects Delivered" ? "projects" : "resume"}`}
    >
      {content}
    </Link>
  );
}

export function HomeHighlightStats() {
  return (
    <div className="home-highlight-row" aria-label="Career highlights">
      {homeHighlights.map((item, index) => (
        <HighlightStat
          key={item.label}
          label={item.label}
          target={item.value}
          suffix={item.suffix}
          href={item.href}
          external={item.external}
          delay={COUNT_START_DELAY + index * 0.13}
        />
      ))}
    </div>
  );
}
