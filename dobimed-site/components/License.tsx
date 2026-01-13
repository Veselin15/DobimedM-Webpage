export default function License() {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Декоративен елемент */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl font-semibold mb-8 uppercase tracking-wider text-blue-200 border-b border-blue-800 pb-4 inline-block">
          Удостоверение и Лицензи
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed font-light">
          "Фирмата притежава удостоверение за регистрация от <strong className="text-white font-bold">Агенцията за ядрено регулиране</strong> за работа с източници на йонизиращи лъчения."
        </p>
        <p className="mt-6 text-blue-100 text-lg">
          Техническо обслужване, монтаж, демонтаж и ремонт на медицинска рентгенова апаратура за диагностика.
        </p>
        <div className="mt-8 inline-block px-4 py-2 bg-blue-800/50 rounded-lg text-sm text-blue-300">
          В съответствие с Наредбата за радиационна защита
        </div>
      </div>
    </section>
  );
}