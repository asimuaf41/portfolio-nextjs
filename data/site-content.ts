import type { NavItem, Project } from "@/types/content";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
];

export const projects: Project[] = [
  {
    slug: "ai-agent-platform",
    title: "AI Agent Platform — Multi-Agent Orchestration, RAG & Tool-Calling System",
    summary:
      "Built a full-stack AI agent platform demonstrating four core agentic AI patterns using Claude API, React/Next.js, and Node.js: a Web Search Agent for autonomous research and structured reports; a Tool-Calling Agent for live data vs. knowledge decisions; RAG with long-term memory via Supabase pgvector for document Q&A and user preferences; and Multi-Agent Orchestration where an orchestrator coordinates specialist sub-agents in parallel for complex automated workflows.",
    category: "AI Agents",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Claude API",
      "Supabase",
      "pgvector",
      "RAG",
      "Tool Calling",
    ],
    image: "/ai-agent.png",
    demoUrl: "https://ai-agent-platform-nextjs.vercel.app/multi-agent",
    codeUrl: "https://github.com/asimuaf41/real-estate-ai-agent-chat-nextjs",
    secondaryCodeUrl: "https://github.com/asimuaf41/AI-agent-streaming-NodeJs",
  },
  {
    slug: "carolina-real-estate",
    title: "Carolina Real Estate site",
    summary:
      "This real estate site allows users to search properties using advanced filters and view locations on an interactive map. Each listing includes complete details along with a built-in payment calculator.",
    category: "Real Estate",
    stack: [
      "Nextjs",
      "Tailwind CSS",
      "ShadCN-UI",
      "tanstack/react-query",
      "Google maps",
      "Zustand",
      "Zod",
      "React-hooks-form",
    ],
    image: "/carolinaSite.png",
    demoUrl: "https://carolinav2.listing-details.com/",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "optifield",
    title: "OptiField — Autonomous AI Agent for HVAC Lead Capture & Booking",
    summary:
      "An autonomous AI agent for HVAC and home-service teams that captures missed calls, SMS, and web forms, then qualifies the lead, books or reschedules the job, and only hands off when a human is needed. Owners get live metrics on resolution, escalation, recovered jobs, and booking rate — staff supervise conversations instead of running every reply.",
    category: "Automation",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Twilio",
      "Trigger.dev",
      "OpenAI",
      "PostgreSQL",
      "Vercel",
    ],
    image: "/optifield-dashboard.png",
    demoUrl: "https://dashboard.optifield.ai/dashboard",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "e-sign-platform",
    title: "E-Signature Platform Inspired by DocuSign",
    summary:
      "This platform functions as a comprehensive document management system. Users can upload PDF documents, add interactive fields such as signature, date, and name, and send them as envelopes to recipients for digital signing. Recipients can easily open the envelope, sign the document, and submit it securely.",
    category: "SaaS",
    stack: [
      "NextJS",
      "ShadCN-UI",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Next Auth",
      "React-hooks-form",
      "Zod",
    ],
    image: "/e-sign.png",
    demoUrl: "https://e-sign-front.ourmethod.com/",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "method-admin-dashboard",
    title: "Method Admin Dashboard",
    summary:
      "This real estate admin dashboard offers all-in-one management with data charts, real-time chat (WebSockets), document handling, user and agent workflows, and detailed reports.",
    category: "Dashboards",
    stack: [
      "React",
      "JSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "SCSS",
      "MUI Design",
    ],
    image: "/adminPanel2.png",
    demoUrl: "https://app.ourmethod.com/main/dashboard",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "method-atlanta",
    title: "Method Atlanta",
    summary:
      "This real estate site allows users to search properties using advanced filters and view locations on an interactive map. Each listing includes complete details along with a built-in payment calculator.",
    category: "Real Estate",
    stack: ["Nextjs", "NodeJs", "Material UI", "Google maps", "css"],
    image: "/methodAtlanta.png",
    demoUrl: "https://methodatlanta.com/",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "tun-admin-dashboard",
    title: "Tun Admin Dashboard",
    summary:
      "This is the TUN University Network Dashboard designed to manage all social features of the platform. It handles university posts, likes, shares, comments, and group management, centralizing all user interaction data in one place.",
    category: "Education",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "SCSS",
      "axios",
      "css",
      "Ant Design",
    ],
    image: "/tunAdmin.png",
    demoUrl: "https://tunadmin-158a6.web.app/login",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "tun-university-network",
    title: "Tun University Network",
    summary:
      "This platform supports student social and academic activities with features like notes, lectures, attendance, real-time chat, posts, groups, and event sharing, making learning more interactive and connected.",
    category: "Education",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "SCSS",
      "axios",
      "css",
      "Ant Design",
    ],
    image: "/tunSite.png",
    demoUrl: "https://www.tun.com/app/",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "legal-emirates",
    title: "Legal Emirates - Top Lawyers and Law Firms in Dubai",
    summary:
      "Legal Emirates is a premier legal platform designed to connect users with the best lawyers and law firms in Dubai. With over 27 years of trusted legal service, Bader Hamad Al Zaabi has established Legal Emirates as one of the UAE's leading law firms, known for its integrity, expertise, and client-first approach.",
    category: "Legal",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "SCSS",
      "axios",
      "css",
      "Ant Design",
    ],
    image: "/LawFirm.png",
    demoUrl: "https://legalemirates.com/",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "mortgage-refinance-dti-calculator",
    title: "Mortgage, Refinance & DTI Calculator",
    summary:
      "Estimate mortgage payments with taxes, insurance, and HOA; compare refinance options; and calculate debt-to-income ratio for mortgage eligibility through a practical real-estate calculator experience.",
    category: "Real Estate",
    stack: ["Nextjs", "NodeJs", "Material UI", "css"],
    image: "/agentMortageCalculator.png",
    demoUrl: "https://align.ourmethod.com/gloria",
    codeUrl: "https://github.com/asimuaf41",
  },
  {
    slug: "software-company-website",
    title: "Software Company Website",
    summary:
      "Developed a dynamic website for a software company showcasing its projects, team members, services, and latest updates. The platform features a clean, responsive UI with employee profiles, project highlights, company news, and a professional online presence.",
    category: "Marketing",
    stack: ["HTML", "CSS", "Javascript", "J query", "Bootstrap"],
    image: "/btSoft.png",
    demoUrl: "https://btsoftwarehouse.com/",
    codeUrl: "https://github.com/asimuaf41",
  },
];

