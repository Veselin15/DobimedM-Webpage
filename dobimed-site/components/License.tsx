"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, FileCheck } from "lucide-react";

export default function License() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="license" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Декоративен фон */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

        {/* Заглавие и Текст */}
        <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider text-blue-200 border-b border-blue-800 pb-4 inline-block">
          Удостоверение и Лицензи
        </h2>

        <p className="text-xl md:text-2xl leading-relaxed font-light mb-8">
          "Фирмата притежава удостоверение за регистрация от <strong className="text-white font-bold">Агенцията за ядрено регулиране</strong> за работа с източници на йонизиращи лъчения."
        </p>

        {/* --- ПРЕГЛЕД НА ЛИЦЕНЗА (Поправен: Без размазване) --- */}
        <motion.div
          className="inline-block relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(true)}
        >
            {/* Рамка/Контейнер за лиценза */}




 <div className="bg-white p-3 rounded-lg shadow-2xl rotate-1 group-hover:rotate-0 transition duration-300 max-w-xs mx-auto">
                <div className="relative overflow-hidden rounded border border-slate-200">
                    {/* ТУК Е СНИМКАТА НА ЛИЦЕНЗА */}
                    {/* Увери се, че файлът се казва license.jpg в папката public/images */}
                    <img
                        src="/images/license.jpg"
                        alt="Лиценз АЯР"
                        className="w-full h-auto object-cover group-hover:blur-0 transition duration-500"
                    />

                    {/* Слой с икона при хувър */}
                    <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                            <ZoomIn size={32} />
                        </div>
                    </div>
                </div>
                <p className="text-slate-800 font-bold mt-2 text-sm flex items-center justify-center gap-2">
                    <FileCheck size={16} className="text-green-600" />
                    Виж оригинала
                </p>
            </div>
        </motion.div>

        <p className="mt-12 text-blue-100 text-lg">
          Техническо обслужване, монтаж, демонтаж и ремонт на медицинска рентгенова апаратура за диагностика.
        </p>

        {/* ТУК Е ПРОМЯНАТА: По-контрастен фон и бял текст */}
        <div className="mt-6 inline-block px-6 py-3 bg-black/30 backdrop-blur-sm rounded-lg text-sm text-white border border-blue-400/30 shadow-sm">
          В съответствие с Наредбата за радиационна защита
        </div>
      </div>

      {/* --- МОДАЛЕН ПРОЗОРЕЦ (LIGHTBOX) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            {/* Бутон за затваряне */}
            <button className="absolute top-6 right-6 text-white/80 hover:text-white p-2 bg-white/10 rounded-full transition">
              <X size={32} />
            </button>

            {/* Голямата снимка */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src="/images/license.jpg"
              alt="Лиценз Добимед"
              className="max-w-full max-h-[90vh] rounded shadow-2xl bg-white object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}