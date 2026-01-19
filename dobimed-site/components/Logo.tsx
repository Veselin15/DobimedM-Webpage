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
                // Намалихме ширината леко на 170% и оправихме позицията
                className="absolute left-0 w-[170%] h-auto pointer-events-none z-0"
                style={{
                    top: '0.2em',
                    color: logoColor,
                    // Намалихме изместването наляво от -23% на -15%, за да не се реже на мобилни
                    left: '-15%',
                }}
                viewBox="0 0 400 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    // Леко скъсихме началото на линията и пийковете, за да паснат на новото позициониране
                    d="M10 25 H280 L290 1 L300 33 L310 15 L320 25 H360"
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