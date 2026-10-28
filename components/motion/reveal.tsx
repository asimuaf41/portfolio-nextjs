"use client";

// Fades and lifts its children once, the first time they scroll into view.
import { enterTransition, fadeUp } from "@/lib/motion";
import {
  motionTags,
  type MotionElementProps,
  type MotionTag,
} from "./motion-tag";

type RevealProps = Omit<
  MotionElementProps,
  "variants" | "initial" | "animate" | "whileInView" | "viewport" | "transition"
> & {
  as?: MotionTag;
  delay?: number;
  /** Share of the element that must be visible; lower it for tall blocks. */
  amount?: number;
};

export function Reveal({
  as,
  delay = 0,
  amount = 0.3,
  children,
  ...rest
}: RevealProps) {
  const Tag = motionTags[as ?? "div"];
  return (
    <Tag
      {...rest}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ ...enterTransition, delay }}
    >
      {children}
    </Tag>
  );
}
