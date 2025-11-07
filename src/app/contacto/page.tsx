'use client';

import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactoPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl text-white/90">
            Estamos aquí para ayudarte con tu proyecto
          </p>
        </div>
      </Section>

      {/* Información de contacto y formulario */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Información de contacto */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-heading font-bold text-dark mb-6">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Teléfono</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <p className="text-sm text-text-secondary mt-1">
                    Contacto: {CONTACT_INFO.contactName}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">WhatsApp</h3>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-secondary transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <p className="text-sm text-text-secondary mt-1">
                    Respuesta rápida
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-text-secondary hover:text-primary transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Zona de servicio</h3>
                  <p className="text-text-secondary">{CONTACT_INFO.area}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Horario</h3>
                  <p className="text-text-secondary">Lunes a Viernes</p>
                  <p className="text-text-secondary">9:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Botones de acción rápida */}
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="block w-full px-6 py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Llamar ahora
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-[#25D366] text-white text-center font-semibold rounded-lg hover:bg-[#25D366]/90 transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-heading font-bold text-dark mb-6">
              Formulario de Contacto
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
