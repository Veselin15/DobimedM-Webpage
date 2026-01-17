"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, Search, Wrench, FileCheck, Truck, Info } from "lucide-react";

const steps = [
  { title: "1. Заявка и Консултация", desc: "Свържете се с нас по телефон или имейл.", icon: PhoneCall },
  { title: "2. Диагностика", desc: "Апаратурата постъпва в сервиза за прецизна диагностика.", icon: Search },
  { title: "3. Професионален Ремонт", desc: "Извършваме ремонта с качествени части.", icon: Wrench },
  { title: "4. Тестове и Протокол", desc: "Задължителни контролни замервания.", icon: FileCheck },
  {
    title: "5. Връщане и Логистика",
    desc: "Изпращане от и до сервиза чрез куриер.",
    icon: Truck,
    highlight: true,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 relative" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Как работим?</h2>
          <p className="text-slate-400">Процесът е оптимизиран за бързина и яснота.</p>
        </div>

        {/* Линии */}
        <div className="absolute left-8 md:left-1/2 top-32 bottom-10 w-1 bg-slate-800 -translate-x-1/2"></div>
        <motion.div style={{ height: lineHeight }} className="absolute left-8 md:left-1/2 top-32 w-1 bg-blue-600 -translate-x-1/2 origin-top z-0"></motion.div>

        <div className="space-y-12 md:space-y-24 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">{step.desc}</p>

                  {step.highlight && (
                    <div className={`inline-flex items-center gap-2 text-xs font-semibold text-amber-200 bg-amber-900/30 px-3 py-1 rounded-full border border-amber-800/50 mt-1 ${isEven ? "flex-row-reverse" : ""}`}>
                      <Info size={14} />
                      Транспортът е за сметка на клиента
                    </div>
                  )}
                </div>

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-800 shadow-lg z-10">
                  <step.icon size={20} className="text-blue-500" />
                </div>
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}