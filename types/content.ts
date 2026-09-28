export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
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
  | "Rocket"
  | "PenLine"
  | "Scale"
  | "GraduationCap";

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

export type BlogCategory = "AI" | "Automation" | "Full-Stack" | "Startups";

export type BlogDifficulty = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: BlogCategory;
  tags: string[];
  accent: BlogAccent;
  icon: BlogIcon;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  /** Editorial rank. 1 is the strongest piece to recommend. */
  popularity: number;
  difficulty: BlogDifficulty;
  /** Shown in the pinned row on the blog index. */
  pinned?: boolean;
  pinOrder?: number;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  /** Short outcome headline shown on cards — e.g. "85% fewer missed calls". */
  impact: string;
  targetClient: string;
  accent: BlogAccent;
  icon: BlogIcon;
  /** e.g. "Built in 8 weeks by 1 developer" */
  delivery: string;
  metrics: CaseStudyMetric[];
  problem: string[];
  challenge: string[];
  builtIntro: string;
  features: CaseStudyFeature[];
  additionalFeatures: string[];
  result: string[];
  liveUrl?: string;
  liveLabel?: string;
  secondaryLiveUrl?: string;
  secondaryLiveLabel?: string;
  codeUrl?: string;
  builtOutro?: string;
  techStack: string[];
  keywords: string[];
  published: boolean;
};
