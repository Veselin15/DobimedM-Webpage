"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Начало", href: "#home" },
  { name: "За нас", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Как работим", href: "#process" },
  { name: "Партньори", href: "#partners" }, // Добавихме секцията тук
  { name: "Лицензи", href: "#license" },
  { name: "Галерия", href: "#gallery" },
  { name: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Функция за ръчно задаване на активна секция при клик
  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Затваря мобилното меню ако е отворено
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // 1. Проверка за дъното на страницата (Контакти)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        setActiveSection("contact");
        return;
      }

      // 2. Стандартна логика
      const sections = navLinks.map(link => link.href.substring(1));

      // НАМАЛИХМЕ отместването на 120px (приблизително височината на хедъра + малко аванс)
      // Това помага подчертаването да стои по-дълго върху правилната секция
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Проверяваме дали текущата позиция попада в границите на секцията
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Извикваме веднъж, за да зареди правилното състояние при рефреш
    handleScroll();

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

          <a href="#home" className="text-2xl font-bold text-slate-800 tracking-tight">
            DOBI<span className="text-blue-600">MED M</span>
          </a>

          {/* DESKTOP МЕНЮ */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
                  {/* Анимирана линия */}
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
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition"
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
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden"
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