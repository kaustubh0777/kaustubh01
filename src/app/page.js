"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./(components)/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-4">
      {/* Heading Section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center tracking-wide"
      >
        👋 Hello Everyone
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold text-center mt-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        I’m Kaustubh Pathak
      </motion.span>

      {/* Typewriter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 text-lg md:text-2xl text-center"
      >
        <Typewriter />
      </motion.div>

      {/* Resume Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-10"
      >
        <Link href="/resume">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/30">
            Download Resume
          </button>
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center items-center space-x-6 mt-10"
      >
        <SocialIcon href="https://twitter.com/thisiskaustubh1" icon={<CiTwitter size={38} />} color="hover:text-sky-400" />
        <SocialIcon href="https://www.linkedin.com/in/kaustubhpathak11/" icon={<FaLinkedin size={35} />} color="hover:text-blue-500" />
        <SocialIcon href="https://github.com/kaustubh0777" icon={<FaGithub size={35} />} color="hover:text-gray-300" />
        <SocialIcon href="https://leetcode.com/Kaustubh_0777/" icon={<SiLeetcode size={35} />} color="hover:text-yellow-400" />
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} Kaustubh Pathak — All Rights Reserved
      </footer>
    </main>
  );
}

// ✅ Reusable Social Icon Component (no TypeScript syntax)
function SocialIcon({ href, icon, color }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`transition-transform transform hover:scale-125 ${color}`}
    >
      {icon}
    </Link>
  );
}
