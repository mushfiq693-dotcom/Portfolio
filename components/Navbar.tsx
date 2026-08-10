"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Code2, Terminal } from "lucide-react";
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
      {/* Scroll progress indicator line */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 origin-left fixed top-0 left-0 right-0 z-50"
        style={{ scaleX }}
      />

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0f17]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-emerald-400 transition-colors group"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <span>
              {profileData.name.split(" ")[0]}
              <span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-900/60 p-1.5 rounded-full border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume CTA & Social quick link */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-300 hover:text-white"
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
            className="md:hidden bg-[#0b0f17]/95 border-b border-white/10 px-4 pt-3 pb-6 flex flex-col gap-3 mt-2 backdrop-blur-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-300 hover:text-emerald-400 font-medium py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
            >
              Get in Touch
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
