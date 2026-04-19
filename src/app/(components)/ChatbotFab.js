"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipsesOutline, IoCloseOutline } from "react-icons/io5";
import ContactAction from "./ContactAction";
import { playClickSound, playHoverSound } from "../../utils/audio";

const ChatbotFab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    playClickSound();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 right-8 z-[1000] w-[calc(100vw-64px)] max-w-sm md:max-w-md bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl shadow-2xl p-6 md:p-8 backdrop-blur-3xl overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--border-color)]">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  Let&apos;s Talk
                </h3>
                <p className="text-sm font-light text-[var(--text-dim)] mt-1">I usually respond within a few hours.</p>
              </div>
              <button
                onClick={toggleModal}
                onMouseEnter={playHoverSound}
                className="p-2 text-[var(--text-dim)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <IoCloseOutline size={24} className="premium-icon" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              <ContactAction onComplete={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleModal}
        onMouseEnter={playHoverSound}
        className="fixed bottom-8 right-8 z-[1000] w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_var(--accent)_inset] transition-shadow duration-300"
        aria-label="Open Chat Contact"
      >
        {isOpen ? <IoCloseOutline size={30} className="premium-icon" /> : <IoChatbubbleEllipsesOutline size={30} className="premium-icon" />}
      </motion.button>
    </>
  );
};

export default ChatbotFab;
