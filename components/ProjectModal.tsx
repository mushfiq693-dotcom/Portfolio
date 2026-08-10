"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, CheckCircle, Activity } from "lucide-react";
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#111827] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-auto overflow-hidden"
          >
            {/* Header / Close button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <Star className="w-3 h-3 fill-emerald-300" /> Featured
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-emerald-400 text-xs font-mono mt-0.5">{project.tagline}</p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Project Modal"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="py-6 space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Overview</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Performance Metrics</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-gray-900/80 p-3 rounded-lg border border-white/5">
                        <span className="text-xs text-gray-400 block">{m.label}</span>
                        <span className="text-lg font-bold font-mono text-emerald-400">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Key Engineering Accomplishments</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-gray-900 text-emerald-300 border border-emerald-500/20 text-xs font-mono"
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
                  className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs flex items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
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
