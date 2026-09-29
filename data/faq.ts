import { WHATSAPP_HREF } from "@/data/site-content";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Lives on the Contact page. Answers reference the real engagement stages
 * (data/workflow.ts) and shipped timelines (data/case-studies.ts) instead of
 * generic claims.
 */
export const faqSection = {
  eyebrow: "Common questions",
  headline: "Before you reach out",
  lede:
    "The questions I get on every discovery call — answered up front so you can decide faster. Don't see yours? Ask directly.",
  cta: {
    label: "Ask on WhatsApp",
    href: WHATSAPP_HREF,
  },
  items: [
    {
      id: "timeline",
      question: "How long does a typical AI agent project take?",
      answer:
        "It depends on scope, but here are real anchors: AI Agent Studio — four agent patterns (web search, RAG, tool-calling, multi-agent orchestration) — shipped in 30 days solo. A single well-scoped agent with one tool and one handoff rule usually ships in 1–2 weeks after Discovery. A full agent-powered product with billing, a dashboard, and multi-tenant ops (like OptiField) takes 6–10 weeks. We agree on the first slice during Shape so you see something real early, not just a schedule.",
    },
    {
      id: "support",
      question: "Do you provide post-launch support/maintenance?",
      answer:
        "Yes. Every engagement includes a Support stage before it becomes optional: automation workflows get 14 days of included fixes inside the launch scope, and product or agent builds get 2 weeks of hypercare for bugs in what we shipped. After that, clients either move to iteration sprints or an ongoing retainer — I'm still maintaining a real estate operations platform I built more than 2 years ago, with zero major outages.",
    },
    {
      id: "integrations",
      question: "Can you integrate with my existing systems?",
      answer:
        "Yes — integrating with what you already run is usually the point, not an afterthought. I connect to CRMs, databases, email, calendars, and messaging tools through their APIs (Stripe, Twilio, Supabase, PostgreSQL, MongoDB, Gmail, Slack), or through n8n, Trigger.dev, Make, and Zapier when a visual, client-editable layer fits your team better. If you already have a codebase, Discovery includes an audit of it before I propose new work — I build on what works instead of rebuilding it.",
    },
    {
      id: "deadline",
      question: "What if I have a tight deadline?",
      answer:
        "Tell me the date in Discovery and I'll tell you honestly what fits inside it — I'd rather cut scope than miss a launch. Automation workflows can go from Discovery to a live run the same week, and the Legal Emirates site shipped in 4 weeks solo. When the timeline is tight, we ship the smallest version that solves your actual problem first, then add the rest in weekly slices after launch.",
    },
    {
      id: "non-technical",
      question: "Do you work with non-tech founders?",
      answer:
        "Most of my long-term clients aren't developers. Discovery starts from one real example of how the work happens today, not a technical spec, and every stage ends with something you can see and react to — a staging link, a live run, a screen — instead of a status update you have to trust blindly. When a decision involves a technical trade-off, I explain it in terms of cost, risk, and time, not jargon.",
    },
  ] satisfies FaqItem[],
};
