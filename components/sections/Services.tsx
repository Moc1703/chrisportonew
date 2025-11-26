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
        {/* Section header - Left Aligned */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-6 uppercase tracking-tight ut-title inline-block">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services grid - Product Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <div
                key={index}
                className="bg-white group border-b-4 border-transparent hover:border-yellow-400 transition-all shadow-sm hover:shadow-lg"
              >
                {/* Image Placeholder Block */}
                <div className="bg-gray-200 aspect-video w-full relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                     Service Image
                   </div>
                   {/* Overlay on hover */}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-black text-black uppercase tracking-tight group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-xs font-bold text-black uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                    Selengkapnya <span className="text-yellow-500 ml-2">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
