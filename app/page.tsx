import Hero from '@/components/landing/hero'
import WhyChoose from '@/components/landing/why-choose'
import AboutSection from '@/components/landing/about-section'
import ServicesSection from '@/components/landing/services-section'
import CoreValuesSection from '@/components/landing/core-values-section'
import ContactSection from '@/components/landing/contact-section'
import Footer from '@/components/landing/footer'
import Navbar from '@/components/landing/navbar'
import DataSphere from '@/components/landing/DataSphere'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="why-choose"><WhyChoose /></div>
      <div id="about"><AboutSection /></div>
      <div id="DataSphere"><DataSphere /></div>
      <div id="services"><ServicesSection /></div>
      <div id="core-values"><CoreValuesSection /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </main>
  )
}
