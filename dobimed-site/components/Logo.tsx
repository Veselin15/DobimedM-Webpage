import React from 'react';

interface LogoProps {
    className?: string;
}

export default function Logo({className = ""}: LogoProps) {
    const logoColor = "#004a99";

    return (
        <div className={`relative inline-flex flex-col items-start select-none group ${className}`}>

            {/* Текст */}
            <span
                className="relative z-10 font-[900] uppercase leading-none tracking-wide whitespace-nowrap"
                style={{
                    color: logoColor,
                    fontFamily: 'Arial Black, "Helvetica Neue", Helvetica, sans-serif'
                }}
            >
        ДОБИМЕД М ООД
      </span>

            {/* Кардиограма */}
            <svg
                // Увеличихме ширината на 180%, за да изнесем чупката много по-надясно
                className="absolute left-0 w-[180%] h-auto pointer-events-none z-0"
                style={{
                    top: '0.2em',
                    color: logoColor,
                    left: '-23%',
                }}
                // Разширихме viewBox-а (400), за да побере по-дългата линия
                viewBox="0 0 400 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    // ПРОМЕНИТЕ:
                    // 1. H280: Удължихме правата линия (преди беше 225). Текстът свършва около 220, така че 280 е доста след него.
                    // 2. strokeWidth="3": Намалихме дебелината (беше 5).
                    // 3. Пийковете са преместени съответно надясно (290-320).
                    d="M0 25 H280 L290 1 L300 33 L310 15 L320 25 H340"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-[4] transition-all duration-300"
                />
            </svg>
        </div>
    );
}