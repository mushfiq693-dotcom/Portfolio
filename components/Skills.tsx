"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Code, Server, Database, Wrench, CheckCircle2, Zap } from "lucide-react";
import { skillCategories } from "@/content/skills";

const categoryIcons: Record<string, typeof Code> = {
  languages: Code,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#090616] relative overflow-hidden">
      {/* Cyber Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[130px] pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 shadow-sm shadow-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECH STACK & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Tools & Technical <span className="text-gradient-cyber">Proficiencies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Typed categories covering core programming languages, backend systems, database management, and development tooling.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;
            return (
              <motion.div
                key={cat.id}
                variants={itemVariants}
                className="glass-card rounded-3xl p-7 relative flex flex-col justify-between border border-fuchsia-500/25 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl group"
              >
                {/* Glowing Top Bar Accent */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border border-fuchsia-500/40 text-fuchsia-300 shadow-lg shadow-fuchsia-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors">{cat.title}</h3>
                      <p className="text-gray-400 text-xs mt-0.5">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {cat.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`group/pill px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 border transition-all ${
                          skill.featured
                            ? "bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-200 hover:border-fuchsia-400 hover:bg-fuchsia-500/30 shadow-md shadow-fuchsia-500/20 hover:scale-105"
                            : "bg-[#070510] border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-white hover:scale-105"
                        }`}
                      >
                        <Zap className={`w-3.5 h-3.5 ${skill.featured ? "text-cyan-400 animate-pulse" : "text-gray-500"}`} />
                        <span className="font-semibold">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-gray-400 font-normal pl-1.5 border-l border-white/15">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
