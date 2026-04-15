"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaExpand } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white pt-32 pb-20 px-8 selection:bg-[var(--accent)] selection:text-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-6 glass-text">
            Curriculum Vitae
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic shimmer-text">
            Professional <span className="text-[var(--accent)]">Resume.</span>
          </h1>
        </header>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-premium flex items-center gap-3 py-4 shine-effect"
          >
            <FaDownload size={16} /> Download Copy
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 font-medium tracking-widest uppercase text-xs flex items-center gap-3"
          >
            <FaExpand size={16} /> View Fullscreen
          </a>
        </motion.div>

        {/* Resume Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl premium-card p-2 sm:p-4 bg-white/5 mb-20"
        >
          <div className="relative w-full aspect-[8.5/11] overflow-hidden rounded-xl">
            <iframe
              src="/resume.pdf"
              title="Kaustubh Pathak Resume"
              className="absolute inset-0 w-full h-full rounded-lg border-none opacity-90 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </motion.div>

        <footer className="mt-40 text-center text-[var(--text-dim)] text-xs uppercase tracking-widest font-medium border-t border-white/5 pt-12 w-full">
          © {new Date().getFullYear()} Kaustubh Pathak — Performance Driven Engineering
        </footer>
      </div>
    </div>
  );
};

export default ResumePage;

