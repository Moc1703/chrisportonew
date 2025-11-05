import { Award, Users, Clock, Target } from 'lucide-react'

interface AboutProps {
  data: {
    title: string
    description: string
    mission: string
    vision: string
    values: Array<{ title: string; description: string }>
    stats: Array<{ number: string; label: string }>
  }
}

export default function About({ data }: AboutProps) {
  const icons = [Award, Users, Clock, Target]

  return (
    <section id="about" className="section-padding bg-white">
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

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-16">
          <div className="bg-primary-50 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Visi Kami</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{data.vision}</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Misi Kami</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{data.mission}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          {data.stats.map((stat, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white active:scale-95 transition-transform duration-200"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-primary-100">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {data.values.map((value, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="p-5 sm:p-6 border-2 border-gray-200 rounded-xl active:border-primary-500 transition-all duration-200 active:shadow-lg"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
