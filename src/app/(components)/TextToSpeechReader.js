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
      // Pre-fetch voices in the background immediately so they are available when the user clicks
      window.speechSynthesis.getVoices();
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

    const voices = window.speechSynthesis.getVoices();
    
    // 1. Broadly fetch English or Indian voices
    const targetVoices = voices.filter(v => v.lang.includes("en-IN") || v.lang.includes("en_IN") || v.lang.includes("en-GB") || v.lang.includes("en-US"));
    
    // 2. Search for high-quality 'Premium', 'Google', 'Siri', or specific human voices
    const premiumVoice = targetVoices.find(v => 
      (v.lang.includes("IN") && (v.name.includes("Premium") || v.name.includes("Rishi") || v.name.includes("Veena"))) ||
      v.name.includes("Google UK English Female") || 
      v.name.includes("Google US English") ||
      v.name.includes("Siri") ||
      v.name.includes("Natural") ||
      v.name.includes("Samantha")
    );
    
    if (premiumVoice) {
      utterance.voice = premiumVoice;
    } else if (targetVoices.length > 0) {
      // Prioritize Indian English fallback if premium not found
      const indianFallback = targetVoices.find(v => v.lang.includes("IN"));
      utterance.voice = indianFallback || targetVoices[0];
    } 

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // CRITICAL for Mobile iOS/Android: We MUST call speak() synchronously inside the click handler stack.
    // If we wait for an async onvoiceschanged listener on click, the mobile OS will block the audio playback.
    window.speechSynthesis.speak(utterance);
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
