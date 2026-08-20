import { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for systems engineering, backend logic, and problem solving.",
    skills: [
      { name: "C++", level: "Core", featured: true },
      { name: "C", level: "Proficient" },
      { name: "TypeScript", level: "Intermediate", featured: true },
      { name: "JavaScript", level: "Intermediate" },
      { name: "SQL", level: "Proficient", featured: true },
      { name: "HTML / CSS", level: "Proficient" }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Web Engineering",
    description: "Modern web frameworks, UI libraries, and state-driven interfaces.",
    skills: [
      { name: "Next.js 15 (App Router)", level: "Intermediate", featured: true },
      { name: "React", level: "Intermediate", featured: true },
      { name: "Tailwind CSS", level: "Proficient", featured: true },
      { name: "Framer Motion", level: "Intermediate", featured: true },
      { name: "Node.js", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate", featured: true }
    ]
  },
  {
    id: "databases",
    title: "Databases & Cloud Backends",
    description: "Relational data modeling, cloud BaaS, and security architectures.",
    skills: [
      { name: "Supabase", level: "Intermediate", featured: true },
      { name: "PostgreSQL", level: "Intermediate", featured: true },
      { name: "Row-Level Security (RLS)", level: "Proficient", featured: true },
      { name: "Database Management (DBMS)", level: "Coursework" },
      { name: "MySQL", level: "Basics" }
    ]
  },
  {
    id: "tools",
    title: "Tools, Systems & CS Foundations",
    description: "Development workflows, version control, and core academic computer science.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core Focus", featured: true },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", featured: true },
      { name: "Git & GitHub", level: "Proficient", featured: true },
      { name: "Linux / Bash", level: "Intermediate" },
      { name: "VS Code / Dev Tools", level: "Proficient" }
    ]
  }
];
