"use client";

import { useEffect, useState } from "react";
import { heroRoles } from "@/data/home";

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1500;

type Phase = "typing" | "holding" | "deleting";

export function HomeRoleTypewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setReducedMotion(true);
      setText(heroRoles[0]);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const current = heroRoles[roleIndex];
    let timeout: number;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = window.setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, TYPE_MS);
      } else {
        timeout = window.setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = window.setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else {
      if (text.length > 0) {
        timeout = window.setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, DELETE_MS);
      } else {
        setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        setPhase("typing");
      }
    }

    return () => window.clearTimeout(timeout);
  }, [text, phase, roleIndex, reducedMotion]);

  return (
    <p className="home-role-typewriter">
      <span className="sr-only">{heroRoles.join(" · ")}</span>
      <span aria-hidden="true" className="home-role-typewriter-line">
        <span className="home-role-typewriter-prefix">{">"}</span>
        <span>{text}</span>
        {!reducedMotion ? (
          <span className="home-role-typewriter-cursor" />
        ) : null}
      </span>
    </p>
  );
}
