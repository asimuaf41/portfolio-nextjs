// Maps an `as` string to its motion element so the motion components can BE the existing
// element (section, article, li...) and the DOM and layout stay unchanged.
import { motion, type HTMLMotionProps } from "motion/react";

const elements = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  article: motion.article,
  aside: motion.aside,
  figure: motion.figure,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  details: motion.details,
  dl: motion.dl,
  p: motion.p,
  span: motion.span,
  h2: motion.h2,
  a: motion.a,
} as const;

export type MotionTag = keyof typeof elements;
export type MotionElementProps = HTMLMotionProps<"div"> & {
  href?: string;
  target?: string;
  rel?: string;
  open?: boolean;
};

/** Stable module-level lookup, so `const Tag = motionTags[as]` is not a component created during render. */
export const motionTags = elements as Record<MotionTag, typeof motion.div>;
