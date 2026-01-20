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
                className="absolute left-0 w-[170%] h-auto pointer-events-none z-0"
                style={{
                    top: '0.2em',
                    color: logoColor,
                    left: '-15%',
                }}
                viewBox="0 0 400 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M10 25 H278 L280 17 L285 33 L290 1 L295 25 H300"
                    stroke="currentColor"
                    strokeWidth="1" // ПРОМЯНА ТУК: Намалена дебелина от 3 на 2
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // При hover става малко по-дебела (от 2 на 3)
                    className="group-hover:stroke-[3] transition-all duration-300"
                />
            </svg>
        </div>
    );
}