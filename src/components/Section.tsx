'use client';

import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  darkBg?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  darkBg = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${darkBg ? 'bg-dark text-white' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && (
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
