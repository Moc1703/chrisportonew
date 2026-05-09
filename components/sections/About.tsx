'use client'

import { useTranslation } from '@/lib/i18n'
import { Globe } from 'lucide-react'
import ScrollReveal from '../ScrollReveal'

const techStack = [
  { name: 'Laravel' },
  { name: 'Node.js' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'AI / Cursor' },
  { name: 'Canva' },
  { name: 'n8n / Zapier' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <span className="tech-badge mb-4">
              {t('about.badge')}
            </span>
            <h2 className="section-title mb-0">{t('about.title')}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left — Avatar & Bio (7 cols) */}
            <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar Block */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-base-900 rounded-none border border-base-light flex items-center justify-center relative overflow-hidden group">
                <span className="text-3xl font-serif text-ink-50 group-hover:scale-110 transition-transform duration-500">CI</span>
              </div>
              
              <div className="space-y-6">
                <p className="text-base md:text-lg text-ink-100 leading-relaxed font-light">
                  {t('about.description')}
                </p>
                <p className="text-sm md:text-base text-ink-200 leading-relaxed font-light">
                  {t('about.description_2')}
                </p>

                {/* Languages */}
                <div className="pt-6 mt-6 border-t border-base-light">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-ink-200" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-200">{t('about.languages_title')}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg grayscale opacity-70">🇮🇩</span>
                      <span className="text-sm text-ink-100">{t('about.lang_id')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg grayscale opacity-70">🇬🇧</span>
                      <span className="text-sm text-ink-100">{t('about.lang_en')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Tech Stack Brutalist List (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-base-900 border border-base-light p-6 sm:p-8 h-full">
                <h3 className="text-[10px] font-mono text-ink-200 uppercase tracking-widest mb-6">
                  Core Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 border border-base-light bg-black text-ink-100 text-xs hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
