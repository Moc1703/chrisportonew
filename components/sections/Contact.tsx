'use client'

import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import ScrollReveal from '../ScrollReveal'

export default function Contact() {
  const { t } = useTranslation()

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Halo Christian, saya tertarik untuk berkolaborasi!')
    const whatsappUrl = `https://wa.me/6285161682748?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const contactItems = [
    {
      label: t('contact.email_label'),
      value: 'christianimm36@gmail.com',
      href: 'mailto:christianimm36@gmail.com',
    },
    {
      label: t('contact.phone_label'),
      value: '+62 851 6168 2748',
      href: 'tel:+6285161682748',
    },
    {
      label: t('contact.location_label'),
      value: t('contact.location_value'),
      href: null,
    },
    {
      label: t('contact.portfolio_label'),
      value: 'chrsm1309.my.id',
      href: 'https://chrsm1309.my.id',
    },
  ]

  return (
    <section id="contact" className="section-padding border-t border-base-border relative">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="section-header-index">
              <span className="section-index">05 — Contact</span>
            </div>
            <div className="section-header-content">
              <h2 className="display-section text-balance">{t('contact.title')}</h2>
              <p className="section-description mt-6">{t('contact.description')}</p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button onClick={handleWhatsAppClick} className="btn-primary group">
                  WhatsApp
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <a href="mailto:christianimm36@gmail.com" className="btn-ghost group">
                  Email
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact details */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-base-border">
            {contactItems.map((item, index) => {
              const inner = (
                <div className="py-8 lg:py-10 px-0 lg:px-8 first:lg:pl-0 border-b sm:border-b-0 border-base-border lg:border-b-0 sm:border-r sm:last:border-r-0 lg:last:border-r-0 h-full flex flex-col">
                  <p className="section-index mb-3">{item.label}</p>
                  <p className="font-serif text-lg md:text-xl text-ink-50 tracking-display leading-tight break-words">
                    {item.value}
                  </p>
                </div>
              )
              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:bg-base-800/40"
                >
                  {inner}
                </a>
              ) : (
                <div key={index}>{inner}</div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
