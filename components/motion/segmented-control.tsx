"use client";

// Accessible radio-style filter with a pill that slides between options.
import { motion } from "motion/react";
import { useId, useRef, type KeyboardEvent } from "react";
import { spring } from "@/lib/motion";

export type SegmentedOption<T extends string> = { value: T; label: string };

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: readonly SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  className?: string;
}) {
  const id = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = options.length - 1;
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    } else {
      return;
    }
    event.preventDefault();
    onChange(options[next].value);
    refs.current[next]?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={className}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        gap: 2,
        padding: 4,
        borderRadius: 999,
        border: "1px solid var(--border-subtle)",
        background: "var(--surface-soft)",
      }}
    >
      {options.map((option, index) => {
        const checked = option.value === value;
        return (
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            style={{
              position: "relative",
              padding: "6px 14px",
              border: 0,
              borderRadius: 999,
              background: "transparent",
              color: checked ? "var(--text-primary)" : "var(--text-muted)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "color 150ms ease",
            }}
          >
            {checked && (
              <motion.span
                layoutId={`${id}-pill`}
                transition={spring.snappy}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                }}
              />
            )}
            <span style={{ position: "relative" }}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
