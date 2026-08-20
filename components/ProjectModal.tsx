"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, CheckCircle, Activity, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/types/content";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Modal Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-lg"
          />

          {/* Modal Content Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#09090b] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-zinc-500 via-white to-emerald-400 opacity-60" />

            {/* Header / Close button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white border border-white/20">
                      <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" /> Featured System
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-zinc-400 text-xs font-mono mt-1">{project.tagline}</p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Project Modal"
                className="p-2 rounded-xl bg-[#000000] hover:bg-[#18181b] border border-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="py-6 space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Overview</span>
                </h4>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Performance Benchmarks</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#000000] p-3.5 rounded-xl border border-white/10 shadow-inner">
                        <span className="text-xs text-zinc-400 block font-mono">{m.label}</span>
                        <span className="text-lg font-bold font-mono text-white">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">Key Engineering Accomplishments</h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-[#000000]/80 p-2.5 rounded-xl border border-white/10">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#000000] text-zinc-300 border border-white/10 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#000000] hover:bg-[#18181b] border border-white/10 text-white font-medium text-xs flex items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-300" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
