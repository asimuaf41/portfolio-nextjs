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
    slug: "e-sign-platform",
    title: "E-Signature Platform Inspired by DocuSign",
    summary:
      "This platform functions as a comprehensive document management system. Users can upload PDF documents, add interactive fields such as signature, date, and name, and send them as envelopes to recipients for digital signing. Recipients can easily open the envelope, sign the document, and submit it securely.",
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
    stack: ["HTML", "CSS", "Javascript", "J query", "Bootstrap"],
    image: "/btSoft.png",
    demoUrl: "https://btsoftwarehouse.com/",
    codeUrl: "https://github.com/asimuaf41",
  },
];

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
  { key: "Age", value: `${new Date().getFullYear() - 1998} years old` },
  { key: "Nationality", value: "Pakistan" },
  { key: "Languages", value: "English, Urdu and Punjabi" },
  { key: "Address", value: "Shahkot, Pakistan" },
];

export const services = [
  {
    title: "MERN/Next.js Web Engineering & Rescue",
    description:
      "Full-stack web development: Fast, scalable web apps and admin panels using React.js, Next.js, Node.js, and TypeScript. Specialized in reviving buggy, abandoned, or legacy codebases—implementing clean, modular architecture, performance-tuned, SEO-optimized, and ready for business growth.",
  },
  {
    title: "AI & Automation Integration",
    description:
      "Supercharge your product with AI. I integrate OpenAI, ChatGPT, Claude, and agent workflows for automation, AI chatbots, LLM-powered features, and smart dashboards. I leverage AI coding tools (Cursor, Claude) to speed up dev, debugging, and optimize architecture—delivering more in less time with fewer bugs.",
  },
  {
    title: "AI Agent Development (OpenClaw, n8n & More)",
    description:
      "Specialized development of custom AI agents using OpenClaw, n8n, and other modern agent platforms. Build robust, automated workflows and intelligent agents that can connect APIs, trigger logic, interact with users, or run autonomous operations across cloud or on-premise infrastructure. Ideal for businesses looking to deploy no-code/low-code AI process automations, smart integrations, or enhance digital workflows with cutting-edge autonomous agents.",
  },
  {
    title: "Mobile Applications (React Native)",
    description:
      "Cross-platform mobile app development using React Native for iOS/Android. Clean, responsive interfaces and seamless integration with cloud APIs, analytics, and AI. Perfect for prototyping or productizing alongside your web platform.",
  },
  {
    title: "API Development & Optimization",
    description:
      "Design and develop efficient RESTful APIs, GraphQL, and microservices using Node.js, Express, and NestJS. Specialized in API aggregation, optimization, caching, authentication (JWT), and third-party data integrations for real-time experiences.",
  },
  {
    title: "Quality Assurance & Testing Automation",
    description:
      "In-depth QA engineering with automated and manual testing during development. Implementation of robust testing strategies eliminates bugs and ensures reliability, leveraging AI tools for code review, validation, and continuous integration pipelines.",
  },
];

// Enhanced and expanded services to reflect the breadth and specialties highlighted in aboutIntro above.

