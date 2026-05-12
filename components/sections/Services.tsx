'use client'

import { useTranslation } from '@/lib/i18n'
import ScrollReveal from '../ScrollReveal'

interface TimelineItem {
  year: string
  titleKey: string
  companyKey: string
  descKey: string
  itemKeys?: string[]
  tags?: string[]
}

const timeline: TimelineItem[] = [
  {
    year: '2026 — Now',
    titleKey: 'experience.akasha_title',
    companyKey: 'experience.akasha_company',
    descKey: 'experience.akasha_desc',
    tags: ['Wix', 'AI', 'Automation'],
  },
  {
    year: '2023 — Now',
    titleKey: 'experience.indie_title',
    companyKey: 'experience.indie_company',
    descKey: 'experience.indie_desc',
    itemKeys: [
      'experience.indie_item_1',
      'experience.indie_item_2',
      'experience.indie_item_3',
    ],
    tags: ['Node.js', 'SQLite', 'Lua', 'SaaS'],
  },
  {
    year: '2018 — 2026',
    titleKey: 'experience.harcourts_title',
    companyKey: 'experience.harcourts_company',
    descKey: 'experience.harcourts_desc',
    itemKeys: [
      'experience.harcourts_item_1',
      'experience.harcourts_item_2',
      'experience.harcourts_item_3',
      'experience.harcourts_item_4',
      'experience.harcourts_item_5',
    ],
    tags: ['Laravel', 'Canva', 'Premiere Pro', 'AI Workflow'],
  },
  {
    year: '2020 — 2023',
    titleKey: 'experience.edu_title',
    companyKey: 'experience.edu_company',
    descKey: 'experience.edu_desc',
  },
  {
    year: '2016 — 2018',
    titleKey: 'experience.award_title',
    companyKey: '',
    descKey: 'experience.award_desc',
  },
]

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section-padding border-t border-base-border relative">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="section-header-index">
              <span className="section-index">02 — Experience</span>
            </div>
            <div className="section-header-content">
              <h2 className="display-section text-balance">{t('experience.title')}</h2>
              <p className="section-description mt-6">{t('experience.description')}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline list */}
        <div className="flex flex-col">
          {timeline.map((item, index) => (
            <ScrollReveal key={index} delay={index * 60} className="border-t border-base-border first:border-t-0">
              <article className="grid grid-cols-12 gap-6 md:gap-8 py-10 md:py-12">
                {/* Year column */}
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
                    {item.year}
                  </span>
                </div>

                {/* Content column */}
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-[28px] text-ink-50 leading-[1.15] tracking-display">
                    {t(item.titleKey)}
                  </h3>
                  {item.companyKey && (
                    <p className="mt-2 text-sm font-mono uppercase tracking-[0.2em] text-ink-300">
                      {t(item.companyKey)}
                    </p>
                  )}
                  <p className="mt-5 text-base text-ink-200 leading-[1.7] font-light max-w-2xl text-pretty">
                    {t(item.descKey)}
                  </p>

                  {item.itemKeys && (
                    <ul className="mt-6 space-y-2.5 max-w-2xl">
                      {item.itemKeys.map((key, i) => (
                        <li
                          key={i}
                          className="pl-5 relative text-sm text-ink-200 leading-[1.7] font-light text-pretty"
                        >
                          <span className="absolute left-0 top-[0.65em] w-2.5 h-px bg-ink-400" />
                          {t(key)}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-ink-300 border border-base-border rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
