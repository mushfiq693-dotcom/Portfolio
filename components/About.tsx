"use client";

import { motion } from "framer-motion";
import { User, Server, Database, Code2, ShieldCheck, MapPin } from "lucide-react";
import { profileData } from "@/content/profile";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing RESTful services, clean API contracts, and scalable backend workflows."
  },
  {
    icon: Database,
    title: "Database Optimization",
    description: "Structuring SQL & NoSQL schemas, writing efficient queries, and indexing for speed."
  },
  {
    icon: Code2,
    title: "Algorithms & DSA",
    description: "Solid foundation in C++, memory management, and competitive problem solving."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#090d15] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered for <span className="text-emerald-400">Reliability & Scale</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Description Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
              <div className="flex items-center gap-3 text-sm font-mono text-emerald-400 mb-4 pb-3 border-b border-white/10">
                <MapPin className="w-4 h-4" />
                <span>Based in {profileData.location}</span>
                <span className="ml-auto text-xs text-gray-500">// CSE Undergrad</span>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed font-normal text-base">
                {profileData.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Clean Code Advocate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict Type Safety</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl flex items-start gap-4 hover:translate-x-1 transition-transform"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
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
