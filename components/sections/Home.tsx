'use client'

import { useTranslation } from '@/lib/i18n'
import { ArrowRight, Github } from 'lucide-react'

export default function Home() {
  const { t } = useTranslation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container-custom relative z-10 w-full py-20">
        <div className="max-w-4xl">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 mb-12 px-3 py-1.5 rounded-full bg-base-800/50 border border-base-border backdrop-blur-md">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow"></div>
            <span className="text-ink-200 font-mono text-[10px] tracking-widest uppercase">
              {t('hero.greeting')}
            </span>
          </div>

          {/* Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-medium text-ink-50 leading-[1.05] tracking-tight mb-8">
            <span className="block text-ink-200">Christian</span>
            <span className="block">Immanuel.</span>
          </h1>

          {/* Roles */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 font-mono text-ink-300 uppercase tracking-widest text-[10px] sm:text-xs mb-10">
            <span>{t('hero.subtitle_1')}</span>
            <span className="hidden sm:block w-1 h-1 bg-base-light rounded-full"></span>
            <span>{t('hero.subtitle_2')}</span>
            <span className="hidden sm:block w-1 h-1 bg-base-light rounded-full"></span>
            <span>{t('hero.subtitle_3')}</span>
          </div>

          <p className="text-base sm:text-lg text-ink-200 leading-relaxed max-w-2xl mb-12 font-light">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-6 py-3.5 bg-white text-black font-sans font-medium text-sm rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('hero.cta_primary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/Moc1703"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-base-800/50 text-ink-50 font-sans font-medium text-sm rounded-full border border-base-border hover:bg-base-800 backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Stats Strip */}
          <div className="flex flex-wrap gap-8 sm:gap-16 pt-8 border-t border-base-border">
            <div className="group">
              <div className="text-3xl font-sans text-ink-50 mb-1 group-hover:text-white transition-colors">{t('hero.stat_years').split(' ')[0] === 'Tahun' ? '7+' : '7+'}</div>
              <div className="text-[10px] font-mono text-ink-300 uppercase tracking-widest">{t('hero.stat_years')}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-sans text-ink-50 mb-1 group-hover:text-white transition-colors">100+</div>
              <div className="text-[10px] font-mono text-ink-300 uppercase tracking-widest">{t('hero.stat_trained')}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-sans text-ink-50 mb-1 group-hover:text-white transition-colors">5x</div>
              <div className="text-[10px] font-mono text-ink-300 uppercase tracking-widest">{t('hero.stat_faster')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
