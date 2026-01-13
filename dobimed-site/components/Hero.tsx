"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
          DOBI<span className="text-blue-600">MED M</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-8 font-light">
          Професионален сервиз на медицинска и рентгенова апаратура.
          <br />
          <span className="text-blue-600 font-medium">Вашият лицензиран партньор в Добрич.</span>
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
            Свържете се с нас
          </a>
          <a href="#services" className="px-8 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-medium hover:bg-slate-50 transition shadow-sm">
            Услуги
          </a>
        </div>
      </motion.div>
    </section>
  );
}