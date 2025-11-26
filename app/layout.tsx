import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourName - Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in modern web technologies. Building beautiful, functional, and scalable applications with Next.js, React, TypeScript, and more.',
  keywords: 'full stack developer, web developer, react developer, next.js, typescript, portfolio, software engineer, frontend, backend',
  authors: [{ name: 'YourName' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'YourName - Full Stack Developer Portfolio',
    description: 'Full Stack Developer creating innovative digital solutions with modern web technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourName - Full Stack Developer',
    description: 'Full Stack Developer Portfolio - Modern Web Development',
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
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
