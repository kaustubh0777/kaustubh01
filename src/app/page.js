"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaQuoteLeft } from "react-icons/fa";
import { SiLeetcode, SiGooglecloud, SiMicrosoftazure, SiDatabricks, SiOracle } from "react-icons/si";
import Typewriter from "./(components)/Typewriter";
import { playClickSound, playHoverSound } from "../utils/audio";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation Variants for staggering
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const experiences = [
    {
      company: "Accenture",
      role: "Software Engineer",
      period: "Jan 2025 - Present",
      points: [
        "Built an AI-driven automation platform integrating Collibra Data Quality, Accenture’s Amethyst AI agent, and Google Cloud services.",
        "Developed Python wrapper services integrating Collibra APIs and deployed using Cloud Run and API Gateway.",
        "Implemented GenAI evaluation pipelines using Geneval to assess correctness, relevance, and contextual reasoning.",
        "Designed and implemented 10+ SQL-based data quality rules and Collibra validation jobs.",
        "Built Python automation scripts integrated with Control-M, reducing manual operational effort significantly.",
        "Developed SSO authentication and automated sanity checks across multiple datasets simultaneously.",
        "Resolved failures across BigQuery queries, Kubernetes pods, and data pipelines, improving production stability.",
      ],
    },
    {
      company: "Tata Steel",
      role: "Software Engineer",
      period: "Jul 2023 - Jan 2024",
      points: [
        "Owned backend development for financial systems processing 90k+ records/day with 99.9% uptime.",
        "Led development of 15+ REST APIs with optimized caching, improving performance by 35% for 50+ stakeholders.",
        "Optimized 12+ database tables using indexing and query restructuring, reducing latency by 40%.",
        "Led SAP integration enabling real-time synchronization of 30k+ transactions/day.",
        "Resolved 20+ performance bottlenecks through profiling and refactoring, improving responsiveness by 30%.",
        "Collaborated in an Agile team of 8 engineers delivering 10+ stable production releases.",
      ],
    },
  ];

  const skills = [
    { category: "Languages", items: ["Python", "C++", "JavaScript", "TypeScript"] },
    { category: "Backend & Systems", items: ["Node.js", "Express.js", "System Design", "Distributed Systems", "Microservices"] },
    { category: "Data & Cloud", items: ["BigQuery", "Kafka", "ETL Pipelines", "Docker", "Kubernetes", "GCP", "SQL Server"] },
    { category: "AI & Modern Tech", items: ["GenAI", "LLM Evaluation", "Prompt Engineering", "GraphQL", "Next.js"] },
  ];

  const awards = [
    { title: "Visionary Award", organization: "Accenture", description: "Recognized for innovative thinking and foresight." },
    { title: "Tech Week Star", organization: "Accenture", description: "Multiple contributions during technology focused excellence week." },
    { title: "Top 10 Programmer", organization: "InterviewBit", description: "Ranked among 1,500+ university programmers." },
    { title: "Top 35 Programmer", organization: "GeeksforGeeks", description: "Ranked among 2,000+ competitive programmers." },
  ];

  const quotes = [
    { text: "If you're dreaming, make sure you dream big.", lang: "English • English" },
    { text: "यदि आप सपना देख रहे हैं, तो बड़े सपने देखें।", lang: "Hindi • हिन्दी" },
    { text: "夢を見るなら、大きく見なさい。", lang: "Japanese • 日本語" },
    { text: "Si vous rêvez, assurez-vous de rêver grand.", lang: "French • Français" },
    { text: "Si estás soñando, asegúrate de soñar en grande.", lang: "Spanish • Español" },
    { text: "Wenn du träumst, dann träume groß.", lang: "German • Deutsch" },
    { text: "Se sogni, assicurati di sognare in grande.", lang: "Italian • Italiano" },
    { text: "Если мечтаешь, мечтай о великом.", lang: "Russian • Русский" },
    { text: "如果你在梦想，一定要梦想大一些。", lang: "Chinese • 中文" },
    { text: "Se você está sonhando, certifique-se de sonhar grande.", lang: "Portuguese • Português" }
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[var(--bg-primary)] selection:bg-[var(--accent)] selection:text-white transition-colors duration-300">
      {/* Background Soft Pattern Elements with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
      >
        <div className="hidden md:block absolute -top-20 -right-20 w-[300px] h-[300px] md:-top-40 md:-right-40 md:w-[600px] md:h-[600px] bg-[var(--accent)]/10 rounded-full blur-[60px] md:blur-[120px] opacity-20 will-change-transform" />
        <div className="hidden md:block absolute top-[40%] -left-20 w-[250px] h-[250px] md:-left-40 md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[120px] opacity-20 will-change-transform" />
      </motion.div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-8 relative z-10 overflow-hidden">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10 max-w-5xl"
        >
          <motion.span 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-8 block"
          >
            Based in India • Working Globally
          </motion.span>
          <motion.h1 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="text-6xl sm:text-7xl md:text-[8rem] font-black tracking-tighter mb-4 leading-none text-[var(--text-primary)] glass-shimmer"
          >
            KAUSTUBH <br className="md:hidden" />PATHAK
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="h-10 md:h-12 mt-6 text-xl md:text-3xl text-[var(--text-secondary)] font-medium tracking-tight"
          >
            <Typewriter />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/projects" onClick={playClickSound} onMouseEnter={playHoverSound} className="btn-premium w-full sm:w-auto text-center py-4">
              Explore My Work
            </Link>
            <Link href="/contact" onClick={playClickSound} onMouseEnter={playHoverSound} className="btn-outline w-full sm:w-auto text-center py-4">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.5, height: 64 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center origin-top overflow-hidden"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--text-dim)] to-transparent" />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-8 relative z-10 overflow-hidden bg-[var(--bg-primary)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUpItem}
            className="mb-12 flex justify-center"
          >
            <FaQuoteLeft size={50} className="text-[var(--accent)] opacity-20" />
          </motion.div>
          
          <div className="min-h-[250px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-tight glass-shimmer italic px-4">
                  &quot;{quotes[quoteIndex].text}&quot;
                </h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] mt-12 font-bold opacity-60"
                >
                  {quotes[quoteIndex].lang}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mt-20"
          />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-8 py-32 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-bold mb-6">
                Career Path
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)] mb-8 leading-tight glass-shimmer">
                Engineering at Scale.
              </h3>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-medium">
                Designing scalable systems and pioneering GenAI solutions at an enterprise level.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 space-y-12 relative"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItem}
                className="premium-card group"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--text-dim)] mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xl font-semibold text-[var(--text-secondary)] mb-8 pb-8 border-b border-[var(--border-color)]">
                  {exp.role}
                </p>
                <ul className="space-y-5">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-[var(--text-secondary)] text-base font-medium leading-relaxed flex items-start">
                      <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--text-dim)] group-hover:bg-[var(--accent)] mr-5 shrink-0 transition-colors duration-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)] py-32 px-8 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-bold mb-6">
                Technical Stack
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)] glass-shimmer">
                Tools of the Trade.
              </h3>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
          >
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUpItem}
                className="premium-card group"
              >
                <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, iIdx) => (
                    <span 
                      key={iIdx} 
                      className="text-md font-medium text-[var(--text-primary)] py-2 px-6 bg-[var(--bg-primary)] rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent)]/30 transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 z-10 relative">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-bold mb-4">Recognitions</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tighter glass-shimmer">Awards & Impact</h3>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUpItem}
              className="premium-card flex flex-col justify-center text-center items-center group"
            >
              <h4 className="text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-bold mb-6">
                {award.organization}
              </h4>
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">{award.title}</h3>
              <p className="text-md text-[var(--text-secondary)] font-medium leading-relaxed max-w-sm">
                {award.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certifications Ecosystem */}
      <section className="border-t border-[var(--border-color)] py-32 z-10 relative bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-bold mb-16 text-center">
            Cloud & Ecosystem
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          >
            {[
              { title: "Associate Cloud Engineer", org: "Google Cloud", icon: <SiGooglecloud size={28} /> },
              { title: "Azure Data Scientist", org: "Microsoft", icon: <SiMicrosoftazure size={28} /> },
              { title: "Data Engineer Associate", org: "Databricks", icon: <SiDatabricks size={28} /> },
              { title: "Generative AI Professional", org: "Oracle Cloud", icon: <SiOracle size={28} /> },
              { title: "Certified Network Associate", org: "Cisco (CCNA)", icon: <div className="text-sm font-bold">CCNA</div> },
              { title: "Top 10 Programmer", org: "InterviewBit", icon: <SiLeetcode size={28} /> },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItem}
                className="group flex items-center space-x-6 p-8 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors shadow-sm border border-[var(--border-color)] shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] leading-tight">{cert.title}</h4>
                  <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-2 font-bold">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-32 flex flex-wrap justify-center gap-16 text-[var(--text-dim)] opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <SiGooglecloud size={40} className="hover:text-blue-500 hover:scale-110 transition-all cursor-pointer" />
            <SiMicrosoftazure size={40} className="hover:text-blue-600 hover:scale-110 transition-all cursor-pointer" />
            <SiDatabricks size={40} className="hover:text-amber-600 hover:scale-110 transition-all cursor-pointer" />
            <SiOracle size={40} className="hover:text-red-600 hover:scale-110 transition-all cursor-pointer" />
            <SiLeetcode size={40} className="hover:text-[var(--accent)] hover:scale-110 transition-all cursor-pointer" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[var(--text-secondary)] text-xs font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Kaustubh Pathak</p>
          <div className="flex space-x-10">
            <Link href="https://github.com/kaustubh0777" target="_blank" className="hover:text-[var(--accent)] transition-colors hover-underline pb-1">GitHub</Link>
            <Link href="https://www.linkedin.com/in/kaustubhpathak11/" target="_blank" className="hover:text-[var(--accent)] transition-colors hover-underline pb-1">LinkedIn</Link>
            <Link href="https://twitter.com/thisiskaustubh1" target="_blank" className="hover:text-[var(--accent)] transition-colors hover-underline pb-1">Twitter</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
