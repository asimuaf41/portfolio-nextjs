"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "@/components/theme-provider";

export function BackgroundTexture() {
  const [isReady, setIsReady] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      background: {
        color: "transparent",
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 3 },
          repulse: { distance: 120, duration: 0.4 },
        },
      },
      particles: {
        color: {
          value:
            theme === "light"
              ? ["#7fc0ff", "#2185bf", "#4da3ff", "#94a3b8", "#64748b"]
              : [
                  "#241379",
                  "#2185bf",
                  "#1fbce1",
                  "#b62f56",
                  "#eb7d46",
                  "#fddc32",
                ],
        },
        links: {
          color: theme === "light" ? "#7fc0ff" : "#2185bf",
          distance: 145,
          enable: true,
          opacity: theme === "light" ? 0.28 : 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: { enable: true, area: 900 },
          value: theme === "light" ? 42 : 60,
        },
        opacity: { value: theme === "light" ? 0.45 : 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
    }),
    [theme],
  );

  if (!isReady) {
    return <div className="texture-layer" aria-hidden="true" />;
  }

  return (
    <div className="texture-layer" aria-hidden="true">
      <Particles
        key={theme}
        id={`background-particles-${theme}`}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}
