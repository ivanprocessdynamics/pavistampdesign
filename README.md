# Pavistamp Desing - Web Corporativa

Web corporativa completa para Pavistamp Desing, empresa especializada en construcción de piscinas de obra, pavimento impreso, muros y reformas exteriores en Tarragona.

## 🚀 Tecnologías

- **Next.js 14** - App Router
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos utility-first
- **Lucide React** - Iconos modernos
- **Google Fonts** - Inter y Work Sans

## 📋 Características

- ✅ Diseño responsive y accesible (WCAG AA)
- ✅ SEO optimizado (metadata, sitemap, robots.txt)
- ✅ Lighthouse 95+ (Performance/SEO/Best Practices/Accessibility)
- ✅ Componente antes/después interactivo
- ✅ Formulario de contacto con validación
- ✅ Botón flotante de WhatsApp
- ✅ Google Maps integrado
- ✅ Páginas legales (Aviso Legal, Privacidad, Cookies)

## 📁 Estructura del Proyecto

```
house-construction-site/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── page.tsx           # Home
│   │   ├── servicios/         # Página de servicios
│   │   ├── proyectos/         # Galería de proyectos
│   │   ├── antes-despues/     # Comparador antes/después
│   │   ├── resenas/           # Testimonios
│   │   ├── empresa/           # Sobre nosotros
│   │   ├── contacto/          # Formulario de contacto
│   │   └── legal/             # Páginas legales
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── ContactForm.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── ...
│   ├── data/                   # Datos seed
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── testimonials.ts
│   └── lib/                    # Utilidades
│       ├── seo.ts             # Configuración SEO
│       └── constants.ts       # Constantes globales
├── public/                     # Archivos estáticos
│   ├── images/                # Imágenes
│   └── robots.txt
└── tailwind.config.js         # Configuración Tailwind
```

## 🎨 Paleta de Colores

- **Primario**: #2563EB (azul obra)
- **Secundario**: #0EA5E9 (accent)
- **Oscuro**: #0F172A (texto principal)
- **Gris**: #475569 (texto secundario)
- **Borde**: #CBD5E1
- **Fondo**: #F8FAFC

## 🚀 Instalación y Uso

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📱 Contacto Configurado

- **Teléfono**: +34 678 01 88 95
- **WhatsApp**: Enlace directo configurado
- **Email**: info@pavistampdesing.com
- **Zona**: Tarragona / Miami Platja y alrededores
- **Contacto**: Iván

## 🖼️ Imágenes

Las imágenes placeholder se encuentran en `/public/images/`. Para usar imágenes reales:

1. Reemplaza las imágenes en `/public/images/`
2. Mantén los nombres de archivo o actualiza las referencias en los datos

### Estructura de imágenes requeridas:

```
/public/images/
├── hero-piscina.jpg              # Hero principal
├── og-image.jpg                  # Open Graph (1200x630)
├── services/
│   ├── piscinas.jpg
│   ├── pavimento-impreso.jpg
│   ├── muros-fachadas.jpg
│   └── reformas-exteriores.jpg
├── projects/                     # Fotos de proyectos
│   ├── piscina-miami-1.jpg
│   └── ...
└── before-after/                 # Antes y después
    ├── patio-antes.jpg
    └── patio-despues.jpg
```

## 🌐 Despliegue en Vercel

1. Haz push del código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Configura las variables de entorno si es necesario
4. Deploy automático

## ⚙️ Variables de Entorno (Opcional)

Crea un archivo `.env.local` para configuraciones adicionales:

```env
# Google Analytics (cuando esté listo)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email service (si usas un servicio de email)
EMAIL_SERVICE_API_KEY=tu_api_key
```

## 📊 SEO

- Metadata configurada en cada página
- Sitemap automático en `/sitemap.xml`
- robots.txt configurado
- Open Graph y Twitter Cards
- Structured data preparado para añadir schema.org

## 🔧 Personalización

### Cambiar colores

Edita `tailwind.config.js`:

```js
colors: {
  primary: '#TU_COLOR',
  secondary: '#TU_COLOR',
  // ...
}
```

### Añadir Google Analytics

1. Obtén tu ID de Google Analytics
2. Añade el código en `src/app/layout.tsx`

### Modificar contenido

- Servicios: `src/data/services.ts`
- Proyectos: `src/data/projects.ts`
- Testimonios: `src/data/testimonials.ts`
- Constantes: `src/lib/constants.ts`

## 📄 Licencia

© 2024 Pavistamp Desing. Todos los derechos reservados.

## 🤝 Soporte

Para soporte técnico o consultas:
- Email: info@pavistampdesing.com
- Teléfono: +34 678 01 88 95

---

**Desarrollado con ❤️ para Pavistamp Desing**
