"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Code2, Terminal, Sparkles } from "lucide-react";
import { profileData } from "@/content/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Cyberpunk Gradient Scroll progress indicator line */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 origin-left fixed top-0 left-0 right-0 z-50 shadow-sm shadow-fuchsia-500/50"
        style={{ scaleX }}
      />

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#070510]/85 backdrop-blur-md border-b border-fuchsia-500/20 py-3 shadow-xl shadow-purple-950/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-fuchsia-400 transition-colors group"
          >
            <div className="p-1.5 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 group-hover:border-fuchsia-400 transition-colors shadow-sm shadow-fuchsia-500/20">
              <Terminal className="w-5 h-5 text-fuchsia-400" />
            </div>
            <span>
              {profileData.name.split(" ")[0]}
              <span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f0a21]/80 p-1.5 rounded-full border border-white/10 shadow-lg shadow-purple-950/50 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-fuchsia-300 hover:bg-fuchsia-500/10 rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume CTA & Social quick link */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-1.5 shadow-sm shadow-cyan-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-[#0f0a21] border border-fuchsia-500/30 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#070510]/95 border-b border-fuchsia-500/20 px-4 pt-3 pb-6 flex flex-col gap-3 mt-2 backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-300 hover:text-fuchsia-400 font-medium py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 text-sm font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
            >
              Get in Touch
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
