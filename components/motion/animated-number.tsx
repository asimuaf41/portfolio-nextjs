"use client";

// Counts up to a value when scrolled into view; writes straight to the DOM, no per-frame React state.
// Accepts "7+", "100%", "4,249+" as well as plain numbers; the final text stays available to screen readers.
import {
  motion,
  useInView,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import { spring } from "@/lib/motion";

function parse(value: string | number) {
  const text = String(value);
  const match = text.match(/^([^\d-]*)(-?[\d,]*\.?\d+)(.*)$/);
  if (!match) return null;
  const digits = match[2];
  return {
    prefix: match[1],
    target: Number(digits.replace(/,/g, "")),
    suffix: match[3],
    decimals: digits.split(".")[1]?.length ?? 0,
    grouped: digits.includes(","),
    text,
  };
}

export function AnimatedNumber({
  value,
  delay = 0,
  className,
}: {
  value: string | number;
  /** Seconds to wait after the number scrolls into view before counting. */
  delay?: number;
  className?: string;
}) {
  const parsed = parse(value);
  const { prefix, target, suffix, decimals, grouped, text } = parsed ?? {
    prefix: "",
    target: 0,
    suffix: "",
    decimals: 0,
    grouped: false,
    text: String(value),
  };
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const motionValue = useSpring(0, spring.smooth);
  const shown = useTransform(motionValue, (latest) =>
    latest.toLocaleString("en-US", {
      useGrouping: grouped,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }),
  );

  useEffect(() => {
    if (!parsed || !inView) return;
    if (reduced) {
      motionValue.jump(target);
      return;
    }
    const timer = window.setTimeout(() => motionValue.set(target), delay * 1000);
    return () => window.clearTimeout(timer);
  }, [parsed, inView, reduced, target, delay, motionValue]);

  if (!parsed) return <span className={className}>{text}</span>;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {prefix}
        <motion.span>{shown}</motion.span>
        {suffix}
      </span>
    </span>
  );
}
