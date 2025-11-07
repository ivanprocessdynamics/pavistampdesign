'use client';

import Section from '@/components/Section';

export default function CookiesPage() {
  return (
    <main className="pt-20">
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Política de Cookies</h1>
          
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
            visitas un sitio web. Se utilizan para mejorar la experiencia del usuario y analizar
            el tráfico del sitio.
          </p>

          <h2>Tipos de cookies que utilizamos</h2>
          
          <h3>Cookies técnicas (necesarias)</h3>
          <p>
            Son esenciales para el funcionamiento del sitio web. Sin estas cookies, algunos
            servicios no pueden proporcionarse.
          </p>

          <h3>Cookies analíticas</h3>
          <p>
            Utilizamos Google Analytics para recopilar información sobre cómo los visitantes
            utilizan nuestro sitio web. Esta información se utiliza para mejorar la experiencia
            del usuario y el rendimiento del sitio.
          </p>

          <h2>Cookies de terceros</h2>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Analiza el uso del sitio web
            </li>
            <li>
              <strong>Google Maps:</strong> Para mostrar mapas interactivos
            </li>
          </ul>

          <h2>Gestión de cookies</h2>
          <p>
            Puedes configurar tu navegador para rechazar todas las cookies o para indicar cuándo
            se está enviando una cookie. Sin embargo, si no aceptas las cookies, es posible que
            no puedas utilizar algunas partes de nuestro sitio web.
          </p>

          <h3>Cómo deshabilitar las cookies en tu navegador:</h3>
          <ul>
            <li>
              <strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies
            </li>
            <li>
              <strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies
            </li>
            <li>
              <strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio
            </li>
          </ul>

          <h2>Más información</h2>
          <p>
            Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en:
            info@pavistampdesing.com
          </p>

          <p className="text-sm text-text-secondary mt-8">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </Section>
    </main>
  );
}
