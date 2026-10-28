"use client";

// Lifts a card or button slightly on hover and presses it on tap. Transform only.
// `inStagger` makes it a fade-up child of a <Stagger>, so one element does both jobs.
import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { enterTransition, fadeUp, spring } from "@/lib/motion";
import {
  motionTags,
  type MotionElementProps,
  type MotionTag,
} from "./motion-tag";

type MagneticHoverProps = Omit<
  MotionElementProps,
  "whileHover" | "whileTap" | "variants" | "transition"
> & {
  as?: MotionTag;
  inStagger?: boolean;
};

export function MagneticHover({
  as,
  inStagger = false,
  children,
  ...rest
}: MagneticHoverProps) {
  const Tag = motionTags[as ?? "div"];
  return (
    <Tag
      {...rest}
      {...(inStagger ? { variants: fadeUp } : {})}
      whileHover={{ y: -2, transition: spring.snappy }}
      whileTap={{ scale: 0.98, transition: spring.snappy }}
      transition={inStagger ? enterTransition : spring.snappy}
    >
      {children}
    </Tag>
  );
}

const MotionLink = motion.create(Link);

type MagneticLinkProps = Omit<
  ComponentProps<typeof MotionLink>,
  "whileHover" | "whileTap" | "variants" | "transition"
> & { inStagger?: boolean };

/** MagneticHover for next/link cards, so client-side navigation and transitionTypes keep working. */
export function MagneticLink({
  inStagger = false,
  children,
  ...rest
}: MagneticLinkProps) {
  return (
    <MotionLink
      {...rest}
      {...(inStagger ? { variants: fadeUp } : {})}
      whileHover={{ y: -2, transition: spring.snappy }}
      whileTap={{ scale: 0.98, transition: spring.snappy }}
      transition={inStagger ? enterTransition : spring.snappy}
    >
      {children}
    </MotionLink>
  );
}
