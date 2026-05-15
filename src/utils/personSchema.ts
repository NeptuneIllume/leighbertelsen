export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Leigh Bertelsen',
  url: 'https://leighbertelsen.com',
  image: 'https://leighbertelsen.com/og/index.png',
  jobTitle: ['Principal Web Developer', 'Yoga Teacher', 'Life Coach'],
  description:
    'Principal web developer, 500-hour certified yoga teacher, and ICF-accredited coach based outside Copenhagen.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Copenhagen',
    addressCountry: 'DK',
  },
  sameAs: [
    'https://linkedin.com/in/leighbertelsen',
    'https://neptuneillume.com',
  ],
} as const;
