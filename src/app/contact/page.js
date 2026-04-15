"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [from_email, setFromemail] = useState("");
  const [from_name, setFromname] = useState("");
  const [loading, setLoading] = useState(false);

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      alert("⚠️ Web3Forms is not configured. Please set up your environment variables in .env and RESTART your dev server.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        alert("✅ Message Sent Successfully! I'll get back to you shortly.");
        setFromname("");
        setFromemail("");
        setSubject("");
        setMessage("");
      } else {
        setLoading(false);
        alert(`❌ Failed to send message: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("FAILED...", error);
      setLoading(false);
      alert("❌ Failed to send message. Please check your internet connection.");
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-white pt-32 pb-20 px-8 selection:bg-[var(--accent)] selection:text-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--text-dim)] font-medium mb-8 glass-text">
              Communication
            </h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 italic leading-[1.1] shimmer-text">
              Let&apos;s build <span className="text-[var(--accent)]">Something Great.</span>
            </h1>
            <p className="text-[var(--text-secondary)] font-light text-xl leading-relaxed max-w-md">
              Whether it&apos;s a new opportunity, a collaboration, or just a coffee chat — I&apos;m all ears.
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-white/5">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-2 font-bold glass-text">Email</p>
              <a href="mailto:kaustuap555@gmail.com" className="text-2xl font-light hover:text-[var(--accent)] transition-colors italic">
                kaustuap555@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-2 font-bold glass-text">socials</p>
              <div className="flex space-x-8 text-xl font-light">
                <a href="https://linkedin.com/in/kaustubhpathak11/" target="_blank" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
                <a href="https://github.com/kaustubh0777" target="_blank" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form
            onSubmit={sendEmail}
            className="premium-card"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-3 block font-bold">Name</label>
                <input
                  name="from_name"
                  type="text"
                  value={from_name}
                  onChange={(e) => setFromname(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light"
                  placeholder="Kaustubh Pathak"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-3 block font-bold">Email</label>
                <input
                  name="from_email"
                  type="email"
                  value={from_email}
                  onChange={(e) => setFromemail(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light"
                  placeholder="contact@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-3 block font-bold">Subject</label>
              <input
                name="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light"
                placeholder="How can I help you?"
                required
              />
            </div>

            <div className="mb-12">
              <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-3 block font-bold">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-premium py-4 font-bold tracking-[0.2em] uppercase text-sm shine-effect"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-40 text-center text-[var(--text-dim)] text-xs uppercase tracking-widest font-medium border-t border-white/5 pt-12 pb-8">
        © {new Date().getFullYear()} Kaustubh Pathak — Performance Driven Engineering
      </footer>
    </div>
  );
};

export default ContactPage;

