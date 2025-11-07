export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  intro: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'piscinas',
    title: 'Piscinas',
    slug: 'piscinas',
    description: 'Diseño y construcción de piscinas de obra con materiales duraderos y acabados personalizados.',
    intro:
      'Diseño y construcción de piscinas de obra con materiales duraderos y acabados personalizados. Ideal para destacar proyectos premium y de hormigón armado.',
    icon: 'waves',
    features: [
      'Piscinas de hormigón armado',
      'Materiales duraderos certificados',
      'Acabados personalizados',
      'Diseño técnico optimizado',
      'Proyectos premium',
    ],
    benefits: [
      'Durabilidad garantizada',
      'Diseños a medida',
      'Materiales de primera calidad',
      'Acabados profesionales',
    ],
  },
  {
    id: 'pavimento-impreso',
    title: 'Pavimentos impresos',
    slug: 'pavimento-impreso',
    description: 'Pavimentos decorativos de hormigón con moldes imitación piedra, madera o adoquín.',
    intro:
      'Pavimentos decorativos de hormigón con moldes imitación piedra, madera o adoquín. Antideslizantes y resistentes al paso del tiempo.',
    icon: 'square-stack',
    features: [
      'Moldes imitación piedra, madera o adoquín',
      'Acabados antideslizantes',
      'Resistentes al paso del tiempo',
      'Gran variedad de texturas y colores',
      'Ideal para terrazas y exteriores',
    ],
    benefits: [
      'Estética y funcionalidad',
      'Bajo mantenimiento',
      'Alta durabilidad',
      'Seguridad antideslizante',
    ],
  },
  {
    id: 'muros-revestimientos',
    title: 'Muros y revestimientos',
    slug: 'muros-revestimientos',
    description: 'Revestimientos verticales y muros decorativos con acabados tipo piedra o ladrillo.',
    intro:
      'Revestimientos verticales y muros decorativos con acabados tipo piedra o ladrillo. Protección y estética para cualquier fachada exterior.',
    icon: 'building',
    features: [
      'Acabados tipo piedra o ladrillo',
      'Revestimientos verticales decorativos',
      'Protección para fachadas',
      'Muros decorativos',
      'Soluciones estéticas y funcionales',
    ],
    benefits: [
      'Protección duradera',
      'Mejora estética',
      'Resistencia a la intemperie',
      'Valor añadido a la propiedad',
    ],
  },
  {
    id: 'reformas-exteriores',
    title: 'Reformas y exteriores',
    slug: 'reformas-exteriores',
    description: 'Rampas, accesos, terrazas y bordes. Soluciones completas para renovar tu espacio exterior.',
    intro:
      'Rampas, accesos, terrazas y bordes. Soluciones completas para renovar tu espacio exterior con calidad y diseño.',
    icon: 'construction',
    features: [
      'Rampas y accesos',
      'Terrazas exteriores',
      'Bordes y delimitaciones',
      'Renovación de espacios',
      'Soluciones integrales',
    ],
    benefits: [
      'Mejora la accesibilidad',
      'Calidad y diseño',
      'Espacios funcionales',
      'Obra profesional',
    ],
  },
];

export const faqs = [
  {
    question: '¿Cuánto tiempo tarda la instalación de pavimento impreso?',
    answer:
      'Depende del tamaño del área, pero generalmente entre 2-4 días para una terraza estándar de 40-60m². Incluye preparación, vertido, moldeado y sellado.',
  },
  {
    question: '¿El pavimento impreso es realmente antideslizante?',
    answer:
      'Sí, aplicamos acabados texturizados y selladores específicos que proporcionan tracción incluso en mojado, ideal para zonas de piscina y exteriores.',
  },
  {
    question: '¿Qué mantenimiento necesita una piscina de obra?',
    answer:
      'Mantenimiento básico: limpieza regular del filtro, control de pH y cloro, y limpieza de paredes. Te damos todas las indicaciones al entregar la obra.',
  },
  {
    question: '¿Cuántos colores de pavimento impreso tenéis disponibles?',
    answer:
      'Trabajamos con más de 20 colores diferentes, desde tonos tierra y grises hasta colores más vivos. También combinamos colores para efectos únicos.',
  },
  {
    question: '¿Dais garantía en vuestros trabajos?',
    answer:
      'Sí, todos nuestros trabajos incluyen garantía. Los detalles específicos dependen del tipo de obra, pero garantizamos la calidad de materiales y ejecución.',
  },
  {
    question: '¿Trabajáis solo en Tarragona ciudad?',
    answer:
      'Trabajamos en Tarragona y toda la zona de alrededores, incluyendo Miami Platja, Cambrils, Salou y poblaciones cercanas.',
  },
  {
    question: '¿Cuánto cuesta construir una piscina?',
    answer:
      'El precio varía según tamaño, forma y acabados. Para una piscina estándar de 8x4m, solicita presupuesto sin compromiso llamando al 678 01 88 95.',
  },
  {
    question: '¿Puedo elegir el diseño del pavimento impreso?',
    answer:
      'Por supuesto. Tenemos moldes de madera, adoquín, piedra irregular, baldosas y más. Te enseñamos muestras y te asesoramos según el estilo que buscas.',
  },
];
