'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  textSize?: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slides: Slide[] = [
    {
      title: "OPTIMIZE YOUR\nIT OPERATIONS\nFOR EFFICIENCY",
      subtitle: "Empowering Your Digital Future",
      description: "Efficient and cost-effective Product Development and IT services for businesses of all sizes.",
      image: "/images/hero-illustration.png",
      textSize: {
        title: "text-4xl md:text-5xl lg:text-6xl",
        subtitle: "text-lg md:text-xl lg:text-2xl",
        description: "text-lg md:text-xl lg:text-2xl"
      }
    },
    {
      title: "TRANSFORMING\nIDEAS INTO\nREALITY",
      subtitle: "Innovative Solutions, Lasting Impact",
      description: "With expertise in big data and digital transformation, we help businesses navigate the evolving landscape.",
      image: "/images/hero-illustration2.png",
      textSize: {
        title: "text-4xl md:text-5xl lg:text-6xl",
        subtitle: "text-lg md:text-xl lg:text-2xl",
        description: "text-lg md:text-xl lg:text-2xl"
      }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length]) // Added slides.length as dependency

  return (
    <div className="relative bg-[#1a1a2e] text-white min-h-screen overflow-hidden">
      <div className="relative">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="min-w-full min-h-screen relative"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
              </div>

              <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 min-h-screen flex items-center">
                <div className="w-full lg:w-3/5 space-y-4 sm:space-y-6 backdrop-blur-sm bg-black/20 p-6 sm:p-8 lg:p-10 rounded-2xl">
                  <div className={`${slide.textSize?.subtitle || 'text-base sm:text-lg md:text-xl'} text-white font-medium`}>
                    {slide.subtitle}
                  </div>
                  <h1 className={`${slide.textSize?.title || 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'} font-bold leading-tight tracking-tight whitespace-pre-line`}>
                    {slide.title}
                  </h1>
                  <p className={`${slide.textSize?.description || 'text-sm sm:text-base md:text-lg lg:text-xl'} text-gray-300 max-w-2xl`}>
                    {slide.description}
                  </p>
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact')
                      contactSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="rounded-full bg-white text-black hover:bg-gray-100 text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <Button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