export const projectsPage = {
  eyebrow: "Selected work",
  headline: "Production platforms built for real business outcomes.",
  intro:
    "Full-stack products across AI agents, business automation, real estate, legal, education, and SaaS — focused on scalable architecture, clean UX, and shipping work that holds up in production.",
  domains: [
    { label: "AI Agents", blurb: "RAG, tool-calling, multi-agent flows" },
    { label: "Automation", blurb: "OptiField, n8n, Trigger.dev, lead & booking agents" },
    { label: "Real Estate", blurb: "Listings, maps, admin ops" },
    { label: "SaaS & Docs", blurb: "E-sign, workflows, dashboards" },
    { label: "Education", blurb: "Social + academic platforms" },
    { label: "Legal", blurb: "Firm sites & lead platforms" },
  ],
  closing:
    "Need something in this lane — or a rescue on an existing React/Next.js app? Let's talk scope and ship a clear plan.",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100009574883424",
    short: "fb",
  },
  { label: "Twitter", href: "https://twitter.com/MianAsimAli6", short: "tw" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asim-ali-ali-857a4113b/",
    short: "in",
  },
  { label: "GitHub", href: "https://github.com/asimuaf41", short: "gh" },
];

export const aboutFacts = [
  { key: "Full Name", value: "Asim Ali" },
  { key: "Age", value: `${new Date().getFullYear() - 1998} Years` },
  { key: "Nationality", value: "Pakistan" },
  { key: "Languages", value: "English, Urdu, Punjabi" },
  { key: "Location", value: "Shahkot, Pakistan" },
  { key: "Availability", value: "Open for hire" },
];

