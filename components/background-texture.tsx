"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function BackgroundTexture() {
  const [isReady, setIsReady] = useState(false);

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
          value: [
            "#241379",
            "#2185bf",
            "#1fbce1",
            "#b62f56",
            "#eb7d46",
            "#fddc32",
          ],
        },
        links: {
          color: "#2185bf",
          distance: 145,
          enable: true,
          opacity: 0.2,
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
          value: 60,
        },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
    }),
    [],
  );

  if (!isReady) {
    return <div className="texture-layer" aria-hidden="true" />;
  }

  return (
    <div className="texture-layer" aria-hidden="true">
      <Particles
        id="background-particles"
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}
