import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Packages from '@/components/sections/Packages'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <BeforeAfter />
      <Portfolio />
      <Services />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
    </main>
  )
}
