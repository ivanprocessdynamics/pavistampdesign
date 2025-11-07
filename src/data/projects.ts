export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'piscinas' | 'pavimento' | 'muros' | 'reformas';
  location: string;
  year: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Piscina en Miami Platja',
    description:
      'Piscina de obra de 8x4m con acabado gresite azul, coronación en piedra natural y zona de solárium con pavimento impreso textura madera.',
    category: 'piscinas',
    location: 'Miami Platja',
    year: '2024',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    ],
    featured: true,
  },
  {
    id: '2',
    title: 'Pavimento impreso textura madera en terraza',
    description:
      'Terraza de 45m² con pavimento impreso imitación madera en color nogal. Acabado antideslizante perfecto para zona de piscina.',
    category: 'pavimento',
    location: 'Tarragona',
    year: '2024',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    ],
    featured: true,
  },
  {
    id: '3',
    title: 'Piscina con cascada en Cambrils',
    description:
      'Piscina con formas curvas, cascada integrada y iluminación LED. Incluye pavimento perimetral y zona de ducha.',
    category: 'piscinas',
    location: 'Cambrils',
    year: '2023',
    images: [
      '/images/projects/piscina-cambrils-1.jpg',
      '/images/projects/piscina-cambrils-2.jpg',
      '/images/projects/piscina-cambrils-3.jpg',
      '/images/projects/piscina-cambrils-4.jpg',
      '/images/projects/piscina-cambrils-5.jpg',
    ],
  },
  {
    id: '4',
    title: 'Pavimento impreso garaje',
    description:
      'Garaje de 60m² con pavimento impreso adoquín en tonos grises. Resistente al tráfico de vehículos y fácil mantenimiento.',
    category: 'pavimento',
    location: 'Salou',
    year: '2024',
    images: [
      '/images/projects/pavimento-garaje-1.jpg',
      '/images/projects/pavimento-garaje-2.jpg',
      '/images/projects/pavimento-garaje-3.jpg',
    ],
  },
  {
    id: '5',
    title: 'Muro de contención con revestimiento piedra',
    description:
      'Muro de contención de 15m con revestimiento de piedra artificial. Solución estética y funcional para desnivel en jardín.',
    category: 'muros',
    location: 'Reus',
    year: '2023',
    images: [
      '/images/projects/muro-reus-1.jpg',
      '/images/projects/muro-reus-2.jpg',
      '/images/projects/muro-reus-3.jpg',
    ],
  },
  {
    id: '6',
    title: 'Patio con pavimento impreso piedra irregular',
    description:
      'Patio de 80m² con diseño de piedra irregular en tonos tierra. Incluye bordillos delimitadores y zona de barbacoa.',
    category: 'pavimento',
    location: 'Tarragona',
    year: '2024',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    ],
    featured: true,
  },
  {
    id: '7',
    title: 'Reforma exterior completa',
    description:
      'Reforma integral de exterior: nueva solera, rampa de acceso, drenaje perimetral y pavimento impreso en acceso principal.',
    category: 'reformas',
    location: 'Cambrils',
    year: '2023',
    images: [
      '/images/projects/reforma-cambrils-1.jpg',
      '/images/projects/reforma-cambrils-2.jpg',
      '/images/projects/reforma-cambrils-3.jpg',
      '/images/projects/reforma-cambrils-4.jpg',
    ],
  },
  {
    id: '8',
    title: 'Piscina pequeña con jacuzzi',
    description:
      'Piscina compacta 6x3m con zona de jacuzzi integrada. Perfecta para espacios reducidos sin renunciar al confort.',
    category: 'piscinas',
    location: 'Miami Platja',
    year: '2024',
    images: [
      '/images/projects/piscina-jacuzzi-1.jpg',
      '/images/projects/piscina-jacuzzi-2.jpg',
      '/images/projects/piscina-jacuzzi-3.jpg',
    ],
  },
  {
    id: '9',
    title: 'Fachada con estucado decorativo',
    description:
      'Revestimiento de fachada con estucado decorativo en tonos cálidos. Acabado impermeable y de alta durabilidad.',
    category: 'muros',
    location: 'Tarragona',
    year: '2023',
    images: [
      '/images/projects/fachada-tarragona-1.jpg',
      '/images/projects/fachada-tarragona-2.jpg',
      '/images/projects/fachada-tarragona-3.jpg',
    ],
  },
  {
    id: '10',
    title: 'Camino de entrada con pavimento impreso',
    description:
      'Camino de acceso a vivienda de 35m² con diseño de adoquín envejecido. Combinación de dos tonos para efecto realista.',
    category: 'pavimento',
    location: 'Salou',
    year: '2024',
    images: [
      '/images/projects/camino-salou-1.jpg',
      '/images/projects/camino-salou-2.jpg',
      '/images/projects/camino-salou-3.jpg',
    ],
  },
  {
    id: '11',
    title: 'Solera y drenaje en jardín',
    description:
      'Nueva solera con sistema de drenaje integrado para evitar acumulación de agua. Incluye rejillas decorativas.',
    category: 'reformas',
    location: 'Reus',
    year: '2023',
    images: [
      '/images/projects/solera-reus-1.jpg',
      '/images/projects/solera-reus-2.jpg',
      '/images/projects/solera-reus-3.jpg',
    ],
  },
  {
    id: '12',
    title: 'Piscina infinity con vistas al mar',
    description:
      'Piscina desbordante tipo infinity con vistas al Mediterráneo. Gresite verde agua y sistema de iluminación nocturna.',
    category: 'piscinas',
    location: 'Miami Platja',
    year: '2023',
    images: [
      '/images/projects/piscina-infinity-1.jpg',
      '/images/projects/piscina-infinity-2.jpg',
      '/images/projects/piscina-infinity-3.jpg',
      '/images/projects/piscina-infinity-4.jpg',
      '/images/projects/piscina-infinity-5.jpg',
    ],
    featured: true,
  },
];