const aboutYearsExperience = Math.max(
  1,
  new Date().getFullYear() - 2019,
);

export const aboutStats = [
  { label: "Years Experience", value: `${aboutYearsExperience}+` },
  { label: "Job Success", value: "100%" },
  { label: "Upwork Hours", value: "6,200+" },
  { label: "Projects Shipped", value: "70+" },
];

export const UPWORK_PROFILE_URL =
  "https://www.upwork.com/freelancers/asimali170";

export const WHATSAPP_NUMBER = "+923026046119";
export const WHATSAPP_HREF = "https://wa.me/923026046119";

export const contactInfo = {
  eyebrow: "Let's build something",
  headline: "Tell me what you're building — I'll tell you if I'm the right fit.",
  intro:
    "Prefer WhatsApp for a fast reply, Upwork for a formal hire, or email for detailed briefs. Pick the channel that fits how you work.",
  phones: [
    { label: "Primary", value: "+92 302 6046119", href: "tel:+923026046119" },
    { label: "Secondary", value: "+92 349 6006162", href: "tel:+923496006162" },
  ],
  emails: [
    {
      label: "Primary",
      value: "asimuaf41@gmail.com",
      href: "mailto:asimuaf41@gmail.com",
    },
    {
      label: "Projects",
      value: "asimsoftwaredeveloper02@gmail.com",
      href: "mailto:asimsoftwaredeveloper02@gmail.com",
    },
  ],
  address: {
    line: "Marrar chak 41/R.B, Tehsil Sangla Hill, District Nankana Sahib, Pakistan",
    short: "Sangla Hill · Nankana Sahib · Pakistan",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729936.4516613283!2d73.11367429737892!3d31.803112744720796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39220b72936edc15%3A0x42e2ed6919ade7e!2sAli%20Abdullah%20General%20store!5e0!3m2!1sen!2s!4v1612544292757!5m2!1sen!2s",
  responseNote: "Typical reply time: within a few hours on WhatsApp · same day on email",
};

export const messagingChannels = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Fastest reply — share a short brief and I'll respond quickly.",
    href: WHATSAPP_HREF,
    cta: "Chat on WhatsApp",
    accent: "whatsapp",
  },
  {
    id: "upwork",
    name: "Upwork",
    description: "Best for contracts, milestones, and Top Rated Plus hiring.",
    href: UPWORK_PROFILE_URL,
    cta: "Open Upwork profile",
    accent: "upwork",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect professionally — ideal for intros and longer-term work.",
    href: "https://www.linkedin.com/in/asim-ali-857a4113b/",
    cta: "View LinkedIn",
    accent: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    description: "Send specs, Figma links, or longer project details.",
    href: "mailto:asimuaf41@gmail.com?subject=Project%20inquiry%20-%20Asim%20Ali",
    cta: "Send an email",
    accent: "email",
  },
];

export const freelancePlatforms = [
  {
    name: "Upwork",
    href: UPWORK_PROFILE_URL,
    blurb: "Top Rated Plus · primary freelance profile",
  },
  {
    name: "Contra",
    href: "https://contra.com/asim_ali_t3a13smn",
    blurb: "Independent marketplace profile",
  },
  {
    name: "Freelancer",
    href: "https://www.freelancer.com/u/Asim5534",
    blurb: "React / Next.js & Node.js profile",
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/mianasimg",
    blurb: "Gig-based project collaboration",
  },
  {
    name: "Arc.dev",
    href: "https://arc.dev",
    blurb: "Remote full-time developer network",
  },
];

