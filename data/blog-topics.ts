import type { BlogCategory } from "@/types/content";

export type BlogTopic = {
  category: BlogCategory;
  slug: string;
  title: string;
  description: string;
  intro: string;
};

export const blogTopics: BlogTopic[] = [
  {
    category: "AI",
    slug: "ai",
    title: "AI Articles — Agents, RAG, and Model Choice",
    description:
      "Practical articles by Asim Ali on building a first AI agent, multi-agent orchestration, production RAG with pgvector, and when to use Claude, ChatGPT, or Cursor.",
    intro:
      "These notes are how I design AI systems that survive contact with a real product. A single prompt can draft a paragraph. A system a client will run twice needs a narrow job, typed tools, and a stop condition. The articles here cover that path: a first support-triage agent with no framework, multi-agent orchestration where one brain fans work out to specialists, and production RAG with Supabase pgvector so answers cite the documents you actually uploaded. I also compare Claude, ChatGPT, and Cursor as a daily stack, and list the mistakes that make AI-written code fail in review. Read this lane for the architecture, the failure modes, and the habits I use on client work — agents, retrieval, and model choice — rather than a tour of every new model release.",
  },
  {
    category: "Automation",
    slug: "automation",
    title: "Automation Articles — n8n, Claude, and Trigger.dev",
    description:
      "How Asim Ali turns repetitive business work into n8n and Claude workflows — lead qualification, support, digests, and invoice follow-up — and when Trigger.dev is the better runtime.",
    intro:
      "Most teams do not need a custom agent platform to get value from AI. They need a few boring workflows to run without a spreadsheet ritual: qualify a lead, answer support from a knowledge base, send a weekday digest, and follow up on an overdue invoice. This lane is the build log for that work. I show the n8n graphs I ship with Claude, including confidence gates so a weak answer waits for a human, and the point where the same job should move into Trigger.dev beside a Next.js app. The other article is the framework I use before any of that exists: pick one repetitive process, map it on paper, replace each step with the right tool, and measure time saved before automating the next one. If you are hiring for automation, start here.",
  },
  {
    category: "Full-Stack",
    slug: "full-stack",
    title: "Full-Stack Articles — Next.js, Node, and AI in the Product",
    description:
      "Architecture notes by Asim Ali on streaming tool-calling agents in Next.js, AI-powered React dashboards, and a Cursor workflow that keeps diffs reviewable.",
    intro:
      "AI features only feel finished when they live inside the product: a Next.js screen, a Node route, a database the model is not allowed to query directly, and a bill you can explain. These articles are the patterns I reuse for that layer. One walks through streaming tool-calling so the UI shows a lookup or a tool decision instead of a frozen spinner. One covers dashboards — summaries, natural-language filters, and anomaly notes — without replacing the SQL that already works. Two are the speed loop I actually run: Claude for the plan and the strict review, Cursor for the in-repo edit. Read this lane when the question is how the agent, and the models that help me write it, sit inside React, Node, and the rest of the stack.",
  },
  {
    category: "Startups",
    slug: "startups",
    title: "Startup Articles — From Idea to MVP",
    description:
      "Asim Ali’s playbook for taking a raw idea to a deployed MVP in 48 hours: brutal scope, a known stack, and a URL strangers can try.",
    intro:
      "A weekend MVP is a scope decision wearing a calendar. These notes are the playbook I use when an idea has to become a URL a stranger can try: one sentence of value, one happy path, a stack I already know, and a deploy in the first hour. The article walks those 48 hours in order — cut features, spec with a model, build the core in Cursor, polish empty and error states, then ask for one specific piece of feedback. I keep this lane separate from the agent and automation writing because the hard part is the cut. The second screen, the custom auth, and the feature that would have been nice on Monday are what blow the weekend. Ship the small version, then decide from real use whether it deserves another one.",
  },
];

export function blogTopicBySlug(slug: string) {
  return blogTopics.find((topic) => topic.slug === slug);
}

export function blogTopicByCategory(category: BlogCategory) {
  const topic = blogTopics.find((item) => item.category === category);
  if (!topic) {
    throw new Error(`Missing blog topic for ${category}`);
  }
  return topic;
}
