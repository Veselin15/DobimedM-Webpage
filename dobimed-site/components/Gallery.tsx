"use client";

import {useState, useCallback, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {X, ChevronLeft, ChevronRight, ZoomIn} from "lucide-react";

const images = [
    {src: "/images/workshop-1.jpg", alt: "Работни места", category: "Сервизна база"},
    {src: "/images/workshop-4.jpg", alt: "Работни места", category: "Сервизна база"},
    {src: "/images/machines-4.jpg", alt: "Фина механика (Струг)", category: "Оборудване"},
    {src: "/images/machines-2.jpg", alt: "Детайлна механика", category: "Оборудване"},
    {src: "/images/machines-3.jpg", alt: "Електронни уреди", category: "Техника"},
    {src: "/images/building.jpg", alt: "Централен офис", category: "Локация"},
    {src: "/images/building-2.jpg", alt: "Сграда външен изглед", category: "Локация"},
    {src: "/images/workshop-2.jpg", alt: "Диагностична апаратура", category: "Сервиз"},
    {src: "/images/workshop-3.jpg", alt: "Електронни компоненти", category: "Техника"},
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    // Ресет на зуума при затваряне
    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        setIsZoomed(false);
    }, []);

    // Навигация
    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(false);
        setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
    };

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(false);
        setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
    };

    const toggleZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed((prev) => !prev);
    };

    // Клавишна навигация (бонус)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev! - 1));
            if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev! + 1));
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, closeLightbox]);

    const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <section className="py-20 bg-slate-900 text-white select-none" id="gallery">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Материална База</h2>

                {/* --- ГАЛЕРИЯ (МИНИАТЮРИ) --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className="relative h-48 md:h-64 bg-slate-800 rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-slate-700"
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="object-cover w-full h-full group-hover:opacity-90 transition duration-300"
                            />

                            {/* Надпис при хувър (поправен) */}
                            <div
                                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end">
                                <p className="text-sm font-bold text-white">{img.alt}</p>
                                <p className="text-xs text-slate-300">{img.category}</p>
                            </div>

                            {/* Икона за зуум */}
                            <div
                                className="absolute top-2 right-2 bg-black/40 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn size={18} className="text-white"/>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- LIGHTBOX (ГОЛЯМА СНИМКА) --- */}
            <AnimatePresence>
                {selectedIndex !== null && currentImage && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                        onClick={closeLightbox} // Затваря при клик на фона
                    >

                        {/* СЛОЙ С БУТОНИ (Винаги най-отгоре) */}
                        <div className="absolute inset-0 z-[60] pointer-events-none flex flex-col justify-between p-4">
                            {/* Горен ред: Затвори */}
                            <div className="flex justify-end">
                                <button
                                    onClick={closeLightbox}
                                    className="pointer-events-auto p-2 bg-white/10 hover:bg-white/30 rounded-full text-white transition"
                                >
                                    <X size={32}/>
                                </button>
                            </div>

                            {/* Среден ред: Стрелки */}
                            <div className="flex justify-between items-center flex-1 px-2">
                                <button
                                    onClick={showPrev}
                                    className="pointer-events-auto p-3 bg-white/10 hover:bg-white/30 rounded-full text-white transition hover:scale-110"
                                >
                                    <ChevronLeft size={40}/>
                                </button>
                                <button
                                    onClick={showNext}
                                    className="pointer-events-auto p-3 bg-white/10 hover:bg-white/30 rounded-full text-white transition hover:scale-110"
                                >
                                    <ChevronRight size={40}/>
                                </button>
                            </div>

                            {/* Долен ред: Инфо (празен за баланс) */}
                            <div className="h-10"></div>
                        </div>

                        {/* СЛОЙ С ИЗОБРАЖЕНИЕТО */}
                        <div
                            className="relative z-50 w-full h-full p-4 md:p-10 flex items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Спира затварянето при клик около снимката
                        >
                            <motion.img
                                key={selectedIndex} // Важно за рестарт на анимацията при смяна
                                src={currentImage.src}
                                alt={currentImage.alt}
                                initial={{scale: 0.9, opacity: 0}}
                                animate={{
                                    scale: isZoomed ? 2.5 : 1,
                                    opacity: 1,
                                    x: 0,
                                    y: 0
                                }}
                                transition={{type: "spring", stiffness: 300, damping: 25}}

                                onClick={toggleZoom}

                                // Влачене само ако е зуумнато
                                drag={isZoomed}
                                dragConstraints={{left: -500, right: 500, top: -500, bottom: 500}}
                                dragElastic={0.1}

                                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-cursor ${isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
                            />

                            {/* Текст под снимката (показва се само ако НЕ е зуумнато) */}
                            {!isZoomed && (
                                <div
                                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-center pointer-events-none">
                                    <p className="text-white font-medium">{currentImage.alt}</p>
                                    <p className="text-xs text-white/70">{selectedIndex + 1} / {images.length}</p>
                                </div>
                            )}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}