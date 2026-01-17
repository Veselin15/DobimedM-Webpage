"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Начало", href: "#home" },
  { name: "За нас", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Как работим", href: "#process" },
  { name: "Партньори", href: "#partners" },
  { name: "Лицензи", href: "#license" },
  { name: "Галерия", href: "#gallery" },
  { name: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        setActiveSection("contact");
        return;
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md shadow-md py-2 border-b border-slate-800" // Тъмен фон и рамка при скрол
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* --- ЛОГО --- */}
          <a href="#home" className="flex flex-col items-start group">
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wider text-white leading-none"> {/* Бял текст */}
              Добимед М ООД
            </span>
            <svg
                className="w-full h-5 sm:h-6 text-blue-500 mt-0.5" // По-светло синьо
                viewBox="0 0 220 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 12.5 H125 L130 4 L135 21 L140 12.5 L147 8 L154 12.5 H220"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:animate-pulse origin-left transition-all duration-300"
                />
            </svg>
          </a>

          {/* DESKTOP МЕНЮ */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href.substring(1))}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive ? "text-blue-400" : "text-slate-300 hover:text-white" // Светли цветове за линковете
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="tel:+359888123456"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Обадете се
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* МОБИЛНО МЕНЮ (Тъмно) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:bg-slate-800 rounded-full"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-6 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href.substring(1))}
                  className={`font-medium transition-colors ${
                     activeSection === link.href.substring(1) ? "text-blue-400" : "text-slate-200"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+359888123456"
                className="mt-4 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-xl"
              >
                <Phone size={20} />
                Обадете се
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}