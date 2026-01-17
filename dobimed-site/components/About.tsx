"use client";

import {useRef} from "react";
import {History, Hammer} from "lucide-react";
import {motion, useInView} from "framer-motion";

const SwissFlagIcon = ({size = 32, className}: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#DC2626"/>
        <path d="M13 7H19V13H25V19H19V25H13V19H7V13H13V7Z" fill="white"/>
    </svg>
);

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    const containerVariants = {
        hidden: {opacity: 0},
        visible: { opacity: 1, transition: {staggerChildren: 0.2} }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    return (
        <section id="about" className="py-24 bg-slate-900 overflow-hidden border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4" ref={ref}>
                <motion.div
                    className="grid md:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* ЛЯВА ЧАСТ */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl font-bold text-white mb-2 relative inline-block">
                                Нещо повече <span className="text-blue-500">За нас</span>
                                <span className="absolute -bottom-2 left-0 w-3/3 h-1 bg-blue-500 rounded-full"></span>
                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-5 text-lg text-slate-300 leading-relaxed font-light">
                            <p>
                                Създадена през 1978 г. като специализирана сервизна структура, днес продължаваме като
                                <strong className="text-white"> Добимед М ООД</strong> (от 2004 г.)
                                предлагайки ремонти и сервиз на медицинска техника.
                            </p>
                            <p className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500 italic text-slate-400">
                                "През 2006 г. нашата база е напълно обновена и модернизирана по проект на <strong className="text-slate-200">Дружество
                                за болнично партньорство 'Шафхаузен - Добрич' (Швейцария)</strong>."
                            </p>
                        </motion.div>

                        {/* ИКОНИ */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {[
                                {icon: History, color: "text-blue-500", label: "От 1978 г.", desc: "История"},
                                {icon: SwissFlagIcon, color: "", label: "Швейцарско", desc: "Партньорство"},
                                {icon: Hammer, color: "text-slate-400", label: "Собствена", desc: "База"},
                            ].map((item, index) => (
                                <div key={index}
                                     className="flex flex-col items-center text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 hover:-translate-y-1 transition duration-300">
                                    <item.icon className={`${item.color} mb-3`} size={42}/>
                                    <span className="font-bold text-slate-200 text-sm uppercase tracking-wide">{item.label}</span>
                                    <span className="text-xs text-slate-500">{item.desc}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ДЯСНА ЧАСТ - СНИМКА */}
                    <motion.div variants={itemVariants} className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition duration-500"></div>
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 transform transition duration-500 group-hover:scale-[1.01]">
                            <img src="/images/swiss-plaque.jpg" alt="Табела" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition duration-300">
                                <p className="font-bold text-lg">Партньорство Шафхаузен - Добрич</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}