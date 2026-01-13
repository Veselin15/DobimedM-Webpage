"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white"
    >
      {/* --- 1. ТЕХНИЧЕСКИ ФОН (GRID PATTERN) --- */}
      {/* Тази мрежа придава инженерния вид */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Декоративни петна (Blobs) за цвят */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-0">

        {/* --- 2. ЗНАЧКА ЗА ДОВЕРИЕ --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 shadow-sm"
        >
          <ShieldCheck size={16} />
          <span className="tracking-wide uppercase text-xs">Лицензиран партньор • Шафхаузен, Швейцария</span>
        </motion.div>

        {/* --- 3. ЗАГЛАВИЕ --- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
        >
          DOBI
          {/* Градиентен текст за MED M */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            MED M
          </span>
        </motion.h1>

        {/* --- 4. ПОДЗАГЛАВИЕ --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Професионален сервиз на медицинска и рентгенова апаратура.
          <br className="hidden md:block" />
          <span className="font-normal text-slate-800"> Надеждност, гарантирана от над 45 години опит.</span>
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
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25 overflow-hidden"
          >
            <Phone size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Свържете се с нас</span>
          </a>

          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition shadow-sm"
          >
            <span>Вижте услугите</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* --- 6. ДОПЪЛНИТЕЛНИ СТАТИСТИКИ (Най-долу) --- */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
            <div>
                <p className="text-3xl font-bold text-slate-800">1978</p>
                <p className="text-xs uppercase text-slate-500 tracking-wider">Година на създаване</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-800">100%</p>
                <p className="text-xs uppercase text-slate-500 tracking-wider">Лиценз от АЯР</p>
            </div>
            <div className="hidden md:block">
                <p className="text-3xl font-bold text-slate-800">24/7</p>
                <p className="text-xs uppercase text-slate-500 tracking-wider">Логистика за страната</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
}