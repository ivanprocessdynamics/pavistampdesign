'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectCarouselProps {
  category: string;
  images: string[];
}

export default function ProjectCarousel({ category, images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Precargar todas las imágenes al montar el componente
  useEffect(() => {
    const imageCache: HTMLImageElement[] = [];
    
    images.forEach((src, index) => {
      const img = new window.Image();
      img.src = src;
      
      // Forzar que el navegador mantenga la imagen en caché
      img.onload = () => {
        setLoadedImages(prev => {
          const newSet = new Set(prev);
          newSet.add(index);
          return newSet;
        });
        console.log(`✅ Preloaded: ${src}`);
      };
      
      img.onerror = () => {
        setImageErrors(prev => {
          const newSet = new Set(prev);
          newSet.add(index);
          return newSet;
        });
        console.error(`❌ Failed to preload: ${src}`);
      };
      
      // Mantener referencia para evitar garbage collection
      imageCache.push(img);
    });
    
    // Cleanup
    return () => {
      imageCache.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [images]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
    console.error(`❌ Error loading image: ${images[index]}`);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(images.length - 1, currentIndex + 1));
      }
    }
  };

  const descriptions: Record<string, string> = {
    'Piscinas': 'Piscinas de obra con acabados personalizados.',
    'Pavimento Impreso': 'Pavimentos impresos antideslizantes para exteriores.',
    'Muros y Fachadas': 'Revestimientos decorativos y protección para fachadas.',
  };

  return (
    <div className="relative group">
      {/* Título de categoría */}
      <h3 className="text-2xl font-heading font-bold text-dark mb-2">{category}</h3>
      <p className="text-text-secondary mb-4">{descriptions[category]}</p>
      
      {/* Contenedor del carrusel */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Imágenes deslizables */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((image, index) => (
            <div
              key={`${category}-${index}`}
              className="flex-shrink-0 w-full snap-center"
            >
              <div className="relative w-full bg-gray-100 min-h-[400px] flex items-center justify-center rounded-lg">
                {imageErrors.has(index) ? (
                  <div className="text-center p-8">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-text-secondary text-sm">
                      Imagen no disponible
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {image}
                    </p>
                  </div>
                ) : (
                  <>
                    {!loadedImages.has(index) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <div className="text-center p-8">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                          <p className="text-text-secondary text-sm">
                            Cargando imagen...
                          </p>
                        </div>
                      </div>
                    )}
                    <img
                      src={image}
                      alt={`${category} ${index + 1}`}
                      className={`w-full h-auto object-contain rounded-lg transition-opacity duration-300 ${
                        loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      onError={() => handleImageError(index)}
                      onLoad={() => {
                        setLoadedImages(prev => {
                          const newSet = new Set(prev);
                          newSet.add(index);
                          return newSet;
                        });
                        console.log(`✅ Image displayed: ${image}`);
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Izquierda - SIEMPRE VISIBLE */}
        <button
          onClick={() => scroll('left')}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/95 shadow-xl flex items-center justify-center transition-all hover:scale-110 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
          }`}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        {/* Botón Derecha - SIEMPRE VISIBLE */}
        <button
          onClick={() => scroll('right')}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/95 shadow-xl flex items-center justify-center transition-all hover:scale-110 ${
            currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
          }`}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        {/* Indicadores de posición - SIEMPRE VISIBLES */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: scrollContainerRef.current.offsetWidth * index,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contador de imágenes */}
      <div className="text-center mt-3 text-sm text-text-secondary font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
