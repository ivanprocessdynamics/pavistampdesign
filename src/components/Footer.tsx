import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre nosotros */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Pavistamp <span className="text-secondary">Design</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Especialistas en piscinas de obra, pavimento impreso, muros y reformas exteriores en Tarragona y toda Cataluña. Más de 15 años de experiencia en proyectos de exterior.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-white/80 hover:text-secondary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/antes-despues" className="text-white/80 hover:text-secondary transition-colors">
                  Antes y Después
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="text-white/80 hover:text-secondary transition-colors">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{CONTACT_INFO.area}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Horario y Redes */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-6">
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary p-2 rounded-md transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-white/60">
              Horario: Lunes a Viernes<br />
              9:00 - 18:00
            </p>
          </div>
        </div>

        {/* Mapa embebido */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pavistamp Desing"
            />
          </div>
        </div>

        {/* Legal y Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Pavistamp Desing. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/legal/aviso-legal" className="hover:text-secondary transition-colors">
              Aviso Legal
            </Link>
            <Link href="/legal/privacidad" className="hover:text-secondary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/legal/cookies" className="hover:text-secondary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
