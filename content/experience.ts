import { ExperienceItem } from "@/types/content";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack & Algorithm Developer",
    company: "AlgoHub Project & Open Source",
    period: "2024 — Present",
    type: "Project Engineering",
    description: "Designing and developing interactive educational tooling, algorithm visualization engines, and secure web platforms.",
    technologies: ["Next.js 15", "TypeScript", "C++", "Supabase", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Architected AlgoHub: a real-time sorting algorithm visualizer with live C++ debugging",
      "Conducted adversarial database security audits (RLS/RBAC) across 16 test scenarios",
      "Engineered adaptive student mastery analytics using custom scoring algorithms"
    ]
  },
  {
    id: "exp-2",
    role: "Undergraduate Computer Science & DSA",
    company: "Gopalganj Science and Technology University",
    period: "2024 — Present",
    type: "Academic & Systems Lab",
    description: "Dedicated exploration of core Computer Science, C++ programming, data structures, and algorithmic problem solving.",
    technologies: ["C++", "C++20", "Data Structures", "Algorithms", "Git & Linux"],
    highlights: [
      "Implemented comprehensive C++ library of graph algorithms, recursion trees, and sorting techniques",
      "Studying object-oriented principles, database management, and operating systems architecture",
      "Practicing competitive programming and algorithm optimization on developer platforms"
    ]
  }
];
