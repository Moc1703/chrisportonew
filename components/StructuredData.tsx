export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Christian Immanuel Septianto',
    jobTitle: 'Full Stack Developer & AI Engineer',
    url: 'https://chrsm1309.my.id',
    email: 'christianimm36@gmail.com',
    telephone: '+6285161682748',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bali',
      addressCountry: 'ID',
    },
    sameAs: [
      'https://github.com/Moc1703',
    ],
    knowsAbout: [
      'Full Stack Development',
      'AI-Augmented Development',
      'SaaS Architecture',
      'Laravel',
      'Node.js',
      'React',
      'Next.js',
      'Digital Training',
      'Creative Production',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
