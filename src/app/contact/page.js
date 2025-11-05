"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Page = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [from_email, setFromemail] = useState("");
  const [from_name, setFromname] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          alert("✅ Message Sent Successfully!");
          setFromname("");
          setFromemail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center px-4 py-16 text-white overflow-hidden">
      {/* Glowing Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Form Card */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-gray-700/40 p-8 sm:p-10 space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-semibold text-yellow-300"
          >
            Your Name
          </label>
          <input
            name="from_name"
            type="text"
            value={from_name}
            onChange={(e) => setFromname(e.target.value)}
            id="name"
            placeholder="Kaustubh Pathak"
            className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-yellow-300"
          >
            Your Email
          </label>
          <input
            name="from_email"
            type="email"
            value={from_email}
            onChange={(e) => setFromemail(e.target.value)}
            id="email"
            placeholder="example@gmail.com"
            className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-semibold text-yellow-300"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Let me know how I can help you"
            className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-semibold text-yellow-300"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-pink-500 focus:ring-4 focus:ring-yellow-400/40 transition-all shadow-lg ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FaPaperPlane className="w-5 h-5" />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </div>
      </motion.form>

      {/* Footer */}
      <footer className="mt-10 text-gray-400 text-sm text-center">
        © 2025 Kaustubh Pathak | Built with Next.js 💫
      </footer>
    </div>
  );
};

export default Page;
