import React from 'react';

interface BfLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function BfLogo({ className = '', variant = 'dark', size = 'md' }: BfLogoProps) {
  const isDark = variant === 'dark';

  // Sizing classes for the logo mark container
  const containerSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="bf-logo-container">
      {/* Brand monogram (BF) */}
      <div className={`${containerSizes[size]} flex-shrink-0`} id="bf-monogram">
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className={`w-full h-full object-contain ${isDark ? '' : 'brightness-0 invert opacity-90'}`}
          draggable={false}
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-bold tracking-wider leading-none ${
            isDark ? 'text-brand-chocolate' : 'text-brand-ivory'
          } ${textSizes[size]}`}
        >
          BONA FIDES V&D
        </span>
        <span
          className={`font-sans text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase mt-1 ${
            isDark ? 'text-brand-taupe' : 'text-brand-cream/60'
          }`}
        >
          Knjigovodstvena agencija
        </span>
      </div>
    </div>
  );
}
