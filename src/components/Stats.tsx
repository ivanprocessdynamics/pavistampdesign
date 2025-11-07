'use client';

import { Users, Briefcase, Award, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    number: '+500',
    label: 'Proyectos completados',
    description: 'En Tarragona y alrededores',
  },
  {
    icon: Users,
    number: '+500',
    label: 'Clientes satisfechos',
    description: 'Con valoraciones 5 estrellas',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Años de experiencia',
    description: 'En pavimento y piscinas',
  },
  {
    icon: MapPin,
    number: '100%',
    label: 'Proyectos en Tarragona y toda Cataluña',
    description: 'Servicio local de confianza',
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl hover:shadow-lg transition-all border border-primary/10"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-primary">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-dark">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
