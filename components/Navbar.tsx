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
      {/* Sleek Titanium Scroll progress indicator line */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-zinc-400 via-white to-emerald-400 origin-left fixed top-0 left-0 right-0 z-50 shadow-sm shadow-white/20"
        style={{ scaleX }}
      />

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#000000]/80 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-zinc-200 transition-colors group"
          >
            <div className="p-1.5 rounded-lg bg-white/[0.06] border border-white/10 group-hover:border-white/25 transition-colors shadow-sm">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span>
              {profileData.name.split(" ")[0]}
              <span className="text-emerald-400 font-semibold">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#09090b]/90 p-1.5 rounded-full border border-white/[0.08] shadow-xl shadow-black/80 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume CTA & Social quick link */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-zinc-200 bg-white/[0.06] border border-white/15 rounded-lg hover:bg-white/[0.12] hover:border-white/30 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-[#09090b] border border-white/10 text-zinc-300 hover:text-white"
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
            className="md:hidden bg-[#000000]/95 border-b border-white/10 px-4 pt-3 pb-6 flex flex-col gap-3 mt-2 backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-zinc-300 hover:text-white font-medium py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 text-sm font-semibold text-white bg-white/[0.08] border border-white/20 rounded-lg"
            >
              Get in Touch
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
