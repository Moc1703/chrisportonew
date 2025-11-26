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
    <section id="services" className="py-20 sm:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-xl transition-all border border-gray-100 rounded-lg group"
              >
                <div className="w-16 h-16 bg-primary-900 rounded flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                  <Icon className="w-8 h-8 text-accent-400 group-hover:text-primary-900 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
