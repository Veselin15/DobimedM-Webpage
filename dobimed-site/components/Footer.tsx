"use client";

import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-light">
      <div className="max-w-7xl mx-auto px-4">

        {/* --- ОСНОВНА ЧАСТ (GRID - 3 КОЛОНИ) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* 1. БРАНД И ОПИСАНИЕ */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              ДОБИ<span className="text-blue-600">МЕД М</span> ООД
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Лицензиран сервиз за медицинска и рентгенова апаратура.
              Партньорство с Швейцария и традиции в качеството от 1978 г.
            </p>
            <div className="flex items-center gap-2 text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full w-fit text-xs font-medium border border-blue-500/20">
              <ShieldCheck size={14} />
              Лицензиран от АЯР
            </div>
          </div>

          {/* 2. КОНТАКТИ (Вече по-централно) */}
          <div>
            <h4 className="text-white font-semibold mb-6">Контакти</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
                    <MapPin size={18} />
                </div>
                <span>
                  гр. Добрич,<br />
                  ул. „Панайот Хитов“ № 24
                </span>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
                    <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:dobimedm@abv.bg" className="hover:text-white transition">dobimedm@abv.bg</a>
                  <a href="mailto:dobimedm@dobrich.net" className="hover:text-white transition">dobimedm@dobrich.net</a>
                </div>
              </li>

               <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
                    <Phone size={18} />
                </div>
                {/* Заменете с реалния номер */}
                <a href="tel:+359000000000" className="hover:text-white transition mt-1.5">
                  Попитайте за телефон
                </a>
              </li>
            </ul>
          </div>

          {/* 3. УПРАВИТЕЛ (КАРТА) */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
            <p className="text-xs uppercase tracking-widest text-blue-500 mb-3 font-bold">Управител</p>
            <h5 className="text-lg text-white font-medium mb-1">Веселин Георгиев Стоянов</h5>
            <p className="text-xs text-slate-500 mb-4">Експерт медицинска техника</p>
            <div className="h-px w-full bg-slate-800 my-4"></div>
            <p className="text-xs italic text-slate-500 leading-relaxed">
              "Гарантираме качество, бързина и професионално отношение към всеки детайл."
            </p>
          </div>

        </div>

        {/* --- COPYRIGHT --- */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {currentYear} Добимед М ООД. Всички права запазени.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-400">Поверителност</span>
            <span className="cursor-pointer hover:text-slate-400">Условия за ползване</span>
          </div>
        </div>
      </div>
    </footer>
  );
}