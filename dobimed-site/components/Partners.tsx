import React from 'react';

const partners = [
  { name: '"МБАЛ Добрич" АД', location: 'гр. Добрич' },
  { name: '"МБАЛ Балчик" ЕООД', location: 'гр. Балчик' },
  { name: '"ДКЦ I Добрич" ЕООД', location: 'гр. Добрич' },
  { name: '"ДКЦ II Добрич" ЕООД', location: 'гр. Добрич' },
  { name: '"МЦ I Г. Тошево" ЕООД', location: 'гр. Генерал Тошево' },
  { name: '"МЦ Вива Феникс"', location: 'гр. Добрич' },
  { name: '"МЦ Добрич" ЕООД', location: 'гр. Добрич' },
  { name: '"ЦПЗ д-р П. Станчев" ЕООД', location: 'гр. Добрич' },
  { name: '"ЦКОДУХЗ"', location: 'гр. Добрич' },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Нашите Партньори
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Гордеем се с дългогодишните си договори и партньорства.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-slate-950 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl border border-slate-800 group"
            >
              <div className="px-6 py-6 border-l-4 border-blue-600 group-hover:border-blue-500">
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </h3>
                <div className="flex items-center text-sm text-slate-500">
                  <span className="mr-2">📍</span>
                  {partner.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}