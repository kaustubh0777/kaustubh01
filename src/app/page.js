"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiGooglecloud, SiMicrosoftazure, SiDatabricks, SiOracle } from "react-icons/si";
import Typewriter from "./(components)/Typewriter";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] selection:bg-[var(--accent)] selection:text-black">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] mb-6 block font-medium">
            Based in India — Working Globally
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-gradient leading-[1.1]">
            KAUSTUBH PATHAK
          </h1>
          <div className="h-12">
            <Typewriter />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center justify-center space-x-6"
          >
            <Link href="/projects" className="btn-premium">
              View Work
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-widest uppercase">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-4 sticky top-32">
              Career Path
            </h2>
            <p className="text-2xl font-light text-[var(--text-secondary)] leading-relaxed">
              Engineering scalable systems and pioneering GenAI solutions at enterprise level.
            </p>
          </div>
          
          <div className="md:col-span-8 space-y-24">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-6">
                  <h3 className="text-3xl font-medium group-hover:text-[var(--accent)] transition-colors">{exp.company}</h3>
                  <span className="text-sm font-mono text-[var(--text-dim)]">{exp.period}</span>
                </div>
                <p className="text-[var(--accent)] text-xs uppercase tracking-widest mb-6 font-bold">{exp.role}</p>
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-[var(--text-secondary)] font-light leading-relaxed flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 mr-4 shrink-0 transition-transform group-hover:scale-150" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="bg-[var(--bg-secondary)] border-y border-white/5 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-8">
              Technical Stack
            </h2>
            <h3 className="text-5xl font-bold tracking-tight">Tools of the Trade</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="premium-card">
                <h4 className="text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-bold mb-6 italic">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, iIdx) => (
                    <span key={iIdx} className="text-sm font-light text-[var(--text-secondary)] py-1 px-3 bg-white/5 rounded-md border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card group"
            >
              <h4 className="text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] font-bold mb-4 italic">
                {award.organization}
              </h4>
              <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">{award.title}</h3>
              <p className="text-sm font-light text-[var(--text-dim)] leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Ecosystem */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5">
        <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-16 text-center">
          Professional Stack & Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Associate Cloud Engineer", org: "Google Cloud", icon: <SiGooglecloud size={24} /> },
            { title: "Azure Data Scientist Associate", org: "Microsoft", icon: <SiMicrosoftazure size={24} /> },
            { title: "Data Engineer Associate", org: "Databricks", icon: <SiDatabricks size={24} /> },
            { title: "Generative AI Professional", org: "Oracle Cloud", icon: <SiOracle size={24} /> },
            { title: "Certified Network Associate", org: "Cisco (CCNA)", icon: <div className="text-[10px] font-bold">CCNA</div> },
            { title: "Top 10 University Programmer", org: "InterviewBit", icon: <SiLeetcode size={24} /> },
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card group flex items-center space-x-6 p-6 border border-white/5 hover:border-[var(--accent)]/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:bg-[var(--accent)]/5 transition-all duration-500 shrink-0">
                {cert.icon}
              </div>
              <div>
                <h4 className="text-base font-medium text-white group-hover:text-[var(--accent)] transition-colors duration-500">{cert.title}</h4>
                <p className="text-xs uppercase tracking-widest text-[var(--text-dim)] mt-1 font-bold">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 text-[var(--text-dim)] opacity-20 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000">
          <SiGooglecloud size={32} />
          <SiMicrosoftazure size={32} />
          <SiDatabricks size={32} />
          <SiOracle size={32} />
          <SiLeetcode size={32} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[var(--text-dim)] text-xs font-medium tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Kaustubh Pathak</p>
          <div className="flex space-x-8">
            <Link href="https://github.com/kaustubh0777" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="https://www.linkedin.com/in/kaustubhpathak11/" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="https://twitter.com/thisiskaustubh1" target="_blank" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

