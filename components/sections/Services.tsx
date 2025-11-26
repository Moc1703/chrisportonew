import { Wrench, BookOpen, Users, ClipboardCheck, Settings, TrendingUp } from 'lucide-react'

interface ServicesProps {
  data: {
    title: string
    description: string
    services: Array<{
      title: string
      description: string
      icon: string
    }>
  }
}

export default function Services({ data }: ServicesProps) {
  const iconMap: { [key: string]: any } = {
    wrench: Wrench,
    book: BookOpen,
    users: Users,
    clipboard: ClipboardCheck,
    settings: Settings,
    trending: TrendingUp,
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50 section-construction relative">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2">
            {data.title}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <div
                key={index}
                className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary-200 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Pelajari Lebih Lanjut</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
