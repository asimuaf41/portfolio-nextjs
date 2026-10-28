"use client";

// Wrap each page.tsx in this, not the layout, so the shell stays put while pages cross-fade.
import { ViewTransition } from "react";

const PAGE = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "page-fade",
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter={PAGE} exit={PAGE} default="none">
      {children}
    </ViewTransition>
  );
}
