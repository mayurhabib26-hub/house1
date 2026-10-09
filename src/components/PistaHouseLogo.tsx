import React from 'react';

interface PistaHouseLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const PistaHouseLogo: React.FC<PistaHouseLogoProps> = ({
  className = '',
  variant = 'badge',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { dimension: 42, textClass: 'text-base', subClass: 'text-[9px]' },
    md: { dimension: 56, textClass: 'text-lg', subClass: 'text-[11px]' },
    lg: { dimension: 72, textClass: 'text-2xl', subClass: 'text-xs' },
    xl: { dimension: 96, textClass: 'text-3xl', subClass: 'text-sm' },
  };

  const { dimension, textClass, subClass } = sizeMap[size];

  // Theme colors based on variant
  const isDarkFooter = variant === 'dark';
  const textColor = isDarkFooter ? 'text-[#F5F1E8]' : 'text-[#263D32]';
  const subtextColor = isDarkFooter ? 'text-[#D0B787]' : 'text-[#77786F]';
  const goldStroke = '#D0B787';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Charminar & Crest SVG */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Pista House London Crest"
        >
          {/* Outer Gold Ornamental Ring */}
          <circle cx="50" cy="50" r="48" stroke={goldStroke} strokeWidth="1.5" strokeDasharray="3 1.5" opacity="0.85" />
          <circle cx="50" cy="50" r="45" stroke={goldStroke} strokeWidth="1" />
          
          {/* Forest Green Medallion Background */}
          <circle cx="50" cy="50" r="43.5" fill="#263D32" />
          
          {/* Inner Decorative Arch Motif */}
          <circle cx="50" cy="50" r="41" stroke={goldStroke} strokeWidth="0.75" strokeDasharray="1.5 2" opacity="0.6" />

          {/* Charminar Architectural Artwork in Champagne Gold */}
          <g transform="translate(24, 15) scale(0.52)" stroke={goldStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Left Outer Minaret */}
            <path d="M 12 68 L 12 18 Q 12 12 15 8 L 15 4 L 16 1 L 17 4 L 17 8 Q 20 12 20 18 L 20 68" fill="#D0B787" fillOpacity="0.15" />
            <line x1="10" y1="24" x2="22" y2="24" strokeWidth="1.5" />
            <line x1="11" y1="42" x2="21" y2="42" strokeWidth="1.5" />
            
            {/* Right Outer Minaret */}
            <path d="M 80 68 L 80 18 Q 80 12 83 8 L 83 4 L 84 1 L 85 4 L 85 8 Q 88 12 88 18 L 88 68" fill="#D0B787" fillOpacity="0.15" />
            <line x1="78" y1="24" x2="90" y2="24" strokeWidth="1.5" />
            <line x1="79" y1="42" x2="89" y2="42" strokeWidth="1.5" />

            {/* Inner Left Turret Minaret */}
            <path d="M 28 68 L 28 22 Q 28 17 31 13 L 31 9 L 32 6 L 33 9 L 33 13 Q 36 17 36 22 L 36 68" fill="#D0B787" fillOpacity="0.12" />
            {/* Inner Right Turret Minaret */}
            <path d="M 64 68 L 64 22 Q 64 17 67 13 L 67 9 L 68 6 L 69 9 L 69 13 Q 72 17 72 22 L 72 68" fill="#D0B787" fillOpacity="0.12" />

            {/* Upper Balcony / Parapet Screen */}
            <rect x="20" y="28" width="60" height="8" rx="1" fill="#263D32" strokeWidth="1" />
            <line x1="20" y1="32" x2="80" y2="32" strokeWidth="0.75" strokeDasharray="2 2" />
            <path d="M 26 28 L 26 25 Q 50 21 74 25 L 74 28" />

            {/* Mid Frieze */}
            <rect x="20" y="44" width="60" height="6" fill="#263D32" strokeWidth="1" />

            {/* Central Grand Arch of Charminar */}
            <path d="M 38 68 L 38 52 C 38 43 62 43 62 52 L 62 68" strokeWidth="1.8" fill="#1C2E25" />
            <path d="M 42 68 L 42 54 C 42 47 58 47 58 54 L 58 68" strokeWidth="0.8" />
            
            {/* Lower Plinth Foundation */}
            <line x1="8" y1="68" x2="92" y2="68" strokeWidth="2" stroke={goldStroke} />
          </g>

          {/* Central Ribbon Banner */}
          <g transform="translate(0, 52)">
            {/* Ribbon Background */}
            <path
              d="M 12 18 L 88 18 L 84 34 L 16 34 Z"
              fill="#1C2E25"
              stroke={goldStroke}
              strokeWidth="1.2"
            />
            {/* Ribbon Inner Line */}
            <line x1="16" y1="21" x2="84" y2="21" stroke={goldStroke} strokeWidth="0.5" opacity="0.6" />
            <line x1="19" y1="31" x2="81" y2="31" stroke={goldStroke} strokeWidth="0.5" opacity="0.6" />
            
            {/* Ribbon Text: PISTA HOUSE */}
            <text
              x="50"
              y="28"
              fill="#D0B787"
              fontSize="7.5"
              fontWeight="800"
              letterSpacing="1.2"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              PISTA HOUSE
            </text>

            {/* London Text Below Ribbon */}
            <text
              x="50"
              y="39.5"
              fill="#F5F1E8"
              fontSize="5.2"
              fontWeight="500"
              letterSpacing="0.8"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontStyle="italic"
            >
              London
            </text>
          </g>

          {/* Subtle Outer Star Accents */}
          <polygon points="50,4 51.5,7 54,7 52,8.5 53,11 50,9.5 47,11 48,8.5 46,7 48.5,7" fill={goldStroke} />
        </svg>
      </div>

      {/* Brand Wordmark & Location */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-serif font-bold tracking-tight ${textColor} ${textClass}`}>
            Pista House
          </span>
          <span className={`font-serif italic font-normal text-[#D0B787] text-sm`}>
            London
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] uppercase tracking-widest font-medium mt-1 ${subtextColor}`}>
            Authentic Hyderabadi Cuisine
          </span>
        )}
      </div>
    </div>
  );
};
