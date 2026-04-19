"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import { ReactLenis } from "@studio-freight/react-lenis";
import { AnimatePresence } from "framer-motion";

export default function AppWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrollbar while preloading
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
        {children}
      </ReactLenis>
    </>
  );
}
