'use client';

import Section from '@/components/Section';
import { testimonials } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function ResenasPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Opiniones de Clientes
          </h1>
          <p className="text-xl text-white/90">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>
      </Section>

      {/* Testimonios */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-text-secondary mb-6 italic">"{testimonial.text}"</p>

              {/* Autor */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-dark">{testimonial.name}</p>
                <p className="text-sm text-text-secondary">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            ¿Quieres ser nuestro próximo cliente satisfecho?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Pide tu presupuesto sin compromiso
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg"
          >
            Contactar ahora
          </a>
        </div>
      </Section>
    </main>
  );
}
