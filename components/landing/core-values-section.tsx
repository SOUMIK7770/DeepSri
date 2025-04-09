'use client'

import { useEffect, useRef, useState } from 'react'
import { Timer, Target, Lightbulb, Trophy, Flag } from 'lucide-react'

function useInView(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return [ref, isInView]
}

const values = [
  {
    title: "Our Vision",
    description: "Building tomorrow's technology solutions today",
    Icon: Timer,
    gradient: "from-purple-500 to-blue-500"
  },
  {
    title: "Innovation",
    description: "Constantly pushing boundaries with creative solutions",
    Icon: Target,
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    title: "Excellence",
    description: "Delivering exceptional quality in everything we do",
    Icon: Lightbulb,
    gradient: "from-green-500 to-lime-500"
  },
  {
    title: "Our Values",
    description: "Integrity, transparency, and customer success",
    Icon: Trophy,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Our Mission",
    description: "Empowering businesses through technology",
    Icon: Flag,
    gradient: "from-pink-500 to-rose-500"
  }
]

export default function CoreValuesSection() {
  const [headerRef, headerInView] = useInView()
  const [valuesRef, valuesInView] = useInView()

  return (
    <section className="py-24 bg-slate-900  ">
      <div className="max-w-7xl mx-auto px-6 ">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-white">DeepSri is different because of</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
        </div>

        <div
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 "
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`relative group transition-all duration-1000 delay-[${index * 200}ms] transform ${
                valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div 
                className={` absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              />
              <div className="relative bg-slate-800 rounded-xl p-6 h-full border border-slate-700 group-hover:border-slate-600 transition-colors duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3  rounded-full bg-gradient-to-r ${value.gradient}`}>
                    <value.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-slate-400 text-center">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-20" />
        </div>
      </div>
    </section>
  )
} 