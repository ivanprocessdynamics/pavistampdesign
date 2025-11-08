'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

interface ProjectCarouselProps {
  category: string;
  images: (string | MediaItem)[];
}

export default function ProjectCarousel({ category, images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedMedia, setLoadedMedia] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const imageRefs = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadTimeouts = useRef<Map<number, number>>(new Map());
  const lastNavTimeRef = useRef<number>(0);
  const programmaticScrollRef = useRef<boolean>(false);

  // Helper para obtener la información del media
  const getMediaInfo = (item: string | MediaItem): MediaItem => {
    if (typeof item === 'string') {
      return { src: item, type: 'image' };
    }
    return item;
  };

  // Precargar las primeras 3 imágenes inmediatamente
  useEffect(() => {
    const preloadCount = Math.min(3, images.length);
    for (let i = 0; i < preloadCount; i++) {
      const media = getMediaInfo(images[i]);
      if (media.type === 'image') {
        const img = new window.Image();
        img.src = media.src;
        img.onload = () => {
          setLoadedMedia(prev => {
            const newSet = new Set(prev);
            newSet.add(i);
            return newSet;
          });
        };
      } else {
        // Videos se marcan como cargados inmediatamente para no bloquear
        setLoadedMedia(prev => {
          const newSet = new Set(prev);
          newSet.add(i);
          return newSet;
        });
      }
    }
  }, [images]);

  const handleImageError = (index: number) => {
    // limpiar timeout si existía
    const t = loadTimeouts.current.get(index);
    if (t) {
      clearTimeout(t);
      loadTimeouts.current.delete(index);
    }
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
    const media = getMediaInfo(images[index]);
    console.error(`❌ Error loading: ${media.src}`);
  };

  const handleMediaLoaded = (index: number) => {
    // limpiar timeout si existía
    const t = loadTimeouts.current.get(index);
    if (t) {
      clearTimeout(t);
      loadTimeouts.current.delete(index);
    }
    setLoadedMedia(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
    console.log(`✅ Media ${index} loaded`);
  };

  // Marcar como cargados los medios ya en caché (imágenes con complete/naturalWidth y videos con readyState)
  useEffect(() => {
    imageRefs.current.forEach((img, idx) => {
      if (img && img.complete && img.naturalWidth > 0) {
        setLoadedMedia(prev => {
          const ns = new Set(prev);
          ns.add(idx);
          return ns;
        });
      }
    });
    videoRefs.current.forEach((vid, idx) => {
      if (vid && vid.readyState >= 2) {
        setLoadedMedia(prev => {
          const ns = new Set(prev);
          ns.add(idx);
          return ns;
        });
      }
    });
  }, [images]);

  // Controlar reproducción de videos según el índice actual
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentIndex) {
        // Reproducir video actual
        video.play().catch(err => console.log('Error playing video:', err));
      } else {
        // Pausar videos que no están visibles
        video.pause();
      }
    });
  }, [currentIndex]);

  // Fallback de seguridad: si un medio no carga en X ms, marcar como error para evitar spinners infinitos
  useEffect(() => {
    const TIMEOUT_MS = 8000; // 8s
    images.forEach((item, idx) => {
      if (!loadedMedia.has(idx) && !imageErrors.has(idx) && !loadTimeouts.current.has(idx)) {
        const id = window.setTimeout(() => {
          console.warn('⏱️ Timeout loading media at index', idx);
          setImageErrors(prev => {
            const ns = new Set(prev);
            ns.add(idx);
            return ns;
          });
          loadTimeouts.current.delete(idx);
        }, TIMEOUT_MS);
        loadTimeouts.current.set(idx, id);
      }
    });
    return () => {
      loadTimeouts.current.forEach((id) => clearTimeout(id));
      loadTimeouts.current.clear();
    };
  }, [images, loadedMedia, imageErrors]);

  // Helper para ir a un índice específico de forma robusta incluso con clics rápidos
  const goToIndex = (targetIndex: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const clamped = Math.max(0, Math.min(images.length - 1, targetIndex));

    // Si hay clics muy rápidos, usar "auto" para saltar inmediato
    const now = Date.now();
    const fastClick = now - lastNavTimeRef.current < 250;
    lastNavTimeRef.current = now;

    programmaticScrollRef.current = true;
    container.scrollTo({
      left: container.offsetWidth * clamped,
      behavior: fastClick ? 'auto' : 'smooth',
    });
    setCurrentIndex(clamped);

    // Finalizar ventana de scroll programático
    window.setTimeout(() => {
      programmaticScrollRef.current = false;
    }, fastClick ? 100 : 400);
  };

  const scroll = (direction: 'left' | 'right') => {
    const next = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    goToIndex(next);
  };

  // Mantener currentIndex sincronizado cuando el usuario hace scroll manual/rápido
  const handleScrollSync = () => {
    if (!scrollContainerRef.current || programmaticScrollRef.current) return;
    const container = scrollContainerRef.current;
    const approx = Math.round(container.scrollLeft / container.offsetWidth);
    const clamped = Math.max(0, Math.min(images.length - 1, approx));
    setCurrentIndex(prev => (prev !== clamped ? clamped : prev));
  };

  // Throttle scroll updates with RAF
  const scrollRafRef = useRef<number | null>(null);
  const handleScrollEvent = () => {
    if (scrollRafRef.current != null) return;
    scrollRafRef.current = window.requestAnimationFrame(() => {
      scrollRafRef.current = null;
      handleScrollSync();
    });
  };

  const descriptions: Record<string, string> = {
    'Piscinas': 'Piscinas de obra con acabados personalizados.',
    'Pavimento Impreso': 'Pavimentos impresos antideslizantes para exteriores.',
    'Muros y Fachadas': 'Revestimientos decorativos y protección para fachadas.',
  };

  return (
    <div className="relative group">
      {/* Título de categoría */}
      <h3 className="text-lg md:text-xl lg:text-xl font-heading font-bold text-dark mb-2 text-center">{category}</h3>
      <p className="text-text-secondary mb-5 text-sm md:text-base lg:text-base text-center">{descriptions[category]}</p>
      
      {/* Contenedor del carrusel */}
      <div className="relative overflow-hidden rounded-2xl max-w-full md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
        {/* Imágenes deslizables */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScrollEvent}
        >
          {images.map((item, index) => {
            const media = getMediaInfo(item);
            return (
              <div
                key={`${category}-${index}`}
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="relative w-full bg-gray-100 min-h-[120px] md:min-h-[150px] lg:min-h-[180px] flex items-center justify-center rounded-lg">
                  {/* Spinner de carga como overlay - Solo si NO ha cargado (no bloquea interacción) */}
                  {!loadedMedia.has(index) && !imageErrors.has(index) && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-100/90 z-20 rounded-lg">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-primary mx-auto mb-2"></div>
                        <p className="text-text-secondary text-sm font-medium">
                          Cargando...
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Contenido siempre renderizado */}
                  {imageErrors.has(index) ? (
                    <div className="text-center p-8">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p className="text-text-secondary text-sm">
                        Contenido no disponible
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {media.src}
                      </p>
                    </div>
                  ) : media.type === 'video' ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current.set(index, el);
                        } else {
                          videoRefs.current.delete(index);
                        }
                      }}
                      src={media.src}
                      controls
                      autoPlay={index === currentIndex}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain rounded-lg"
                      onLoadedData={() => handleMediaLoaded(index)}
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <img
                      ref={(el) => {
                        if (el) {
                          imageRefs.current.set(index, el);
                        } else {
                          imageRefs.current.delete(index);
                        }
                      }}
                      src={media.src}
                      alt={`${category} ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      onLoad={() => handleMediaLoaded(index)}
                      onError={() => handleImageError(index)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón Izquierda - SIEMPRE VISIBLE */}
        <button
          onClick={() => scroll('left')}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-xl flex items-center justify-center transition-all hover:scale-110 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
          }`}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </button>

        {/* Botón Derecha - SIEMPRE VISIBLE */}
        <button
          onClick={() => scroll('right')}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-xl flex items-center justify-center transition-all hover:scale-110 ${
            currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
          }`}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </button>

        {/* Indicadores de posición - SIEMPRE VISIBLES */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToIndex(index);
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
