"use client";

import { motion } from "framer-motion";
import { User, Server, Database, Code2, ShieldCheck, MapPin, Sparkles, Cpu, Layers } from "lucide-react";
import { profileData } from "@/content/profile";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing RESTful services, clean API contracts, and scalable backend workflows with high throughput.",
    tag: "Node.js / Express"
  },
  {
    icon: Database,
    title: "Database Optimization",
    description: "Structuring SQL & NoSQL schemas, writing efficient queries, and indexing for low latency execution.",
    tag: "PostgreSQL / Mongo"
  },
  {
    icon: Code2,
    title: "Algorithms & DSA",
    description: "Solid foundation in C++, memory management, graph theoretical algorithms, and competitive problem solving.",
    tag: "C++20 / STL"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#070510] relative overflow-hidden">
      {/* Cyber Ambient Lighting Backdrops */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[130px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono mb-3 shadow-sm shadow-fuchsia-500/20">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineered for <span className="text-gradient-cyber">Reliability & Scale</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Passionate software engineer focused on core system architecture, algorithm efficiency, and production backend services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Bio Description Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative border border-fuchsia-500/25 hover:border-cyan-400/50 transition-colors shadow-2xl overflow-hidden group">
              {/* Top Cyber Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400" />

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-mono text-cyan-300 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-fuchsia-400" />
                  <span>Based in {profileData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-fuchsia-300 bg-fuchsia-500/10 px-3 py-1 rounded-full border border-fuchsia-500/30">
                  <Sparkles className="w-3 h-3 text-fuchsia-400" />
                  <span>CSE Undergrad</span>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed font-normal text-base sm:text-lg">
                {profileData.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2 bg-[#070510] px-3.5 py-1.5 rounded-xl border border-fuchsia-500/30">
                  <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
                  <span>Clean Code Advocate</span>
                </div>
                <div className="flex items-center gap-2 bg-[#070510] px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Strict Type Safety</span>
                </div>
                <div className="flex items-center gap-2 bg-[#070510] px-3.5 py-1.5 rounded-xl border border-purple-500/30">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Modular System Design</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 hover:border-fuchsia-500/50 transition-all duration-300 border border-white/10 group"
                >
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border border-fuchsia-500/40 text-fuchsia-300 shrink-0 shadow-lg shadow-fuchsia-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-bold text-lg group-hover:text-fuchsia-300 transition-colors">{item.title}</h3>
                      <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">{item.tag}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
