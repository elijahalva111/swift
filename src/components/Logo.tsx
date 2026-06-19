import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'icon';
  className?: string;
  iconSize?: number;
  theme?: 'light' | 'dark';
}

export default function Logo({
  variant = 'horizontal',
  className = '',
  iconSize = 40,
  theme = 'light'
}: LogoProps) {
  const isDark = theme === 'dark';

  // Crisp, minimalist, professional Squeegee SVG Logo Mark
  const SvgIcon = ({ size }: { size: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        {/* Soft cyan-to-blue gradient for the cleaned glass streak */}
        <linearGradient id="clean-streak" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </linearGradient>

        {/* Dynamic bright blue to deep blue gradient for the handle */}
        <linearGradient id="handle-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>

        {/* Silver gradient for the metallic blade holder clip */}
        <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Drop shadow for visual separation */}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* 1. Dynamic light-blue swoosh representing a freshly wiped window streak */}
      <path
        d="M 15,30 C 35,22 65,22 85,30 C 80,48 60,65 50,65 C 40,65 20,48 15,30 Z"
        fill="url(#clean-streak)"
      />

      {/* Subtle sparkle accents on the "clean" side of the streak */}
      <path d="M 32,22 L 33.5,25 L 36.5,25.5 L 33.5,26 L 32,29 L 30.5,26 L 27.5,25.5 L 30.5,25 Z" fill="#38bdf8" />
      <path d="M 68,18 L 69,20 L 71,20.3 L 69,20.7 L 68,22.7 L 67,20.7 L 65,20.3 L 67,20 Z" fill="#0ea5e9" />

      {/* 2. Squeegee Assembly (tilted elegantly at 15 degrees) */}
      <g transform="rotate(-15, 50, 48)" style={{ filter: 'url(#shadow)' }}>
        {/* Rubber blade (thin dark line below the holder) */}
        <rect x="15" y="36.5" width="70" height="2" rx="0.5" fill="#1e293b" />

        {/* Metal blade channel holder */}
        <rect x="16" y="34" width="68" height="2.5" rx="0.5" fill="url(#chrome-grad)" />

        {/* Triangular socket/clamp connecting handle to first bar */}
        <path d="M 44,36 H 56 L 52,46 H 48 Z" fill="url(#chrome-grad)" />

        {/* Premium blue contoured grip handle */}
        <path
          d="M 48,46 C 48,44 52,44 52,46 L 53.5,74 C 53.5,76.5 46.5,76.5 46.5,74 Z"
          fill="url(#handle-grad)"
        />

        {/* Small silver hanging hole at the bottom of the handle */}
        <circle cx="50" cy="71" r="1.5" fill="#f8fafc" />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <SvgIcon size={iconSize} />
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 group select-none ${className}`}>
        <SvgIcon size={iconSize} />
        <div className="flex flex-col text-left">
          {/* Main Logo Brand names */}
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-display text-2xl font-black italic tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              SWIFT
            </span>
            <span className="font-display text-2xl font-black italic tracking-tight text-blue-600">
              SERVICES
            </span>
          </div>

          {/* Subtitle with clean tracking */}
          <div className={`text-[9px] font-bold tracking-[0.2em] uppercase leading-none mt-1 ${
            isDark ? 'text-slate-400' : 'text-slate-700'
          }`}>
            WINDOW CLEANING
          </div>
        </div>
      </div>
    );
  }

  // Vertical stacked version (for about panels, footers, full screens)
  return (
    <div className={`flex flex-col items-center text-center p-4 select-none ${className}`}>
      <SvgIcon size={iconSize * 1.5} />
      
      <div className="mt-3 flex flex-col items-center">
        {/* Stacked Typography */}
        <div className="flex items-center gap-2 leading-none">
          <span className={`font-display text-3xl font-black italic tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            SWIFT
          </span>
          <span className="font-display text-3xl font-black italic tracking-tight text-blue-600">
            SERVICES
          </span>
        </div>

        {/* Divider bars */}
        <div className="flex items-center w-full max-w-[180px] gap-2 my-2">
          <div className={`h-[1px] flex-grow ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <div className={`h-[1px] flex-grow ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
        </div>

        {/* Stacked Subtitle */}
        <div className={`text-[10px] font-extrabold tracking-[0.25em] uppercase leading-none ${
          isDark ? 'text-slate-400' : 'text-slate-700'
        }`}>
          WINDOW CLEANING
        </div>
      </div>
    </div>
  );
}
