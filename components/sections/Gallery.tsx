'use client'

import { useTranslation } from '@/lib/i18n'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import ScrollReveal from '../ScrollReveal'

interface Project {
  titleKey: string
  descKey: string
  tags: string[]
  size: 'large' | 'medium' | 'small'
  github?: string
  link?: string
}

const projects: Project[] = [
  {
    titleKey: 'projects.autosapa_title',
    descKey: 'projects.autosapa_desc',
    tags: ['Node.js', 'Express', 'WhatsApp API', 'Risk Scoring'],
    size: 'large',
    github: 'https://github.com/Moc1703',
  },
  {
    titleKey: 'projects.kolbl_title',
    descKey: 'projects.kolbl_desc',
    tags: ['SQLite', 'Node.js', 'REST API'],
    size: 'medium',
    github: 'https://github.com/Moc1703',
  },
  {
    titleKey: 'projects.harcourts_one_title',
    descKey: 'projects.harcourts_one_desc',
    tags: ['Laravel', 'PHP', 'MySQL', 'SEO'],
    size: 'medium',
  },
  {
    titleKey: 'projects.roblox_title',
    descKey: 'projects.roblox_desc',
    tags: ['Lua', 'Game Logic', 'Roblox Studio'],
    size: 'small',
  },
  {
    titleKey: 'projects.akasha_title',
    descKey: 'projects.akasha_desc',
    tags: ['Wix', 'AI', 'n8n', 'Automation'],
    size: 'small',
  },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="section-padding border-t border-base-border relative">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          {/* Header */}
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="tech-badge mb-4">
                {t('projects.badge')}
              </span>
              <h2 className="section-title mb-4">{t('projects.title')}</h2>
              <p className="section-description">{t('projects.description')}</p>
            </div>
            
            <a href="https://github.com/Moc1703" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 text-sm text-ink-200 hover:text-white transition-colors group border-b border-transparent hover:border-white pb-1">
              View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        {/* Minimal Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isLarge = project.size === 'large'
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className={`group bg-black border border-base-light hover:bg-white hover:border-white transition-colors duration-500 rounded-none p-8 flex flex-col h-full ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Top: Title + Links */}
                  <div className="flex items-start justify-between mb-8">
                    <h3 className="text-xl sm:text-2xl font-serif text-ink-50 group-hover:text-black transition-colors duration-300 pr-4">
                      {t(project.titleKey)}
                    </h3>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="p-2 border border-black text-black hover:bg-black hover:text-white transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                           className="p-2 border border-black text-black hover:bg-black hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-200 group-hover:text-black leading-relaxed mb-10 flex-grow font-light transition-colors duration-300">
                    {t(project.descKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 border border-base-light group-hover:border-black group-hover:text-black text-[10px] font-mono text-ink-300 uppercase tracking-widest transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
