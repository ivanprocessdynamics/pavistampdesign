'use client';

import { CheckCircle } from 'lucide-react';

const badges = [
  '15+ años de experiencia',
  '+200 clientes satisfechos',
  'Resultados duraderos',
  'Presupuesto en 24h',
];

export default function TrustBadges() {
  return (
    <section className="bg-background py-8 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-gray-dark">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
