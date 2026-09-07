"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { homeHighlights } from "@/data/home";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, enabled: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled, duration]);

  return value;
}

function HighlightStat({
  label,
  target,
  suffix,
  href,
  external,
  delay,
  active,
}: {
  label: string;
  target: number;
  suffix: string;
  href: string;
  external?: boolean;
  delay: number;
  active: boolean;
}) {
  const value = useCountUp(target, active, 1400 + delay);
  const content = (
    <>
      <span className="home-highlight-glow" aria-hidden="true" />
      <span className="home-highlight-shape" aria-hidden="true" />
      <strong>
        {value}
        {suffix}
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
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="home-highlight-row" aria-label="Career highlights">
      {homeHighlights.map((item, index) => (
        <HighlightStat
          key={item.label}
          label={item.label}
          target={item.value}
          suffix={item.suffix}
          href={item.href}
          external={item.external}
          delay={index * 180}
          active={active}
        />
      ))}
    </div>
  );
}
