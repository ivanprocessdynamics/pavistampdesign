'use client';

import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Opiniones reales
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mt-2 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Más de 200 familias ya han confiado en nosotros. Lee sus experiencias:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-gray-dark mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold text-dark">{testimonial.name}</div>
                <div className="text-sm text-text-secondary">{testimonial.location}</div>
                <div className="text-xs text-primary font-medium mt-1">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/resenas"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
          >
            Ver todas las reseñas →
          </a>
        </div>
      </div>
    </section>
  );
}
