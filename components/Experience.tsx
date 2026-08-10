"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/content/experience";
import { educationData } from "@/content/education";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Vertical timeline line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 bg-[#090616] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 shadow-sm shadow-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // CAREER & EDUCATION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & <span className="text-gradient-cyber">Academic Track</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          
          {/* Animated Vertical Cyber Gradient Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-white/10" />
          <motion.div
            className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-fuchsia-500 via-purple-500 to-cyan-400 origin-top shadow-sm shadow-fuchsia-500/50"
            style={{ scaleY }}
          />

          {/* Section 1: Experience Items */}
          <div className="space-y-12 mb-16">
            <div className="flex items-center gap-3 text-fuchsia-400 font-mono font-bold text-lg -ml-6 sm:-ml-10">
              <div className="p-2 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 z-10 bg-[#090616]">
                <Briefcase className="w-5 h-5" />
              </div>
              <span>Professional Experience</span>
            </div>

            {experienceData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[19px] sm:-left-[27px] top-1.5 w-4 h-4 rounded-full bg-[#090616] border-2 border-fuchsia-500 group-hover:bg-fuchsia-400 group-hover:scale-125 transition-all z-10 shadow-sm shadow-fuchsia-500/50" />

                <div className="glass-card rounded-2xl p-6 relative">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30 mb-1">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="text-gray-400 font-medium text-sm">{item.company}</p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-gray-400 bg-[#070510] px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#070510] text-gray-300 text-[11px] font-mono border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section 2: Education Items */}
          <div id="education" className="space-y-12 pt-6">
            <div className="flex items-center gap-3 text-cyan-300 font-mono font-bold text-lg -ml-6 sm:-ml-10">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 z-10 bg-[#090616]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Education</span>
            </div>

            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[19px] sm:-left-[27px] top-1.5 w-4 h-4 rounded-full bg-[#090616] border-2 border-cyan-400 group-hover:bg-cyan-300 group-hover:scale-125 transition-all z-10 shadow-sm shadow-cyan-500/50" />

                <div className="glass-card rounded-2xl p-6 relative">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-cyan-300 font-medium text-sm">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-gray-400 bg-[#070510] px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-fuchsia-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-fuchsia-400" />
                      <span>{edu.location}</span>
                    </div>
                  )}

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-[#070510] text-cyan-300 border border-cyan-500/20 text-[11px] font-mono">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
