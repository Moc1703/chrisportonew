'use client'

import { ArrowUp, Github, Mail, ExternalLink } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-base-border">
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="font-serif text-base text-ink-50">Christian Immanuel</p>
            <span className="hidden sm:block w-px h-3 bg-base-light" />
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
              © {currentYear}
            </p>
          </div>

          {/* Right: social + back to top */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Moc1703"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:christianimm36@gmail.com"
              className="btn-icon"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://chrsm1309.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="Portfolio"
            >
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <button onClick={scrollToTop} className="btn-icon ml-2" aria-label="Back to top">
              <ArrowUp className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