export const aboutProfile = {
  eyebrow: "React / Next.js & AI Agent Developer",
  headline: "I ship production systems — not demos that die in staging.",
  hook: "Most clients come to me in one of two situations: their React or Next.js app is buggy, slow, or needs features a previous developer couldn't deliver — or they need a SaaS product, internal tool, or AI-powered application built from scratch, properly and fast.",
  credibility: `Over ${aboutYearsExperience}+ years of full-stack development — full-time on Upwork since 2021 — I've completed 13 long-term projects with a 100% Job Success Score, 6,200+ hours logged, and Top Rated Plus status. Every project I've taken on has been delivered.`,
  focus:
    "I build AI-powered web applications, custom AI agent systems, and business automation workflows using React, Next.js, Node.js, the Claude API, n8n, Trigger.dev, and Make.com — delivering fast, scalable, production-ready solutions for startups and growing businesses.",
  featured: {
    label: "Recently launched",
    title: "AI Agent Studio",
    summary:
      "A live multi-agent platform with RAG, long-term memory (Supabase pgvector), real-time tool-calling, and orchestrated specialists running in parallel.",
    demoUrl: "https://ai-agent-platform-nextjs.vercel.app/multi-agent",
  },
  agentCapabilities: [
    "Custom AI agents with Claude API and OpenAI API",
    "RAG systems that answer from your business documents",
    "Multi-agent orchestration for complex workflows",
    "LLM features embedded into existing React/Next.js apps",
    "Vector database design (Supabase pgvector, Pinecone)",
    "Streaming AI responses with live tool-calling",
    "Automation pipelines with n8n, Trigger.dev, Make.com, Zapier, and custom Node.js",
    "Lead scoring, support, content, and invoice follow-up systems",
    "React dashboards for scores, email history, and manual triggers",
  ],
  result:
    "If you need an AI assistant inside your SaaS, an internal agent that can query your database and take actions, document intelligence for operations, or an LLM-powered automation workflow with a live control dashboard — I build the full stack as one integrated system, not a patchwork of vendors.",
  fullstack:
    "My core stack is React, Next.js, Node.js, and Express, with TypeScript, Redux, Zustand, and Tailwind on the frontend. On the backend I work with Supabase, PostgreSQL, MongoDB, MySQL, Stripe billing APIs, and REST/GraphQL. I deploy to AWS, Vercel, and Docker — equally comfortable starting from a blank repo or rescuing a messy codebase.",
  saas:
    "For SaaS platforms I build multi-tenant architectures, admin dashboards, real-time features, reporting systems, and subscription billing with Stripe — Checkout, Customer Portal, and webhook-driven plan updates. I've delivered large-scale real estate platforms, operations tooling, and data-heavy dashboards that stay fast under real load.",
  helpWith: [
    { icon: "LayoutDashboard", label: "React / Next.js SaaS & web apps" },
    { icon: "ServerCog", label: "Node.js / Express / NestJS APIs" },
    { icon: "Database", label: "Supabase, PostgreSQL & pgvector" },
    { icon: "Bot", label: "Claude / OpenAI agent development" },
    { icon: "Brain", label: "RAG & document intelligence" },
    { icon: "Workflow", label: "Multi-agent orchestration" },
    { icon: "Mails", label: "n8n / Trigger.dev / Make / Zapier" },
    { icon: "LayoutDashboard", label: "Lead scoring dashboards" },
    { icon: "Zap", label: "Streaming chat UIs" },
    { icon: "Activity", label: "Stripe billing & subscriptions" },
    { icon: "Radio", label: "Real-time chat & notifications" },
    { icon: "Gauge", label: "Performance & codebase rescue" },
    { icon: "Smartphone", label: "React Native iOS / Android" },
    { icon: "Figma", label: "Figma → pixel-perfect Next.js" },
  ],
  closing:
    "Whether you're launching a SaaS product, automating leads and support, adding AI to an existing platform, rescuing a broken codebase, or integrating LLM features into React/Next.js — send a message with what you're building. I'll tell you honestly if I'm the right fit.",
};

