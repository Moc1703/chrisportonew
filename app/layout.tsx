import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konsultan & Training Alat Berat | Profesional & Terpercaya',
  description: 'Layanan konsultan dan training alat berat profesional. Kami menyediakan jasa konsultasi dan pelatihan untuk operator alat berat dengan pengalaman bertahun-tahun.',
  keywords: 'konsultan alat berat, training alat berat, pelatihan alat berat, jasa konsultan alat berat, operator alat berat',
  authors: [{ name: 'Company Profile' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'Konsultan & Training Alat Berat | Profesional & Terpercaya',
    description: 'Layanan konsultan dan training alat berat profesional',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konsultan & Training Alat Berat',
    description: 'Layanan konsultan dan training alat berat profesional',
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
    canonical: '/',
  },
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
