'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslation, localeNames, localeFlags, Locale } from '@/lib/i18n'
import { ChevronDown } from 'lucide-react'

const localeList: Locale[] = ['id', 'en', 'zh', 'ko']

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black border border-base-light hover:border-white transition-colors duration-300 text-sm"
        aria-label="Change language"
      >
        <span className="text-base">{localeFlags[locale]}</span>
        <span className="text-ink-100 font-mono font-medium hidden sm:inline uppercase">{locale}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-ink-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-black border border-base-light z-50 animate-fade-in-up">
          <div className="flex flex-col divide-y divide-base-border">
            {localeList.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocale(loc)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${locale === loc
                  ? 'bg-white text-black font-medium'
                  : 'text-ink-200 hover:bg-white hover:text-black'
                  }`}
              >
                <span className="text-base">{localeFlags[loc]}</span>
                <span className="font-sans">{localeNames[loc]}</span>
                {locale === loc && (
                  <span className="ml-auto w-1.5 h-1.5 bg-black"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
