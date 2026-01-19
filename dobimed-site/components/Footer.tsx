import Link from 'next/link';
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Колона 1: Лого и описание */}
          <div className="col-span-1">
            <Link href="#home" className="inline-block mb-4">
               {/* Тук вече използваме новия Logo компонент */}
               <Logo className="text-2xl md:text-3xl text-white" />
            </Link>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Вашият надежден партньор в поддръжката и сервиза на медицинска апаратура с над 45 години опит.
            </p>
          </div>

          {/* Колона 2: Навигация */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">За нас</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Услуги</a></li>
              <li><a href="#partners" className="hover:text-blue-400 transition">Партньори</a></li>
              <li><a href="#license" className="hover:text-blue-400 transition">Лицензи</a></li>
            </ul>
          </div>

          {/* Колона 3: Допълнителна информация */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Политика за поверителност</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Общи условия</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Бисквитки (Cookies)</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Добимед М ООД. Всички права запазени.</p>
          <p className="mt-2 md:mt-0">
            Изработено с внимание към детайла.
          </p>
        </div>
      </div>
    </footer>
  );
}