export const beforeAfterProjects = [
  {
    id: 'ba-1',
    title: 'Transformación de patio en terraza con piscina',
    category: 'piscinas',
    location: 'Tarragona',
    before: '/images/before-after/patio-antes.jpg',
    after: '/images/before-after/patio-despues.jpg',
    description:
      'Patio sin uso convertido en zona de ocio con piscina 6x3m y pavimento impreso.',
  },
  {
    id: 'ba-2',
    title: 'Renovación de terraza deteriorada',
    category: 'pavimento',
    location: 'Cambrils',
    before: '/images/before-after/terraza-antes.jpg',
    after: '/images/before-after/terraza-despues.jpg',
    description:
      'Terraza con baldosas rotas sustituida por pavimento impreso textura madera.',
  },
  {
    id: 'ba-3',
    title: 'Acceso de garaje renovado',
    category: 'pavimento',
    location: 'Salou',
    before: '/images/before-after/garaje-antes.jpg',
    after: '/images/before-after/garaje-despues.jpg',
    description: 'Acceso de hormigón gris convertido en adoquín decorativo.',
  },
  {
    id: 'ba-4',
    title: 'Jardín con desnivel solucionado',
    category: 'muros',
    location: 'Reus',
    before: '/images/before-after/jardin-antes.jpg',
    after: '/images/before-after/jardin-despues.jpg',
    description: 'Muro de contención con revestimiento piedra y zona plana ganada.',
  },
  {
    id: 'ba-5',
    title: 'Piscina antigua reformada',
    category: 'piscinas',
    location: 'Miami Platja',
    before: '/images/before-after/piscina-vieja-antes.jpg',
    after: '/images/before-after/piscina-vieja-despues.jpg',
    description:
      'Piscina de los años 80 completamente renovada con nuevos acabados y sistema de filtración.',
  },
  {
    id: 'ba-6',
    title: 'Entrada principal mejorada',
    category: 'pavimento',
    location: 'Tarragona',
    before: '/images/before-after/entrada-antes.jpg',
    after: '/images/before-after/entrada-despues.jpg',
    description: 'Entrada de tierra y gravilla convertida en pavimento impreso adoquín.',
  },
];
