"use client";

let audioCtx = null;

// Initialize audio context lazily on user interaction to bypass browser autoplay restrictions
const initAudio = () => {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playHoverSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(800, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.05);
};

export const playClickSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(300, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.1);
};

export const playSuccessSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.3);
};
