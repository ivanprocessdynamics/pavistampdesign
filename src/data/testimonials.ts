export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María García',
    location: 'Miami Platja',
    rating: 5,
    text: 'Iván y su equipo hicieron un trabajo excepcional en nuestra piscina. Muy profesionales, puntuales y el resultado superó nuestras expectativas. La zona de pavimento impreso alrededor quedó preciosa.',
    service: 'Piscina de obra',
    date: '2024-03',
  },
  {
    id: '2',
    name: 'Josep Martínez',
    location: 'Tarragona',
    rating: 5,
    text: 'Contraté a Pavistamp para el pavimento impreso de mi terraza y no puedo estar más contento. El acabado imitación madera es perfecto y el trato fue inmejorable. Totalmente recomendables.',
    service: 'Pavimento impreso',
    date: '2024-02',
  },
  {
    id: '3',
    name: 'Laura Fernández',
    location: 'Cambrils',
    rating: 5,
    text: 'Reformaron todo el exterior de mi casa: muro de contención, solera nueva y pavimento. Trabajo impecable, presupuesto ajustado y cumplieron los plazos. Muy satisfecha.',
    service: 'Reforma exterior',
    date: '2023-11',
  },
  {
    id: '4',
    name: 'Carlos Ruiz',
    location: 'Salou',
    rating: 5,
    text: 'El pavimento del garaje quedó espectacular. Resistente, bonito y antideslizante. Iván estuvo siempre disponible para resolver dudas. Gran profesional.',
    service: 'Pavimento impreso',
    date: '2024-01',
  },
  {
    id: '5',
    name: 'Ana Sánchez',
    location: 'Reus',
    rating: 5,
    text: 'Nos hicieron la piscina el año pasado y este verano la estamos disfrutando al máximo. Calidad en materiales y mano de obra. El trato directo con Iván facilita mucho todo el proceso.',
    service: 'Piscina de obra',
    date: '2023-06',
  },
  {
    id: '6',
    name: 'Miguel Ángel Torres',
    location: 'Miami Platja',
    rating: 5,
    text: 'Revestimiento de fachada perfecto. El estucado quedó muy bien y han solucionado los problemas de humedad que teníamos. Muy contentos con el resultado.',
    service: 'Muros y fachadas',
    date: '2023-09',
  },
];
