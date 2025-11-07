'use client';

import Section from '@/components/Section';
import { services, faqs } from '@/data/services';
import { Waves, SquareStack, Building, Construction, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  waves: Waves,
  'square-stack': SquareStack,
  building: Building,
  construction: Construction,
};

export default function ServiciosPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-white/90">
            Especialistas en exteriores: piscinas, pavimento impreso, muros y reformas
          </p>
        </div>
      </Section>

      {/* Servicios detallados */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] || Building;
        const isEven = index % 2 === 0;

        return (
          <Section
            key={service.id}
            id={service.slug}
            className={isEven ? 'bg-white' : 'bg-background'}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={isEven ? 'order-1' : 'order-2'}>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-dark mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-text-secondary mb-6">{service.intro}</p>

                <h3 className="font-heading font-semibold text-dark mb-3">
                  Características:
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading font-semibold text-dark mb-3">
                  Beneficios:
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Pedir presupuesto
                </Link>
              </div>

              <div className={isEven ? 'order-2' : 'order-1'}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon className="h-24 w-24 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-text-secondary">Imagen de {service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* FAQs */}
      <Section subtitle="Preguntas frecuentes" title="¿Tienes dudas?" className="bg-background">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-semibold text-dark">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-text-secondary group-open:rotate-180 transition-transform" />
              </summary>
              <p className="px-6 pb-4 text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Contacta con nosotros y recibe un presupuesto personalizado sin compromiso
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg"
          >
            Solicitar presupuesto gratuito
          </Link>
        </div>
      </Section>
    </main>
  );
}
