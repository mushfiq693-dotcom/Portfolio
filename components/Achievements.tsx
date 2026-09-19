"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Building2,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  FileCheck,
  Images
} from "lucide-react";
import Image from "next/image";
import { achievementsData } from "@/content/achievements";

export default function Achievements() {
  const achievement = achievementsData[0]; // Flagship National Hackathon
  const gallery = achievement?.gallery || [];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const openLightboxAt = (index: number) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleNext, handlePrev]);

  if (!achievement) return null;

  return (
    <section id="achievements" className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-mono mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <span>05 // MILESTONES &amp; RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Achievements &amp; <span className="text-gradient-titanium">Accolades</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
            Competitive hackathon victories, nationwide problem solving, and verified credentials.
          </p>
        </motion.div>

        {/* Flagship Hackathon Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-white/12 p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl"
        >
          {/* Top subtle gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/80 via-white to-emerald-400/80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Achievement Details & Stats */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div>
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold shadow-sm">
                    <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                    {achievement.stat || "1st Runner Up"}
                  </span>
                  {achievement.track && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono text-xs font-semibold">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {achievement.track}
                    </span>
                  )}
                  {achievement.prize && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 font-mono text-xs font-medium">
                      Prize: {achievement.prize}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.06] border border-white/12 text-zinc-300 font-mono text-xs">
                    <Building2 className="w-3 h-3 text-zinc-400" />
                    National Level
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {achievement.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm font-mono text-zinc-400 mb-5 pb-4 border-b border-white/10">
                  <span className="text-zinc-200 font-medium">{achievement.platformOrIssuer}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {achievement.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {achievement.description}
                </p>

                {/* Key Metrics Grid - Structured 2x2 with clean spacing */}
                {achievement.metrics && (
                  <div className="grid grid-cols-2 gap-3.5">
                    {achievement.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-[#08080c]/90 p-3.5 sm:p-4 rounded-2xl border border-white/10 flex flex-col justify-between gap-1.5 transition-colors hover:border-emerald-500/30 shadow-sm"
                      >
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold font-mono text-white tracking-tight leading-snug">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Serial Photo Gallery & Carousel */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Active Image Box with Hover Controls */}
              <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-[#08080a] aspect-[16/11] flex items-center justify-center shadow-inner">
                {gallery.length > 0 && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => openLightboxAt(activeImageIndex)}
                    >
                      <Image
                        src={gallery[activeImageIndex].src}
                        alt={gallery[activeImageIndex].caption}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Gloss & Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                      {/* Top Tag & Counter */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {gallery[activeImageIndex].tag}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-zinc-300 font-mono text-[11px] shadow-sm">
                          {activeImageIndex + 1} / {gallery.length}
                        </span>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 pointer-events-none">
                        <p className="text-zinc-200 text-xs sm:text-sm font-medium line-clamp-2 drop-shadow-md">
                          {gallery[activeImageIndex].caption}
                        </p>
                        <div className="p-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white shrink-0 shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Left / Right Carousel Arrow Buttons */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      aria-label="Previous Photo"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg z-10 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      aria-label="Next Photo"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg z-10 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Serial Thumbnails Selector (1, 2, 3) */}
              <div className="grid grid-cols-3 gap-3">
                {gallery.map((item, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-xl overflow-hidden border p-1 text-left transition-all duration-200 group flex flex-col gap-1.5 cursor-pointer ${
                        isActive
                          ? "border-emerald-400 bg-white/[0.08] shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                          : "border-white/10 bg-[#08080a] hover:border-white/30 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-zinc-900">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="(max-width: 768px) 33vw, 15vw"
                        />
                        <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[9px] font-bold text-white border border-white/20">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="px-1 pb-1">
                        <span
                          className={`text-[11px] font-mono font-medium block truncate ${
                            isActive ? "text-emerald-300" : "text-zinc-400 group-hover:text-zinc-200"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons Placed Under Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* View Certificate Direct Action */}
                <button
                  onClick={() => openLightboxAt(1)} // Image index 1 is Certificate
                  className="w-full px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4 text-black" />
                  <span>View Official Certificate</span>
                </button>

                {/* Open Full Gallery */}
                <button
                  onClick={() => openLightboxAt(activeImageIndex)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#08080a] hover:bg-[#141418] border border-white/15 text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Images className="w-4 h-4 text-emerald-400" />
                  <span>Event Gallery ({gallery.length} Photos)</span>
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-black/92 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#09090b] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#08080a]">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.08] border border-white/15 text-white font-mono text-xs font-semibold">
                    {gallery[activeImageIndex]?.tag}
                  </span>
                  <span className="text-zinc-400 font-mono text-xs">
                    Photo {activeImageIndex + 1} of {gallery.length}
                  </span>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close Lightbox"
                  className="p-2 rounded-xl bg-black hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Zoomed Image Viewport */}
              <div className="relative flex-1 min-h-[300px] max-h-[65vh] w-full bg-black flex items-center justify-center p-2">
                <div className="relative w-full h-full min-h-[320px] max-h-[60vh]">
                  <Image
                    src={gallery[activeImageIndex].src}
                    alt={gallery[activeImageIndex].caption}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                {/* Navigation Arrows inside modal */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white transition-transform hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white transition-transform hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Footer Caption & Modal Thumbnails Bar */}
              <div className="px-5 py-3.5 border-t border-white/10 bg-[#08080a] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-zinc-300 text-xs sm:text-sm font-medium text-center sm:text-left">
                  {gallery[activeImageIndex].caption}
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-12 h-8 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        idx === activeImageIndex
                          ? "border-emerald-400 scale-105"
                          : "border-white/15 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

