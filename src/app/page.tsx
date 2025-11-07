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
        '/Piscina5.png',
        '/Piscina6.png',
        '/Piscina7.png',
        '/Piscina8.png',
        '/Piscina9.png',
        '/Piscina10.png',
        '/Piscina11.png',
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
      ],
    },
    {
      category: 'Muros y Fachadas',
      images: [
        '/Muros_Fachadas1.png',
        '/Muros_Fachadas2.png',
        '/Muros_Fachadas3.png',
        '/Muros_Fachadas4.png',
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
        className="bg-white py-20"
      >
        <p className="text-center text-lg text-text-secondary max-w-3xl mx-auto mb-12">
          Estos son algunos de nuestros trabajos realizados en Tarragona y alrededores. Cada proyecto refleja la calidad, detalle y durabilidad que ofrecemos.
        </p>
        <div className="space-y-16 max-w-6xl mx-auto">
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
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">
            ¿Empezamos tu proyecto?
          </h2>
          <p className="text-xl text-white/80 font-medium mb-10">
            Presupuesto gratuito sin compromiso
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold text-base rounded-xl hover:bg-white/90 transition-all shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-success text-white font-semibold text-base rounded-xl hover:bg-success/90 transition-all shadow-lg"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
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
        className="bg-white py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </main>
  );
}
