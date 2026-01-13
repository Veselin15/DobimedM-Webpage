"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollEnhancements() {
  const { scrollYProgress } = useScroll();

  // Пружинна анимация за плавност на лентата и кръга
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показваме бутона чак след 300px скрол
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. ХОРИЗОНТАЛНА ЛЕНТА (НАЙ-ГОРЕ) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />

      {/* 2. БУТОН С КРЪГОВ ИНДИКАТОР */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 group flex items-center justify-center bg-white rounded-full shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* SVG КРЪГ ЗА ПРОГРЕСА */}
            <svg width="54" height="54" viewBox="0 0 54 54" className="rotate-[-90deg]">
              {/* Сив фон на кръга */}
              <circle
                cx="27"
                cy="27"
                r="24"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="transparent"
              />
              {/* Син активен кръг (пълни се) */}
              <motion.circle
                cx="27"
                cy="27"
                r="24"
                stroke="#2563eb" // Blue-600
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                style={{ pathLength: smoothProgress }}
              />
            </svg>

            {/* СТРЕЛКАТА В СРЕДАТА */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUp size={20} className="text-blue-600 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}