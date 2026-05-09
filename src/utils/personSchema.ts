export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Leigh Bertelsen',
  url: 'https://leighbertelsen.com',
  image: 'https://leighbertelsen.com/og/index.png',
  // TODO (July content pass): update to 'Principal Web Developer' / 'Lead Web Developer'
  // and worksFor.name to 'Hobbii' when the role is announced.
  jobTitle: 'Senior Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Netcompany Banking Services',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Copenhagen',
    addressCountry: 'DK',
  },
  sameAs: ['https://linkedin.com/in/leighbertelsen'],
  knowsAbout: [
    'Web development',
    'Web accessibility',
    'WCAG 2.2',
    'React',
    'TypeScript',
    'Yoga teaching',
    'Contemplative practice',
    'Coaching',
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Drexel University',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Himalayan Institute',
    },
  ],
} as const;
