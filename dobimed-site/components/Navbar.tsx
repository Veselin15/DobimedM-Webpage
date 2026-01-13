"use client";

import { useState, useEffect } from "react";
import {Menu, X, Phone, ZoomIn, FileCheck} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Начало", href: "#home" },
  { name: "За нас", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Лицензи", href: "#license" },
  { name: "Галерия", href: "#gallery" },
  { name: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ефект за промяна на фона при скролване
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* ЛОГО */}
          <a href="#home" className="text-2xl font-bold text-slate-800 tracking-tight">
            DOBI<span className="text-blue-600">MED M</span>
          </a>

          {/* DESKTOP МЕНЮ */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+359888123456" // Смени с реалния телефон
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/20"
            >
              <Phone size={16} />
              Обадете се
            </a>
          </div>

          {/* МОБИЛЕН БУТОН */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* МОБИЛНО МЕНЮ (Full Screen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-500 hover:bg-slate-100 rounded-full"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8 text-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+359888123456"
                className="mt-4 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-xl"
              >
                <Phone size={20} />
                Обадете се сега
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


