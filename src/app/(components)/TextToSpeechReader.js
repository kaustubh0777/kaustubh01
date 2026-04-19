"use client";

import React, { useState, useEffect } from "react";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { playClickSound, playHoverSound } from "../../utils/audio";

const TextToSpeechReader = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSupported(true);
      // Cancel any ongoing speech on mount/unmount to avoid ghost talking
      window.speechSynthesis.cancel();
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleSpeech = () => {
    playClickSound();
    
    if (!supported) {
      alert("Text-to-Speech is not supported in your browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);

    // Grab all readable text from the main document (avoiding navbars/footers)
    const elements = document.querySelectorAll("main h1, main h2, main h3, main p, main li");
    
    // Fallback if main structure is different
    let textsToRead = Array.from(elements).map(el => el.innerText).filter(text => text.trim().length > 0);
    
    if (textsToRead.length === 0) {
      textsToRead = [document.body.innerText];
    }
    
    const combinedText = textsToRead.join(". ");
    
    const utterance = new SpeechSynthesisUtterance(combinedText);
    utterance.lang = "en-IN"; // Prefer Indian English
    utterance.rate = 0.95; // Slightly slower pacing makes AI sound much more human
    utterance.pitch = 1.0;

    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      
      // 1. Filter for Indian English voices
      const indianVoices = voices.filter(v => v.lang.includes("en-IN") || v.lang.includes("en_IN"));
      
      // 2. Search for high-quality 'Premium' or 'Natural' markers
      const premiumIndian = indianVoices.find(v => 
        v.name.includes("Premium") || 
        v.name.includes("Google") || 
        v.name.includes("Natural") || 
        v.name.includes("Rishi") || 
        v.name.includes("Veena")
      );
      
      if (premiumIndian) {
        utterance.voice = premiumIndian;
      } else if (indianVoices.length > 0) {
        utterance.voice = indianVoices[0]; // Standard Indian Voice Fallback
      } 
      // If no Indian voices exist at all, the OS will automatically fallback to its default

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    };

    // Browsers often load voices asynchronously on first request
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
    } else {
      setVoiceAndSpeak();
    }
  };

  if (!supported) return null;

  return (
    <button
      onClick={toggleSpeech}
      onMouseEnter={playHoverSound}
      className="p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:scale-110 transition-transform duration-300 ml-3"
      aria-label="Text to Speech Reader"
    >
      {isSpeaking ? <HiVolumeUp size={20} className="premium-icon animate-pulse text-[var(--accent)]" /> : <HiVolumeOff size={20} className="premium-icon" />}
    </button>
  );
};

export default TextToSpeechReader;
