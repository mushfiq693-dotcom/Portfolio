"use client";

import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000000] border-t border-white/10 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-zinc-200 transition-colors"
          >
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span>
              {profileData.name.split(" ")[0]}
              <span className="text-emerald-400 font-semibold">.dev</span>
            </span>
          </a>
          <p className="text-zinc-500 text-xs font-mono">
            {profileData.title} &bull; Pure Matte Obsidian &amp; Titanium Minimal Portfolio.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#08080a] text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#08080a] text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          {profileData.facebook && (
            <a
              href={profileData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="p-2 rounded-lg bg-[#08080a] text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          )}
          {profileData.instagram && (
            <a
              href={profileData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg bg-[#08080a] text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          )}

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-white/[0.06] text-zinc-300 hover:bg-white/[0.12] border border-white/15 transition-all ml-2 shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-white/5 text-center text-zinc-600 text-xs font-mono">
        &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved. Self-hosted Next.js App.
      </div>
    </footer>
  );
}
