"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=43.561435,27.818232";

  // Данни за контакти (разбити на части за защита)
  const emailUser = "dobimed_m";
  const emailDomain = "abv.bg";
  const fullEmail = `${emailUser}@${emailDomain}`;
  const phoneNumber = "+359 888 881 200";

  // Обработчици на кликвания (скриват линковете от ботове)
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${fullEmail}`;
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`; // Премахва интервалите за набиране
  };

  const handleGmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${fullEmail}`;
    window.open(url, '_blank');
  };

  // Компонент за обфускиран (скрит/обърнат) текст
  // Ботовете виждат текста наобратно, а CSS го обръща визуално за хората
  const ObfuscatedText = ({ text, className = "" }: { text: string, className?: string }) => {
    const reversed = text.split('').reverse().join('');
    return (
      <span
        className={`select-none ${className}`}
        style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
        title="Кликнете за връзка (Копирането е забранено)"
      >
        {reversed}
      </span>
    );
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">

      {/* Декоративен фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заглавие */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Свържете се <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">с нас</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Намерете ни на място в обновената ни база или се свържете дистанционно.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* ЛЯВА ЧАСТ - ИНФОРМАЦИЯ */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-2xl"
            >
                <div className="space-y-10">

                    {/* Адрес */}
                    <div className="group flex items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                            <MapPin size={28} className="text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">Адрес и Локация</h3>
                            <p className="text-slate-400 leading-relaxed mb-3">
                                гр. Добрич, 9300 <br/>
                                ул. "Панайот Хитов" № 24
                            </p>

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20 select-none"
                            >
                                <Navigation size={16} className="mr-2" />
                                Навигирай с Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Телефон */}
                    <div className="group flex items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                            <Phone size={28} className="text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">Телефон за връзка</h3>

                            {/* ЗАЩИТЕН БУТОН: ОБАЖДАНЕ */}
                            <p className="text-slate-400 mb-1">
                                <a
                                    href="#"
                                    onClick={handlePhoneClick}
                                    className="text-xl text-white hover:text-green-400 transition-colors font-mono block w-fit cursor-pointer no-underline"
                                >
                                    <ObfuscatedText text={phoneNumber} />
                                </a>
                            </p>
                            <p className="text-sm text-slate-500 font-medium bg-slate-800/50 inline-block px-3 py-1 rounded-full mt-2 select-none">
                                Управител: Веселин Стоянов
                            </p>
                        </div>
                    </div>

                    {/* Имейл */}
                    <div className="group flex items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                            <Mail size={28} className="text-purple-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">Електронна поща</h3>

                            {/* ЗАЩИТЕН БУТОН: ПИСАНЕ НА ИМЕЙЛ */}
                            <p className="text-slate-400">
                                <a
                                    href="#"
                                    onClick={handleGmailClick}
                                    className="hover:text-purple-400 transition-colors flex items-center gap-2 text-lg mb-2 cursor-pointer w-fit"
                                >
                                    <ObfuscatedText text={fullEmail} />
                                    <ExternalLink size={16} className="opacity-50" />
                                </a>

                                {/* Опция за Gmail */}
                                <a
                                    href="#"
                                    onClick={handleGmailClick}
                                    className="text-xs text-purple-400 hover:text-purple-300 underline decoration-purple-500/30 underline-offset-4 cursor-pointer select-none"
                                >
                                    Отвори директно в Gmail
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Работно време */}
                    <div className="group flex items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                            <Clock size={28} className="text-orange-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">Работно време</h3>
                            <ul className="text-slate-400 space-y-1 select-none">
                                <li className="flex justify-between max-w-[200px]">
                                    <span>Пон - Пет:</span>
                                    <span className="text-white font-medium">08:30 - 17:00</span>
                                </li>
                                <li className="flex justify-between max-w-[200px] text-slate-500">
                                    <span>Съб - Нед:</span>
                                    <span>Почивен ден</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* ДЯСНА ЧАСТ - КАРТА */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full min-h-[500px] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative group"
            >
                {/* Етикет "Карта" */}
                <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur text-xs font-bold text-white px-3 py-1.5 rounded-lg shadow-lg border border-slate-700 pointer-events-none select-none">
                    Google Maps
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.666014494883!2d27.8160433!3d43.561435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMzJzQxLjIiTiAyN8KwNDknMDUuNiJF!5e0!3m2!1sen!2sbg!4v1634567890123!5m2!1sen!2sbg"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px", filter: "grayscale(20%) contrast(1.1)" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    title="Локация на Добимед М ООД"
                ></iframe>

                <div className="absolute inset-0 pointer-events-none border-[6px] border-slate-800/30 rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"></div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}