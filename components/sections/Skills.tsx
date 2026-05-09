'use client'

import { useTranslation } from '@/lib/i18n'

interface Skill {
  name: string
  level: number // 1-5
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

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-3 h-1 rounded-full transition-colors duration-300 ${
            i <= level
              ? 'bg-white'
              : 'bg-base-700'
          }`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="section-padding border-t border-base-border relative">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="tech-badge mb-4">
            {t('skills.badge')}
          </span>
          <h2 className="section-title mb-4">{t('skills.title')}</h2>
          <p className="section-description">{t('skills.description')}</p>
        </div>

        {/* Skills Grid - Minimalist */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="tech-card p-8 rounded-2xl"
            >
              <h3 className="text-lg font-medium text-ink-50 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                {t(category.titleKey)}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-sm font-sans text-ink-100 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
