# Guía de Despliegue - Pavistamp Desing

## 📋 Checklist Pre-Despliegue

### 1. Contenido
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Verificar datos de contacto (teléfono, email, dirección)
- [ ] Revisar textos y copys
- [ ] Añadir proyectos reales con descripciones
- [ ] Verificar testimonios

### 2. SEO
- [ ] Configurar dominio real en `/src/lib/seo.ts`
- [ ] Actualizar sitemap con URL de producción
- [ ] Verificar metadata en todas las páginas
- [ ] Añadir Google Analytics ID (opcional)
- [ ] Verificar robots.txt

### 3. Legal
- [ ] Actualizar datos legales en páginas de /legal
- [ ] Verificar información de contacto en Aviso Legal
- [ ] Revisar Política de Privacidad
- [ ] Confirmar Política de Cookies

### 4. Funcionalidad
- [ ] Probar formulario de contacto
- [ ] Verificar enlaces de WhatsApp
- [ ] Probar enlaces de teléfono
- [ ] Verificar navegación mobile
- [ ] Probar todos los filtros de proyectos

## 🚀 Despliegue en Vercel (Recomendado)

### Paso 1: Preparar el Repositorio

```bash
# Inicializar git si no está hecho
git init

# Añadir archivos
git add .

# Commit inicial
git commit -m "Initial commit: Pavistamp Desing website"

# Crear repositorio en GitHub y vincular
git remote add origin https://github.com/TU_USUARIO/pavistamp-desing.git
git push -u origin main
```

### Paso 2: Configurar Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz login con GitHub
3. Click en "Add New Project"
4. Selecciona tu repositorio
5. Configuración:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Paso 3: Variables de Entorno (Opcional)

Si usas servicios externos, añade en Vercel:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EMAIL_SERVICE_API_KEY=tu_api_key
```

### Paso 4: Dominio Personalizado

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade tu dominio (ej: pavistampdesing.com)
4. Sigue las instrucciones de DNS

## 🌐 Despliegue en Netlify (Alternativa)

### Opción A: Desde GitHub

1. Haz login en [netlify.com](https://netlify.com)
2. "New site from Git"
3. Conecta GitHub
4. Selecciona repositorio
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Opción B: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

## 🖥️ Despliegue en VPS/Servidor Propio

### Requisitos
- Node.js 18+
- PM2 o similar para gestión de procesos
- Nginx como reverse proxy

### Instalación

```bash
# En el servidor
git clone https://github.com/TU_USUARIO/pavistamp-desing.git
cd pavistamp-desing

# Instalar dependencias
npm install

# Build
npm run build

# Instalar PM2
npm install -g pm2

# Iniciar con PM2
pm2 start npm --name "pavistamp" -- start
pm2 save
pm2 startup
```

### Configuración Nginx

```nginx
server {
    listen 80;
    server_name pavistampdesing.com www.pavistampdesing.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Post-Despliegue

### 1. Verificación

- [ ] Comprobar que todas las páginas cargan
- [ ] Verificar formulario de contacto
- [ ] Probar en mobile
- [ ] Verificar velocidad (PageSpeed Insights)
- [ ] Comprobar SEO (verificar metadata)

### 2. SEO Setup

**Google Search Console**:
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Añadir propiedad
3. Verificar dominio
4. Enviar sitemap: `https://pavistampdesing.com/sitemap.xml`

**Google My Business**:
1. Crear/reclamar ficha de empresa
2. Añadir fotos de proyectos
3. Vincular website

### 3. Analytics (Opcional)

**Google Analytics 4**:
1. Crear propiedad en [analytics.google.com](https://analytics.google.com)
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Añadir en `src/app/layout.tsx`:

```tsx
// Dentro del <head> o como Script de Next.js
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🔄 Actualizaciones Futuras

### Workflow Recomendado

1. Hacer cambios en local
2. Probar: `npm run dev`
3. Commit: `git commit -m "Descripción del cambio"`
4. Push: `git push`
5. Vercel/Netlify desplegará automáticamente

### Gestión de Contenido

Para actualizar proyectos, servicios o testimonios:

1. Editar archivos en `/src/data/`
2. Añadir nuevas imágenes en `/public/images/`
3. Commit y push

## 🆘 Troubleshooting

### Build Falla

```bash
# Limpiar cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Imágenes no cargan

- Verificar que las rutas en data coincidan con archivos reales
- Comprobar que las imágenes estén en `/public/images/`
- Los nombres de archivo distinguen mayúsculas/minúsculas

### Problemas de TypeScript

```bash
# Regenerar tipos
rm -rf .next
npm run dev
```

## 📞 Soporte

Para ayuda adicional:
- **Email**: info@pavistampdesing.com
- **Teléfono**: +34 678 01 88 95

---

**Última actualización**: Noviembre 2024
