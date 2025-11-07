'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Antes y Después', href: '/antes-despues' },
  { name: 'Reseñas', href: '/resenas' },
  { name: 'Empresa', href: '/empresa' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <div className="text-2xl font-heading font-bold text-dark">
                Pavistamp <span className="font-normal">Design</span>
              </div>
              <div className="text-xs text-text-secondary font-medium">
                Piscinas y pavimentos exteriores
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-background hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Pedir presupuesto
            </Link>
          </div>

        </div>
      </nav>

    </header>
  );
}
