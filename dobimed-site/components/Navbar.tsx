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
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* --- ЛОГОТО Е ТУК --- */}
          <a href="#home" className="flex flex-col items-start group">
            {/* Текстова част */}
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wider text-slate-800 leading-none">
              Добимед М ООД
            </span>

            {/* Кардиограма (SVG) */}
            <svg
                className="w-full h-5 sm:h-6 text-blue-600 mt-0.5"
                viewBox="0 0 220 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    // Този път рисува линията, пийка и края
                    d="M0 12.5 H160 L165 8 L175 20 L185  0 L195 22 L205 12.5 H220"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // Добавяме анимация при посочване
                    className="group-hover:animate-pulse origin-left transition-all duration-300"
                />
            </svg>
          </a>
          {/* --- КРАЙ НА ЛОГОТО --- */}


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
                    isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="tel:+359888123456"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Обадете се
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* МОБИЛНО МЕНЮ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-500 hover:bg-slate-100 rounded-full"
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
                     activeSection === link.href.substring(1) ? "text-blue-600" : "text-slate-800"
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