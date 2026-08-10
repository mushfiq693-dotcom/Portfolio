"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FolderGit2, ExternalLink, ArrowUpRight, Star, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projectsData } from "@/content/projects";
import { Project } from "@/types/content";
import ProjectModal from "@/components/ProjectModal";

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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "featured") return p.featured;
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#070510] relative overflow-hidden">
      {/* Ambient Cyber Backdrops */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono mb-3 shadow-sm shadow-fuchsia-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Selected <span className="text-gradient-cyber">Engineering Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            A showcase of backend services, microservices, algorithm engines, and data pipeline implementations.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 p-1.5 rounded-2xl bg-[#0f0a21] border border-fuchsia-500/30 shadow-xl shadow-purple-950/40">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === "featured"
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Featured Only
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-3xl p-7 relative group cursor-pointer flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 border border-fuchsia-500/25 hover:border-cyan-400/60 shadow-2xl overflow-hidden"
            >
              {/* Glowing Top Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Badge & Action Icons */}
                <div className="flex items-center justify-between mb-4">
                  {project.featured ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 shadow-sm shadow-fuchsia-500/20">
                      <Star className="w-3.5 h-3.5 fill-fuchsia-400" /> Featured System
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      Project // {project.id}
                    </span>
                  )}

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repo"
                        className="p-2 rounded-xl bg-[#070510] text-gray-400 hover:text-fuchsia-400 border border-white/10 hover:border-fuchsia-500/40 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-2 rounded-xl bg-[#070510] text-gray-400 hover:text-fuchsia-400 border border-white/10 hover:border-fuchsia-500/40 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-fuchsia-400" />
                </h3>
                <p className="text-xs font-mono text-cyan-300 font-medium mt-1 mb-3">{project.tagline}</p>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics Preview if present */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex items-center gap-3 mb-6 p-2.5 rounded-xl bg-[#070510] border border-white/5 font-mono text-xs">
                    <Activity className="w-4 h-4 text-fuchsia-400 shrink-0" />
                    <div className="flex gap-4">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="text-gray-500">{m.label}:</span>
                          <span className="text-cyan-300 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack Footer */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#070510] text-gray-300 border border-white/10 text-[11px] font-mono group-hover:border-fuchsia-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-mono text-fuchsia-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  <span>Explore Engineering Details &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal view for selected project */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
