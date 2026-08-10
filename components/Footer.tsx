"use client";

import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090d15] border-t border-white/10 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-emerald-400 transition-colors"
          >
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span>
              {profileData.name.split(" ")[0]}
              <span className="text-emerald-400">.dev</span>
            </span>
          </a>
          <p className="text-gray-400 text-xs font-mono">
            {profileData.title} &bull; Built for performance and motion.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-emerald-400 border border-white/5 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-emerald-400 border border-white/5 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-white/5 text-center text-gray-500 text-xs font-mono">
        &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved. Self-hosted Next.js App.
      </div>
    </footer>
  );
}
