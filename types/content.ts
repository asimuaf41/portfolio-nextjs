export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  secondaryCodeUrl?: string;
};

export type BlogAccent =
  | "purple"
  | "blue"
  | "cyan"
  | "green"
  | "orange"
  | "pink"
  | "amber";

export type BlogIcon =
  | "Bot"
  | "Zap"
  | "LayoutDashboard"
  | "Brain"
  | "Workflow"
  | "AlertTriangle"
  | "Rocket";

export type BlogCallout = {
  variant: "tip" | "warning" | "note";
  title: string;
  text: string;
};

export type BlogCode = {
  language: string;
  snippet: string;
};

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: BlogCode;
  callout?: BlogCallout;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  accent: BlogAccent;
  icon: BlogIcon;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
};
