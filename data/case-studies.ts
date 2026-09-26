import type { CaseStudy } from "@/types/content";

export const caseStudiesPage = {
  eyebrow: "Real problems, shipped solutions",
  headline: "Case studies from production work — not portfolio fluff.",
  intro:
    "Each write-up walks through the problem a client actually faced, what made it hard, what I built, and what changed. Read these when you want to know if I have solved something like yours.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-agent-studio",
    title: "AI Agent Studio — Multi-Agent AI Platform",
    summary:
      "A production multi-agent platform that shows how startups can ship real AI features — research, document Q&A, tool-calling, and orchestrated specialists — without bolting on a generic chatbot.",
    targetClient: "Startups wanting AI features",
    accent: "purple",
    icon: "Bot",
    problem: [
      "Businesses increasingly need AI capabilities but lack the technical infrastructure to build them properly. Generic chatbots do not know their business. Off-the-shelf tools cannot be customized. Custom AI systems require specialist knowledge most developers do not have.",
    ],
    challenge: [
      "Building a production AI system requires solving several hard problems simultaneously: making agents reliable under real load, storing user memory across sessions, searching documents by meaning not keywords, coordinating multiple specialist agents in parallel, and keeping API costs under control as usage scales.",
    ],
    builtIntro:
      "A full-stack multi-agent AI platform demonstrating four core agentic AI architectures:",
    features: [
      {
        title: "Web Search Agent",
        description:
          "Autonomously searches the internet, reads full article content, and synthesizes findings into structured research reports in real time using the Tavily API and Claude.",
      },
      {
        title: "Document Intelligence (RAG)",
        description:
          "Ingests PDF documents, splits them into semantic chunks, stores vector embeddings in Supabase pgvector, and retrieves relevant context for each question using similarity search. Answers questions from the actual document content — not from Claude's training data.",
      },
      {
        title: "Tool-Calling Agent",
        description:
          "Demonstrates autonomous tool selection — Claude decides when to fetch live weather data versus answer from its own knowledge, calling the OpenWeatherMap API only when needed.",
      },
      {
        title: "Multi-Agent Orchestrator",
        description:
          "One orchestrator agent coordinates four specialist sub-agents (research, database query, analysis, report writing) running in parallel using Promise.all for maximum efficiency.",
      },
    ],
    additionalFeatures: [
      "Long-term memory with Supabase pgvector — agents remember users across sessions with semantic search",
      "Supabase Auth with Google OAuth and freemium gate — 3 free searches then login required",
      "Usage tracking per user with cost calculation — know exactly what each Claude API call costs",
      "Production hardening — input validation, retry logic with exponential backoff, rate limiting, structured logging, React error boundaries",
    ],
    result: [
      "A live, production-deployed platform demonstrating every major AI agent pattern used in commercial products today. Built and deployed in 30 days.",
    ],
    liveUrl: "https://ai-agent-platform-nextjs.vercel.app/multi-agent",
    codeUrl: "https://github.com/asimuaf41/real-estate-ai-agent-chat-nextjs",
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "Claude API (Anthropic)",
      "Supabase (Auth, pgvector, PostgreSQL)",
      "Tailwind CSS",
      "Tavily API",
      "OpenWeatherMap API",
      "Vercel",
      "n8n",
    ],
    keywords: [
      "AI agent platform",
      "multi-agent orchestration",
      "Claude API",
      "RAG pgvector",
      "tool-calling agents",
      "Supabase AI",
      "Next.js AI case study",
    ],
    published: true,
  },
  {
    slug: "real-estate-saas",
    title: "Real Estate Operations Platform — 2-Year Enterprise SaaS",
    summary:
      "A multi-role real estate operations platform that replaced disconnected tools — properties, agents, clients, payments, and marketing — in one system for a US PropTech company.",
    targetClient: "PropTech & real estate businesses",
    accent: "blue",
    icon: "LayoutDashboard",
    problem: [
      "A US-based real estate company in Atlanta needed a complete operations platform to manage properties, agents, clients, and transactions across multiple roles — all from one system. Existing tools were disconnected and required manual coordination between teams.",
    ],
    challenge: [
      "Building a multi-role SaaS with strict data access rules — admins, property managers, and agents each see different data and have different permissions. The platform needed to handle complex property workflows, integrate Stripe for payments, send automated emails at the right moments, and stay fast under real user load over a 2+ year lifespan.",
    ],
    builtIntro:
      "A large-scale real estate operations platform serving multiple user roles from a single codebase:",
    features: [
      {
        title: "Admin Dashboard",
        description:
          "Full visibility across all properties, agents, transactions, and system activity. Role-based access control enforced at the API layer.",
      },
      {
        title: "Property Management",
        description:
          "Property listing, status tracking, document management, and workflow progression from listing through closing.",
      },
      {
        title: "Agent Portal",
        description:
          "Individual agent views of their pipeline, client communications, and transaction status.",
      },
      {
        title: "Payment Integration",
        description:
          "Stripe integration for transaction fees and subscription billing with webhook handling for payment events.",
      },
      {
        title: "Automated Email Workflows",
        description:
          "Triggered emails at key workflow stages — new listing notifications, status updates, payment confirmations — using SendGrid.",
      },
      {
        title: "Public Property Website",
        description:
          "Marketing site for property listings with search, filtering, and map integration.",
      },
    ],
    additionalFeatures: [],
    builtOutro:
      "Maintained and iterated over 2+ years with zero major outages and continuous feature additions based on client feedback.",
    result: [
      "Single platform replacing 4 disconnected tools. 2+ years of continuous production operation. Ongoing client relationship maintained.",
    ],
    liveUrl: "https://app.ourmethod.com",
    liveLabel: "Live platform",
    secondaryLiveUrl: "https://methodatlanta.com",
    secondaryLiveLabel: "Live website",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "SendGrid",
      "AWS S3",
      "Vercel",
      "Tailwind CSS",
      "JWT Authentication",
      "RBAC",
    ],
    keywords: [
      "real estate SaaS",
      "PropTech platform",
      "multi-role SaaS",
      "Stripe real estate",
      "property management dashboard",
      "RBAC Next.js",
      "enterprise SaaS case study",
    ],
    published: true,
  },
  {
    slug: "optifield",
    title: "OptiField.ai — Autonomous AI Lead Agent for Field Service",
    summary:
      "An autonomous SMS AI agent for HVAC teams that recovers missed calls, qualifies leads, and books jobs end-to-end — while staff supervise, escalate, and take over only when needed.",
    targetClient: "Field service & scheduling businesses",
    accent: "green",
    icon: "Workflow",
    problem: [
      "Home service businesses — starting with HVAC — lose inbound demand every day: missed calls go uncontacted for hours, web form leads sit unanswered, and inbound SMS from ads is not tied to a follow-up process. Small teams of 3–20 technicians do not have the staffing to run consistent qualification and booking on every lead, especially after hours. Paid leads quietly leak out of the business, and owners have no visibility into how much revenue that leakage costs them.",
      "Full FSM platforms like ServiceTitan and Housecall Pro exist, but they are heavy and expensive for smaller operators. OptiField is not another dispatch or inventory system — it is a focused wedge: autonomous lead capture → AI-run qualification and booking → confirmed appointment, with human oversight always available.",
    ],
    challenge: [
      "Shipping this as production SaaS meant solving several hard problems at once: reliable Twilio voice/SMS ingestion with accurate answered-vs-missed detection on forwarded office calls; an agent orchestrator that runs the full SMS conversation by default (not a shared inbox that helps staff type faster); hard escalation and takeover state machines so emergencies, complaints, and uncertain cases never get guessed; multi-tenant data isolation with Supabase RLS so each business only sees its own customers and jobs; and real technician availability via Google/Microsoft calendars or FSM mappings (Housecall Pro, ServiceTitan, Jobber) so the agent never books a slot nobody can actually work.",
    ],
    builtIntro:
      "A multi-tenant field-service SaaS built from a full PRD suite — Master, Inbox, Workflows/AI Agent, Booking, Dashboard, Admin, Voice Routing, and Settings — with the AI agent as the primary actor:",
    features: [
      {
        title: "Lead Capture & Oversight Inbox",
        description:
          "Every inbound call, SMS, and web form becomes a tenant-scoped lead, contact, and conversation. The inbox is a supervisory view — not a staff work queue — with AI-active, escalated, and human-controlled modes, plus one-click Take Over and Release to AI.",
      },
      {
        title: "Autonomous AI Agent (Workflows)",
        description:
          "An agent orchestrator runs the conversation end-to-end over SMS: missed-call text-back within ~90 seconds, qualification, time proposals, booking confirmation, reschedule/cancel, and structured follow-ups before marking leads lost. Every decision is logged in agent_turns for auditability.",
      },
      {
        title: "Voice Call Forwarding & Missed-Call Recovery",
        description:
          "Inbound Twilio calls Dial the business's real office line. The missed-call SMS agent fires only when the forwarded leg is unanswered (no-answer, busy, or failed) — not on every call. Answered office calls never get a false \"sorry we missed you\" text.",
      },
      {
        title: "Booking as an Agent Tool",
        description:
          "The agent checks availability, proposes 2–3 concrete slots in SMS, and creates bookings via the same internal APIs staff use. Schedule Categories control what the agent may book; Change Order CO-01 auto-assigns the least-busy eligible technician and creates a real calendar/FSM invite for the customer.",
      },
      {
        title: "Owner Dashboard & Daily Digest",
        description:
          "ROI metrics owners renew on: inbound leads, missed calls, booked-job rate, jobs recovered from missed calls, AI resolution rate, escalation rate by reason, human takeover rate, and speed to first response — plus a daily digest email so owners do not have to remember to log in.",
      },
      {
        title: "Admin, Settings & Multi-Tenant Ops",
        description:
          "Internal OptiField admin for businesses, plans, Stripe billing, and impersonation with audit logs. Tenant settings cover business profile, roles, notifications, phone forwarding, and Schedule Categories — the permission model that gates what the AI is allowed to book.",
      },
    ],
    additionalFeatures: [
      "Defined escalation triggers — emergency, complaint, repeated confusion, customer requested human, category not permitted, no eligible technician",
      "Hard agent guardrails — never quotes firm final pricing, never makes warranty/legal claims, always identifies as automated, escalates rather than guesses",
      "Restricted technician logins — real users.role = technician, server-side limited to /technician/calendar for Google/Microsoft or FSM mapping",
      "Background jobs on Trigger.dev — missed-call textback, lead follow-up sequences, qualification timeouts, daily owner summary",
      "Self-serve sign-up with plan URL, Stripe payment, TCPA/SMS consent capture, and Twilio number provisioning through onboarding",
    ],
    builtOutro:
      "Engineered against a complete PRD suite and change orders (including technician calendar/FSM integration), using AI-assisted development for domain logic across the eight core modules — at production quality, not demo quality.",
    result: [
      "A live multi-tenant platform where the default path from missed call or form lead to booked job requires no human typing a reply. Staff supervise, escalate, and take over only when needed. Designed to recover after-hours and slow-follow-up revenue that smaller HVAC shops otherwise lose to competitors.",
    ],
    liveUrl: "https://dashboard.optifield.ai/dashboard",
    liveLabel: "Live dashboard",
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "PostgreSQL",
      "Supabase (Auth, RLS, Storage)",
      "Twilio Voice + Messaging",
      "Trigger.dev",
      "OpenAI API",
      "Stripe",
      "Vercel",
    ],
    keywords: [
      "OptiField",
      "field service AI agent",
      "HVAC lead recovery",
      "missed call SMS automation",
      "Twilio AI booking",
      "multi-tenant field service SaaS",
      "autonomous scheduling agent",
    ],
    published: true,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getPublishedCaseStudies() {
  return caseStudies.filter((study) => study.published);
}
