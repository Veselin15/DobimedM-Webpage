"use client";

import { useRef } from "react";
import { Stethoscope, Cpu, Radio, Wrench } from "lucide-react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Рентгенова Апаратура",
    desc: "Лицензиран сервиз от АЯР. Монтаж, демонтаж, ремонт и протоколи.",
    icon: Radio,
    color: "text-blue-600",
    bg: "bg-blue-50",
    hoverBorder: "group-hover:border-blue-200"
  },
  {
    title: "Медицинска Техника",
    desc: "Пълен сервиз и поддръжка на апаратура за болници и кабинети.",
    icon: Stethoscope,
    color: "text-green-600",
    bg: "bg-green-50",
    hoverBorder: "group-hover:border-green-200"
  },
  {
    title: "Електроника",
    desc: "Прецизна диагностика и компонентен ремонт на електронни платки.",
    icon: Cpu,
    color: "text-purple-600",
    bg: "bg-purple-50",
    hoverBorder: "group-hover:border-purple-200"
  },
  {
    title: "Фина Механика",
    desc: "Изработка и възстановяване на механични детайли (струговане, фрезоване).",
    icon: Wrench,
    color: "text-orange-600",
    bg: "bg-orange-50",
    hoverBorder: "group-hover:border-orange-200"
  },
];

export default function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Декоративни елементи във фона (за да не е скучно бяло) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        {/* Заглавие */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Дейности и Експертиза
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Предлагаме комплексни технически решения с безкомпромисно качество.
          </motion.p>
        </motion.div>

        {/* Карти с услуги */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((s, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${s.hoverBorder}`}
            >
              {/* Икона с цветен фон */}
              <div className={`mb-6 p-4 rounded-xl w-fit ${s.bg} ${s.color} group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Текст */}
              <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}