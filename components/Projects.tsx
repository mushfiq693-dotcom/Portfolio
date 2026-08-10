"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FolderGit2, ExternalLink, ArrowUpRight, Star } from "lucide-react";
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
    <section id="projects" className="py-24 bg-[#090d15] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected <span className="text-emerald-400">Engineering Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            A showcase of backend services, microservices, algorithm engines, and data pipeline implementations.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 p-1 rounded-xl bg-gray-900/80 border border-white/10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filter === "all"
                  ? "bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filter === "featured"
                  ? "bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/20"
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
              className="glass-card rounded-2xl p-6 sm:p-7 relative group cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 border border-white/10 hover:border-emerald-500/40"
            >
              <div>
                {/* Header Badge & Action Icons */}
                <div className="flex items-center justify-between mb-4">
                  {project.featured ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <Star className="w-3 h-3 fill-emerald-400" /> Featured
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-gray-500">Project // {project.id}</span>
                  )}

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repo"
                        className="p-2 rounded-lg bg-gray-900/80 text-gray-400 hover:text-emerald-400 hover:bg-gray-800 transition-colors"
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
                        className="p-2 rounded-lg bg-gray-900/80 text-gray-400 hover:text-emerald-400 hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </h3>
                <p className="text-xs font-mono text-emerald-400/90 mt-1 mb-3">{project.tagline}</p>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Footer */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-gray-900/90 text-gray-300 border border-white/5 text-[11px] font-mono group-hover:border-emerald-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-mono text-emerald-400 font-medium">
                  <span>Click for technical details &rarr;</span>
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
