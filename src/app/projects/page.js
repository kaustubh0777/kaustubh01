"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "IT Support Ticketing App",
    img: "/assets/itpr.png",
    github: "https://github.com/kaustubh0777/Ticketing_App",
    demo: "https://ticketing-app-peach.vercel.app/",
    type: "Enterprise Solution"
  },
  {
    title: "Hotel Booking Reservation App",
    img: "/assets/hotel.png",
    github: "https://github.com/kaustubh0777/booking_reservation",
    type: "Web Application"
  },
  {
    title: "MarkDown Editor",
    img: "/assets/draft.jpg",
    github: "https://github.com/kaustubh0777/Draft_Editor",
    demo: "https://draft-editor-nine.vercel.app/",
    type: "Productivity Tool"
  },
  {
    title: "Face Recognition Attendance",
    img: "/assets/ai.png",
    github: "https://github.com/kaustubh0777/face_recognition",
    type: "AI / ML"
  },
  {
    title: "Todo App",
    img: "/assets/todo.avif",
    github: "https://github.com/kaustubh0777/todo_app",
    demo: "https://infallible-nightingale-2dd5fa.netlify.app/",
    type: "Utilities"
  },
  {
    title: "Finance Chatbot (RASA)",
    img: "/assets/finance.jpg",
    github: "https://github.com/kaustubh0777/rasa_chatbot",
    type: "AI / NLP"
  },
  {
    title: "Sudoku Game",
    img: "/assets/sudoku.jpg",
    github: "https://github.com/kaustubh0777/Sudoku_Game",
    type: "Game Dev"
  },
  {
    title: "Text Utils",
    img: "/assets/textutils.png",
    github: "https://github.com/kaustubh0777/text_utils",
    demo: "https://cute-semolina-90e681.netlify.app/",
    type: "Utilities"
  },
  {
    title: "Real Time Chat App",
    img: "/assets/chaticon.png",
    github: "https://github.com/kaustubh0777/chat_application",
    type: "Communication"
  },
  {
    title: "Just Wiki",
    img: "/assets/wiki.avif",
    github: "https://github.com/kaustubh0777/JustWiki",
    type: "Web Application"
  },
  {
    title: "News App",
    img: "/assets/news.png",
    github: "https://github.com/kaustubh0777/news_app",
    type: "Web Application"
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white pt-32 pb-20 px-8 selection:bg-[var(--accent)] selection:text-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 italic leading-[1.1] shimmer-text">
              Portfolio <span className="text-[var(--accent)]">Archive.</span>
            </h1>
            <p className="max-w-xl mx-auto text-xl text-[var(--text-secondary)] font-light leading-relaxed">
              A curated selection of engineering projects, from high-performance backends to experimental AI architectures.
            </p>
          </motion.div>
        </header>
      </div>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group premium-card flex flex-col h-full bg-black border-white/5"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-xl mb-6">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent)] mb-2 italic glass-text">
                  {project.type}
                </p>
                <h3 className="text-xl font-medium mb-6 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--text-dim)] hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[var(--text-dim)] hover:text-[var(--accent)] flex items-center gap-2 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-40 text-center text-[var(--text-dim)] text-xs uppercase tracking-widest font-medium border-t border-white/5 pt-12">
        © {new Date().getFullYear()} Kaustubh Pathak — Performance Driven Engineering
      </footer>
    </div>
  );
};

export default ProjectsPage;

