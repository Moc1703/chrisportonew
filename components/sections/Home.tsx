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
    <section id="home" className="relative bg-gray-900 text-white h-screen min-h-[600px] flex items-center">
      {/* Overlay for better text contrast - Solid Corporate Style */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Placeholder for Hero Image - In real usage this would be an <Image> component */}
      <div className="absolute inset-0 bg-gray-800 -z-10"></div> 
      
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-block bg-accent-500 text-black font-bold px-3 py-1 mb-6 text-sm tracking-widest uppercase">
            Mitra Terpercaya Anda
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            {data.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-gray-200 max-w-2xl border-l-4 border-accent-500 pl-4">
            {data.subtitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
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
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
