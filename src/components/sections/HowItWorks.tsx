'use client'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const steps = [
  { number: '01', title: 'Send Your Product', description: 'Share product photos, your brand brief, and target audience. We handle the rest.' },
  { number: '02', title: 'We Create Concepts', description: 'Our team develops creative concepts tailored to your brand and audience.' },
  { number: '03', title: 'You Approve', description: 'Review the concept and give feedback. We refine until you love it.' },
  { number: '04', title: 'Ads Delivered', description: 'Receive ready-to-post ad videos optimised for every platform.' },
]

export default function HowItWorks() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="how-it-works" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">How It Works</h2>
          <p className="text-[#6B7280] mt-4">Simple. Fast. Effective.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6 bg-[#0A0A0A] relative z-10">
                <span className="font-playfair font-bold text-[#D4AF37]">{step.number}</span>
              </div>
              <h3 className="font-playfair font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
