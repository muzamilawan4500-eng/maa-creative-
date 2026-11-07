'use client'
import { motion } from 'framer-motion'
import { Package } from '@/data/packages'

interface PricingCardProps {
  pkg: Package
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923017089301'
  const message = encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package.`)
  const href = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <motion.div
      className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
        pkg.featured
          ? 'bg-gradient-to-b from-[#1a1500] to-[#111111] border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]'
          : 'bg-[#111111] border-[#1F1F1F] hover:border-[#D4AF37]/50'
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#D4AF37] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold font-playfair text-white mb-2">{pkg.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold font-playfair ${pkg.featured ? 'text-[#D4AF37]' : 'text-white'}`}>
            {pkg.price}
          </span>
          <span className="text-[#6B7280] text-sm">{pkg.priceNote}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            {feature.included ? (
              <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#6B7280] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={feature.included ? 'text-white' : 'text-[#6B7280]'}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
          pkg.featured
            ? 'bg-[#D4AF37] text-black hover:bg-[#E8C84B] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
            : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
        }`}
      >
        {pkg.cta}
      </a>
    </motion.div>
  )
}
