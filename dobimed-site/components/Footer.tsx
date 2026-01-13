import { MapPin, Mail, Truck, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">

        {/* Контакти */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">DOBIMED</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-500 shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">Адрес:</p>
                <p>гр. Добрич, ул. „Панайот Хитов“ № 24</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-blue-500 shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">Email:</p>
                <a href="mailto:dobimedm@abv.bg" className="hover:text-blue-400 transition">dobimedm@abv.bg</a>
                <br />
                <a href="mailto:dobimedm@dobrich.net" className="hover:text-blue-400 transition">dobimedm@dobrich.net</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Truck className="text-blue-500 shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">Логистика:</p>
                <p>Работим с куриери за цялата страна.</p>
                <p className="text-xs text-slate-500 mt-1">(Транспортът е за сметка на клиента)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Управител */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <p className="text-xs uppercase tracking-widest text-blue-500 mb-3 font-semibold">Управител</p>
          <p className="text-2xl text-white font-medium mb-1">Веселин Георгиев Стоянов</p>
          <p className="text-slate-500 mb-6">Експерт медицинска техника</p>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-sm">
              Гарантираме високо качество на ремонтите и пълна техническа изправност на вашата апаратура.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-slate-900 text-sm text-slate-600">
        © {new Date().getFullYear()} Dobimed М OOD. Всички права запазени.
      </div>
    </footer>
  );
}