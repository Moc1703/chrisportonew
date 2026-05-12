'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslation, localeNames, Locale } from '@/lib/i18n'
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
        className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-ink-200 hover:text-ink-50 transition-colors"
        aria-label="Change language"
      >
        {locale}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-48 bg-base-800 border border-base-border shadow-2xl z-50">
          <div className="flex flex-col">
            {localeList.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocale(loc)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200 border-b border-base-border last:border-0 ${
                  locale === loc
                    ? 'text-ink-50 bg-base-700'
                    : 'text-ink-200 hover:bg-base-700 hover:text-ink-50'
                }`}
              >
                <span className="font-sans">{localeNames[loc]}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300">
                  {loc}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
