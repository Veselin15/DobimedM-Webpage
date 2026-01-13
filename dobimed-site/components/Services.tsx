import { Stethoscope, Cpu, Radio, Wrench } from "lucide-react"; // Добавихме Wrench

const services = [
  {
    title: "Рентгенова Апаратура",
    desc: "Лицензиран сервиз от АЯР. Монтаж, демонтаж, ремонт и протоколи.",
    icon: <Radio size={32} className="text-blue-500" />,
  },
  {
    title: "Медицинска Техника",
    desc: "Пълен сервиз и поддръжка на апаратура за болници и кабинети.",
    icon: <Stethoscope size={32} className="text-green-500" />,
  },
  {
    title: "Електроника",
    desc: "Прецизна диагностика и компонентен ремонт на електронни платки.",
    icon: <Cpu size={32} className="text-purple-500" />,
  },
  {
    title: "Фина Механика", // НОВО
    desc: "Изработка и възстановяване на механични детайли (струговане, фрезоване).",
    icon: <Wrench size={32} className="text-orange-500" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Дейности и Експертиза</h2>
        <div className="grid md:grid-cols-4 gap-6"> {/* Променихме на 4 колони */}
          {services.map((s, index) => (
            <div key={index} className="p-6 border border-slate-100 rounded-2xl hover:shadow-xl transition duration-300 bg-slate-50 hover:-translate-y-1">
              <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-slate-800">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}