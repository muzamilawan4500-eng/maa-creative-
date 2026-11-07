'use client'
import { motion } from 'framer-motion'
import { platforms } from '@/data/brands'
import { productionStandards } from '@/data/stats'

export default function TrustStrip() {
  return (
    <section className="py-16 sm:py-20 border-y border-[#1F1F1F] bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <p className="text-center text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          Multi-Platform Precision
        </p>
        <h2 className="text-center text-white font-playfair text-xl sm:text-2xl font-bold mb-10">
          Engineered for High-Performance Advertising Channels
        </h2>

        {/* Platforms Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-16 px-2">
          {platforms.map(platform => (
            <motion.div
              key={platform.id}
              whileHover={{ scale: 1.04, y: -2 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#141414] border border-[#262626] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm"
            >
              <span className="text-base">{platform.icon}</span>
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                {platform.name}
              </span>
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/20">
                {platform.badge}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider with subtle gold center pulse */}
        <div className="relative w-full max-w-3xl mx-auto mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        </div>

        {/* Production Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {productionStandards.map(item => (
            <div
              key={item.id}
              className="bg-[#111111]/80 border border-[#1F1F1F] rounded-2xl p-6 text-center hover:border-[#D4AF37]/40 transition-colors duration-300 shadow-sm"
            >
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-2 tracking-tight">
                {item.highlight}
              </div>
              <div className="text-white text-sm sm:text-base font-semibold tracking-wide mb-1">
                {item.label}
              </div>
              <p className="text-[#6B7280] text-xs leading-relaxed">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
