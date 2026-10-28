"use client";

// Staggers StaggerItem children in when the group scrolls into view.
import { stagger } from "motion/react";
import { enterTransition, fadeUp } from "@/lib/motion";
import {
  motionTags,
  type MotionElementProps,
  type MotionTag,
} from "./motion-tag";

type StaggerProps = Omit<
  MotionElementProps,
  "variants" | "initial" | "animate" | "whileInView" | "viewport" | "transition"
> & {
  as?: MotionTag;
  interval?: number;
  /** Low by default so tall grids can never stay hidden. */
  amount?: number;
};

export function Stagger({
  as,
  interval = 0.06,
  amount = 0.1,
  children,
  ...rest
}: StaggerProps) {
  const Tag = motionTags[as ?? "div"];
  return (
    <Tag
      {...rest}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: stagger(interval) } },
      }}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = Omit<
  MotionElementProps,
  "variants" | "initial" | "animate" | "whileInView" | "viewport" | "transition"
> & { as?: MotionTag };

export function StaggerItem({ as, children, ...rest }: StaggerItemProps) {
  const Tag = motionTags[as ?? "div"];
  return (
    <Tag {...rest} variants={fadeUp} transition={enterTransition}>
      {children}
    </Tag>
  );
}
