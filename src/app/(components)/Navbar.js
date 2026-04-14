"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          KAUSTUBH <span className="text-[var(--text-dim)] font-light">PATHAK</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/resume">
            <button className="text-xs px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-widest uppercase">
              Resume
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleNavbar}
          className="md:hidden text-white p-2"
        >
          {isNavbarOpen ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavbarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/5 py-8 px-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsNavbarOpen(false)}
                  className="text-2xl font-light text-white tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/resume" onClick={() => setIsNavbarOpen(false)}>
                <span className="text-2xl font-light text-[var(--accent)] tracking-tight">Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

