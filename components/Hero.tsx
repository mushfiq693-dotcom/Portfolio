"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Mail, FileText, Terminal, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Radial Gradient Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.status}</span>
            </div>
          </motion.div>

          {/* Main Title & Role */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{profileData.name}</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-lg sm:text-2xl font-mono text-emerald-400 font-medium mb-6"
          >
            <Terminal className="w-6 h-6 text-emerald-400 inline" />
            <span>{profileData.title}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed mb-8"
          >
            {profileData.tagline}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-white/15 text-gray-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Contact Me</span>
            </a>

            {profileData.resumeUrl && (
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-medium text-sm transition-all hover:text-white flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-gray-400" />
                <span>Resume / CV</span>
              </a>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-gray-900/80 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-gray-900/80 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email Me"
              className="p-2.5 rounded-lg bg-gray-900/80 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500"
        >
          <span className="text-xs font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-emerald-500/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
