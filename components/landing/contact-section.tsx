'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

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

export default function ContactSection() {
  const [textRef, textInView] = useInView()
  const [formRef, formInView] = useInView()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contact-bg.png"
        alt="Contact background"
        fill
        className="object-cover object-center brightness-[0.2] animate-fade-in"
        priority
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          {/* Left Column - Text */}
          <div 
            ref={textRef}
            className={`flex-1 w-full md:max-w-xl transition-all duration-1000 transform ${
              textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4 text-white">
              Get In Touch with Us Anytime!
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Better yet, see us in person!
            </p>
            <p className="text-gray-300">
              We love our customers, so feel free to visit during normal business hours.
            </p>
          </div>

          {/* Right Column - Form */}
          <div 
            ref={formRef}
            className={`flex-1 w-full md:max-w-xl transition-all duration-1000 delay-300 transform ${
              formInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form
              action="https://formsubmit.co/iamsoumik.pohi@gmail.com" //Replace with your email
              method="POST"
              className="space-y-6"
            >
              {/* Formsubmit Hidden Config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://deepsri.com/" />
              {/* Update the website link before live hosting */}
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
