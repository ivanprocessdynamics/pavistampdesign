'use client';

import Section from '@/components/Section';
import BeforeAfter from '@/components/BeforeAfter';
import { beforeAfterProjects } from '@/data/projects';

export default function AntesDespuesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Antes y Después
          </h1>
          <p className="text-xl text-white/90">
            Transformaciones que hablan por sí solas
          </p>
        </div>
      </Section>

      {/* Galería de comparaciones */}
      <Section className="bg-white">
        <div className="space-y-16">
          {beforeAfterProjects.map((project) => (
            <div key={project.id} className="max-w-4xl mx-auto">
              <BeforeAfter
                beforeImage={project.before}
                afterImage={project.after}
                title={project.title}
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-2">{project.description}</p>
                <p className="text-sm text-text-secondary">
                  📍 {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Instrucciones de uso */}
      <Section className="bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-dark mb-4">
            Cómo usar el comparador
          </h2>
          <p className="text-text-secondary mb-4">
            Arrastra el control deslizante o haz clic en cualquier punto de la imagen
            para comparar el antes y el después de cada proyecto.
          </p>
          <p className="text-sm text-text-secondary">
            💡 Consejo: Observa los detalles de acabado y la diferencia de calidad
          </p>
        </div>
      </Section>
    </main>
  );
}
