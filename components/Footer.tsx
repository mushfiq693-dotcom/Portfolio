"use client";

import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070510] border-t border-fuchsia-500/20 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-fuchsia-400 transition-colors"
          >
            <Terminal className="w-5 h-5 text-fuchsia-400" />
            <span>
              {profileData.name.split(" ")[0]}
              <span className="text-cyan-400">.dev</span>
            </span>
          </a>
          <p className="text-gray-400 text-xs font-mono">
            {profileData.title} &bull; Cyberpunk Dev Workstation Theme.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#0f0a21] text-gray-400 hover:text-fuchsia-400 border border-fuchsia-500/20 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#0f0a21] text-gray-400 hover:text-fuchsia-400 border border-fuchsia-500/20 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-300 hover:bg-fuchsia-500/20 border border-fuchsia-500/30 transition-all ml-2 shadow-sm shadow-fuchsia-500/20"
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
