"use client";

import type { CSSProperties } from "react";
import {
  ChevronDown,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { personalInfo, socialProfiles } from "@/data/home";
import { HomeHighlightStats } from "@/components/home-highlight-stats";

const socialIconMap = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

function CharReveal({
  text,
  className = "",
  baseDelay = 0,
  step = 0.034,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  step?: number;
}) {
  return (
    <span className={`home-char-group ${className}`.trim()} aria-hidden="true">
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="home-char"
          style={
            {
              "--char-delay": `${baseDelay + index * step}s`,
            } as CSSProperties
          }
        >
          <span className="home-char-inner">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

function WordReveal({
  text,
  baseDelay = 0.85,
  step = 0.022,
}: {
  text: string;
  baseDelay?: number;
  step?: number;
}) {
  const words = text.split(" ");

  return (
    <span className="home-word-group" aria-hidden="true">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="home-word"
          style={
            {
              "--word-delay": `${baseDelay + index * step}s`,
            } as CSSProperties
          }
        >
          <span className="home-word-inner">{word}</span>
        </span>
      ))}
    </span>
  );
}

export function HomeHeroIntro() {
  const greeting = "Hi, I am ";
  const nameStart = greeting.length * 0.034 + 0.12;

  return (
    <div className="home-hero-content">
      <h1 className="home-hero-title">
        <span className="sr-only">Hi, I am {personalInfo.name}</span>
        <CharReveal text={greeting} baseDelay={0.08} />
        <span className="home-hero-name">
          <CharReveal
            text={personalInfo.name}
            baseDelay={nameStart}
            step={0.045}
          />
          <span className="home-hero-name-shine" aria-hidden="true" />
        </span>
      </h1>

      <p className="home-hero-detail">
        <span className="sr-only">{personalInfo.detail}</span>
        <WordReveal text={personalInfo.detail} baseDelay={0.72} step={0.012} />
      </p>

      <HomeHighlightStats />

      <div className="social-row home-hero-meta">
        {socialProfiles.map((social) => {
          const Icon =
            socialIconMap[social.icon as keyof typeof socialIconMap];
          return (
            <a
              key={social.label}
              href={social.link}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon ? <Icon size={18} /> : social.label.slice(0, 2)}
            </a>
          );
        })}
      </div>

      <a href="#recent-writing" className="home-scroll-indicator home-hero-meta">
        <span>See latest research</span>
        <ChevronDown size={18} />
      </a>
    </div>
  );
}
