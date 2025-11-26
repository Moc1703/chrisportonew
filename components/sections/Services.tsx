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
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:bg-orange-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
