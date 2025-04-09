'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-bold flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Deepsri Logo"
              width={150}
              height={150}
              className="object-contain opacity-90"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                What We Do
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg py-2 w-48 shadow-lg">
                  <div className="relative group">
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="w-full text-left px-4 py-2 text-white hover:bg-blue-500/20 flex items-center justify-between"
                    >
                      Products <ChevronDown className="w-3 h-3" />
                    </button>
                    {isProductsOpen && (
                      <div className="absolute left-full top-0 mt-0 bg-black/90 backdrop-blur-sm rounded-lg py-2 w-48">
                        <button
                          onClick={() => {
                            scrollToSection('DataSphere')
                            setIsProductsOpen(false)
                            setIsServicesOpen(false)
                          }}
                          className="block w-full text-left px-4 py-2 text-white hover:bg-blue-500/20"
                        >
                          DataSphere
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      scrollToSection('services')
                      setIsServicesOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-blue-500/20"
                  >
                    Services
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('core-values')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Core Values
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm py-4 px-6 md:hidden">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    What We Do
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <div>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="text-white hover:text-blue-400 flex items-center gap-1"
                        >
                          Products
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {isProductsOpen && (
                          <div className="pl-4 mt-2">
                            <button
                              onClick={() => {
                                scrollToSection('DataSphere')
                                setIsProductsOpen(false)
                                setIsServicesOpen(false)
                                setIsMobileMenuOpen(false)
                              }}
                              className="block text-left text-white hover:text-blue-400"
                            >
                              DataSphere
                            </button>
                          </div>
                        )}
                      </div>

                      <button 
                        onClick={() => {
                          scrollToSection('services')
                          setIsServicesOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                        className="block w-full text-left text-white hover:text-blue-400"
                      >
                        Services
                      </button>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => {
                    scrollToSection('why-choose')
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-blue-400 transition-colors text-left"
                >
                  Why Choose Us
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about')
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-blue-400 transition-colors text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('core-values')
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-blue-400 transition-colors text-left"
                >
                  Core Values
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
