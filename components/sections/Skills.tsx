'use client'

import { useTranslation } from '@/lib/i18n'
import ScrollReveal from '../ScrollReveal'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  titleKey: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: 'skills.cat_dev',
    skills: [
      { name: 'Laravel (PHP)', level: 5 },
      { name: 'Node.js (Express)', level: 5 },
      { name: 'React / Next.js', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'SQL / SQLite', level: 4 },
      { name: 'WordPress', level: 4 },
      { name: 'Lua (Game)', level: 3 },
    ],
  },
  {
    titleKey: 'skills.cat_ai',
    skills: [
      { name: 'Cursor AI', level: 5 },
      { name: 'Droid AI', level: 4 },
      { name: 'n8n', level: 4 },
      { name: 'Zapier', level: 4 },
      { name: 'Puppeteer', level: 4 },
      { name: 'Git / GitHub', level: 5 },
    ],
  },
  {
    titleKey: 'skills.cat_creative',
    skills: [
      { name: 'Canva', level: 5 },
      { name: 'Adobe Premiere Pro', level: 4 },
      { name: 'CapCut', level: 4 },
      { name: 'Wix', level: 4 },
    ],
  },
  {
    titleKey: 'skills.cat_leadership',
    skills: [
      { name: 'Digital Training', level: 5 },
      { name: 'Event Management', level: 5 },
      { name: 'Corporate Mentorship', level: 4 },
      { name: 'Technical SEO', level: 4 },
    ],
  },
]

function LevelBar({ level }: { level: number }) {
  const pct = (level / 5) * 100
  return (
    <div className="relative w-24 sm:w-28 h-px bg-base-light overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-ink-100"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section
      id="skills"
      className="section-padding border-t border-base-border relative"
    >
      <div className="container-custom">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-header-index">
              <span className="section-index">04 — Skills</span>
            </div>
            <div className="section-header-content">
              <h2 className="display-section text-balance">{t('skills.title')}</h2>
              <p className="section-description mt-6">{t('skills.description')}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Two column editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-14">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div>
                <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-base-border">
                  <h3 className="font-serif text-xl md:text-2xl text-ink-50 tracking-display">
                    {t(category.titleKey)}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
                    0{index + 1}
                  </span>
                </div>
                <ul className="flex flex-col divide-y divide-base-border">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-sm md:text-base text-ink-100">
                        {skill.name}
                      </span>
                      <LevelBar level={skill.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