export const automationOffer = {
  eyebrow: "AI Automation Services",
  headline: "I take repetitive work off your plate.",
  intro:
    "Custom AI workflows that qualify leads, answer customers, publish content, and follow up on invoices — so your team spends time on work that actually needs a person.",
  workflows: [
    {
      icon: "UserCheck",
      title: "Lead qualification",
      description:
        "Automatically score incoming leads and send the right response, so your team only talks to people who are ready.",
    },
    {
      icon: "Headset",
      title: "Customer support",
      description:
        "AI answers common questions around the clock, with confidence scoring so edge cases still reach a human.",
    },
    {
      icon: "Newspaper",
      title: "Content workflows",
      description:
        "Automated newsletters and social posts from your sources — drafted, reviewed, and scheduled on a cadence you control.",
    },
    {
      icon: "Receipt",
      title: "Invoice follow-up",
      description:
        "Personalized payment reminders that go out on schedule, without chasing every overdue invoice by hand.",
    },
  ],
  tools: ["n8n", "Trigger.dev", "Make.com", "Claude API", "OpenAI", "Zapier"],
  turnaround: "Typical turnaround: 2–5 days per workflow",
  suite: {
    title: "AI Business Automation Suite",
    intro:
      "A ready-to-run set of AI workflows built around your tools — not a generic template. Designed to remove 10–15 hours of weekly admin from a typical small business.",
    modules: [
      {
        step: "01",
        title: "Lead qualification bot",
        detail:
          "Claude API, webhook, and email — score new leads and reply automatically.",
      },
      {
        step: "02",
        title: "Customer support automation",
        detail:
          "RAG over your docs with confidence scoring, so answers stay accurate and humans still get the hard questions.",
      },
      {
        step: "03",
        title: "Daily content newsletter",
        detail:
          "RSS, Claude, and email — a drafted, on-brand digest without a weekly content scramble.",
      },
      {
        step: "04",
        title: "Invoice follow-up system",
        detail:
          "Scheduled, personalized payment reminders that keep cash collection moving.",
      },
    ],
    tech: [
      "n8n",
      "Trigger.dev",
      "Claude API (Anthropic)",
      "Google Sheets",
      "Gmail",
      "Webhooks",
      "Cron scheduling",
    ],
    result:
      "Typically eliminates 10–15 hours of manual work per week for a small business.",
  },
  dashboard: {
    eyebrow: "Workflow + control layer",
    title: "See every lead, score, and message in one React dashboard",
    copy: "I can build the automation workflow and a custom React dashboard where you review leads, scores, email history, and trigger workflows manually when you need to step in.",
    plans: [
      {
        name: "Workflow only",
        price: "$800",
        note: "Production-ready automation, wired into your existing tools.",
        featured: false,
      },
      {
        name: "Workflow + React dashboard",
        price: "$2,500",
        note: "Full visibility and manual control on top of the automations.",
        featured: true,
      },
    ],
  },
};

export const services = [
  {
    title: "AI Business Automation",
    description:
      "Custom n8n, Trigger.dev, Make.com, and Zapier workflows — lead qualification, 24/7 support answers, content publishing, and invoice follow-up. Typical turnaround is 2–5 days per workflow.",
  },
  {
    title: "AI Agent Development",
    description:
      "Custom agents with Claude and OpenAI — tool-calling, streaming responses, multi-agent orchestration, and automation pipelines that complete real business workflows end to end.",
  },
  {
    title: "RAG & Document Intelligence",
    description:
      "Production RAG with Supabase pgvector or Pinecone: ingest PDFs and knowledge bases, retrieve with citations, and keep long-term user preferences across sessions.",
  },
  {
    title: "React / Next.js SaaS & Rescue",
    description:
      "Build scalable SaaS apps from scratch or revive buggy React/Next.js codebases — clean architecture, performance, SEO, Stripe subscriptions, and features previous teams couldn't ship.",
  },
  {
    title: "Supabase & Stripe Integrations",
    description:
      "Supabase Auth, Postgres, Realtime, Storage, and pgvector — plus Stripe Checkout, billing portals, and webhook-safe subscription flows wired into Next.js. AI-assisted delivery keeps setup fast without cutting corners on security.",
  },
  {
    title: "APIs, Data & Real-time Systems",
    description:
      "Node.js / Express / NestJS APIs, SQL design, caching, auth, and real-time features — chat, live tracking, notifications, and dashboards that hold up under load.",
  },
  {
    title: "Admin Dashboards & Internal Tools",
    description:
      "Operations panels, reporting, multi-tenant admin suites, and AI-assisted workflows your team actually uses daily — designed for clarity, speed, and maintainability.",
  },
];

