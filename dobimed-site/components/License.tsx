"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ShieldCheck, Award, FileText } from "lucide-react";

export default function License() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="license" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">

      {/* --- ДЕКОРАТИВЕН ФОН --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">

        {/* --- ЗАГЛАВИЕ --- */}
        <div className="flex flex-col items-center mb-16">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="p-4 bg-blue-500/10 rounded-full mb-6 ring-1 ring-blue-500/30"
            >
                <Award size={40} className="text-blue-500" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Лицензи и <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Сертификати</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              "Фирмата притежава удостоверение за регистрация от <strong className="text-white font-semibold">Агенцията за ядрено регулиране (АЯР)</strong> за работа с източници на йонизиращи лъчения."
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* --- ЛЯВА ЧАСТ: ЛИЦЕНЗЪТ (КАРТА) --- */}
            <div className="flex justify-center lg:justify-end">
                <motion.div
                  className="relative group cursor-zoom-in perspective-1000"
                  whileHover={{ y: -5, rotateX: 2 }}
                  onClick={() => setIsOpen(true)}
                >
                    {/* Сияние зад картата */}
                    <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Рамка на документа */}
                    <div className="relative bg-slate-900 p-3 rounded-2xl border border-slate-700 shadow-2xl group-hover:border-blue-500/50 transition-all duration-300 w-full max-w-sm">

                        {/* Контейнер за снимката */}
                        <div className="relative overflow-hidden rounded-xl bg-slate-800 border border-slate-600 aspect-[3/4]">
                            <img
                                src="/images/license.jpg"
                                alt="Лиценз АЯР"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                            />

                            {/* Overlay при hover */}
                            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="p-3 bg-blue-600 rounded-full text-white shadow-lg mb-2 transform scale-90 group-hover:scale-100 transition-transform">
                                    <ZoomIn size={28} />
                                </div>
                                <span className="text-white font-medium tracking-wide">Преглед на оригинала</span>
                            </div>
                        </div>

                        {/* Долна част на картата */}
                        <div className="mt-3 flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="bg-green-500/10 p-1 rounded-full">
                                    <ShieldCheck size={16} className="text-green-500" />
                                </div>
                                <span className="text-slate-300 text-sm font-semibold">Валиден статус</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- ДЯСНА ЧАСТ: ИНФОРМАЦИЯ --- */}
            <div className="text-left space-y-6">

                {/* Инфо Карта 1 */}
                <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                            <FileText size={24} className="text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Обхват на дейност</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Извършваме специализирано техническо обслужване, монтаж, демонтаж и ремонт на медицинска рентгенова апаратура за диагностика.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Инфо Карта 2 */}
                <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-green-500/30 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                            <ShieldCheck size={24} className="text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Законово съответствие</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Дейността ни е в пълно съответствие с Наредбата за радиационна защита и изискванията на националното законодателство.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
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
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition hover:rotate-90 duration-300">
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              src="/images/license.jpg"
              alt="Лиценз Добимед Голям"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain border border-slate-700 bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}