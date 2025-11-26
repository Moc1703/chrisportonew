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
    <section id="home" className="relative bg-primary-900 text-white pt-20 sm:pt-24 pb-20 sm:pb-32">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-construction-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {data.title}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-accent-400">
            {data.subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary w-full sm:w-auto"
            >
              {data.ctaText}
            </button>
            <a
              href="#about"
              className="btn-secondary text-white border-white hover:bg-white hover:text-primary-900 w-full sm:w-auto text-center"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-accent-400 block p-2 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