export const aboutIntro = aboutProfile.hook;

export const resumePage = {
  eyebrow: "Resume & skills",
  headline: "Production stack, delivery track record, and continuous learning.",
  intro:
    "A focused view of the tools I ship with every week — AI agents, n8n and Trigger.dev automation, React/Next.js SaaS, Node APIs, and the data/billing layers that make products real.",
  closing:
    "Looking for a React/Next.js or AI agent engineer who can own delivery end to end? Let's align on scope and start shipping.",
};

/** Grouped technical skills — ordered by market demand & portfolio focus. */
export const skillGroups = [
  {
    id: "ai",
    title: "AI & Agents",
    blurb: "The highest-leverage work I take on right now.",
    skills: [
      { name: "Claude API & Agent Systems", level: 92 },
      { name: "Cursor / AI-assisted Development", level: 95 },
      { name: "OpenAI API Integration", level: 90 },
      { name: "RAG & Vector Search (pgvector)", level: 88 },
      { name: "Multi-agent Orchestration", level: 86 },
      { name: "LLM Tool-calling & Streaming", level: 90 },
      { name: "AI Workflow Automation (n8n, Trigger.dev, Make, Zapier)", level: 88 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces that stay fast under real product load.",
    skills: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Zustand / Redux", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn UI", level: 88 },
      { name: "TanStack Query", level: 86 },
      { name: "Zod & React Hook Form", level: 85 },
      { name: "Responsive UI / Design Systems", level: 92 },
      { name: "React Native", level: 58 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    blurb: "Services, auth, billing, and real-time features.",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 88 },
      { name: "NestJS", level: 80 },
      { name: "REST API Design", level: 92 },
      { name: "Supabase (Auth, Realtime, Storage)", level: 88 },
      { name: "Stripe Billing & Webhooks", level: 85 },
      { name: "WebSockets / Real-time Systems", level: 84 },
      { name: "GraphQL", level: 72 },
    ],
  },
  {
    id: "data-cloud",
    title: "Data & Cloud",
    blurb: "Persistence and deployment for production apps.",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Vercel", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 72 },
      { name: "Next.js SEO & Performance", level: 78 },
    ],
  },
];

/** Flat list derived from groups (highest level first within demand order). */
export const skills = skillGroups.flatMap((group) => group.skills);

