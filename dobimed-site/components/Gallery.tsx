export default function Gallery() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Материална База</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Тук ще сложим снимките. За момента слагам placeholders */}
            <div className="h-64 bg-slate-800 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">Работни места</div>
                 <img src="/images/workshop-3.jpg" className="object-cover w-full h-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="h-64 bg-slate-800 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">Фина механика</div>
                  <img src="/images/machines.JPG" className="object-cover w-full h-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="h-64 bg-slate-800 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">Сграда</div>
                  <img src="/images/building.jpg" className="object-cover w-full h-full group-hover:scale-110 transition duration-500" />
            </div>
        </div>
      </div>
    </section>
  );
}