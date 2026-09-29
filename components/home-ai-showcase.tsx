"use client";

import { useEffect, useState } from "react";
import { heroAgentLog } from "@/data/home";

type CodeToken = {
  text: string;
  cls?: "kw" | "fn" | "str" | "com" | "var" | "pun";
};

const codeLines: CodeToken[][] = [
  [
    { text: "const ", cls: "kw" },
    { text: "agent", cls: "var" },
    { text: " = ", cls: "pun" },
    { text: "await ", cls: "kw" },
    { text: "createAgent", cls: "fn" },
    { text: "({", cls: "pun" },
  ],
  [
    { text: "  model", cls: "var" },
    { text: ": ", cls: "pun" },
    { text: '"claude-sonnet-4"', cls: "str" },
    { text: ",", cls: "pun" },
  ],
  [
    { text: "  tools", cls: "var" },
    { text: ": [", cls: "pun" },
    { text: "qualifyLead", cls: "fn" },
    { text: ", ", cls: "pun" },
    { text: "bookMeeting", cls: "fn" },
    { text: "],", cls: "pun" },
  ],
  [{ text: "});", cls: "pun" }],
  [{ text: "", cls: "pun" }],
  [
    { text: "const ", cls: "kw" },
    { text: "result", cls: "var" },
    { text: " = ", cls: "pun" },
    { text: "await ", cls: "kw" },
    { text: "agent", cls: "var" },
    { text: ".run(lead);", cls: "pun" },
  ],
  [{ text: "// -> qualified, call booked", cls: "com" }],
];

function flattenCode(lines: CodeToken[][]) {
  const flat: { ch: string; cls?: string }[] = [];
  lines.forEach((line, i) => {
    line.forEach((seg) => {
      for (const ch of seg.text) flat.push({ ch, cls: seg.cls });
    });
    if (i < lines.length - 1) flat.push({ ch: "\n" });
  });
  return flat;
}

const flatCode = flattenCode(codeLines);

const CODE_TYPE_MS = 26;
const CODE_HOLD_MS = 2600;
const CODE_RESTART_DELAY_MS = 900;

function CodeTypingCard() {
  const [revealed, setRevealed] = useState(0);
  const [done, setDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setReducedMotion(true);
      setRevealed(flatCode.length);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let timeout: number;

    if (revealed < flatCode.length) {
      timeout = window.setTimeout(
        () => setRevealed((r) => r + 1),
        CODE_TYPE_MS,
      );
    } else if (!done) {
      timeout = window.setTimeout(() => setDone(true), CODE_HOLD_MS);
    } else {
      timeout = window.setTimeout(() => {
        setDone(false);
        setRevealed(0);
      }, CODE_RESTART_DELAY_MS);
    }

    return () => window.clearTimeout(timeout);
  }, [revealed, done, reducedMotion]);

  return (
    <div className="ai-panel ai-panel-code">
      <div className="ai-panel-head">
        <span className="ai-panel-dots">
          <span className="ai-dot ai-dot-red" />
          <span className="ai-dot ai-dot-yellow" />
          <span className="ai-dot ai-dot-green" />
        </span>
        <span className="ai-panel-tab">agent.ts</span>
      </div>
      <pre className="ai-panel-body ai-code-body">
        {flatCode.slice(0, revealed).map((c, idx) =>
          c.ch === "\n" ? (
            <br key={idx} />
          ) : (
            <span key={idx} className={`code-tok-${c.cls ?? "pun"}`}>
              {c.ch}
            </span>
          ),
        )}
        {!reducedMotion ? <span className="ai-code-cursor" /> : null}
      </pre>
    </div>
  );
}

const AGENT_TYPE_MS = 24;
const AGENT_LINE_HOLD_MS = 900;
const AGENT_MAX_HISTORY = 4;

function AgentActivityCard() {
  const [historyIdx, setHistoryIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setReducedMotion(true);
      setHistory(heroAgentLog.slice(0, AGENT_MAX_HISTORY));
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const currentLine = heroAgentLog[historyIdx % heroAgentLog.length];
    let timeout: number;

    if (typed.length < currentLine.length) {
      timeout = window.setTimeout(() => {
        setTyped(currentLine.slice(0, typed.length + 1));
      }, AGENT_TYPE_MS);
    } else {
      timeout = window.setTimeout(() => {
        setHistory((prev) => [...prev, currentLine].slice(-AGENT_MAX_HISTORY));
        setTyped("");
        setHistoryIdx((prev) => prev + 1);
      }, AGENT_LINE_HOLD_MS);
    }

    return () => window.clearTimeout(timeout);
  }, [typed, historyIdx, reducedMotion]);

  return (
    <div className="ai-panel ai-panel-agent">
      <div className="ai-panel-head">
        <span className="ai-panel-pulse" />
        <span className="ai-panel-tab">agent.log</span>
        <span className="ai-panel-live">LIVE</span>
      </div>
      <div className="ai-panel-body ai-agent-body">
        {history.map((line, i) => (
          <p
            key={`${i}-${line}`}
            className="ai-log-line"
            style={{
              opacity: 0.35 + ((i + 1) / Math.max(history.length, 1)) * 0.55,
            }}
          >
            <span className="ai-log-caret">{">"}</span> {line}
          </p>
        ))}
        {!reducedMotion ? (
          <p className="ai-log-line ai-log-line-active">
            <span className="ai-log-caret">{">"}</span> {typed}
            <span className="ai-log-cursor" />
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function HomeAiShowcase() {
  return (
    <div className="home-ai-showcase" aria-hidden="true">
      <CodeTypingCard />
      <AgentActivityCard />
    </div>
  );
}