export const educationTimeline = [
  {
    title: "Agent AI Development",
    period: "2025 - Present",
    place: "Self Directed Research & Production Delivery",
    progress: 82,
    detail:
      "I am actively building production-grade AI agents using tool-calling, prompt chaining, structured outputs, and automated workflows. My learning includes reliability patterns such as guardrails, validation, retries, observability, and human-in-the-loop approval flows.",
  },
  {
    title: "Cloud Native Computing",
    period: "2020 - 2022",
    place: "Presidential Initiative",
    detail:
      "I have learned cloud-native computing, which focuses on building and deploying applications as microservices using open-source software stacks. Each component is packaged into its own container and dynamically orchestrated, typically with tools like Kubernetes, to ensure scalability, resilience, and efficient resource utilization.",
  },
  {
    title: "Mobile and Web Applications",
    period: "2018 - 2019",
    place: "Saylani Mass I.T Training FSD",
    detail:
      "I have gained proficiency in multiple programming languages and technologies through my learning journey. I specialized in web development using ReactJS, a powerful JavaScript library for building dynamic user interfaces. On the backend, I learned Node.js, which I’ve used to develop scalable APIs for both web and mobile applications. Additionally, I have hands-on experience in mobile application development using React Native.",
  },
  {
    title: "BS Software Engineering",
    period: "2015 - 2019",
    place: "University of agriculture Faisalabad",
    detail:
      "Throughout this course, I have gained knowledge in various programming languages and studied a wide range of subjects, including software engineering, computer science, and core engineering disciplines. The curriculum also emphasized the importance of presenting ideas and solutions effectively, helping me develop strong communication and problem-solving skills.",
  },
  {
    title: "F.Sc Pre Engineering",
    period: "2013 - 2015",
    place: "Government Degree College Shahkot",
    detail:
      "As part of this course, I developed a strong foundation in scientific principles through exposure to core scientific inquiry and methodologies. I studied essential concepts and skills in Physics, Chemistry, and Mathematics, which enhanced my analytical thinking and problem-solving abilities.",
  },
  {
    title: "Matriculation(science)",
    period: "2011 - 2013",
    place: "Government High School Chack 42/R.B",
    detail:
      "In this course, I studied fundamental scientific principles along with core computer science subjects. I gained valuable exposure to scientific inquiry and developed foundational skills in Physics, Chemistry, and Mathematics, enhancing both my analytical and technical problem-solving capabilities.",
  },
];

export const experienceTimeline = [
  {
    title: "Senior MERN / AI Engineer (In Progress)",
    period: "2022 - Present",
    place: "Method Georgia Real Estate Advisors (Atlanta, USA)",
    detail:
      "I am currently working with Method Georgia as a long-term engineering partner. I designed and developed large-scale real estate dashboards and customer-facing platforms, including analytics panels, listing workflows, CRM-style modules, map/search experiences, and lead management flows. I continue to improve platform architecture, performance, and new AI-assisted productivity workflows across ongoing product releases.",
  },
  {
    title: "Full Time Freelancer",
    period: "2021 - Present",
    place: "Top Rated plus at Upwork",
    detail:
      "I am a full-time freelancer on Upwork, specializing in full-stack development. I have successfully completed numerous long-term projects, consistently earning 100% positive feedback. I’m currently working on several projects, delivering high-quality solutions as a full-stack developer.",
  },
  {
    title: "ReactJS/MERN Stack developer",
    period: "2019 - 2021",
    place: "BT Software house and AI technology",
    detail:
      "I have contributed to multiple projects in this company, including websites and admin panels. While my primary focus has been on ReactJS, I am now also actively working with NodeJS. A significant part of my work involves developing map-based features and integrations.",
  },
  {
    title: "ReactJS developer",
    period: "2019",
    place: "FitOutFit Software Technologies",
    detail:
      "At this company, I worked on website development using ReactJS, both independently and as part of a team. I also contributed as an SQA Engineer, focusing on project testing and improving software quality.",
  },
  {
    title: "Web developer",
    period: "2018 - 2019",
    place: "Ideasole technology",
    detail:
      "I worked as an intern at this company, where I gained hands-on experience as a web developer. During my time there, I contributed to the development of a website and enhanced my practical skills.",
  },
];

export const galleryImages = [
  "/meProfile.webp",
  "/asimg.jpeg",
  "/asim1.jpeg",
  "/asim11.jpg",

  "/asim3.jpeg",
  "/profile.jpg",
  "/asim5.jpg",
  "/asim5.jpeg",
  "/asim7.jpg",
  "/asim8.jpg",
  "/asim9.jpg",
  "/asim10.jpg",
  "/asim2.jpeg",
  "/asim12.jpg",
  "/asim13.jpg",
  "/asim14.jpg",
  "/asim15.jpg",
  "/asim16.jpg",
  "/asim17.jpg",
  "/asim18.jpg",
  "/asim19.jpg",
  "/asim20.jpg",
  "/asim21.jpg",
  "/asim22.jpg",
  "/asim23.jpg",
  "/asim25.jpeg",
  "/meProfile.png",
];
