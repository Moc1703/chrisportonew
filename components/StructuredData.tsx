import { getContentData } from '@/lib/cms'

export default async function StructuredData() {
  const content = await getContentData()

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Alat Berat Pro',
    description: content.about.description,
    url: 'https://www.websiteanda.com',
    logo: 'https://www.websiteanda.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: content.contact.phone,
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [
      // Add your social media links here
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: content.contact.address,
      addressCountry: 'ID',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Konsultan dan Training Alat Berat',
    provider: {
      '@type': 'Organization',
      name: 'Alat Berat Pro',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Konsultan dan Training Alat Berat',
      itemListElement: content.services.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
