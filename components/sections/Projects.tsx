import { Wrench, BookOpen, Users, ClipboardCheck, Settings, TrendingUp } from 'lucide-react'

interface ProjectsProps {
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

export default function Projects({ data }: ProjectsProps) {
  const iconMap: { [key: string]: any } = {
    wrench: Wrench,
    book: BookOpen,
    users: Users,
    clipboard: ClipboardCheck,
    settings: Settings,
    trending: TrendingUp,
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {data.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {data.services.map((project, index) => {
            const Icon = iconMap[project.icon] || Wrench
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg active:shadow-xl transition-all duration-200 active:scale-[0.98] border border-gray-100 hover:border-primary-200 group"
              >
                <div className="bg-primary-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-200 transition-colors">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
