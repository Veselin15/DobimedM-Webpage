import { ShieldCheck, History, Hammer } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Текст */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Традиции и Швейцарско Качество
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Основана през **1978 година**, <span className="font-bold text-slate-800">Добимед М ООД</span> има десетилетия опит в поддръжката на медицинска техника.
              </p>
              <p>
                През 2006 г. нашата база е напълно обновена и модернизирана по проект на **Дружество за болнично партньорство "Шафхаузен - Добрич" (Швейцария)**.
              </p>
              <p>
                Това партньорство гарантира, че работим по най-високите европейски стандарти за качество, чистота и технологична обезпеченост.
              </p>
            </div>

            {/* Икони с предимства */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <History className="text-blue-600 mb-2" size={32} />
                <span className="font-bold text-slate-700 text-sm">От 1978 г.</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <ShieldCheck className="text-red-600 mb-2" size={32} />
                <span className="font-bold text-slate-700 text-sm">Швейцарски стандарт</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <Hammer className="text-slate-600 mb-2" size={32} />
                <span className="font-bold text-slate-700 text-sm">Собствена база</span>
              </div>
            </div>
          </div>

          {/* Място за снимката на табелата */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
             {/* Тук по-късно ще сложим снимката на табелата (plaque.jpg) */}
             {/* Когато качиш снимката в public папката, разкоментирай долния ред и махни горния div: */}
              <img src="/images/swiss-plaque.jpg" alt="Табела Шафхаузен Добрич" className="object-cover w-full h-full" />
          </div>

        </div>
      </div>
    </section>
  );
}