import { Project } from "@/types/content";

export const projectsData: Project[] = [
  {
    id: "algohub",
    title: "AlgoHub — Interactive Algorithm Learning Platform",
    tagline: "Make Algorithms, Make Sense",
    description: "A full-stack DSA learning platform that visualizes sorting algorithms in real time, synchronized with live C++ code execution, adaptive progress tracking, and role-based mentorship — built for a university department beta with production-grade security.",
    detailedDescription: "AlgoHub bridges the gap between abstract algorithm concepts and concrete code execution. Engineered with a custom non-scripted algorithm execution engine powering synchronized visualizations and a live C++ code debugger with variable inspection. Features database-level security (RLS, RBAC in Supabase PostgreSQL) validated through a custom 16-scenario adversarial audit, plus an adaptive scoring engine for personalized topic recommendations.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Framer Motion", "Recharts"],
    githubUrl: "https://github.com/mushfiq693-dotcom/Sorting-Algorithms",
    liveUrl: "https://github.com/mushfiq693-dotcom/Sorting-Algorithms",
    featured: true,
    highlights: [
      "Engineered a real (non-scripted) algorithm execution engine powering synchronized visualizations and a live code debugger with variable inspection",
      "Implemented database-level security (RLS, RBAC) validated through a custom 16-scenario adversarial security audit",
      "Built an adaptive scoring engine that computes per-topic mastery and gives students personalized learning recommendations"
    ],
    metrics: [
      { label: "Audit Scenarios", value: "16/16 Passed" },
      { label: "Sync Latency", value: "Real-time" }
    ]
  },
  {
    id: "cpp-algorithm-suite",
    title: "Core Data Structures & Algorithms Lab",
    tagline: "High-performance C++ implementation of fundamental and advanced algorithms.",
    description: "A comprehensive laboratory repository of standard and optimized data structures, graph traversals, dynamic programming solutions, and algorithmic problem-solving techniques in modern C++.",
    detailedDescription: "Systematic implementation of core algorithms with emphasis on memory optimization, asymptotic time complexity analysis, recursion trees, and modular structure for competitive programming and systems engineering.",
    techStack: ["C++", "C++20", "STL", "Algorithms", "DSA"],
    githubUrl: "https://github.com/mushfiq693-dotcom",
    featured: true,
    highlights: [
      "Extensive implementations of graph theory (BFS, DFS, Dijkstra, MST), trees, and DP",
      "Benchmarked memory footprint and cache locality across standard algorithmic patterns"
    ],
    metrics: [
      { label: "Language", value: "C++ / STL" },
      { label: "Efficiency", value: "O(1) / O(log N)" }
    ]
  },
  {
    id: "web-system-architectures",
    title: "Modern Full-Stack Applications & APIs",
    tagline: "Responsive web architectures and database-driven application backends.",
    description: "Full-stack web applications built with Next.js, TypeScript, and relational databases focusing on clean component design, type-safe API routing, and state management.",
    detailedDescription: "Exploration of modern server-side rendering, client-side interactions with Framer Motion, structured database schema design with Supabase & PostgreSQL, and production deployment workflows.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/mushfiq693-dotcom",
    featured: false,
    highlights: [
      "Engineered end-to-end full stack workflows with server components and edge rendering",
      "Implemented responsive glassmorphism UI/UX with smooth micro-interactions"
    ]
  }
];
