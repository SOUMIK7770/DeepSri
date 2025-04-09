'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Custom hook for intersection observer
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

const features = [
  {
    title: "Expertise and Experience",
    description: "We specialize in both product development and IT services, bringing years of expertise across Salesforce, Big Data, and Oracle Transportation Management (OTM). Our skilled team designs custom products and delivers tailored services that optimize processes and deliver measurable results.",
    image: "/images/solutions.png",
    imageAlt: "Technology solutions illustration"
  },
  {
    title: "Exceptional Service",
    description: "Our team of IT professionals is dedicated to providing exceptional service and support to our clients. We have the expertise and experience to solve even the most complex technology challenges.",
    image: "/images/service.png",
    imageAlt: "Team collaboration illustration"
  }
]

export default function WhyChoose() {
  const [headerRef, headerInView] = useInView()
  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()
  
  const featureRefs = [[ref1, inView1], [ref2, inView2]]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-12 max-w-4xl mx-auto transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] leading-tight pb-1">
            Why Choose DeepSri?
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            Tailored Solutions: Built for your Business
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            At DeepSri, we don&apos;t believe in one-size-fits-all solutions. Specializing in Salesforce, Big Data, and Oracle Transportation Management (OTM), we understand that every business has unique challenges. That&apos;s why we take the time to deeply understand your specific needs before developing custom products tailored to your goals. Our specialized solutions are designed to deliver maximum impact and drive long-term success for your business.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={featureRefs[index][0] as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 transform ${
                featureRefs[index][1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify ">{feature.description}</p>
                </div>
                <div className="flex-1 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-xl"></div>
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={500}
                    height={300}
                    className="rounded-xl shadow-2xl relative transform transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 