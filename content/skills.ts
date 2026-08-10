import { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for systems engineering, backend logic, and problem solving.",
    skills: [
      { name: "C++", level: "Advanced", featured: true },
      { name: "C", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate", featured: true },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Advanced", featured: true }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Frameworks, protocols, and architectural paradigms for building resilient services.",
    skills: [
      { name: "Node.js", level: "Intermediate", featured: true },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced", featured: true },
      { name: "System Design", level: "Intermediate", featured: true },
      { name: "Microservices", level: "Concepts" },
      { name: "Data Structures & Algorithms", level: "Advanced", featured: true }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Data modeling, query optimization, and persistent storage management.",
    skills: [
      { name: "PostgreSQL", level: "Intermediate", featured: true },
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Basics" },
      { name: "Prisma / ORMs", level: "Intermediate" }
    ]
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Development tools, version control, and containerization platforms.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", featured: true },
      { name: "Docker", level: "Intermediate", featured: true },
      { name: "Linux / Bash", level: "Intermediate", featured: true },
      { name: "Postman", level: "Advanced" },
      { name: "Vercel", level: "Intermediate" }
    ]
  }
];