export const aboutIntro = `
MERN & AI Engineer | React, Next.js, Node | OpenAI, Cursor, Claude. I build AI-powered dashboards, admin panels, and automation systems using React, Node.js, and modern AI coding tools like Cursor and Claude.<br><br>

Clients hire me when they need fast, clean, and scalable systems — not just code, but smart execution.<br><br>

I can even demonstrate my skills on your task before payment so you can verify quality risk-free.<br><br>

🚀 Top Rated Plus MERN Stack & AI Engineer | React, Next.js, Node.js | OpenAI, Cursor & Claude AI Specialist<br><br>

I use AI coding agents (Cursor, Claude) to speed up development, refactoring, debugging, and system design.<br>
This allows me to deliver in days what usually takes other developers weeks — with cleaner architecture and fewer bugs.<br><br>

Clients turn to me when their React or Next.js app is buggy, sluggish, or abandoned by previous developers. I excel at rescuing MERN projects, resolving tough bugs, integrating AI capabilities, and deploying production-ready solutions—delivered quickly and efficiently.<br>
✅ 100% Job Success Score<br>
✅ 7+ Years of Professional Experience (Including Full-Time Upwork Freelancing Since 2021)<br>
✅ Proven Expert in Debugging, Scaling, and Reviving Complex Codebases<br><br>

<strong>Why Clients Choose Me:</strong><br>
✅ React/Next.js Rescue Specialist - Revive buggy, abandoned, or underperforming apps<br>
✅ AI Integration Expert - Add ChatGPT, OpenAI, and LLM capabilities to existing apps<br>
✅ MERN Stack Architect - Build high-performance web apps from scratch<br>
✅ API Optimization Guru - Efficiently fetch and render multiple APIs<br>
✅ PWA & SEO Ready - Implement progressive web app manifests and performance optimizations<br>
✅ AI-Enhanced Development - Use Cursor & Claude for faster, cleaner code delivery<br><br>

<strong>My AI-Driven Development Process:</strong><br>
⚡ 30% faster development using AI-assisted coding<br>
⚡ 40% fewer bugs through AI code validation<br>
⚡ 25% cost savings via smarter architecture decisions<br>
⚡ 50% faster onboarding with AI-powered documentation<br><br>

I don't just write code—I engineer intelligent, future-proof systems that drive business value.<br><br>

<strong>Core Technical Skills</strong><br>
Frontend: React.js, Next.js, TypeScript, Redux, Zustand, Tailwind CSS, Pixel-Perfect UI, Figma-to-Code Conversions<br>
Backend: Node.js, Express.js, NestJS, RESTful APIs, GraphQL, JWT Authentication, Microservices Architecture<br>
AI & Automation: OpenAI API, ChatGPT, Large Language Models (LLMs), AI Chatbots, Workflow Automations<br>
Mobile: React Native for Cross-Platform iOS/Android Apps<br>
Databases & DevOps: MongoDB, PostgreSQL, MySQL, Firebase, AWS Services, Docker, CI/CD Pipelines<br><br>

<strong>Project Types I Specialize In</strong><br>
• SaaS Platforms and Web Applications<br>
• Interactive Dashboards & Admin Panels<br>
• AI-Driven Tools and Applications<br>
• Real-Time Features (e.g., Chat, Maps, Tracking Systems)<br>
• Enterprise-Level React/Next.js Codebases<br>
• Performance Tuning and Optimization Projects<br><br>

<strong>Why Partner with Me?</strong><br>
✔️ Crystal-clear communication throughout the project<br>
✔️ Clean, modular, and maintainable codebases<br>
✔️ Reliable on-time delivery with milestones<br>
✔️ Long-term support for scalability and updates<br>
✔️ Quick grasp of your existing systems to hit the ground running<br><br>

Ready to fix your app, add AI magic, or build something new? Let's connect—send me an invite, and we'll get your project moving today!
`;

export const skills = [
  { name: "NextJs", level: 80 },
  { name: "ReactJS", level: 100 },
  { name: "Cursor AI Coding", level: 95 },
  { name: "Claude Code Assistant", level: 92 },
  { name: "AI Agent Development", level: 88 },
  { name: "LLM Prompt Engineering", level: 90 },
  { name: "AI Workflow Automation", level: 85 },
  { name: "OpenAI API Integration", level: 90 },
  { name: "React Redux/Zustand", level: 90 },
  { name: "Tailwind CSS", level: 80 },
  { name: "ShadCN-UI", level: 80 },
  { name: "Tanstack/React Query", level: 80 },
  { name: "HTML5", level: 95 },
  { name: "javascript", level: 90 },
  { name: "React Native", level: 30 },
  { name: "NodeJS", level: 70 },
  { name: "Sass", level: 90 },
  { name: "Third Party UI libraries", level: 70 },
  { name: "NestJs", level: 80 },
  { name: "Heroku", level: 90 },
  { name: "AWS Amplify", level: 70 },
  { name: "API Integration", level: 95 },
  { name: "TypeScript", level: 70 },
  { name: "Analytical", level: 85 },
  { name: "Responsive design", level: 95 },
  { name: "Testing and debugging", level: 75 },
  { name: "Search engine optimization", level: 50 },
  { name: "Team Leading", level: 70 },
  { name: "Design Customization", level: 75 },
  { name: "learning and improving", level: 80 },
  { name: "Communication", level: 75 },
  { name: "Teaching", level: 70 },
];

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
