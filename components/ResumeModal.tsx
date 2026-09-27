import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';
import Image from 'next/image';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[85vh] bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#18181b]/80 backdrop-blur-md z-10">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Resume Preview
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Preview */}
            <div className="flex-1 w-full bg-zinc-900/50 p-2 sm:p-4 overflow-hidden relative flex items-center justify-center">
               <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/5">
                 <Image 
                   src="/resume-preview.jpg" 
                   alt="Resume Preview" 
                   fill
                   className="object-contain"
                   unoptimized
                 />
               </div>

               {/* Floating Download Button */}
               <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20">
                 <a
                   href={resumeUrl}
                   download
                   className="flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-2xl shadow-emerald-500/20 font-semibold transition-transform hover:scale-105 active:scale-95"
                 >
                   <Download className="w-5 h-5" />
                   <span>Download Resume</span>
                 </a>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
