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
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full filter blur-3xl opacity-20 -z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2">
            {data.title}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-20">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary-200">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Visi Kami</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{data.vision}</p>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-accent-200">
            <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Misi Kami</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{data.mission}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20">
          {data.stats.map((stat, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base font-semibold text-primary-50">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {data.values.map((value, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-primary-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
