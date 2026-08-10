"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ArrowDown, Mail, FileText, Terminal, Cpu, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
  const avatarRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax & Tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 15,
  });
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Ambient Radial Gradient Backdrops */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text, Tagline & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.status}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {profileData.name}
              </span>
            </motion.h1>

            {/* Role Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xl sm:text-2xl font-mono text-emerald-400 font-medium mb-5"
            >
              <Terminal className="w-6 h-6 text-emerald-400 inline" />
              <span>{profileData.title}</span>
            </motion.div>

            {/* Supporting Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed mb-8"
            >
              {profileData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gray-900/90 hover:bg-gray-800 border border-white/15 text-gray-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2"
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
                  <span>Resume</span>
                </a>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email Me"
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Anime Developer Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div
              ref={avatarRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer perspective-1000 group w-full max-w-[360px] sm:max-w-[420px]"
            >
              {/* Glowing Aura Ring Behind Avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

              {/* Floating Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{
                  rotateX,
                  rotateY,
                  x: translateX,
                  y: translateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative z-10 glass-card rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl bg-[#0d131f]/80 backdrop-blur-xl group-hover:border-emerald-500/50 transition-colors"
              >
                {/* Floating Code Accent Badge */}
                <div className="absolute -top-3 -right-3 z-20 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                  <span>Backend Dev</span>
                </div>

                {/* Avatar Image Container */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/50 to-[#0b0f17] border border-white/10 flex items-center justify-center">
                  <Image
                    src="/avatar.png"
                    alt={`${profileData.name} - Anime Developer Avatar`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Terminal Code Typing Overlay on MacBook Screen */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/85 border border-emerald-500/30 rounded-lg p-2.5 font-mono text-[10px] text-emerald-400 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-1 mb-1 border-b border-white/10 pb-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[9px] text-gray-400 ml-1">macbook &mdash; zsh</span>
                    </div>
                    <p className="text-gray-300">$ const dev = new Engineer();</p>
                    <p className="text-emerald-400 flex items-center gap-1">
                      <span>&gt; status: 200 OK</span>
                      <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" />
                    </p>
                  </div>
                </div>

                {/* Avatar Footer Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Interactive 3D Avatar</span>
                  </span>
                  <span className="text-gray-500">Move Cursor &uarr;&rarr;</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-1.5 text-gray-500"
        >
          <span className="text-xs font-mono">Scroll Down</span>
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
