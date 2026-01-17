"use client";

import React, { useRef } from 'react';
import { MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: '"МБАЛ Добрич" АД', location: 'гр. Добрич' },
  { name: '"МБАЛ Балчик" ЕООД', location: 'гр. Балчик' },
  { name: '"ДКЦ I Добрич" ЕООД', location: 'гр. Добрич' },
  { name: '"ДКЦ II Добрич" ЕООД', location: 'гр. Добрич' },
  { name: '"МЦ I Г. Тошево" ЕООД', location: 'гр. Генерал Тошево' },
  { name: '"МЦ Вива Феникс"', location: 'гр. Добрич' },
  { name: '"МЦ Добрич" ЕООД', location: 'гр. Добрич' },
  { name: '"ЦПЗ д-р П. Станчев" ЕООД', location: 'гр. Добрич' },
  { name: '"ЦКОДУХЗ"', location: 'гр. Добрич' },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Всяка карта се появява 0.1сек след предишната
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="partners" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Декоративен фон (светещи петна) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Заглавие */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Доверени <span className="text-blue-500">Партньори</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Гордеем се с дългогодишните си договори и успешното сътрудничество с водещи лечебни заведения.
          </motion.p>
        </div>

        {/* Решетка с карти */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }} // Леко повдигане при посочване
              className="group relative bg-slate-950/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-900/10"
            >
              <div className="flex items-start gap-4">

                {/* Икона на сграда */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                  <Building2 size={24} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Информация */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h3>

                  <div className="flex items-center text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    <MapPin size={14} className="mr-1.5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    {partner.location}
                  </div>
                </div>
              </div>

              {/* Декоративна икона в ъгъла (гарантиран партньор) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                <CheckCircle2 size={18} className="text-green-500" />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}