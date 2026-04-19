"use client";

import React, { useState } from "react";
import { playClickSound, playSuccessSound } from "../../utils/audio";

const ContactAction = ({ onComplete }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [from_email, setFromemail] = useState("");
  const [from_name, setFromname] = useState("");
  const [loading, setLoading] = useState(false);

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();
    playClickSound();

    if (!WEB3FORMS_KEY) {
      alert("⚠️ Web3Forms is not configured in .env.");
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
        playSuccessSound();
        alert("✅ Message Sent Successfully! I'll get back to you shortly.");
        setFromname("");
        setFromemail("");
        setSubject("");
        setMessage("");
        if (onComplete) onComplete();
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
    <form onSubmit={sendEmail} className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-2 block font-bold">Name</label>
          <input
            name="from_name"
            type="text"
            value={from_name}
            onChange={(e) => setFromname(e.target.value)}
            className="w-full bg-[var(--bg-primary)]/50 border-b border-[var(--border-color)] p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light text-[var(--text-primary)]"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-2 block font-bold">Email</label>
          <input
            name="from_email"
            type="email"
            value={from_email}
            onChange={(e) => setFromemail(e.target.value)}
            className="w-full bg-[var(--bg-primary)]/50 border-b border-[var(--border-color)] p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light text-[var(--text-primary)]"
            placeholder="contact@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-2 block font-bold">Subject</label>
        <input
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-[var(--bg-primary)]/50 border-b border-[var(--border-color)] p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light text-[var(--text-primary)]"
          placeholder="How can I help you?"
          required
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-2 block font-bold">Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="w-full bg-[var(--bg-primary)]/50 border-b border-[var(--border-color)] p-3 focus:outline-none focus:border-[var(--accent)] transition-colors font-light resize-none text-[var(--text-primary)]"
          placeholder="Tell me about your project..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-premium py-4 font-bold tracking-[0.2em] uppercase text-sm mt-4 hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        {loading ? "Sending Message..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactAction;
