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
    <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Slide Background - Static for now, simulates slider */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
         {/* Simulated Image Background */}
         <div className="absolute inset-0 bg-gray-800 bg-construction-pattern opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-20 w-full h-full flex items-center">
        <div className="max-w-3xl pt-20">
          {/* Corporate Tag Style */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-1 bg-yellow-400"></div>
            <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-sm">
              Heavy Equipment Specialist
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">{data.title.split(' ')[0]}</span>
            <span className="block text-yellow-400">{data.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light border-l-2 border-gray-600 pl-6">
            {data.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0">
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 text-black font-black uppercase tracking-widest py-5 px-10 hover:bg-white transition-colors text-sm"
            >
              {data.ctaText}
            </button>
            <a
              href="#about"
              className="bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest py-5 px-10 hover:bg-white hover:text-black transition-all text-sm flex items-center justify-center"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        
        {/* Slider Indicators (Simulated) */}
        <div className="absolute bottom-10 right-4 sm:right-6 lg:right-8 flex gap-2">
          <div className="w-12 h-1 bg-yellow-400"></div>
          <div className="w-12 h-1 bg-gray-600"></div>
          <div className="w-12 h-1 bg-gray-600"></div>
        </div>
      </div>
    </section>
  )
}
