import type { Testimonial } from "@/types/content";

/** Skills clients endorsed across these Upwork contracts. */
export const testimonialEndorsements = [
  "Reliable",
  "Collaborative",
  "Committed to Quality",
  "Solution Oriented",
  "Clear Communicator",
  "Accountable for Outcomes",
  "Professional",
] as const;

/**
 * Public Upwork reviews.
 * The lead item is Method. Its text is a professional summary of the client's
 * review plus the contract stats they confirmed for that company.
 * The next item keeps the separate "Long term dedicated react developer" review.
 * Other quotes are verbatim aside from stripping keyboard-smash emphasis on the .NET review.
 */
export const testimonials: Testimonial[] = [
  {
    id: "method",
    featured: true,
    verbatim: false,
    quote:
      "Asim has been Method's full-time developer through an ongoing partnership of more than four years. He has completed assigned tasks reliably, and the client is satisfied with his performance and committed to continuing the work.",
    attribution: "Method",
    project: "Method",
    jobTitle: "Full-time React developer",
    projectType: "Long-term React",
    timeframe: "Ongoing partnership",
    outcome: "4+ years and still on the contract",
    metrics: [
      { value: "4+ yrs", label: "Ongoing partnership" },
      { value: "4,249+", label: "Hours on this client" },
    ],
    skills: ["Accountable for Outcomes"],
    rating: 5,
    accent: "green",
  },
  {
    id: "long-term-react",
    quote:
      "Asim has been working on our project as a part-time developer for more than 1 year. and completed all his tasks. Thanks, Asim, and Good Luck.",
    attribution: "Upwork client",
    project: "Long term dedicated react developer",
    projectType: "Long-term React",
    timeframe: "Aug 12, 2021 – Nov 17, 2022",
    outcome: "1,398 hours · tasks completed",
    skills: [],
    rating: 5,
    accent: "amber",
  },
  {
    id: "ai-examination",
    quote:
      "Asim was great in helping us build out our AI-powered examination platform. He has a great understanding of AI implementation and frontend development.",
    attribution: "Upwork client",
    project: "AI Adaptive Frontend Dev",
    projectType: "AI platform",
    timeframe: "Feb 27 – Mar 30, 2026",
    outcome: "AI examination platform shipped",
    skills: [],
    rating: 5,
    accent: "purple",
  },
  {
    id: "frontend-delivery",
    quote:
      "Asim was a solid developer to work with and someone I could rely on throughout a fairly involved project.",
    attribution: "Upwork client",
    project: "Frontend Developer",
    projectType: "Frontend",
    timeframe: "Dec 29, 2025 – Jan 24, 2026",
    outcome: "On time, quality expectations met",
    skills: [
      "Reliable",
      "Collaborative",
      "Committed to Quality",
      "Solution Oriented",
      "Clear Communicator",
      "Accountable for Outcomes",
    ],
    rating: 5,
    accent: "blue",
  },
  {
    id: "react-aspnet",
    quote:
      "Asim is a highly professional React Developer. It was straightforward to communicate and discuss ideas. His work quality is excellent and exceeds expectations.",
    attribution: "Upwork client",
    project: "React Expert With Asp.Net",
    projectType: "Full-stack · React + ASP.NET",
    timeframe: "Nov 13, 2022 – Feb 13, 2023",
    outcome: "Quality exceeded expectations",
    skills: ["Professional", "Clear Communicator"],
    rating: 5,
    accent: "cyan",
  },
  {
    id: "dotnet-rehire",
    quote:
      "Asim is the best developer I worked with. I will hire again!",
    attribution: "Upwork client",
    project: "C# .NET Developer",
    projectType: "C# / .NET",
    timeframe: "Oct 2, 2021",
    outcome: "Client said they would hire again",
    skills: ["Collaborative"],
    rating: 5,
    accent: "orange",
  },
];

export const featuredTestimonial =
  testimonials.find((item) => item.featured) ?? testimonials[0];

export const supportingTestimonials = testimonials.filter(
  (item) => item.id !== featuredTestimonial.id,
);
