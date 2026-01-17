"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, Search, Wrench, FileCheck, Truck, Info, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "Заявка и Консултация",
    desc: "Свържете се с нас по телефон или имейл. Обсъждаме проблема и организираме транспорта.",
    icon: PhoneCall
  },
  {
    title: "Диагностика",
    desc: "Апаратурата постъпва в сервиза за прецизна диагностика и установяване на повредата.",
    icon: Search
  },
  {
    title: "Професионален Ремонт",
    desc: "След вашето одобрение извършваме ремонта с качествени части и специализирана апаратура.",
    icon: Wrench
  },
  {
    title: "Тестове и Протокол",
    desc: "Извършваме задължителни контролни замервания и издаваме протокол за годност.",
    icon: FileCheck
  },
  {
    title: "Връщане и Логистика",
    desc: "Изпращане от и до сервиза чрез куриер.",
    icon: Truck,
    highlight: true,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">

      {/* --- ДЕКОРАТИВЕН ФОН --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl translate-x-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10" ref={containerRef}>

        {/* Заглавие */}
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-blue-500/10 text-blue-400"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Как работим?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Репрезентация на процеса в 5 прости стъпки
          </p>
        </div>

        {/* --- ВРЕМЕВА ЛИНИЯ --- */}
        {/* Сива линия (фон) */}
        <div className="absolute left-8 md:left-1/2 top-48 bottom-20 w-1 bg-slate-800 -translate-x-1/2 rounded-full"></div>

        {/* Синя линия (прогрес) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-8 md:left-1/2 top-48 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 -translate-x-1/2 origin-top z-0 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        ></motion.div>

        {/* --- СТЪПКИ --- */}
        <div className="space-y-16 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const stepNumber = index + 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
              >

                {/* 1. КАРТА СЪС СЪДЪРЖАНИЕ */}
                <div className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <div className={`group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 overflow-hidden`}>

                    {/* Декоративен номер на заден план */}
                    <span className={`absolute -top-2 text-7xl font-black text-slate-800/30 select-none z-0 transition-colors group-hover:text-slate-800/50 ${isEven ? "-right-2" : "-right-2 md:-left-2 md:right-auto"}`}>
                      0{stepNumber}
                    </span>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      {step.highlight && (
                        <div className={`inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-950/50 px-3 py-2 rounded-lg border border-amber-500/30 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <Info size={16} className="text-amber-400" />
                          <span>Транспортът е за сметка на клиента</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. ЦЕНТРАЛНА ИКОНА */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  {/* Пулсиращ ефект зад иконата */}
                  <div className="absolute w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>

                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 border-4 border-slate-800 shadow-xl z-10 group hover:border-blue-500 transition-colors duration-300">
                    <step.icon size={24} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* 3. ПРАЗНО ПРОСТРАНСТВО (За баланс) */}
                <div className="flex-1 hidden md:block"></div>

              </motion.div>
            );
          })}
        </div>

        {/* Финален завършек на линията */}
        <div className="absolute left-8 md:left-1/2 bottom-10 -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,1)]"></div>

      </div>
    </section>
  );
}