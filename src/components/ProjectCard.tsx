'use client';

import Link from 'next/link';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    piscinas: 'bg-primary/90 text-white',
    pavimento: 'bg-secondary text-dark',
    muros: 'bg-gray-dark text-white',
    reformas: 'bg-success text-white',
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span
          className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg ${
            categoryColors[project.category]
          }`}
        >
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-text-secondary mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-text-secondary mb-5 pb-5 border-b border-border">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{project.year}</span>
          </div>
        </div>

        <Link
          href={`/proyectos/${project.id}`}
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors group"
        >
          Ver proyecto completo
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
