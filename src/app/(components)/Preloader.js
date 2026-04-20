"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Hello", 
  "Bonjour", 
  "Ciao", 
  "Olá", 
  "やあ", 
  "Hallå", 
  "Guten tag", 
  "Hallo", 
  "नमस्ते"
];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        onComplete();
      }, 200); // give it a moment on the last word
      return;
    }

    const timeout = setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 400 : 80 // first word hangs longer, rest fast
    );

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <div className="flex items-center text-5xl md:text-6xl font-medium tracking-tighter">
        <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--text-primary)] mr-5 animate-pulse" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.15 }}
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
