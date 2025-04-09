'use client'

import { useEffect, useRef, useState } from 'react'

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

export default function DataSphere() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-6 max-w-4xl mx-auto transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] leading-tight pb-1">
            DataSphere
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            DataSphere is a simple, web-based tool that helps people view and work with data from different systems — like Salesforce, Oracle, and others — all in one place.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
          You don’t need special access or technical skills. Just log in, 
          choose what information you want to see, and DataSphere will bring 
          it to you in an easy-to-read format. You can even download the results 
          to Excel or CSV with a single click. <br />
          <br />

            Whether you’re looking at customer information, tracking tasks, or analyzing business data — DataSphere makes it fast and easy to get the answers you need.

          </p>

          <div className="mt-10 flex justify-center">
          <a
  href="https://datasphere.deepsri.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 text-lg font-medium transform hover:-translate-y-1 hover:scale-105"
>
  Get Started
</a>

          </div>
        </div>
      </div>
    </section>
  )
}
