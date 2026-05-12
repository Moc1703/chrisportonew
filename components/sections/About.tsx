'use client'

import { useTranslation } from '@/lib/i18n'
import ScrollReveal from '../ScrollReveal'

const techStack = [
  'Laravel',
  'Node.js',
  'React / Next.js',
  'TypeScript',
  'AI / Cursor',
  'n8n / Zapier',
  'Canva',
  'Premiere Pro',
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-padding border-t border-base-border relative">
      <div className="container-custom">
        {/* Section header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="section-header-index">
              <span className="section-index">01 — About</span>
            </div>
            <div className="section-header-content">
              <h2 className="display-section text-balance">
                {t('about.title')}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Body */}
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Bio */}
          <ScrollReveal className="col-span-12 lg:col-span-7">
            <div className="space-y-6">
              <p className="lead text-pretty">{t('about.description')}</p>
              <p className="text-base text-ink-200 leading-[1.75] font-light text-pretty">
                {t('about.description_2')}
              </p>
            </div>

            {/* Languages */}
            <div className="mt-14 pt-8 border-t border-base-border">
              <p className="section-index mb-6">{t('about.languages_title')}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-serif text-xl text-ink-50">Indonesian</p>
                  <p className="text-sm text-ink-300 mt-1">Native</p>
                </div>
                <div>
                  <p className="font-serif text-xl text-ink-50">English</p>
                  <p className="text-sm text-ink-300 mt-1">Professional proficiency</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l lg:border-base-border" delay={80}>
            <p className="section-index mb-6">Core stack</p>
            <ul className="flex flex-col divide-y divide-base-border">
              {techStack.map((tech, i) => (
                <li
                  key={tech}
                  className="flex items-baseline justify-between py-3.5 group"
                >
                  <span className="font-serif text-lg md:text-xl text-ink-50">
                    {tech}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
