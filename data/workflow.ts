export type WorkflowTrackId = "automation" | "product";

export type WorkflowStage = {
  id: string;
  label: string;
  duration: string;
  you: string;
  deliver: string;
  gate: string;
};

export type WorkflowTrack = {
  id: WorkflowTrackId;
  label: string;
  summary: string;
  stages: WorkflowStage[];
};

export const engagementProcess = {
  eyebrow: "How I work",
  headline: "How an engagement actually runs",
  lede: "Every project follows the same five stages. What changes is the clock and the artifact: a workflow you can pause in a week, or a product we ship in weekly slices.",
  cta: {
    label: "Start with discovery",
    href: "/contact?from=workflow",
  },
  tracks: [
    {
      id: "automation",
      label: "Automation sprint",
      summary:
        "One workflow, wired into the tools you already use. Typical build is 2–5 days.",
      stages: [
        {
          id: "discovery",
          label: "Discovery",
          duration: "1 day",
          you: "One real example of the work as it happens today, plus the tools it touches.",
          deliver:
            "A map of trigger, decision, and human handoff, and one success metric.",
          gate: "We agree what the workflow owns and what still needs a person.",
        },
        {
          id: "shape",
          label: "Shape",
          duration: "Same day or next",
          you: "Approval of the message and the escalation rule.",
          deliver:
            "The flow: trigger, model step, confidence check, and handoff.",
          gate: "The flow is approved before any credential is connected.",
        },
        {
          id: "build",
          label: "Build",
          duration: "2–5 days",
          you: "Sample data and access to the tools it must touch.",
          deliver: "A staging run in n8n, Trigger.dev, Make, or Node.",
          gate: "Three clean test runs you can watch.",
        },
        {
          id: "launch",
          label: "Launch",
          duration: "Same week",
          you: "Production credentials and a go-ahead.",
          deliver:
            "A live schedule plus a one-page runbook: what it does, how to pause it, and who gets exceptions.",
          gate: "The first live run happens with you on the thread.",
        },
        {
          id: "support",
          label: "Support",
          duration: "14 days, then optional",
          you: "Failures and wording you want changed.",
          deliver: "Prompt and threshold fixes inside the launch scope.",
          gate: "You can run the happy path without me.",
        },
      ],
    },
    {
      id: "product",
      label: "Product or agent build",
      summary:
        "A SaaS, agent system, or codebase rescue. Each week ends with something you can run.",
      stages: [
        {
          id: "discovery",
          label: "Discovery",
          duration: "2–4 days",
          you: "Users, constraints, and the repo — or a blank start.",
          deliver:
            "A one-page brief: problem, users, success metric, risks, and what we will not build.",
          gate: "You confirm the brief. If I am the wrong fit, that is the outcome of this stage.",
        },
        {
          id: "shape",
          label: "Shape",
          duration: "3–7 days",
          you: "A priority for the first slice.",
          deliver:
            "Architecture, data notes, and either key screens or the agent’s tools, plus a staged plan.",
          gate: "You approve the first shippable slice, not the whole roadmap.",
        },
        {
          id: "build",
          label: "Build",
          duration: "Weekly",
          you: "A review on the staging URL.",
          deliver:
            "One usable slice per week: auth, one tool, one screen, or one workflow.",
          gate: "The slice matches the acceptance notes from Shape.",
        },
        {
          id: "launch",
          label: "Launch",
          duration: "Staged",
          you: "Production accounts and a release window.",
          deliver:
            "Staging, then production on Vercel, AWS, or Docker, with env, migrations, and a rollback note.",
          gate: "The checklist is done: auth, billing webhooks if any, error visibility, and backup.",
        },
        {
          id: "support",
          label: "Support",
          duration: "2 weeks, then iterations",
          you: "Bugs from the launch scope, then the next slice you want.",
          deliver:
            "Hypercare, then iteration sprints or an ongoing partnership.",
          gate: "You have the repo, deploy access, and a written way to run it.",
        },
      ],
    },
  ] satisfies WorkflowTrack[],
};
