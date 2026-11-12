import type { ProjectDetail } from "@/types/content";

const shots = "/projects/shipwright-mobile";

export const projectDetails: ProjectDetail[] = [
  {
    slug: "shipwright-mobile",
    title: "Shipwright Mobile: AI Security Assistant for iOS & Android",
    summary:
      "A native iOS and Android app for an AI SaaS: streaming AI answers with live checks, swipe-to-triage, and one shared AI backend with the web app.",
    description:
      "Shipwright Mobile brings an AI product that audits AI-built apps to the phone. Founders see their production score, triage issues with one thumb, and ask the AI \"Is my app safe to launch?\" while it checks each finding live. The app shares types, business rules and design tokens with the Next.js web app and calls the same server-side AI layer, so no API key ships inside the app.",
    platforms: [
      { label: "iOS · tested on Simulator", platform: "ios" },
      { label: "Android · test build", platform: "android" },
    ],
    features: [
      "Streaming AI chat with visible tool steps, Stop and Retry",
      "Swipe-to-triage with haptics; animated production score",
      "Native tabs, drawer and bottom sheet; dark mode, VoiceOver/TalkBack, Reduce Motion",
      "Shared AI backend with the web app; rate limits, daily quota and AI budget",
      "Typed contract between server and app; dev and preview app variants",
    ],
    stack: [
      "Expo SDK 58",
      "React Native",
      "Expo Router",
      "Reanimated 4",
      "Gesture Handler 3",
      "TypeScript",
      "Next.js 16",
      "AI SDK",
      "Upstash Redis",
      "Turborepo",
      "EAS Build",
    ],
    screenshots: [
      { src: `${shots}/day-12-android-overview.png`, alt: "Overview screen on Android: production score, Ask Shipwright card, issues by severity", caption: "Overview" },
      { src: `${shots}/day-12-android-ask.png`, alt: "Ask Shipwright on Android: tool cards for listing issues and live checks, including one failed check", caption: "Ask Shipwright" },
      { src: `${shots}/day-12-android-security-report.png`, alt: "Security report on Android: score trend over 8 weeks and open issues by area", caption: "Security report" },
      { src: `${shots}/day-12-android-issues.png`, alt: "Issues list on Android, filtered by severity", caption: "Issues" },
      { src: `${shots}/day-12-android-drawer.png`, alt: "Navigation drawer on Android", caption: "Drawer" },
    ],
    articleSlug: "ai-saas-to-mobile-architecture",
    demoUrl: "https://ai-engineer-2026-ten.vercel.app/",
    codeUrl: "https://github.com/asimuaf41/ai-engineer-2026",
    keywords: [
      "React Native AI app",
      "Expo AI assistant",
      "iOS and Android AI SaaS",
      "streaming AI chat mobile",
      "Shipwright Mobile",
    ],
  },
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((detail) => detail.slug === slug);
}
