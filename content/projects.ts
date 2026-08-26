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
    liveUrl: "https://algo-hub-eight.vercel.app",
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
    id: "cse-sync",
    title: "CSE-Sync | GSTU CSE Student & Alumni Directory",
    tagline: "A secure, role-based directory platform bridging students, alumni, and faculty with collaborative profile management.",
    description: "A full-stack departmental platform built for the Department of Computer Science and Engineering (GSTU) to organize, search, and manage student and alumni records. Features a public fast-search directory, admin-moderated contributor portal, database-level RLS, multi-facet filtering, and non-destructive audit history tracking.",
    detailedDescription: "A full-stack departmental platform built for the Department of Computer Science and Engineering (GSTU) to organize, search, and manage student and alumni records. The system features a public-facing, fast-search directory alongside an admin-moderated portal for approved contributors. Engineered with Next.js 15 App Router and Supabase, it incorporates database-level Row-Level Security (RLS), multi-facet filtering (by batch, session, and blood group), secure image upload pipelines, and non-destructive audit history tracking for every profile update.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Lucide React", "Zod"],
    githubUrl: "https://github.com/mushfiq693-dotcom/CSE-Sync",
    liveUrl: "https://cse-sync.vercel.app",
    featured: true,
    highlights: [
      "Implemented granular Role-Based Access Control (RBAC) utilizing Supabase Row-Level Security (RLS) policies for Admins and Approved Users.",
      "Built sub-second multi-parameter search and filtering across student batches, graduation years, and blood groups.",
      "Designed a collaborative editing architecture with automated audit trails preserving original creator and latest modifier metadata.",
      "Integrated a secure media upload pipeline with client-side and server-side MIME/size validation (2MB limit).",
      "Crafted a fully responsive, modern UI featuring fluid animations and transitions using Framer Motion and Tailwind CSS."
    ],
    metrics: [
      { label: "Access Control", value: "Database RLS / RBAC" },
      { label: "Search Latency", value: "Sub-second" }
    ]
  },
  {
    id: "gpl-auction",
    title: "GSTU Premier League (GPL) — Real-Time Sports Auction & Tournament Platform",
    tagline: "Next-Gen Real-Time Sports Franchise Auction, 3D FUT Cards & Championship Management Ecosystem",
    description: "A full-stack sports management platform driven by a global 4-phase finite state machine, featuring sub-millisecond WebSocket bidding, sealed blind auctions, mathematical anti-overdraft budget sentinels, 3D holographic FIFA-style athlete cards, and automated tournament fixture tracking.",
    detailedDescription: "A full-stack, enterprise-grade sports management platform driven by a global 4-phase finite state machine (Setup, Registration, Real-Time Auction, and Live Championship). Engineered to replace manual sports auctions with sub-millisecond WebSocket bidding, sealed blind auctions, mathematical anti-overdraft budget sentinels, 3D holographic FIFA-style athlete cards, and automated tournament fixture tracking with live Golden Boot & points leaderboards.",
    techStack: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Socket.IO", "Tailwind CSS", "Framer Motion", "TanStack Query", "Cloudinary", "JWT", "Zod"],
    githubUrl: "https://github.com/mushfiq693-dotcom/football_auction",
    liveUrl: "https://football-auction-drab.vercel.app",
    featured: true,
    highlights: [
      "Real-Time Bidding Arena: Sub-millisecond WebSocket synchronization with a 15-second dynamic anti-snipe timer (+5s per bid) and sealed digital envelope blind bidding.",
      "Anti-Overdraft Financial Sentinel: Backend atomic transaction locks preventing teams from exceeding budgets or violating mandatory roster price-floor limits.",
      "3D Interactive FUT Cards: Hardware-accelerated 3D perspective tilt, dynamic tier foils (Platinum, Gold, Silver), and 6-attribute FIFA-style inspection modals.",
      "Automated Match Center: Instant 2-legged fixture generator with real-time recalculation of points tables, goal differentials, and 4 trophy races (Golden Boot, Playmaker, Clean Sheets, Discipline).",
      "Multi-Tier Lifecycle Reset: 3-level administrative wipe protocols (Tournament Wipe, Roster & Cloudinary Media Cleanup, Factory Reset) for recurring seasons."
    ],
    metrics: [
      { label: "Sync Engine", value: "Socket.IO WebSockets" },
      { label: "Bidding Sentinel", value: "Atomic / Anti-Snipe" }
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
    featured: false,
    highlights: [
      "Extensive implementations of graph theory (BFS, DFS, Dijkstra, MST), trees, and DP",
      "Benchmarked memory footprint and cache locality across standard algorithmic patterns"
    ],
    metrics: [
      { label: "Language", value: "C++ / STL" },
      { label: "Efficiency", value: "O(1) / O(log N)" }
    ]
  }
];
