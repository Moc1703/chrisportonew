'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Import all locale files
import id from '@/content/locales/id.json'
import en from '@/content/locales/en.json'
import zh from '@/content/locales/zh.json'
import ko from '@/content/locales/ko.json'

export type Locale = 'id' | 'en' | 'zh' | 'ko'

export const localeNames: Record<Locale, string> = {
  id: 'Indonesia',
  en: 'English',
  zh: '中文',
  ko: '한국어',
}

export const localeFlags: Record<Locale, string> = {
  id: '🇮🇩',
  en: '🇬🇧',
  zh: '🇨🇳',
  ko: '🇰🇷',
}

const locales: Record<Locale, any> = { id, en, zh, ko }

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: 'id',
  setLocale: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('id')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Locale
    if (saved && locales[saved]) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('portfolio-lang', newLocale)
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : newLocale === 'ko' ? 'ko-KR' : newLocale
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = locales[locale]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to Indonesian
        let fallback: any = locales['id']
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk]
          } else {
            return key
          }
        }
        return typeof fallback === 'string' ? fallback : key
      }
    }
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  return useContext(I18nContext)
}
