"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// 1. Обновен списък със снимки
const images = [
  { src: "/images/workshop-1.jpg", alt: "Работни места", category: "Сервизна база" },
  { src: "/images/machines.jpg", alt: "Фина механика (Струг)", category: "Оборудване" },
  { src: "/images/machines-2.jpg", alt: "Детайлна механика", category: "Оборудване" },
  { src: "/images/building.jpg", alt: "Централен офис", category: "Локация" },
  { src: "/images/building-2.jpg", alt: "Сграда външен изглед", category: "Локация" },
  { src: "/images/workshop-2.jpg", alt: "Диагностична апаратура", category: "Сервиз" },
  { src: "/images/workshop-3.jpg", alt: "Електронни компоненти", category: "Техника" },
];

export default function Gallery() {
  // Използваме индекс (число) вместо URL, за да можем да правим Напред/Назад
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Състояние за зуум
  const [isZoomed, setIsZoomed] = useState(false);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
  }, []);

  // Функции за навигация
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(false); // Ресетваме зуума при смяна
    setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(false); // Ресетваме зуума при смяна
    setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  };

  // Функция за зуум при клик
  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed((prev) => !prev);
  };

  // Текущата снимка, ако има избрана
  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section className="py-20 bg-slate-900 text-white select-none" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Материална База</h2>

        {/* --- Решетка с миниатюри --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              layoutId={`img-container-${index}`}
              onClick={() => setSelectedIndex(index)}
              className="relative h-48 md:h-64 bg-slate-800 rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-slate-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                layoutId={`img-${index}`}
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full group-hover:opacity-90 transition duration-300"
              />
              {/* Текст върху снимката */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition duration-300 hidden md:block">
                <p className="text-sm font-medium text-white truncate">{img.alt}</p>
                <p className="text-xs text-slate-300">{img.category}</p>
              </div>
               {/* Икона за зуум на мобилни */}
               <div className="absolute top-2 right-2 bg-black/30 p-1 rounded-full md:hidden opacity-70">
                  <ZoomIn size={16} />
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Прозорец за цял екран (Lightbox) --- */}
      <AnimatePresence>
        {selectedIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >

            {/* Бутон за затваряне */}
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-50 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition hover:bg-white/20">
              <X size={32} />
            </button>

            {/* Стрелка Наляво */}
            <button
                onClick={showPrev}
                className="absolute left-4 z-50 p-3 text-white/70 hover:text-white bg-white/10 rounded-full transition hover:bg-white/20 hidden md:block"
            >
                <ChevronLeft size={40} />
            </button>

            {/* Стрелка Надясно */}
            <button
                onClick={showNext}
                className="absolute right-4 z-50 p-3 text-white/70 hover:text-white bg-white/10 rounded-full transition hover:bg-white/20 hidden md:block"
            >
                <ChevronRight size={40} />
            </button>

            {/* --- ГОЛЯМАТА СНИМКА --- */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <motion.img
                  // Ключът е важен, за да знае React, че снимката се сменя
                  key={selectedIndex}
                  src={currentImage.src}
                  layoutId={`img-${selectedIndex}`}
                  onClick={toggleZoom}

                  // Анимация на зуум
                  animate={{
                    scale: isZoomed ? 2.5 : 1,
                    cursor: isZoomed ? "grab" : "zoom-in"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}

                  // Позволява влачене само ако е зуумната
                  drag={isZoomed}
                  dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                  dragElastic={0.2}
                  whileTap={isZoomed ? { cursor: "grabbing" } : {}}

                  className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl rounded-lg"
                />

                 {/* Инструкция за зуум (показва се само ако не е зуумнато) */}
                 {!isZoomed && (
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="absolute bottom-4 text-white/50 text-sm pointer-events-none bg-black/30 px-3 py-1 rounded-full"
                    >
                        Кликни върху снимката за увеличение
                    </motion.p>
                 )}
            </div>

             {/* Информация за снимката долу */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none md:pointer-events-auto z-50">
                <h3 className="text-xl font-bold text-white">{currentImage.alt}</h3>
                <p className="text-white/60">{selectedIndex + 1} от {images.length}</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}