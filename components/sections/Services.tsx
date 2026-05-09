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
    year: '2026',
    titleKey: 'experience.akasha_title',
    companyKey: 'experience.akasha_company',
    descKey: 'experience.akasha_desc',
    tags: ['Wix', 'AI', 'Automation'],
  },
  {
    year: '2023',
    titleKey: 'experience.indie_title',
    companyKey: 'experience.indie_company',
    descKey: 'experience.indie_desc',
    itemKeys: ['experience.indie_item_1', 'experience.indie_item_2', 'experience.indie_item_3'],
    tags: ['Node.js', 'SQLite', 'Lua', 'SaaS'],
  },
  {
    year: '2018',
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
    year: '2023',
    titleKey: 'experience.edu_title',
    companyKey: 'experience.edu_company',
    descKey: 'experience.edu_desc',
  },
  {
    year: 'SMA',
    titleKey: 'experience.award_title',
    companyKey: '',
    descKey: 'experience.award_desc',
  },
]

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="tech-badge mb-4">
              {t('experience.badge')}
            </span>
            <h2 className="section-title mb-6">{t('experience.title')}</h2>
            <p className="section-description">{t('experience.description')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl relative">
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-base-light hidden sm:block"></div>

            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, index) => {
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="relative sm:pl-12 group">
                      {/* Timeline Dot */}
                      <div className="hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] bg-black border border-base-light group-hover:border-white group-hover:bg-white transition-colors duration-300 z-10">
                      </div>

                      <div className="flex flex-col gap-2 items-start mb-4">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-1">
                            <h3 className="text-xl md:text-2xl font-serif text-ink-50">{t(item.titleKey)}</h3>
                            <span className="text-xs font-mono text-ink-200 bg-base-900 px-2.5 py-1 border border-base-light w-fit">
                              {item.year}
                            </span>
                          </div>
                          {item.companyKey && (
                            <p className="text-xs font-mono uppercase tracking-widest text-ink-300 mb-4">{t(item.companyKey)}</p>
                          )}
                          
                          <p className="text-sm md:text-base text-ink-200 leading-relaxed font-light mb-6">{t(item.descKey)}</p>

                          {/* Detail items */}
                          {item.itemKeys && (
                            <ul className="space-y-2 mb-6">
                              {item.itemKeys.map((key, i) => (
                                <li key={i} className="text-sm text-ink-200 font-light pl-4 relative">
                                  <span className="absolute left-0 top-2 w-1 h-1 bg-base-light rounded-none"></span>
                                  {t(key)}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Tags */}
                          {item.tags && (
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, i) => (
                                <span key={i} className="px-2.5 py-1 border border-base-light bg-black text-[10px] font-mono text-ink-300 uppercase tracking-widest">{tag}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
