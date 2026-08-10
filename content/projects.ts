import { Project } from "@/types/content";

export const projectsData: Project[] = [
  {
    id: "high-throughput-api",
    title: "High-Throughput Backend Service",
    tagline: "Scalable RESTful microservice handling concurrent requests with low latency.",
    description: "A robust backend platform engineered for performance, optimized database indexing, and structured request caching.",
    detailedDescription: "Designed and implemented a backend service with a focus on database query throughput and memory efficiency. Built with clean architecture principles, automated logging, rate limiting, and comprehensive unit tests.",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://example.com",
    featured: true,
    highlights: [
      "Optimized SQL indexing resulting in 40% query latency reduction",
      "Implemented JWT auth flow and rate limiting middleware",
      "Dockerized container setup with CI/CD pipeline"
    ],
    metrics: [
      { label: "Latency", value: "< 50ms" },
      { label: "Throughput", value: "1.2k req/s" }
    ]
  },
  {
    id: "dsa-visualizer-cli",
    title: "C++ High Performance Graph Engine",
    tagline: "Core graph theoretical algorithms implementation with memory benchmarking.",
    description: "An optimized C++ engine executing shortest path, flow algorithms, and topological sorting on heavy graph structures.",
    detailedDescription: "Developed as a research & learning project to benchmark memory utilization and execution timing of standard DSA graph algorithms versus custom allocator implementations.",
    techStack: ["C++20", "CMake", "GTest", "Benchmarking"],
    githubUrl: "https://github.com/yourusername/cpp-graph-engine",
    featured: true,
    highlights: [
      "Custom memory pools for graph node allocation",
      "Comprehensive benchmark suite across million-edge graphs"
    ],
    metrics: [
      { label: "Exec Time", value: "10x Faster" },
      { label: "Memory Pool", value: "Zero Fragmentation" }
    ]
  },
  {
    id: "realtime-chat-backend",
    title: "Distributed Realtime Messaging Service",
    tagline: "WebSocket-backed chat backend with pub/sub architecture.",
    description: "Event-driven messaging system supporting multi-room chat, presence detection, and persistent message store.",
    detailedDescription: "Built with Node.js and Socket.IO integrated with a Redis Pub/Sub backplane, enabling seamless scale across multiple backend process instances.",
    techStack: ["Node.js", "Express", "Socket.IO", "Redis", "MongoDB"],
    githubUrl: "https://github.com/yourusername/realtime-chat-backend",
    liveUrl: "https://example.com",
    featured: false,
    highlights: [
      "Redis Pub/Sub message distribution across cluster nodes",
      "Persistent chat history backed by indexed MongoDB collections"
    ]
  },
  {
    id: "e-commerce-api",
    title: "E-Commerce REST API Engine",
    tagline: "Production-ready backend API with payment integration and inventory locks.",
    description: "Secure, transactional API backend handling cart management, order workflow, and payment Webhooks.",
    detailedDescription: "Features database transaction safety to prevent race conditions during inventory checkout, role-based access control (RBAC), and automated error monitoring.",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "Zod"],
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    featured: false,
    highlights: [
      "Transactional DB isolation for inventory updates",
      "Strict schema validation using Zod for incoming payloads"
    ]
  }
];
