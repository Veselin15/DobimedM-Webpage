"use client";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-slate-950"
    >
      {/* --- 1. ТЕХНИЧЕСКИ ФОН (GRID PATTERN - ТЪМЕН ВАРИАНТ) --- */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Декоративни петна (Blobs) - по-тъмни и наситени */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-0">

        {/* --- 3. ЗАГЛАВИЕ (ЛОГО) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // ПРОМЯНА ТУК: Увеличихме mb-8 на mb-24 (за мобилни) и md:mb-40 (за десктоп),
          // за да има място за кардиограмата, която виси надолу.
          className="mb-24 md:mb-40 flex justify-center"
        >
          <Logo className="text-5xl sm:text-6xl md:text-8xl text-white drop-shadow-2xl" />
        </motion.div>


        {/* --- 4. ПОДЗАГЛАВИЕ --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Професионален сервиз на медицинска и рентгенова апаратура.
          <br className="hidden md:block" />
          <span className="font-normal text-slate-200"> Надеждност, гарантирана от над 45 години опит.</span>
        </motion.p>

        {/* --- 5. БУТОНИ --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/25 overflow-hidden"
          >
            <Phone size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Свържете се с нас</span>
          </a>

          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-slate-300 border border-slate-700 rounded-full font-medium hover:bg-slate-800 hover:text-white hover:border-slate-600 transition"
          >
            <span>Вижте услугите</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* --- 6. СТАТИСТИКИ --- */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
            <div>
                <p className="text-3xl font-bold text-white">1978</p>
                <p className="text-xs uppercase text-slate-500 tracking-wider">Година на създаване</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-xs uppercase text-slate-500 tracking-wider">Лиценз от АЯР</p>
            </div>
            <div className="hidden md:block">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-xs uppercase text-slate-500 tracking-wider">Логистика за страната</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
}