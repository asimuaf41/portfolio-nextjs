"use client";

import { ScrollRevealEffects } from "@/components/scroll-reveal-effects";

/** Reveals `.about-reveal` blocks as they enter the scroll viewport. */
export function AboutScrollEffects() {
  return <ScrollRevealEffects selector=".about-reveal" />;
}
