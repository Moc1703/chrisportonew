'use client'

import { ChevronDown } from 'lucide-react'

interface HomeProps {
  data: {
    title: string
    subtitle: string
    description: string
    ctaText: string
  }
}

export default function Home({ data }: HomeProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-16 sm:pt-20">
      <div className="container-custom py-12 sm:py-16">
        <div className="max-w-4xl">
          {/* Simple badge */}
          <div className="inline-block bg-orange-100 px-4 py-2 rounded mb-6">
            <span className="text-sm text-orange-800 font-medium">✓ Terpercaya Sejak 2014</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            {data.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-orange-600 font-semibold mb-6">
            {data.subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto text-base sm:text-lg"
            >
              {data.ctaText} →
            </button>
            <a
              href="#about"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto text-center text-base sm:text-lg"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
      
      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-orange-600 block p-2 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
