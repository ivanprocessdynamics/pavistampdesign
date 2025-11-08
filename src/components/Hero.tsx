'use client';

import { Phone, MessageCircle, Star, Users, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Imagen de fondo con overlay mejorado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Piscina y pavimento impreso en Cataluña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Degradado mejorado para mejor contraste sin oscurecer todo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Titular con text-shadow */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
            Diseñamos y construimos exteriores completos.
          </h1>
          
          {/* Subtítulo más compacto */}
          <p className="mt-3 text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-4">
            Más de 15 años transformando espacios en toda Cataluña.
          </p>
          
          {/* Badge adicional */}
          <p className="text-base md:text-lg text-white/95 font-semibold mb-6">
            ✓ Visita y presupuesto gratuitos
          </p>

          {/* CTAs en línea con sombras sutiles coloreadas */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20 no-underline"
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-success rounded-xl hover:bg-success/90 transition-all shadow-lg shadow-green-500/20 no-underline"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Badges de confianza mejorados con glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:px-8 border border-white/20">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">15+ años de experiencia</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">+500 clientes satisfechos</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">Resultados duraderos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
