"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Code, Server, Database, Wrench, CheckCircle2 } from "lucide-react";
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
    <section id="skills" className="py-24 bg-[#0b0f17] relative">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECH STACK & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tools & Technical <span className="text-emerald-400">Proficiencies</span>
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
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                      <p className="text-gray-400 text-xs">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {cat.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`group px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all ${
                          skill.featured
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20 shadow-sm shadow-emerald-500/10"
                            : "bg-gray-900/60 border-white/10 text-gray-300 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${skill.featured ? "text-emerald-400" : "text-gray-500"}`} />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-gray-500 font-normal pl-1 border-l border-white/10">
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
