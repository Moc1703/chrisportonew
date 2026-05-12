'use client'

import { useTranslation } from '@/lib/i18n'
import { ArrowUpRight, Github, Download } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export default function Home() {
  const { t } = useTranslation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden hero-ambient"
    >
      <div className="container-custom relative z-10 w-full">
        {/* Top meta row */}
        <FadeIn delay={0}>
          <div className="flex items-center justify-between mb-20 sm:mb-28">
            <span className="section-index">Portfolio — 2026</span>
            <div className="hidden sm:flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
                Available for work
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Hero title */}
        <FadeIn delay={0.1}>
          <h1 className="display-hero text-balance">
            <span className="block text-ink-400 font-light text-[0.5em] tracking-[0.02em] mb-6 font-sans uppercase">
              {t('hero.greeting')}
            </span>
            Christian
            <br />
            <span className="accent-italic">Immanuel.</span>
          </h1>
        </FadeIn>

        {/* Description — single line */}
        <FadeIn delay={0.2}>
          <p className="lead mt-10 max-w-2xl text-pretty">
            {t('hero.description')}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              {t('hero.cta_primary')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <a
              href="/CV_Christian_Immanuel.pdf"
              download="CV_Christian_Immanuel.pdf"
              className="btn-ghost"
            >
              <Download className="w-4 h-4" />
              {t('hero.cta_secondary')}
            </a>
            <a
              href="https://github.com/Moc1703"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Bottom meta strip */}
        <FadeIn delay={0.4}>
          <div className="mt-24 sm:mt-32 pt-8 border-t border-base-border grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="section-index mb-2">Role</p>
              <p className="text-sm text-ink-100 leading-snug">
                {t('hero.subtitle_1')}
              </p>
            </div>
            <div>
              <p className="section-index mb-2">Focus</p>
              <p className="text-sm text-ink-100 leading-snug">
                {t('hero.subtitle_2')}
              </p>
            </div>
            <div>
              <p className="section-index mb-2">Experience</p>
              <p className="text-sm text-ink-100 leading-snug">
                7+ {t('hero.stat_years').toLowerCase().includes('year') ? 'years' : 'tahun'}
              </p>
            </div>
            <div>
              <p className="section-index mb-2">Based in</p>
              <p className="text-sm text-ink-100 leading-snug">Bali, Indonesia</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
