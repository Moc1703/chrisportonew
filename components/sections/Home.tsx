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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-accent-50 to-orange-50 section-construction pt-16 sm:pt-20">
      {/* Decorative animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '700ms'}}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Trusted Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-6 hover:shadow-2xl transition-shadow">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-gray-700">Terpercaya & Berpengalaman</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight px-2 drop-shadow-sm">
            {data.title}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6 sm:mb-8 px-2 drop-shadow-sm">
            {data.subtitle}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto font-medium">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg sm:text-xl w-full sm:w-auto group"
            >
              <span>{data.ctaText}</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#about"
              className="btn-secondary text-lg sm:text-xl w-full sm:w-auto text-center"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce touch-target">
        <a href="#about" className="text-primary-600 hover:text-primary-700 block p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </section>
  )
}
