'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-panel py-2'
          : 'bg-transparent py-4'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-serif text-sm font-bold rounded-none group-hover:bg-ink-100 transition-colors duration-300">
                CI
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-medium text-ink-50 tracking-tight">Christian Immanuel</span>
                <span className="text-[9px] font-mono text-ink-300 uppercase tracking-widest mt-0.5">Developer</span>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-ink-200 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="ml-4 pl-4 border-l border-base-light flex items-center gap-4">
                <LanguageSwitcher />
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-5 py-2 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest rounded-none hover:bg-black hover:text-white border border-transparent hover:border-white transition-all duration-300"
                >
                  {t('nav.cta')}
                </button>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSwitcher />
              <button
                className="text-ink-100 p-2 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[60px] bg-base-900/95 backdrop-blur-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container-custom py-8 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 text-sm font-mono uppercase tracking-widest text-ink-100 hover:text-white transition-colors duration-300 border-b border-base-border"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 bg-white text-black font-mono font-bold uppercase tracking-widest rounded-none hover:bg-black hover:text-white border border-transparent hover:border-white transition-colors"
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
