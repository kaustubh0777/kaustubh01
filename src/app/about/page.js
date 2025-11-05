"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TbBrandCpp,
  TbBrandNextjs,
  TbSql,
} from "react-icons/tb";
import {
  FaHtml5,
  FaCss3,
  FaNode,
  FaReact,
  FaDocker,
  FaGit,
  FaJava,
  FaPython,
  FaDatabase,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import {
  IoLogoJavascript,
} from "react-icons/io";
import {
  SiExpress,
  SiLinuxserver,
  SiMongodb,
  SiSap,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTableau,
  SiGooglecloud,
  SiMicrosoftazure,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  TbBrandCpp,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  IoLogoJavascript,
  SiTypescript,
  FaReact,
  TbBrandNextjs,
  FaNode,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  TbSql,
  SiMongodb,
  FaDatabase,
  FaGit,
  FaDocker,
  SiKubernetes,
  SiGooglecloud,
  SiMicrosoftazure,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiTableau,
  SiSap,
  SiLinuxserver,
];

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-center py-12 px-6"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Kaustubh Pathak
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-light text-gray-300 max-w-2xl">
          Full Stack Software Engineer | Cloud & AI Developer | DevOps Enthusiast
        </p>
        <div className="flex space-x-5 mt-5">
          <a
            href="https://github.com/kaustubh0777"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaGithub className="w-7 h-7 text-white hover:text-yellow-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaustubhpathak11/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaLinkedin className="w-7 h-7 text-white hover:text-blue-400" />
          </a>
          <a
            href="mailto:kaustuap555@gmail.com"
            className="hover:scale-110 transition"
          >
            <FaEnvelope className="w-7 h-7 text-white hover:text-red-400" />
          </a>
        </div>
      </motion.div>

      {/* INTRODUCTION */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-8 text-center"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">
          Introduction
        </h2>
        <p className="text-lg font-light leading-relaxed text-gray-300">
          A passionate Full Stack Software Engineer 🚀 with experience designing
          and developing scalable applications, automation tools, and AI-driven
          solutions using modern frameworks like React.js, Next.js, Node.js,
          Python, and cloud platforms (Azure, GCP, Kubernetes). Dedicated to
          building efficient, user-focused systems that blend performance and
          innovation.
        </p>
      </motion.section>

      {/* TECHNICAL SKILLS */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-10"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 text-center mb-8">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-6">
          {skills.map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex justify-center items-center bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-yellow-400/50 transition"
            >
              <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WORK EXPERIENCE */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 text-center mb-10">
          Work Experience
        </h2>

        {/* Accenture */}
        <div className="bg-white/5 rounded-3xl p-6 sm:p-10 mb-8 shadow-lg backdrop-blur-md hover:shadow-yellow-400/50 transition-all">
          <h3 className="text-2xl font-bold text-green-300 text-center mb-4">
            Accenture — Software Engineer
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-center sm:text-left">
            <li>
              Engineered Python-based chatbots automating workflows and boosting
              data monitoring efficiency by 40%.
            </li>
            <li>
              Designed RESTful APIs integrated with Collibra, enhancing data
              operations and productivity by 25%.
            </li>
            <li>
              Deployed CI/CD pipelines with Kubernetes achieving 99% uptime.
            </li>
            <li>
              Built cost calculator tools cutting project expenses by 18%.
            </li>
            <li>
              Implemented Agentic AI components for automation and scalability.
            </li>
          </ul>
        </div>

        {/* Tata Steel */}
        <div className="bg-white/5 rounded-3xl p-6 sm:p-10 shadow-lg backdrop-blur-md hover:shadow-yellow-400/50 transition-all">
          <h3 className="text-2xl font-bold text-green-300 text-center mb-4">
            Tata Steel — Software Engineer
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-center sm:text-left">
            <li>
              Built SAP ABAP workflows maintaining 90k+ records with 99%
              reliability.
            </li>
            <li>
              Created analytics dashboards using React.js, Next.js, and SQL for
              150+ users.
            </li>
            <li>
              Integrated OData APIs for real-time SAP data flow.
            </li>
            <li>
              Improved data query performance by 40% with optimized pagination.
            </li>
            <li>
              Delivered backend and frontend collaboration for data analytics
              tools.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* ACHIEVEMENTS */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-10 text-center"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 mb-8">
          Achievements
        </h2>
        <ul className="text-gray-300 space-y-3 text-lg font-light">
          <li>
            🏆 TechGig Code Gladiators finalist — Rank <b>738</b> (Cognizant).
          </li>
          <li>✅ Cleared <b>TCS NQT</b>.</li>
          <li>💻 Solved <b>350+</b> LeetCode problems.</li>
          <li>⚡ InterviewBit: Top 10 in University.</li>
          <li>💡 GeeksforGeeks: Top 35 in University.</li>
          <li>☁️ Microsoft Certified: Azure Data Scientist Associate.</li>
        </ul>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-10 text-center"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 mb-8">
          Certifications
        </h2>
        <ul className="text-gray-300 space-y-3 text-lg font-light">
          <li>🎓 Cisco Certified Network Associate (CCNA)</li>
          <li>📘 Data Structures and Algorithms — UC San Diego</li>
          <li>🐙 Git and GitHub Ultimate Guide (Udemy)</li>
          <li>🤖 Machine Learning with Python — IBM</li>
          <li>🖥️ Operating Systems</li>
          <li>🌐 Computer Networks</li>
          <li>🗄️ Database Management Systems (DBMS)</li>
        </ul>
      </motion.section>

      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2025 Kaustubh Pathak | Built with Next.js 💫
      </footer>
    </div>
  );
};

export default Page;
