import React from 'react';

export const Besrg3DFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,178,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

      {/* Floating 3D Geometric Representation on pure white */}
      <div className="relative flex flex-col items-center justify-center animate-float">
        <svg
          width="320"
          height="320"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_20px_40px_rgba(5,72,89,0.18)]"
        >
          <defs>
            <linearGradient id="fallbackTeal" x1="50" y1="6" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#08637A" />
              <stop offset="100%" stopColor="#054859" />
            </linearGradient>

            <linearGradient id="fallbackCyan" x1="20" y1="55" x2="48" y2="84" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#30C3FF" />
              <stop offset="100%" stopColor="#00B2F6" />
            </linearGradient>

            <linearGradient id="fallbackCrimson" x1="52" y1="55" x2="90" y2="84" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4A68" />
              <stop offset="100%" stopColor="#F82649" />
            </linearGradient>
          </defs>

          {/* Top Triangle (Deep Petrol Teal) */}
          <polygon
            points="50,6 23.5,49.5 76.5,49.5"
            fill="url(#fallbackTeal)"
            stroke="#08637A"
            strokeWidth="0.6"
          />

          {/* Bottom Left Quad (Electric Cyan) */}
          <polygon
            points="20.5,55 48,55 48,84 10,84"
            fill="url(#fallbackCyan)"
            stroke="#63D4FF"
            strokeWidth="0.5"
          />

          {/* Bottom Right Quad (Crimson Red) */}
          <polygon
            points="52.5,55 79.5,55 90,84 52.5,84"
            fill="url(#fallbackCrimson)"
            stroke="#FFA0B0"
            strokeWidth="0.5"
          />
        </svg>

        {/* Ambient Ground Contact Shadow */}
        <div className="w-64 h-5 rounded-full bg-slate-300/60 blur-md mt-4" />
      </div>

      {/* Monogram tag */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs font-mono text-slate-500 tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-[#00B2F6]" />
        THE BESRG DIMENSION • GEOMETRIE ARCHITECTURALE
      </div>
    </div>
  );
};
