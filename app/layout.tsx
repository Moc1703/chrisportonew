import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

// Fraunces: warm, editorial serif with optical size — reads better than Playfair at display scale
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#050504',
}

export const metadata: Metadata = {
  title: 'Christian Immanuel — Full Stack Developer & AI Engineer',
  description:
    'Portfolio of Christian Immanuel Septianto. Full Stack Developer, AI & Automation Engineer, Creative Specialist based in Bali, Indonesia.',
  keywords:
    'full stack developer, AI engineer, automation, portfolio, christian immanuel, bali developer, laravel, node.js, saas architect',
  authors: [{ name: 'Christian Immanuel Septianto' }],
  openGraph: {
    title: 'Christian Immanuel — Full Stack Developer',
    description:
      'Full Stack Developer & AI Engineer with 7+ years experience. Building SaaS platforms 5x faster.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Immanuel — Full Stack Developer',
    description: 'Full Stack Developer & AI Engineer based in Bali, Indonesia.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetbrains.variable} ${fraunces.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-base-900 text-ink-100 font-sans antialiased min-h-screen grain">
        {children}
      </body>
    </html>
  )
}
