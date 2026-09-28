"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import {
  engagementProcess,
  type WorkflowTrackId,
} from "@/data/workflow";

const panelFacts = [
  { key: "you", label: "You" },
  { key: "deliver", label: "I deliver" },
  { key: "gate", label: "We move on when" },
] as const;

export function HomeWorkflow() {
  const [trackId, setTrackId] = useState<WorkflowTrackId>("automation");
  const [stageIndex, setStageIndex] = useState(0);
  const trackRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const stageRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const trackIndex = engagementProcess.tracks.findIndex(
    (item) => item.id === trackId,
  );
  const track = engagementProcess.tracks[trackIndex] ?? engagementProcess.tracks[0];
  const stage = track.stages[stageIndex] ?? track.stages[0];

  function selectTrack(nextId: WorkflowTrackId, nextIndex: number) {
    setTrackId(nextId);
    setStageIndex(0);
    trackRefs.current[nextIndex]?.focus();
  }

  function onTrackKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const count = engagementProcess.tracks.length;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = (trackIndex + 1) % count;
      selectTrack(engagementProcess.tracks[next].id, next);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = (trackIndex - 1 + count) % count;
      selectTrack(engagementProcess.tracks[next].id, next);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTrack(engagementProcess.tracks[0].id, 0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTrack(engagementProcess.tracks[count - 1].id, count - 1);
    }
  }

  function moveStage(next: number) {
    const bounded = (next + track.stages.length) % track.stages.length;
    setStageIndex(bounded);
    stageRefs.current[bounded]?.focus();
  }

  function onStageKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveStage(stageIndex + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveStage(stageIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveStage(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveStage(track.stages.length - 1);
    }
  }

  return (
    <section
      id="how-i-work"
      className="home-workflow"
      aria-labelledby="home-workflow-heading"
    >
      <header className="home-workflow-head">
        <div>
          <span className="blog-intro-pill">
            <Route size={14} />
            {engagementProcess.eyebrow}
          </span>
          <h2 id="home-workflow-heading">{engagementProcess.headline}</h2>
          <p>{engagementProcess.lede}</p>
        </div>
        <Link href={engagementProcess.cta.href} className="home-recent-cta">
          {engagementProcess.cta.label} <ArrowRight size={16} />
        </Link>
      </header>

      <div
        className="home-workflow-tracks"
        role="radiogroup"
        aria-label="Engagement type"
      >
        {engagementProcess.tracks.map((item, index) => {
          const selected = item.id === track.id;
          return (
            <button
              key={item.id}
              ref={(node) => {
                trackRefs.current[index] = node;
              }}
              type="button"
              role="radio"
              id={`workflow-track-${item.id}`}
              className={`home-workflow-track${selected ? " is-active" : ""}`}
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => {
                setTrackId(item.id);
                setStageIndex(0);
              }}
              onKeyDown={onTrackKeyDown}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="home-workflow-summary">{track.summary}</p>

      <div
        className="home-workflow-rail"
        role="tablist"
        aria-label={`${track.label} stages`}
        aria-orientation="horizontal"
      >
        {track.stages.map((item, index) => {
          const selected = index === stageIndex;
          return (
            <button
              key={`${track.id}-${item.id}`}
              ref={(node) => {
                stageRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`workflow-stage-${track.id}-${item.id}`}
              className={`home-workflow-stage${selected ? " is-active" : ""}`}
              aria-selected={selected}
              aria-controls="workflow-stage-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setStageIndex(index)}
              onKeyDown={onStageKeyDown}
            >
              <span className="home-workflow-stage-index" aria-hidden="true">
                {index + 1}
              </span>
              <span className="home-workflow-stage-copy">
                <span className="home-workflow-stage-label">{item.label}</span>
                <span className="home-workflow-stage-duration">
                  {item.duration}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="workflow-stage-panel"
        className="home-workflow-panel"
        aria-labelledby={`workflow-stage-${track.id}-${stage.id}`}
      >
        <p className="home-workflow-panel-kicker">
          <span>{stage.label}</span>
          <span>{stage.duration}</span>
        </p>
        <div className="home-workflow-facts">
          {panelFacts.map((fact) => (
            <div key={fact.key} className="home-workflow-fact">
              <h3>{fact.label}</h3>
              <p>{stage[fact.key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
