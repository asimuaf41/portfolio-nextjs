"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { THEMES, themeMeta, type ThemeId } from "@/lib/theme";
import { cn } from "@/lib/utils";

const themeIcon: Record<ThemeId, typeof Moon> = {
  dark: Moon,
  light: Sun,
};

type ThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, setTheme, ready } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const ActiveIcon = themeIcon[theme] ?? Palette;

  return (
    <div
      ref={rootRef}
      className={cn("theme-switcher", open && "theme-switcher-open", className)}
    >
      <button
        type="button"
        className="theme-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`Theme: ${themeMeta[theme].label}. Change theme`}
        onClick={() => setOpen((value) => !value)}
      >
        <ActiveIcon size={16} strokeWidth={2} aria-hidden="true" />
        <span className="theme-switcher-label">
          {ready ? themeMeta[theme].label : "Theme"}
        </span>
      </button>

      {open ? (
        <div
          id={listId}
          className="theme-switcher-menu"
          role="listbox"
          aria-label="Select theme"
        >
          {THEMES.map((id) => {
            const meta = themeMeta[id];
            const Icon = themeIcon[id];
            const selected = theme === id;

            return (
              <button
                key={id}
                type="button"
                role="option"
                aria-selected={selected}
                className={cn(
                  "theme-switcher-option",
                  selected && "theme-switcher-option-active",
                )}
                onClick={() => {
                  setTheme(id);
                  setOpen(false);
                }}
              >
                <span
                  className="theme-switcher-swatch"
                  style={{ background: meta.swatch }}
                  aria-hidden="true"
                />
                <span className="theme-switcher-option-copy">
                  <span className="theme-switcher-option-title">
                    <Icon size={14} aria-hidden="true" />
                    {meta.label}
                  </span>
                  <span className="theme-switcher-option-desc">
                    {meta.description}
                  </span>
                </span>
                {selected ? (
                  <Check size={15} className="theme-switcher-check" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
