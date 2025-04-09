'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Cloud, GraduationCap, FolderKanban, Globe, HardDrive } from 'lucide-react'

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

const services = [
  {
    title: "Custom Software Development",
    description: "In the realm of software development, our team leverages expertise in Big Data, Cloud, and Oracle Transportation Management technologies to create tailored solutions that perfectly match your business requirements. From dynamic web applications powered by Salesforce to cutting-edge mobile apps, we're dedicated to engineering software that maximizes efficiency and propels your business forward.",
    Icon: Code2
  },
  {
    title: "Cloud Migration",
    description: "We specialize in facilitating cloud migration for small businesses, striking an optimal balance of flexibility and scalability. Trust our team to guide you through selecting the optimal cloud solution tailored to your business needs and ensure a seamless migration process, enabling you to harness the full potential of cloud technology.",
    Icon: Cloud
  },
  {
    title: "IT Training and Support",
    description: "We offer comprehensive IT training and support services aimed at empowering your employees to maximize the utilization of available technology resources. Our offerings include onsite and virtual training sessions, complemented by ongoing support accessible via phone and email. With our assistance, your team will harness the full potential of technology to drive business success.",
    Icon: GraduationCap
  },
  {
    title: "IT Project Management",
    description: "We offer comprehensive IT project management services, dedicated to ensuring the timely completion, budget adherence, and satisfaction of your IT initiatives. With our proven methodology around planning, strategic resource allocation, and diligent risk management, guaranteeing the success of your projects from inception to completion.",
    Icon: FolderKanban
  },
  {
    title: "Website Design and Development",
    description: "Specializing in website design and development, we excel in creating visually captivating, user-friendly, and search engine-optimized websites. Tailored specifically for small businesses, our websites are crafted to establish a robust online presence, driving visibility and engagement to propel your business forward.",
    Icon: Globe
  },
  {
    title: "Hardware Procurement and Installation",
    description: "We specialize in sourcing and deploying hardware that perfectly aligns with their operational requirements. Count on our team for expert guidance in selecting the optimal hardware solutions and seamless installation aligned with your business needs.",
    Icon: HardDrive
  }
]

export default function ServicesSection() {
  const [headerRef, headerInView] = useInView()
  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()
  const [ref5, inView5] = useInView()
  const [ref6, inView6] = useInView()
  
  const serviceRefs = [[ref1, inView1], [ref2, inView2], [ref3, inView3], 
                      [ref4, inView4], [ref5, inView5], [ref6, inView6]]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-24 max-w-4xl mx-auto transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] leading-tight pb-1">
            Elevate Your Business with DeepSri Solutions
          </h2>
          <p className="text-xl text-center text-gray-700">
            Comprehensive Technology Solutions for Your Success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={serviceRefs[index][0] as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 transform ${
                serviceRefs[index][1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <service.Icon className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 