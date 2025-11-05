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
  },
  {
    title: "Hotel Booking Reservation App",
    img: "/assets/hotel.png",
    github: "https://github.com/kaustubh0777/booking_reservation",
  },
  {
    title: "MarkDown Editor",
    img: "/assets/draft.jpg",
    github: "https://github.com/kaustubh0777/Draft_Editor",
    demo: "https://draft-editor-nine.vercel.app/",
  },
  {
    title: "Face Recognition with Live Attendance",
    img: "/assets/ai.png",
    github: "https://github.com/kaustubh0777/face_recognition",
  },
  {
    title: "Todo App",
    img: "/assets/todo.avif",
    github: "https://github.com/kaustubh0777/todo_app",
    demo: "https://infallible-nightingale-2dd5fa.netlify.app/",
  },
  {
    title: "Finance Chatbot using RASA",
    img: "/assets/finance.jpg",
    github: "https://github.com/kaustubh0777/rasa_chatbot",
  },
  {
    title: "Sudoku Game",
    img: "/assets/sudoku.jpg",
    github: "https://github.com/kaustubh0777/Sudoku_Game",
  },
  {
    title: "Text Utils",
    img: "/assets/textutils.png",
    github: "https://github.com/kaustubh0777/text_utils",
    demo: "https://cute-semolina-90e681.netlify.app/",
  },
  {
    title: "Real Time Chat Application",
    img: "/assets/chaticon.png",
    github: "https://github.com/kaustubh0777/chat_application",
  },
  {
    title: "Just Wiki",
    img: "/assets/wiki.avif",
    github: "https://github.com/kaustubh0777/JustWiki",
  },
  {
    title: "News App",
    img: "/assets/news.png",
    github: "https://github.com/kaustubh0777/news_app",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-10 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent"
      >
        PROJECTS
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 border border-gray-700 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:shadow-yellow-400/30 flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h5 className="text-xl font-bold text-yellow-300 mb-3 text-center">
                  {project.title}
                </h5>

                <div className="flex justify-center gap-4 mt-auto pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 hover:from-yellow-400 hover:to-yellow-500 text-sm font-medium text-white transition-all shadow-md"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 hover:from-pink-500 hover:to-orange-400 text-sm font-medium text-white transition-all shadow-md"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <footer className="text-center text-gray-500 py-6 text-sm">
        © 2025 Kaustubh Pathak | Built with Next.js 💫
      </footer>
    </div>
  );
};

export default Page;
