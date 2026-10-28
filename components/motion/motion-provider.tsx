"use client";

// Site-wide motion defaults: honour the OS reduced-motion setting and use the smooth spring.
import { MotionConfig } from "motion/react";
import { spring } from "@/lib/motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={spring.smooth}>
      {children}
    </MotionConfig>
  );
}
