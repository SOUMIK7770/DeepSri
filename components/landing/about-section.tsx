

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Reuse the same useInView hook from why-choose.tsx
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

const sections = [
  {
    title: "Our Story",
    description: "At DeepSri, our journey began with a small team of passionate IT enthusiasts driven by a common goal to empower small businesses in overcoming their technology obstacles. Through dedication and commitment, we have evolved into a premier provider of comprehensive IT services, standing as a testament to our unwavering mission and the trust of our valued clients.",
    image: "/images/our-story.png",
    imageAlt: "Team collaboration illustration"
  },
  {
    title: "Our Services",
    description: "We proudly offer a comprehensive range of technology solutions tailored to meet the unique needs of businesses in today's digital landscape. Specializing in Salesforce, Big Data, and Oracle Transportation Management (OTM), we develop and deliver custom products and IT services that empower businesses to thrive.",
    image: "/images/our-services.png",
    imageAlt: "Technology services illustration"
  },
  {
    title: "Our Team",
    description: "At DeepSri, our team is made up of experts in Salesforce, Big Data, and Oracle Transportation Management (OTM). With a focus on innovation and customer success, our certified professionals develop tailored solutions to meet your business needs. We stay continuously updated with complex challenges and deliver results that drive growth.",
    image: "/images/our-team.png",
    imageAlt: "Team members working"
  },
  {
    title: "Our Clients",
    description: "At DeepSri, we take pride in catering to a diverse clientele, ranging from burgeoning startups to well-established enterprises. Our approach revolves around forging close partnerships with each client, allowing us to gain deep insights into their individual needs and preferences.",
    image: "/images/our-clients.png",
    imageAlt: "Client meeting illustration"
  }
]

export default function AboutSection() {
  const [headerRef, headerInView] = useInView()
  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()
  
  const sectionRefs = [[ref1, inView1], [ref2, inView2], [ref3, inView3], [ref4, inView4]]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-12 max-w-4xl mx-auto transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] leading-tight pb-1">
            About DeepSri
          </h2>
          <p className="text-xl text-center text-gray-700">
            Empowering Businesses Through Technology Innovation
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.title}
              ref={sectionRefs[index][0] as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 transform ${
                sectionRefs[index][1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{section.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{section.description}</p>
                </div>
                <div className="flex-1 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-xl"></div>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
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