'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-panel py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-12">
            {/* Wordmark */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-baseline gap-2.5"
              aria-label="Home"
            >
              <span className="font-serif text-base md:text-lg tracking-display text-ink-50">
                Christian Immanuel
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-[11px] font-mono uppercase tracking-[0.22em] transition-colors duration-300 ${
                      activeId === item.id ? 'text-ink-50' : 'text-ink-300 hover:text-ink-100'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-ink-50 transition-all duration-500 ${
                        activeId === item.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="ml-8 pl-8 border-l border-base-border flex items-center gap-4">
                <LanguageSwitcher />
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 bg-ink-50 text-base-900 text-[11px] font-mono font-medium uppercase tracking-[0.2em] rounded-full hover:bg-brand-hover transition-colors"
                >
                  {t('nav.cta')}
                </button>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                className="text-ink-100 p-2 hover:text-ink-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[56px] bg-base-900/98 backdrop-blur-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container-custom py-8">
            <div className="flex flex-col divide-y divide-base-border">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-baseline justify-between py-5 text-left group"
                >
                  <span className="font-serif text-2xl text-ink-50 group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
            <div className="pt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 bg-ink-50 text-base-900 font-mono font-medium uppercase tracking-[0.2em] text-xs rounded-full hover:bg-brand-hover transition-colors"
              >
                {t('nav.cta')}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
