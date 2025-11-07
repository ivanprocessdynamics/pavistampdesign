'use client';

import { CheckCircle, Shield, Clock, ThumbsUp, Headphones, BadgeCheck } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Garantía de calidad',
    description:
      'Todos nuestros trabajos incluyen garantía. Usamos materiales de primera calidad con certificación europea.',
  },
  {
    icon: BadgeCheck,
    title: 'Equipo profesional certificado',
    description:
      '15+ años de experiencia en pavimento impreso y piscinas. Formación continua en las últimas técnicas.',
  },
  {
    icon: Clock,
    title: 'Cumplimos plazos',
    description:
      'Planificación detallada y transparente. Te informamos del estado de la obra en todo momento.',
  },
  {
    icon: ThumbsUp,
    title: 'Sin sorpresas en el precio',
    description:
      'Presupuesto detallado sin letra pequeña. El precio final es el acordado desde el principio.',
  },
  {
    icon: Headphones,
    title: 'Trato directo con Iván',
    description:
      'Hablas directamente con quien dirige la obra. Sin intermediarios, respuesta rápida y asesoramiento personalizado.',
  },
  {
    icon: CheckCircle,
    title: 'Obra limpia y respeto',
    description:
      'Mantenemos tu propiedad limpia durante la obra. Respetamos tus horarios y necesidades.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Tu mejor elección
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mt-2 mb-4">
            ¿Por qué elegir Pavistamp Desing?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            No somos la opción más barata, pero sí la más profesional. Aquí está el porqué:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-background rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-dark mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-l-4 border-primary">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-bold text-xl text-dark mb-2">
                100% Asegurados y con todas las licencias
              </h3>
              <p className="text-text-secondary">
                Trabajamos con seguro de responsabilidad civil y cumplimos toda la normativa vigente.
                Tu proyecto en manos profesionales y legales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
