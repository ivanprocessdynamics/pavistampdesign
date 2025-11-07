'use client';

import Section from '@/components/Section';

export default function AvisoLegalPage() {
  return (
    <main className="pt-20">
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Aviso Legal</h1>
          
          <h2>1. Datos identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002,
            de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio
            Electrónico, a continuación se reflejan los siguientes datos:
          </p>
          <ul>
            <li><strong>Denominación social:</strong> Pavistamp Desing</li>
            <li><strong>Domicilio:</strong> Tarragona, España</li>
            <li><strong>Email:</strong> info@pavistampdesing.com</li>
            <li><strong>Teléfono:</strong> +34 678 01 88 95</li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso del sitio web pavistampdesing.com (en adelante,
            LA WEB), del que es titular Pavistamp Desing.
          </p>

          <h2>3. Condiciones de uso</h2>
          <p>
            La utilización de LA WEB le otorga la condición de Usuario, e implica la aceptación
            completa de todas las cláusulas y condiciones de uso incluidas en las páginas:
          </p>
          <ul>
            <li>Aviso Legal</li>
            <li>Política de Privacidad</li>
            <li>Política de Cookies</li>
          </ul>

          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Pavistamp Desing es titular de todos los derechos de propiedad intelectual e industrial
            de LA WEB, así como de los elementos contenidos en la misma (a título enunciativo,
            imágenes, sonido, audio, vídeo, software o textos).
          </p>

          <h2>5. Responsabilidad</h2>
          <p>
            Pavistamp Desing no se hace responsable, en ningún caso, de los daños y perjuicios de
            cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones
            en los contenidos, falta de disponibilidad del portal o la transmisión de virus o
            programas maliciosos.
          </p>

          <p className="text-sm text-text-secondary mt-8">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </Section>
    </main>
  );
}
