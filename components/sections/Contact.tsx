'use client'

import { Mail, Phone, MapPin, ExternalLink, ArrowRight, Github } from 'lucide-react'
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
      icon: Mail,
      label: t('contact.email_label'),
      value: 'christianimm36@gmail.com',
      href: 'mailto:christianimm36@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone_label'),
      value: '+62 851 6168 2748',
      href: 'tel:+6285161682748',
    },
    {
      icon: MapPin,
      label: t('contact.location_label'),
      value: t('contact.location_value'),
      href: null,
    },
    {
      icon: ExternalLink,
      label: t('contact.portfolio_label'),
      value: 'chrsm1309.my.id',
      href: 'https://chrsm1309.my.id',
    },
  ]

  return (
    <section id="contact" className="section-padding border-y border-base-border relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text & CTA */}
          <ScrollReveal>
            <div>
              <span className="tech-badge mb-4">
                {t('contact.badge')}
              </span>
              <h2 className="section-title mb-6">{t('contact.title')}</h2>
              <p className="text-lg font-light text-ink-200 mb-12 leading-relaxed max-w-lg">
                {t('contact.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="group px-6 py-3.5 bg-white text-black font-sans font-medium text-sm rounded-none hover:bg-ink-100 transition-colors flex items-center justify-center gap-3"
                >
                  WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="mailto:christianimm36@gmail.com"
                  className="group px-6 py-3.5 bg-black border border-base-light text-ink-50 font-sans font-medium text-sm rounded-none hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3"
                >
                  Email
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact Details Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              const content = (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-black border border-base-light p-6 h-full rounded-none group flex flex-col justify-between hover:bg-white hover:border-white transition-colors duration-500">
                    <div className="w-10 h-10 rounded-none bg-black border border-base-light flex items-center justify-center mb-8 group-hover:border-black group-hover:bg-white transition-colors duration-500">
                      <Icon className="w-4 h-4 text-ink-200 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-ink-300 group-hover:text-black uppercase tracking-widest mb-1.5 transition-colors duration-500">{item.label}</p>
                      <p className="text-sm text-ink-50 group-hover:text-black font-medium break-all transition-colors duration-500">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )

              return item.href ? (
                <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">
                  {content}
                </a>
              ) : (
                <div key={index} className="h-full">{content}</div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
