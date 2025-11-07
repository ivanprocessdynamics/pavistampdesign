'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'piscinas', name: 'Piscinas' },
  { id: 'pavimento', name: 'Pavimento' },
  { id: 'muros', name: 'Muros' },
  { id: 'reformas', name: 'Reformas' },
];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-white/90">
            Más de {projects.length} proyectos realizados en Tarragona y alrededores
          </p>
        </div>
      </Section>

      {/* Filtros */}
      <Section className="bg-white">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-background text-dark hover:bg-border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No hay proyectos en esta categoría</p>
          </div>
        )}
      </Section>
    </main>
  );
}
