'use client'

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

interface ContactProps {
  data: {
    title: string
    description: string
    whatsapp: string
    email: string
    address: string
    phone: string
  }
}

export default function Contact({ data }: ContactProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to discuss a project with you.')
    const whatsappUrl = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-primary-100 max-w-3xl mx-auto px-4">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white/20 rounded-lg p-2 sm:p-3 flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">Telepon</h3>
                <a href={`tel:${data.phone}`} className="text-primary-100 active:text-white text-sm sm:text-base break-all">
                  {data.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white/20 rounded-lg p-2 sm:p-3 flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">Email</h3>
                <a href={`mailto:${data.email}`} className="text-primary-100 active:text-white text-sm sm:text-base break-all">
                  {data.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white/20 rounded-lg p-2 sm:p-3 flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">Alamat</h3>
                <p className="text-primary-100 text-sm sm:text-base">{data.address}</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 active:bg-green-600 text-white font-semibold py-3.5 sm:py-4 px-6 rounded-lg transition-all duration-200 shadow-lg active:shadow-md active:scale-95 flex items-center justify-center space-x-3 touch-target"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Contact via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>
            <p className="text-sm sm:text-base text-primary-100 mb-4 sm:mb-6">
              For inquiries or collaboration opportunities, feel free to reach out via WhatsApp or email.
            </p>
            <div className="space-y-4">
              <div className="bg-white/20 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-primary-100">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
