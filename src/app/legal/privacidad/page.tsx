'use client';

import Section from '@/components/Section';

export default function PrivacidadPage() {
  return (
    <main className="pt-20">
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Política de Privacidad</h1>
          
          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li><strong>Identidad:</strong> Pavistamp Desing</li>
            <li><strong>Dirección postal:</strong> Tarragona, España</li>
            <li><strong>Email:</strong> info@pavistampdesing.com</li>
            <li><strong>Teléfono:</strong> +34 678 01 88 95</li>
          </ul>

          <h2>2. Finalidad del tratamiento</h2>
          <p>
            Los datos personales que nos facilites a través de los formularios de contacto serán
            tratados con las siguientes finalidades:
          </p>
          <ul>
            <li>Gestionar las solicitudes de presupuesto</li>
            <li>Responder a tus consultas</li>
            <li>Enviarte información sobre nuestros servicios (solo si lo autorizas)</li>
          </ul>

          <h2>3. Legitimación</h2>
          <p>
            La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al
            enviar el formulario y marcar la casilla de aceptación de esta política de privacidad.
          </p>

          <h2>4. Destinatarios</h2>
          <p>
            Tus datos no serán cedidos a terceros, salvo obligación legal.
          </p>

          <h2>5. Derechos</h2>
          <p>Puedes ejercer los siguientes derechos:</p>
          <ul>
            <li>Derecho de acceso a tus datos personales</li>
            <li>Derecho de rectificación de datos inexactos</li>
            <li>Derecho de supresión cuando los datos ya no sean necesarios</li>
            <li>Derecho de limitación del tratamiento</li>
            <li>Derecho de portabilidad de los datos</li>
            <li>Derecho de oposición al tratamiento</li>
          </ul>
          <p>
            Para ejercer estos derechos, puedes contactarnos en: info@pavistampdesing.com
          </p>

          <h2>6. Conservación de datos</h2>
          <p>
            Los datos personales se conservarán mientras sean necesarios para gestionar tu solicitud
            y, posteriormente, durante el tiempo que establezcan las obligaciones legales.
          </p>

          <h2>7. Seguridad</h2>
          <p>
            Hemos adoptado medidas de seguridad técnicas y organizativas para proteger tus datos
            personales y evitar su pérdida, mal uso o acceso no autorizado.
          </p>

          <p className="text-sm text-text-secondary mt-8">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </Section>
    </main>
  );
}
