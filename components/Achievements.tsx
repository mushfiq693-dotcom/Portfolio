"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, ExternalLink, Award, Code2, Target } from "lucide-react";
import { achievementsData } from "@/content/achievements";

const categoryIcons: Record<string, typeof Trophy> = {
  "Competitive Programming": Code2,
  "Certification": Award,
  "Hackathon": Trophy,
  "Milestone": Target,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#070510] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono mb-3 shadow-sm shadow-fuchsia-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>05 // MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & <span className="text-gradient-cyber">Certifications</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Competitive programming highlights, technical certifications, and hackathon accomplishments.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievementsData.map((item) => {
            const Icon = categoryIcons[item.category] || Trophy;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-fuchsia-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.stat && (
                      <span className="px-2.5 py-1 rounded-md bg-fuchsia-500/20 text-fuchsia-300 font-mono text-xs font-bold border border-fuchsia-500/40 shadow-sm shadow-fuchsia-500/20">
                        {item.stat}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-cyan-300 font-medium block mb-1">
                    {item.category} &bull; {item.date}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs font-mono text-gray-400 mb-3">{item.platformOrIssuer}</p>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-3 border-t border-white/10 flex justify-end">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-fuchsia-400 hover:underline flex items-center gap-1"
                    >
                      <span>Verify Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
