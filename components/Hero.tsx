"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Mail, FileText, Terminal, Cpu, Sparkles, Zap, Brain } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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

// Typewriter / Glitch text effect component
function TypewriterGlitchText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-mono text-fuchsia-400 font-bold tracking-wider flex items-center gap-1">
      <span className="text-gradient-cyber">{displayText}</span>
      {!isDone && <span className="w-1.5 h-3.5 bg-fuchsia-400 animate-pulse inline-block" />}
    </span>
  );
}

export default function Hero() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // 60FPS Cyber Spotlight Interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;
    
    setTilt({ x: normY * -12, y: normX * 12 });
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Cyber Ambient Dual Lighting (Magenta + Cyan) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono font-medium shadow-sm shadow-fuchsia-500/20">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                <span>{profileData.status}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient-cyber">
                {profileData.name}
              </span>
            </motion.h1>

            {/* Role Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xl sm:text-2xl font-mono text-cyan-300 font-medium mb-4"
            >
              <Terminal className="w-6 h-6 text-fuchsia-400 inline" />
              <span>{profileData.title}</span>
            </motion.div>

            {/* Tagline */}
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
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#0f0a21] hover:bg-[#160f33] border border-cyan-500/30 text-cyan-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 shadow-sm shadow-cyan-500/20"
              >
                <Mail className="w-4 h-4 text-fuchsia-400" />
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

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-[#0f0a21] border border-fuchsia-500/20 text-gray-400 hover:text-fuchsia-400 hover:border-fuchsia-500/50 transition-all hover:scale-110 shadow-sm"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-[#0f0a21] border border-fuchsia-500/20 text-gray-400 hover:text-fuchsia-400 hover:border-fuchsia-500/50 transition-all hover:scale-110 shadow-sm"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email Me"
                className="p-2.5 rounded-xl bg-[#0f0a21] border border-fuchsia-500/20 text-gray-400 hover:text-fuchsia-400 hover:border-fuchsia-500/50 transition-all hover:scale-110 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Cyberpunk Workstation Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Floating Orbit Tech Badges */}
            {/* Top Left: ⚡ Backend & APIs */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -top-4 left-2 z-20 px-3.5 py-1.5 rounded-xl bg-[#0f0a21]/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-xl backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              <span>Backend &amp; APIs</span>
            </motion.div>

            {/* Bottom Right: 🧠 Think • Build • Scale */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-3 right-0 z-20 px-3.5 py-1.5 rounded-xl bg-[#0f0a21]/95 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-xl backdrop-blur-md"
            >
              <Brain className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Think &bull; Build &bull; Scale</span>
            </motion.div>

            <div
              ref={avatarRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer w-full max-w-[360px] sm:max-w-[410px]"
            >
              {/* Outer Cyber Aura Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/25 via-purple-500/20 to-cyan-500/25 rounded-3xl blur-xl pointer-events-none transform-gpu" />

              {/* 3D Tilt Card Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: "transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)",
                }}
                className="relative z-10 rounded-3xl p-4 sm:p-5 border border-fuchsia-500/30 bg-[#0f0a21]/90 shadow-2xl hover:border-cyan-400/60 transition-colors transform-gpu overflow-hidden"
              >
                {/* Dynamic Mouse Spotlight Glare Beam */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, rgba(217, 70, 239, 0.2), transparent 75%)`,
                  }}
                />

                {/* Top Corner Floating Badge */}
                <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Backend Engineer</span>
                </div>

                {/* Avatar Image Frame */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#180e33] to-[#070510] border border-white/10 flex items-center justify-center">
                  <Image
                    src="/avatar.jpg"
                    alt={`${profileData.name} - Developer Avatar`}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 410px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-[1.04] transform-gpu"
                  />

                  {/* Cyber Terminal Code Typing Overlay: mushfique@macbook — zsh */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#070510]/95 border border-fuchsia-500/40 rounded-lg p-2.5 font-mono text-[10px] text-fuchsia-300 shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-1 mb-1 border-b border-white/10 pb-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[9px] text-gray-300 ml-1 font-semibold">mushfique@macbook &mdash; zsh</span>
                    </div>
                    <p className="text-gray-300">$ const dev = new Engineer();</p>
                    <p className="text-cyan-400 flex items-center gap-1">
                      <span>&gt; status: 200 OK</span>
                      <span className="w-1.5 h-3 bg-cyan-400 animate-pulse" />
                    </p>
                  </div>
                </div>

                {/* Footer Badge: Typewriter Glitch Text MUSHFIQUR RAHMAN */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1.5 text-fuchsia-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
                    <TypewriterGlitchText text="MUSHFIQUR RAHMAN" />
                  </span>
                  <span className="text-cyan-300 font-mono text-[11px] bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30 flex items-center gap-1.5 shadow-sm shadow-cyan-500/20">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>CSE Undergrad</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 flex flex-col items-center gap-1.5 text-gray-500"
        >
          <span className="text-xs font-mono">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-fuchsia-400/70" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
