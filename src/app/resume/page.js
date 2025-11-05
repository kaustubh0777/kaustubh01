"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaExpand } from "react-icons/fa";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white flex flex-col items-center py-12 px-4 sm:px-8">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-8"
      >
        Resume
      </motion.h2>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300 font-medium"
        >
          <FaDownload className="w-5 h-5" /> Download Resume
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg hover:scale-105 hover:shadow-indigo-400/40 transition-all duration-300 font-medium"
        >
          <FaExpand className="w-5 h-5" /> View Fullscreen
        </a>
      </motion.div>

      {/* Resume Viewer Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl bg-white/10 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-md p-4 sm:p-6"
      >
        <div className="relative w-full aspect-[8.5/11] sm:aspect-[16/9] overflow-hidden rounded-xl">
          <iframe
            src="/resume.pdf"
            title="Kaustubh Pathak Resume"
            className="absolute inset-0 w-full h-full rounded-xl border-none"
          ></iframe>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-400 text-center">
        © 2025 Kaustubh Pathak | Built with Next.js 💫
      </footer>
    </div>
  );
};

export default Page;
