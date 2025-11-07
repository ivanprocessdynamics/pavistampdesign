'use client';

import { useState } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfter({ beforeImage, afterImage, title }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg select-none">
      {/* Imagen después (fondo) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={`${title} - Después`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full text-white text-sm font-semibold">
          Después
        </div>
      </div>

      {/* Imagen antes (recortada) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Antes`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-dark px-3 py-1 rounded-full text-white text-sm font-semibold">
          Antes
        </div>
      </div>

      {/* Línea divisoria */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Slider control */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label={`Control deslizante para comparar ${title}`}
      />
    </div>
  );
}
