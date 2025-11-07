'use client';

import Link from 'next/link';
import { ArrowRight, Waves, SquareStack, Building, Construction, CheckCircle } from 'lucide-react';
import { Service } from '@/data/services';

const iconMap: Record<string, any> = {
  waves: Waves,
  'square-stack': SquareStack,
  building: Building,
  construction: Construction,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-transparent hover:border-primary/20">
      <div className="p-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-heading font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-text-secondary text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
}
