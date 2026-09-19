import { AchievementItem } from "@/types/content";

export const achievementsData: AchievementItem[] = [
  {
    id: "pstu-hackathon-2026",
    title: "PSTU IT Carnival 2026 — National Hackathon",
    category: "Hackathon",
    platformOrIssuer: "Patuakhali Science & Technology University (PSTU)",
    date: "August 29, 2026",
    stat: "1st Runner Up",
    team: "Zenin_clan",
    prize: "20,000 BDT",
    scale: "55+ Universities Nationwide",
    track: "FinTech & Scalable Backend Architecture",
    description:
      "Clinched 1st Runner Up at the PSTU National Hackathon (IT Carnival 2026), competing intensely against elite engineering teams from 55+ universities across Bangladesh. Tackled a rigorous FinTech problem statement: architecting a high-throughput, bank-grade money transfer platform built for ultra-fast latency, airtight security, and massive concurrent scalability.",
    metrics: [
      { label: "Final Standing", value: "1st Runner Up" },
      { label: "Track / Theme", value: "FinTech & Backend" },
      { label: "Competition Scale", value: "55+ Universities" },
      { label: "Prize Awarded", value: "20,000 BDT" }
    ],
    highlights: [
      "FinTech Money Transfer Challenge: Engineered an end-to-end financial transaction pipeline emphasizing low latency, robust authorization, and fault tolerance.",
      "ACID Concurrency & Security: Designed atomic transaction handling and idempotency mechanisms to eliminate race conditions and double-spending risks under high concurrent load.",
      "Scalable System Architecture: Built modular backend services with optimized database schemas and strict data validation for bank-grade reliability.",
      "Nationwide Recognition: Outperformed competitive teams across 55+ universities, securing the 1st Runner Up trophy and 20,000 BDT prize."
    ],
    gallery: [
      {
        src: "/achievements/pstu-runner-up-award.jpg",
        caption: "1st Runner Up dummy cheque award ceremony (Team Zenin_clan - 20,000 BDT)",
        tag: "Award Cheque"
      },
      {
        src: "/achievements/pstu-hackathon-certificate.jpg",
        caption: "Official Certificate of Participation presented by Patuakhali Science & Technology University",
        tag: "Official Certificate"
      },
      {
        src: "/achievements/pstu-team-celebration.jpg",
        caption: "Team Zenin_clan celebrating victory on the grand auditorium stage with prize cheques",
        tag: "Stage Celebration"
      }
    ]
  }
];
