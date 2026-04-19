"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { playClickSound, playHoverSound } from "../../utils/audio";
import TextToSpeechReader from "./TextToSpeechReader";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl py-4 border-b border-[var(--border-color)] shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-[var(--text-primary)] hover:opacity-80 transition-opacity"
        >
          KAUSTUBH <span className="text-[var(--text-dim)] font-light">PATHAK</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="text-sm font-medium tracking-wide text-[var(--text-primary)] hover-underline"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/resume" onClick={playClickSound} onMouseEnter={playHoverSound}>
            <button className="text-xs px-6 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full hover:scale-105 active:scale-95 transition-transform duration-300 font-bold tracking-widest uppercase">
              Resume
            </button>
          </Link>
          
          {mounted && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  playClickSound();
                  setTheme(currentTheme === "dark" ? "light" : "dark");
                }}
                onMouseEnter={playHoverSound}
                className="p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:scale-110 transition-transform duration-300"
                aria-label="Toggle Theme"
              >
                {currentTheme === "dark" ? <IoSunnyOutline size={20} className="premium-icon text-[var(--accent)]" /> : <IoMoonOutline size={20} className="premium-icon" />}
              </button>
              <TextToSpeechReader />
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => {
                playClickSound();
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
              className="p-2 text-[var(--text-primary)]"
            >
              {currentTheme === "dark" ? <IoSunnyOutline size={24} className="premium-icon text-[var(--accent)]" /> : <IoMoonOutline size={24} className="premium-icon" />}
            </button>
          )}
          <TextToSpeechReader />
          <button
            onClick={() => {
              playClickSound();
              setIsNavbarOpen(!isNavbarOpen);
            }}
            onMouseEnter={playHoverSound}
            className="text-[var(--text-primary)] p-2"
          >
            {isNavbarOpen ? <IoCloseOutline size={28} className="premium-icon" /> : <IoMenuOutline size={28} className="premium-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavbarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] py-8 px-8 flex flex-col shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsNavbarOpen(false)}
                  className="text-3xl font-light text-[var(--text-primary)] tracking-tight hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/resume" onClick={() => setIsNavbarOpen(false)}>
                <span className="text-3xl font-bold text-[var(--accent)] tracking-tighter">Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

