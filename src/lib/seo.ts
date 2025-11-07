import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://pavistampdesing.com'),
  title: {
    default: 'Pavistamp Desing - Piscinas y Pavimento Impreso en Tarragona',
    template: '%s | Pavistamp Desing',
  },
  description:
    'Especialistas en construcción de piscinas de obra, pavimento impreso, muros y reformas exteriores en Tarragona y alrededores. Presupuesto sin compromiso.',
  keywords: [
    'piscinas Tarragona',
    'pavimento impreso',
    'construcción piscinas',
    'reformas exteriores',
    'muros Tarragona',
    'Miami Platja',
    'pavimento hormigón impreso',
  ],
  authors: [{ name: 'Pavistamp Desing' }],
  creator: 'Pavistamp Desing',
  publisher: 'Pavistamp Desing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pavistampdesing.com',
    siteName: 'Pavistamp Desing',
    title: 'Pavistamp Desing - Piscinas y Pavimento Impreso en Tarragona',
    description:
      'Especialistas en construcción de piscinas de obra, pavimento impreso, muros y reformas exteriores en Tarragona.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pavistamp Desing - Piscinas y Pavimento Impreso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavistamp Desing - Piscinas y Pavimento Impreso en Tarragona',
    description:
      'Especialistas en construcción de piscinas de obra, pavimento impreso, muros y reformas exteriores.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pavistampdesing.com',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `https://pavistampdesing.com${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'es_ES',
      siteName: 'Pavistamp Desing',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
    alternates: {
      canonical: url,
    },
  };
}
