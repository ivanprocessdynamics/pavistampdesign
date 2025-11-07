'use client';

import Section from '@/components/Section';
import { CONTACT_INFO } from '@/lib/constants';
import { Target, Users, Award, MapPin } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Calidad garantizada',
    description: 'Utilizamos materiales de primera calidad y técnicas profesionales',
  },
  {
    icon: Users,
    title: 'Trato directo',
    description: `Contacto personal con ${CONTACT_INFO.contactName}, sin intermediarios`,
  },
  {
    icon: Target,
    title: 'Plazos cumplidos',
    description: 'Obra limpia, organizada y entregada en el tiempo acordado',
  },
  {
    icon: MapPin,
    title: 'Zona local',
    description: 'Conocemos Tarragona y alrededores. Cercanía y disponibilidad',
  },
];

export default function EmpresaPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-white/90">
            Especialistas en exteriores en Tarragona
          </p>
        </div>
      </Section>

      {/* Quiénes somos */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-dark mb-6 text-center">
            Quiénes Somos
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
            <p>
              <strong className="text-dark">Pavistamp Desing</strong> es una empresa especializada
              en la construcción de piscinas de obra, pavimento impreso, muros, fachadas y reformas
              exteriores en Tarragona y toda la zona de alrededores.
            </p>
            <p>
              Con años de experiencia en el sector, nos hemos consolidado como referentes en
              trabajos exteriores gracias a nuestro compromiso con la calidad, la atención
              personalizada y el cumplimiento de plazos.
            </p>
            <p>
              Cada proyecto es único para nosotros. Asesoramos a nuestros clientes desde la primera
              visita, ayudándoles a elegir los mejores materiales, colores y acabados según sus
              necesidades y presupuesto.
            </p>
          </div>
        </div>
      </Section>

      {/* Valores */}
      <Section subtitle="Nuestros valores" title="Por qué elegirnos" className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Zona de trabajo */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-dark mb-6">
            Zona de Trabajo
          </h2>
          <p className="text-lg text-text-secondary mb-6">
            Realizamos proyectos en Tarragona y alrededores, incluyendo:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-text-secondary">
            <div className="bg-background rounded-lg p-4">Tarragona</div>
            <div className="bg-background rounded-lg p-4">Miami Platja</div>
            <div className="bg-background rounded-lg p-4">Cambrils</div>
            <div className="bg-background rounded-lg p-4">Salou</div>
            <div className="bg-background rounded-lg p-4">Reus</div>
            <div className="bg-background rounded-lg p-4">Alrededores</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Contacta con {CONTACT_INFO.contactName} y recibe asesoramiento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg"
            >
              Llamar: {CONTACT_INFO.phoneDisplay}
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all shadow-lg"
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
