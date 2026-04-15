"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[var(--bg-primary)] text-white min-h-screen selection:bg-[var(--accent)] selection:text-black pt-32 pb-20 px-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 italic leading-[1.1] shimmer-text">
            Engineering with <span className="text-[var(--accent)]">Precision.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed">
            I am Kaustubh Pathak, a Software Engineer dedicated to building systems that are as 
            efficient as they are innovative. My work sits at the intersection of 
            Scalable Backend Architecture and Generative AI.
          </p>
        </motion.div>
      </section>

      {/* Education & Values */}
      <section className="max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-12 glass-text">
              Education
            </h2>
            <div className="premium-card">
              <p className="text-[var(--accent)] font-mono text-sm mb-2">2019 — 2023</p>
              <h3 className="text-2xl font-medium mb-2">Medi-Caps University</h3>
              <p className="text-[var(--text-secondary)] font-light">B.Tech in Computer Science & Engineering</p>
              <p className="text-white font-medium mt-4 italic text-sm">CGPA: 8.49 / 10.0</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-12 glass-text">
              Technical Creed
            </h2>
            <div className="space-y-8 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                My engineering philosophy is simple: <span className="text-white">Build for scale, design for clarity.</span> I specialize in creating architectural foundations that support massive data volume while maintaining low latency and high availability.
              </p>
              <p>
                From leading backend development for high-stakes financial systems to pioneering Generative AI integration in enterprise governance, I focus on delivering <span className="text-white">measurable performance gains</span> and automated operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Experience Timeline */}
      <section className="max-w-7xl mx-auto mb-40">
        <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-20 text-center glass-text">
          Career Trajectory
        </h2>
        
        <div className="space-y-32">
          {/* Accenture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 group border-t border-white/5 pt-12">
            <div className="lg:col-span-4">
              <span className="text-sm font-mono text-[var(--accent)] mb-4 block">Jan 2025 — Present</span>
              <h3 className="text-4xl font-bold italic mb-4">Accenture</h3>
              <p className="text-xs uppercase tracking-widest text-[var(--text-dim)] font-bold">Software Engineer</p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-6">
                {[
                  "Built an AI-driven automation platform integrating Collibra Data Quality, Accenture’s Amethyst AI agent, and Google Cloud services.",
                  "Developed Python wrapper services integrating Collibra APIs and deployed using Cloud Run and API Gateway.",
                  "Implemented GenAI evaluation pipelines using Geneval to assess correctness, relevance, and contextual reasoning.",
                  "Designed and implemented 10+ SQL-based data quality rules and Collibra validation jobs ensuring reliable datasets.",
                  "Built Python automation scripts integrated with Control-M, reducing manual operational effort.",
                  "Developed SSO authentication and automated sanity checks across multiple datasets simultaneously.",
                  "Resolved failures across BigQuery queries, Kubernetes pods, and data pipelines, improving production stability."
                ].map((point, i) => (
                  <li key={i} className="text-lg text-[var(--text-secondary)] font-light leading-relaxed flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 mr-6 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tata Steel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 group border-t border-white/5 pt-12">
            <div className="lg:col-span-4">
              <span className="text-sm font-mono text-[var(--accent)] mb-4 block">Jul 2023 — Jan 2024</span>
              <h3 className="text-4xl font-bold italic mb-4">Tata Steel</h3>
              <p className="text-xs uppercase tracking-widest text-[var(--text-dim)] font-bold">Software Engineer</p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-6">
                {[
                  "Owned backend development for financial systems processing 90k+ records/day with 99.9% uptime.",
                  "Led development of 15+ REST APIs with optimized caching, improving performance by 35%.",
                  "Optimized 12+ database tables using indexing and query restructuring, reducing latency by 40%.",
                  "Led SAP integration enabling real-time synchronization of 30k+ transactions/day.",
                  "Resolved 20+ performance bottlenecks through profiling and refactoring, improving responsiveness by 30%.",
                  "Collaborated in an Agile team of 8 engineers delivering 10+ stable production releases."
                ].map((point, i) => (
                  <li key={i} className="text-lg text-[var(--text-secondary)] font-light leading-relaxed flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 mr-6 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-40 border-t border-white/5 py-12 text-center text-[var(--text-dim)] text-xs uppercase tracking-widest font-medium">
        © {new Date().getFullYear()} Kaustubh Pathak — Performance Driven Engineering
      </footer>
    </div>
  );
};

export default AboutPage;
