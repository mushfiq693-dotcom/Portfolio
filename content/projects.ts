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
    liveUrl: "https://algo-hub2.vercel.app",
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
    id: "planforge",
    title: "PlanForge: Idea-to-Implementation-Plan Generator",
    tagline: "Convert raw app ideas into execution-ready implementation plans with a built-in Anti-Slop Engine.",
    description: "A structured AI planning tool that generates comprehensive PRDs, architecture ascii diagrams, and task checklists with strict design constraints preventing generic AI-generated aesthetics.",
    detailedDescription: "PlanForge eliminates generic AI 'slop' through four integrated pillars: a 13-Section Master Template, an Anti-Slop Engine with 36 blacklist rules, a Deterministic Quality Linter, and a Live Streaming Engine using OpenRouter API. Built with Next.js App Router and TypeScript, it enforces authentic, domain-tailored software blueprints for AI coding agents.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "OpenRouter API"],
    githubUrl: "https://github.com/mushfiq693-dotcom/PlanForge",
    liveUrl: "https://papaprompt.vercel.app",
    featured: true,
    highlights: [
      "Engineered a Deterministic Quality Linter that evaluates generated blueprints client-side against 6 strict quality checks",
      "Integrated an Anti-Slop Engine with 36 blacklist rules to enforce strict design constraints",
      "Implemented a Live Streaming Engine using OpenRouter Chat Completions API with server-side validation and rate limiting"
    ],
    metrics: [
      { label: "Quality Checks", value: "6 Deterministic Rules" },
      { label: "AI Integration", value: "OpenRouter Streaming" }
    ]
  },
  {
    id: "research-agent",
    title: "Personal Research Agent",
    tagline: "Autonomous macOS Menu Bar agent for daily AI-driven intelligence reports.",
    description: "A 100% native macOS application built with Swift and SwiftUI that runs autonomously in the Menu Bar. It schedules daily research tasks, queries web search engines, extracts information, and generates sourced Markdown reports using free-tier cloud AI models.",
    detailedDescription: "Built entirely in Swift + SwiftUI with MenuBarExtra styling, this native macOS agent requires zero third-party web frameworks or local servers. It features an autonomous daily scheduler with wake observation, Keychain security for API keys, prompt-injection defense with code-level URL whitelisting, and a resilient AI engine with a 3-layer tolerant JSON parser and fallback model traversal. It integrates with native macOS notifications and SMAppService for Launch at Login functionality.",
    techStack: ["Swift", "SwiftUI", "macOS API", "OpenRouter API", "Brave Search API"],
    githubUrl: "https://github.com/mushfiq693-dotcom/Research_Agent",
    featured: true,
    highlights: [
      "Built a 100% native macOS Menu Bar application with zero third-party web frameworks or local servers",
      "Implemented an autonomous scheduling engine with wake observation and native UNUserNotificationCenter integration",
      "Engineered a resilient AI pipeline with prompt-injection defense, code-level URL whitelisting, and 3-layer tolerant parsing"
    ],
    metrics: [
      { label: "Platform", value: "macOS Native (SwiftUI)" },
      { label: "Execution", value: "Autonomous Loop" }
    ]
  }
];
