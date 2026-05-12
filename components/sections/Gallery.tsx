'use client'

import { useTranslation } from '@/lib/i18n'
import { ArrowUpRight, MessageSquare } from 'lucide-react'
import ScrollReveal from '../ScrollReveal'

interface Project {
  titleKey: string
  descKey: string
  tags: string[]
  github?: string
  link?: string
  icon?: React.ElementType
  logoUrl?: string
  year: string
}

const projects: Project[] = [
  {
    titleKey: 'projects.autosapa_title',
    descKey: 'projects.autosapa_desc',
    tags: ['Node.js', 'Express', 'WhatsApp API'],
    github: 'https://github.com/Moc1703',
    icon: MessageSquare,
    year: '2024',
  },
  {
    titleKey: 'projects.kolbl_title',
    descKey: 'projects.kolbl_desc',
    tags: ['SQLite', 'Node.js', 'REST API'],
    github: 'https://github.com/Moc1703',
    link: 'https://kolbl.vercel.app',
    logoUrl: 'https://www.google.com/s2/favicons?domain=kolbl.vercel.app&sz=128',
    year: '2024',
  },
  {
    titleKey: 'projects.harcourts_one_title',
    descKey: 'projects.harcourts_one_desc',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: 'https://harcourts.co.id',
    logoUrl: 'https://www.google.com/s2/favicons?domain=harcourts.co.id&sz=128',
    year: '2023',
  },
  {
    titleKey: 'projects.roblox_title',
    descKey: 'projects.roblox_desc',
    tags: ['Lua', 'Game Logic'],
    link: 'https://www.roblox.com/games/80611911910659/Gunung-Bongkok',
    logoUrl: 'https://www.google.com/s2/favicons?domain=roblox.com&sz=128',
    year: '2025',
  },
  {
    titleKey: 'projects.akasha_title',
    descKey: 'projects.akasha_desc',
    tags: ['Wix', 'AI', 'n8n'],
    link: 'https://akashayogaacademy.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=akashayogaacademy.com&sz=128',
    year: '2026',
  },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section
      id="projects"
      className="section-padding border-t border-base-border relative"
    >
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="section-header-index">
              <span className="section-index">03 — Selected Work</span>
            </div>
            <div className="section-header-content">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="display-section text-balance">{t('projects.title')}</h2>
                  <p className="section-description mt-6">{t('projects.description')}</p>
                </div>
                <a
                  href="https://github.com/Moc1703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] shrink-0 self-start md:self-end"
                >
                  All works
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project rows */}
        <div className="flex flex-col border-t border-base-border">
          {projects.map((project, index) => {
            const href = project.link || project.github
            const Icon = project.icon

            return (
              <ScrollReveal key={index} delay={index * 50} className="border-b border-base-border">
                <a
                  href={href}
                  target={href ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 gap-6 md:gap-8 items-start py-8 md:py-10 transition-colors duration-500 hover:bg-base-800/30"
                >
                  {/* Index + year */}
                  <div className="col-span-3 md:col-span-2 flex flex-col gap-1.5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="col-span-9 md:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      {project.logoUrl ? (
                        <div className="w-8 h-8 flex items-center justify-center border border-base-border bg-base-800 rounded-full overflow-hidden shrink-0">
                          <img
                            src={project.logoUrl}
                            alt=""
                            className="w-4 h-4 object-contain opacity-80"
                          />
                        </div>
                      ) : Icon ? (
                        <div className="w-8 h-8 flex items-center justify-center border border-base-border bg-base-800 rounded-full shrink-0">
                          <Icon
                            className="w-3.5 h-3.5 text-ink-200"
                            strokeWidth={1.5}
                          />
                        </div>
                      ) : null}
                      <h3 className="font-serif text-2xl md:text-3xl text-ink-50 leading-[1.1] tracking-display">
                        {t(project.titleKey)}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-ink-200 leading-[1.65] font-light max-w-xl text-pretty">
                      {t(project.descKey)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-ink-300 border border-base-border rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
                    <div className="w-11 h-11 rounded-full border border-base-border flex items-center justify-center text-ink-200 transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-base-900">
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
