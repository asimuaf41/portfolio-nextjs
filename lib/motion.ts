import type { Transition, Variants } from "motion/react";

/** The one place for motion values. Components import from here, never hardcode. */

export const duration = { fast: 0.15, base: 0.25, slow: 0.4 } as const;

export const ease = {
  out: [0.16, 1, 0.3, 1],
  in: [0.7, 0, 0.84, 0],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const spring = {
  snappy: { type: "spring", visualDuration: 0.25, bounce: 0.15 },
  smooth: { type: "spring", visualDuration: 0.4, bounce: 0 },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const enterTransition: Transition = {
  duration: duration.slow,
  ease: ease.out,
};
