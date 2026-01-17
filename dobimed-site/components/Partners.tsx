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
    <section id="partners" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Нашите Партньори
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Гордеем се с дългогодишните си договори и партньорства с водещи лечебни заведения в област Добрич.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-100 group"
            >
              <div className="px-6 py-6 border-l-4 border-blue-500 group-hover:border-blue-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {partner.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
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