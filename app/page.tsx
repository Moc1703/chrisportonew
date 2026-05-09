'use client'

import { I18nProvider } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Services'
import Projects from '@/components/sections/Gallery'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-dark-900">
        <Navigation />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  )
}
