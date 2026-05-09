'use client'

import { ArrowUp, Github, Mail, ExternalLink } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-base-light">
      <div className="container-custom py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none border border-base-light flex items-center justify-center font-serif text-xs font-bold text-ink-50">
                CI
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-serif text-ink-50 leading-none">Christian Immanuel</span>
                <span className="text-[9px] font-mono text-ink-300 uppercase tracking-widest mt-1">Portfolio</span>
              </div>
            </div>
            <p className="text-[10px] font-mono text-ink-300 uppercase tracking-widest">
              &copy; {currentYear} — {t('footer.built_with')}
            </p>
          </div>

          {/* Right: Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Moc1703"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none flex items-center justify-center bg-black border border-base-light text-ink-200 hover:bg-white hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:christianimm36@gmail.com"
                className="w-10 h-10 rounded-none flex items-center justify-center bg-black border border-base-light text-ink-200 hover:bg-white hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://chrsm1309.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none flex items-center justify-center bg-black border border-base-light text-ink-200 hover:bg-white hover:text-black transition-colors"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-none flex items-center justify-center bg-black border border-base-light text-ink-200 hover:text-black hover:bg-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
