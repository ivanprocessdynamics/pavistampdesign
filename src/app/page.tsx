'use client';

import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Stats from '@/components/Stats';
import ServiceCard from '@/components/ServiceCard';
import ProjectCarousel from '@/components/ProjectCarousel';
import Section from '@/components/Section';
import { services } from '@/data/services';
import { PROCESS_STEPS, CONTACT_INFO } from '@/lib/constants';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  // Definir categorías de proyectos con sus imágenes
  const projectCategories = [
    {
      category: 'Piscinas',
      images: [
        '/Piscina1.png',
        '/Piscina2.png',
        '/Piscina3.png',
        '/Piscina4.png',
        { src: '/Video1.mp4', type: 'video' as const }, // Video 1 después de Piscina 4
        '/Piscina5.png',
        '/Piscina6.png',
        '/Piscina7.png',
        '/Piscina8.png',
        '/Piscina9.png',
        { src: '/Video2.mp4', type: 'video' as const }, // Video 2 después de Piscina 9
        '/Piscina10.png',
        '/Piscina11.png',
        '/Piscina12.png',
        '/Piscina13.png',
        '/Piscina14.png',
        '/Piscina15.png',
        '/Piscina16.png',
        { src: '/Video3.mp4', type: 'video' as const }, // Video 3 después de Piscina 16
      ],
    },
    {
      category: 'Pavimento Impreso',
      images: [
        '/Pavimento_Impreso1.png',
        '/Pavimento_Impreso2.png',
        '/Pavimento_Impreso3.png',
        '/Pavimento_Impreso4.png',
        '/Pavimento_Impreso5.png',
        '/Pavimento_Impreso6.png',
        '/Pavimento_Impreso7.png',
        '/Pavimento_Impreso8.png',
        '/Pavimento_Impreso9.png',
        '/Pavimento_Impreso10.png',
        '/Pavimento_Impreso11.png',
        '/Pavimento_Impreso12.png',
      ],
    },
    {
      category: 'Muros y Fachadas',
      images: [
        '/Muros_Fachadas1.png',
        '/Muros_Fachadas2.png',
        '/Muros_Fachadas3.png',
        '/Muros_Fachadas4.png.jpg',
        { src: '/Video4.mp4', type: 'video' as const }, // Video 4 después de Muros fachadas 4
        '/Muros_Fachadas5.png',
        '/Muros_Fachadas6.png',
      ],
    },
  ];

  return (
    <main>
      {/* 1. HERO - Primera impresión */}
      <Hero />

      {/* 3. PROYECTOS - LO MÁS IMPORTANTE: FOTOS */}
      <Section
        subtitle="Portfolio"
        title="Nuestros trabajos en Cataluña"
        className="bg-white py-16 md:py-24"
      >
        <p className="text-center text-base md:text-lg text-text-secondary max-w-3xl mx-auto mb-12 md:mb-16 px-4">
          Estos son algunos de nuestros trabajos realizados en Tarragona y alrededores. Cada proyecto refleja la calidad, detalle y durabilidad que ofrecemos.
        </p>
        <div className="space-y-16 md:space-y-24">
          {projectCategories.map((item) => (
            <ProjectCarousel
              key={item.category}
              category={item.category}
              images={item.images}
            />
          ))}
        </div>
      </Section>

      {/* 4. ESTADÍSTICAS - Números rápidos */}
      <Stats />

      {/* 5. CTA DESPUÉS DE STATS */}
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4 md:mb-6 tracking-tight">
            ¿Empezamos tu proyecto?
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-medium mb-8 md:mb-10">
            Presupuesto gratuito sin compromiso
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold text-base rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-success text-white font-semibold text-base rounded-xl hover:bg-success/90 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </Section>

      {/* 6. SERVICIOS */}
      <Section
        id="servicios"
        subtitle="Servicios"
        title="Nuestros servicios en exteriores"
        className="bg-white py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </main>
  );
}
