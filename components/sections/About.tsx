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
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Vision & Mission - side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-600" />
              Visi Kami
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">{data.vision}</p>
          </div>
          <div className="bg-white p-8 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600" />
              Misi Kami
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">{data.mission}</p>
          </div>
        </div>

        {/* Stats - varied sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.stats.map((stat, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={index} className="bg-white p-6 rounded-lg">
                <Icon className="w-8 h-8 text-orange-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Values - simple cards */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Nilai-Nilai Kami</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.values.map((value, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
