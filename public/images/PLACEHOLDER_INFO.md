# Imágenes Placeholder - Pavistamp Desing

Este documento describe las imágenes necesarias para la web.

## 📁 Estructura de Carpetas Requerida

```
/public/images/
├── hero-piscina.jpg              (1920x1080) - Hero principal
├── og-image.jpg                  (1200x630) - Open Graph
├── concrete-subtle.png           (Textura sutil opcional)
├── services/
│   ├── piscinas.jpg             (800x600)
│   ├── pavimento-impreso.jpg    (800x600)
│   ├── muros-fachadas.jpg       (800x600)
│   └── reformas-exteriores.jpg  (800x600)
├── projects/                     (12 proyectos con 3-5 fotos cada uno)
│   ├── piscina-miami-1.jpg      (800x600)
│   ├── piscina-miami-2.jpg
│   ├── piscina-miami-3.jpg
│   ├── piscina-miami-4.jpg
│   ├── pavimento-terraza-1.jpg
│   ├── pavimento-terraza-2.jpg
│   ├── pavimento-terraza-3.jpg
│   └── ... (ver data/projects.ts para lista completa)
└── before-after/                 (6 comparaciones)
    ├── patio-antes.jpg          (800x600)
    ├── patio-despues.jpg        (800x600)
    ├── terraza-antes.jpg
    ├── terraza-despues.jpg
    └── ... (ver data/projects.ts)
```

## 🎨 Especificaciones de Imágenes

### Hero Principal
- **Archivo**: `hero-piscina.jpg`
- **Tamaño**: 1920x1080 o superior
- **Contenido**: Piscina de obra con pavimento impreso o exterior atractivo
- **Formato**: JPG optimizado (< 300KB)

### Open Graph
- **Archivo**: `og-image.jpg`
- **Tamaño**: 1200x630 (exacto)
- **Contenido**: Logo + slogan + imagen representativa
- **Formato**: JPG

### Servicios (4 imágenes)
- **Tamaño**: 800x600 (4:3)
- **Contenido**:
  - `piscinas.jpg`: Piscina terminada de calidad
  - `pavimento-impreso.jpg`: Pavimento con textura clara (madera/adoquín)
  - `muros-fachadas.jpg`: Muro o fachada con revestimiento
  - `reformas-exteriores.jpg`: Antes/después de reforma o solera

### Proyectos (49 imágenes total)
Ver `/src/data/projects.ts` para la lista completa. Cada proyecto necesita 3-5 fotos:
- Vistas generales
- Detalles de acabado
- Diferentes ángulos

### Antes y Después (12 imágenes)
Ver `/src/data/projects.ts` - sección `beforeAfterProjects`:
- 6 comparaciones = 12 imágenes (antes + después de cada una)
- Mismo encuadre en ambas fotos
- Iluminación similar

## 🔄 Cómo Reemplazar Imágenes Placeholder

### Opción 1: Mantener nombres de archivo
1. Prepara tus imágenes con los nombres exactos listados arriba
2. Copia las imágenes en las carpetas correspondientes
3. La web las cargará automáticamente

### Opción 2: Usar nombres personalizados
1. Copia tus imágenes en `/public/images/`
2. Actualiza las referencias en:
   - `/src/data/projects.ts` (rutas de proyectos y before/after)
   - Los componentes que usen imágenes directamente

## 📐 Optimización de Imágenes

Antes de subir, optimiza las imágenes:

### Herramientas recomendadas:
- **TinyPNG**: https://tinypng.com (online)
- **Squoosh**: https://squoosh.app (online)
- **ImageOptim** (Mac)
- **JPEGmini** (Windows/Mac)

### Consejos:
- Calidad JPG: 80-85%
- Tamaño máximo por imagen: 300KB (hero puede ser 500KB)
- Usa WebP cuando sea posible
- Next.js optimizará automáticamente con next/image

## 🎯 Prioridad de Imágenes

Si no tienes todas las imágenes, prioriza:

1. ✅ **Critical** (necesarias para launch):
   - `hero-piscina.jpg`
   - `og-image.jpg`
   - Servicios (4 imágenes)
   - 3-4 proyectos featured (9-12 imágenes)

2. ⚠️ **Important** (mejoran mucho la web):
   - Resto de proyectos
   - Before/After (al menos 3 comparaciones)

3. 🔵 **Nice to have**:
   - Todas las variantes de proyectos
   - Textura concrete-subtle.png

## 📝 Notas

- **Derechos de imagen**: Asegúrate de tener permiso para usar las fotos
- **Privacidad**: Difumina rostros o matrículas si es necesario
- **Marcas de agua**: Considera añadir logo discreto
- **Backup**: Guarda copias de las originales

## 🚀 Fuentes de Imágenes Temporales (Placeholder)

Si necesitas imágenes temporales mientras consigues las reales:

- **Unsplash**: https://unsplash.com/s/photos/swimming-pool
- **Pexels**: https://www.pexels.com/search/outdoor%20pool/
- **Pixabay**: https://pixabay.com/es/images/search/piscina/

**Búsquedas sugeridas**:
- "outdoor pool" / "piscina exterior"
- "stamped concrete" / "pavimento impreso"
- "concrete driveway" / "entrada hormigón"
- "pool construction" / "construcción piscina"

---

**Última actualización**: Noviembre 2024
