import React from 'react';

interface BesrgLogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
  onClick?: () => void;
}

export const BesrgLogo: React.FC<BesrgLogoProps> = ({
  variant = 'full',
  size = 'md',
  animated = false,
  theme = 'light',
  className = '',
  onClick
}) => {
  const dimensions = {
    sm: { iconWidth: 32, iconHeight: 32, textBesrg: 'text-base', textCompany: 'text-[9px]', tracking: 'tracking-[0.22em]' },
    md: { iconWidth: 42, iconHeight: 42, textBesrg: 'text-xl', textCompany: 'text-[11px]', tracking: 'tracking-[0.24em]' },
    lg: { iconWidth: 56, iconHeight: 56, textBesrg: 'text-2xl', textCompany: 'text-xs', tracking: 'tracking-[0.28em]' },
    xl: { iconWidth: 76, iconHeight: 76, textBesrg: 'text-4xl', textCompany: 'text-sm', tracking: 'tracking-[0.3em]' }
  }[size];

  // Exact vector symbol matching the uploaded logo
  const symbolSvg = (
    <svg
      width={dimensions.iconWidth}
      height={dimensions.iconHeight}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-all duration-300 ${animated ? 'group-hover:scale-105' : ''}`}
      aria-label="Logo BESRG COMPANY"
    >
      {/* 
        Exact geometric structure from the official logo:
        Total bounding triangle: apex at (50, 6), base at y = 84, corners at (11, 84) and (89, 84).
        Horizontal gap between top and bottom: y = 50 to y = 55.
        Vertical gap between cyan and red: x = 48.5 to x = 52.5.
      */}

      {/* TOP TRIANGLE: Deep Teal */}
      <polygon
        points="50,6 23.5,49.5 76.5,49.5"
        fill="#054859"
      />

      {/* BOTTOM-LEFT: Electric Cyan */}
      <polygon
        points="20.5,55 48,55 48,84 10,84"
        fill="#00B2F6"
      />

      {/* BOTTOM-RIGHT: Crimson Red */}
      <polygon
        points="52.5,55 79.5,55 90,84 52.5,84"
        fill="#F82649"
      />
    </svg>
  );

  const textColorBesrg = theme === 'light' ? 'text-[#054859]' : 'text-white';
  const textColorCompany = theme === 'light' ? 'text-[#054859]' : 'text-[#A9BAC4]';

  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center justify-center cursor-pointer select-none group ${className}`}
        onClick={onClick}
      >
        {symbolSvg}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div
        className={`flex flex-col items-center gap-2 cursor-pointer select-none group ${className}`}
        onClick={onClick}
      >
        {symbolSvg}
        <div className="flex flex-col items-center text-center">
          <span className={`font-display font-extrabold ${textColorBesrg} leading-tight tracking-[0.08em] ${dimensions.textBesrg}`}>
            BESRG
          </span>
          <span className={`font-sans font-semibold ${textColorCompany} uppercase leading-tight ${dimensions.textCompany} ${dimensions.tracking}`}>
            COMPANY
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3.5 cursor-pointer select-none group ${className}`}
      onClick={onClick}
    >
      {symbolSvg}
      <div className="flex flex-col justify-center">
        <span className={`font-display font-extrabold ${textColorBesrg} leading-none tracking-[0.06em] group-hover:text-cyan-200 transition-colors ${dimensions.textBesrg}`}>
          BESRG
        </span>
        <span className={`font-sans font-semibold ${textColorCompany} uppercase leading-none mt-1 group-hover:text-white transition-colors ${dimensions.textCompany} ${dimensions.tracking}`}>
          COMPANY
        </span>
      </div>
    </div>
  );
};
