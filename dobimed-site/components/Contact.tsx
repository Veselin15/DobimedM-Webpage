import React from "react";
import {MapPin, Phone, Mail, Clock} from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Свържете се с нас
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Намерете ни на място или се обадете за консултация.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* ЛЯВА ЧАСТ - ИНФОРМАЦИЯ */}
                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="space-y-8">

                            {/* Адрес */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                        <MapPin size={24}/>
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-medium text-gray-900">Адрес</h3>
                                    <p className="mt-2 text-base text-gray-600">
                                        гр. Добрич <br/>
                                        ул. "Панайот Хитов" № 24
                                    </p>
                                </div>
                            </div>

                            {/* Телефон */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                        <Phone size={24}/>
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                                    <p className="mt-2 text-base text-gray-600">
                                        <a href="tel:+359888123456" className="hover:text-blue-600 transition">
                                            +359 888 881 200
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-500">(Управител: Веселин Стоянов)</p>
                                </div>
                            </div>

                            {/* Имейл */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                        <Mail size={24}/>
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-medium text-gray-900">Имейл</h3>
                                    <p className="mt-2 text-base text-gray-600">
                                        <a href="mailto:office@dobimed.com" className="hover:text-blue-600 transition">
                                            dobimed_m@abv.bg
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Работно време */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                        <Clock size={24}/>
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-medium text-gray-900">Работно време</h3>
                                    <p className="mt-2 text-base text-gray-600">
                                        Понеделник - Петък: 08:30 - 17:00 <br/>
                                        Събота и Неделя: Почивен ден
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ДЯСНА ЧАСТ - КАРТА */}
                    <div
                        className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
                        <iframe
                            // Използваме координатите в параметъра q=
                            src="https://maps.google.com/maps?q=43.561435,27.818232&hl=bg&z=16&output=embed"
                            width="100%"
                            height="100%"
                            style={{border: 0, minHeight: "400px"}}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                            title="Локация на Добимед М ООД"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}