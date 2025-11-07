'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipoObra: '',
    metraje: '',
    municipio: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí conectarías con tu backend o servicio de email)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      tipoObra: '',
      metraje: '',
      municipio: '',
      mensaje: '',
    });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="678 01 88 95"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="tipoObra" className="block text-sm font-medium text-dark mb-2">
              Tipo de obra *
            </label>
            <select
              id="tipoObra"
              name="tipoObra"
              required
              value={formData.tipoObra}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            >
              <option value="">Selecciona...</option>
              <option value="piscina">Piscina de obra</option>
              <option value="pavimento">Pavimento impreso</option>
              <option value="muros">Muros y fachadas</option>
              <option value="reforma">Reforma exterior</option>
              <option value="varios">Varios servicios</option>
            </select>
          </div>

          <div>
            <label htmlFor="metraje" className="block text-sm font-medium text-dark mb-2">
              Metraje aproximado
            </label>
            <input
              type="text"
              id="metraje"
              name="metraje"
              value={formData.metraje}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Ej: 40 m²"
            />
          </div>

          <div>
            <label htmlFor="municipio" className="block text-sm font-medium text-dark mb-2">
              Municipio *
            </label>
            <input
              type="text"
              id="municipio"
              name="municipio"
              required
              value={formData.municipio}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Tarragona, Miami Platja..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            placeholder="Cuéntanos más sobre tu proyecto..."
          />
        </div>

        <div className="text-xs text-text-secondary">
          <p>
            Al enviar este formulario, aceptas nuestra{' '}
            <a href="/legal/privacidad" className="text-primary hover:underline">
              política de privacidad
            </a>
            . Tus datos serán tratados conforme al RGPD.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Enviar solicitud
            </>
          )}
        </button>

        {showSuccess && (
          <div className="bg-secondary/10 border border-secondary text-dark px-4 py-3 rounded-lg">
            <p className="font-semibold">¡Gracias por tu solicitud!</p>
            <p className="text-sm mt-1">Te contactaremos en menos de 24 horas.</p>
          </div>
        )}
      </form>
    </div>
  );
}
