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
    <section id="about" className="py-20 sm:py-24 bg-white">
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

        {/* Stats - prominent display */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-accent-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-50 p-12 sm:p-16 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-900 rounded flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{data.vision}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-900 rounded flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{data.mission}</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10">Nilai-Nilai Kami</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.map((value, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
