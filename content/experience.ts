import { ExperienceItem } from "@/types/content";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "2024 — Present",
    type: "Freelance",
    description: "Designing and building custom backend APIs, database schemas, and web platforms for global clients.",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "MongoDB"],
    highlights: [
      "Built 5+ production-grade REST APIs with clean documentation and high reliability",
      "Optimized slow database queries for client platforms, improving response times by over 50%",
      "Engineered containerized Docker environments for seamless client deployments"
    ]
  },
  {
    id: "exp-2",
    role: "Backend & Systems Learning Journey",
    company: "Open Source & Academic Projects",
    period: "2023 — Present",
    type: "Open Source",
    description: "Deep-diving into system design concepts, concurrent programming, and competitive problem solving.",
    technologies: ["C++", "Data Structures", "System Design", "Git", "Linux"],
    highlights: [
      "Solved hundreds of competitive programming problems across platforms",
      "Contributed bug fixes and optimizations to open-source developer toolkits",
      "Designed mock microservices architecture to practice message queues and caching"
    ]
  }
];
