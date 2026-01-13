"use client";

import { useRef } from "react";
import { ShieldCheck, History, Hammer } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* ЛЯВА ЧАСТ - ТЕКСТ */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-slate-800 mb-2 relative inline-block">
                Традиции и <span className="text-blue-600">Швейцарско Качество</span>
                {/* Декоративна линия под заглавието */}
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Основана през <strong className="text-slate-900 font-semibold">1978 година</strong>, фирма <span className="text-blue-700 font-medium">Добимед М ООД</span> съчетава десетилетия опит с модерни технологии в поддръжката на медицинска техника.
              </p>
              <p className="bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-500 italic text-slate-700">
                "През 2006 г. нашата база е напълно обновена и модернизирана по проект на <strong>Дружество за болнично партньорство 'Шафхаузен - Добрич' (Швейцария)</strong>."
              </p>
            </motion.div>

            {/* ИКОНИ С ПРЕДИМСТВА */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: History, color: "text-blue-600", label: "От 1978 г.", desc: "Традиция" },
                { icon: ShieldCheck, color: "text-red-600", label: "Швейцарски", desc: "Стандарт" },
                { icon: Hammer, color: "text-slate-600", label: "Собствена", desc: "База" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md border border-slate-100 hover:-translate-y-1 transition duration-300">
                  <item.icon className={`${item.color} mb-3`} size={32} />
                  <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">{item.label}</span>
                  <span className="text-xs text-slate-500">{item.desc}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ДЯСНА ЧАСТ - СНИМКА (Табелата) */}
          <motion.div variants={itemVariants} className="relative group perspective-1000">
             {/* Декоративен фон зад снимката */}
             <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition duration-500"></div>

             <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition duration-500 group-hover:scale-[1.01]">
                <img
                  src="/images/swiss-plaque.jpg"
                  alt="Табела Шафхаузен Добрич"
                  className="object-cover w-full h-full"
                />

                {/* Етикет върху снимката */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <p className="font-bold text-lg">Партньорство Шафхаузен - Добрич</p>
                  <p className="text-sm text-white/80">Символ на качество и доверие</p>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}