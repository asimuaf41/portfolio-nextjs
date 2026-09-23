export const personalInfo = {
  name: "Asim Ali",
  detail:
        "AI Agent & Automation Engineer | React, Next.js, Node.js. I build AI systems that do real work — agents that qualify leads, answer questions from your own data, and take actions in your database, not just chat — then build the full production system around them: backend, database, auth, integrations, and deployment. Also comfortable with React Native, Claude/OpenAI APIs, n8n, Trigger.dev, Make.com, RAG, and tool-calling. From rescuing complex codebases to launching production-ready platforms from scratch, I deliver clean, reliable solutions that scale.",
};

export const socialProfiles = [
  {
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009574883424",
    icon: "Facebook",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/MianAsimAli6",
    icon: "Twitter",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/asim-ali-857a4113b/",
    icon: "LinkedIn",
  },
  {
    label: "GitHub",
    link: "https://github.com/asimuaf41",
    icon: "GitHub",
  },
];

const CAREER_START_YEAR = 2019;
const yearsExperience = Math.max(
  1,
  new Date().getFullYear() - CAREER_START_YEAR,
);

export const homeHighlights = [
  {
    label: "Projects Delivered",
    value: 70,
    suffix: "+",
    href: "/projects",
  },
  {
    label: "Years Experience",
    value: yearsExperience,
    suffix: "+",
    href: "/resume",
  },
  {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
    href: "https://www.upwork.com/freelancers/asimali170",
    external: true,
  },
];
