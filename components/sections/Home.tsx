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
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16 sm:pt-20">
      <div className="container-custom section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            {data.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary-600 font-semibold mb-4 sm:mb-6 px-2">
            {data.subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={scrollToProjects}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto"
            >
              {data.ctaText}
            </button>
            <a
              href="#about"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce touch-target">
        <a href="#about" className="text-primary-600 active:text-primary-700 block p-2">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </section>
  )
}
