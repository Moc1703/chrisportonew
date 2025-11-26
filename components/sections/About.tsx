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
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="container-custom">
        {/* Corporate Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column: Image Block (Simulated) */}
          <div className="relative">
            <div className="bg-gray-200 w-full h-full min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl uppercase tracking-widest border-2 border-gray-300 m-4">
                Corporate Image Placeholder
              </div>
              {/* Yellow Accent Box */}
              <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-yellow-400"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-6 uppercase tracking-tight relative inline-block ut-title">
              {data.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {data.description}
            </p>
            
            {/* Stats Strip - Integrated into text column */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              {data.stats.slice(0, 2).map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-black text-yellow-500 mb-1">{stat.number}</div>
                  <div className="text-xs font-bold text-black uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Mission - Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-50 p-10 border-l-4 border-black hover:border-yellow-400 transition-colors group">
            <h3 className="text-xl font-black text-black uppercase mb-4 group-hover:text-yellow-600 transition-colors">Visi Perusahaan</h3>
            <p className="text-gray-600 leading-relaxed">{data.vision}</p>
          </div>
          <div className="bg-gray-50 p-10 border-l-4 border-black hover:border-yellow-400 transition-colors group">
            <h3 className="text-xl font-black text-black uppercase mb-4 group-hover:text-yellow-600 transition-colors">Misi Perusahaan</h3>
            <p className="text-gray-600 leading-relaxed">{data.mission}</p>
          </div>
        </div>

        {/* Values - Minimalist Grid */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-black text-black mb-10 uppercase">Nilai Inti</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.map((value, index) => (
              <div key={index} className="group">
                <div className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center mb-4 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all">
                  <span className="font-bold text-lg text-gray-400 group-hover:text-black">{index + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-black uppercase mb-2 tracking-wide">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
