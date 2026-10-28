"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// The particle engine is loaded only after first paint and never on the LCP path.
const BackgroundParticles = dynamic(
  () => import("@/components/background-particles"),
  { ssr: false },
);

export function BackgroundTexture() {
  const [mode, setMode] = useState<"off" | "full" | "compact">("off");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const compact = window.matchMedia("(max-width: 768px)").matches;
    const start = () => setMode(compact ? "compact" : "full");

    // Wait for the page to finish loading, then for an idle moment.
    let idle = 0;
    let timer = 0;
    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        idle = window.requestIdleCallback(start, { timeout: 2000 });
      } else {
        timer = window.setTimeout(start, 600);
      }
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idle) window.cancelIdleCallback(idle);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="texture-layer" aria-hidden="true">
      {mode !== "off" ? (
        <BackgroundParticles compact={mode === "compact"} />
      ) : null}
    </div>
  );
}
