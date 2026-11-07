'use client'
import { motion } from 'framer-motion'

const guarantees = [
  {
    icon: '🎯',
    title: 'The 3-Second Hook Rule',
    tag: 'Retention Engineered',
    description:
      'Over 85% of social users scroll past ordinary posts in seconds. We engineer aggressive, high-energy opening hooks designed specifically to stop thumbs and hold attention.',
  },
  {
    icon: '🎧',
    title: 'Cinematic Sound & Motion',
    tag: 'Commercial Quality',
    description:
      'High-converting ads are 50% sound. We layer professional Foley, impact risers, licensed music, and dynamic motion graphics that elevate your product to luxury commercial grade.',
  },
  {
    icon: '🎁',
    title: 'Risk-Free Sample Hook',
    tag: 'Zero-Risk Testing',
    description:
      'We believe in proving our creative quality before you commit. Send us your product footage or photos and we will craft a free 10-second sample hook for you to review first.',
  },
  {
    icon: '⚡',
    title: '48-Hour Fast Turnaround',
    tag: 'Speed & Revisions',
    description:
      'Social trends move quickly. We deliver launch-ready 4K and 9:16 vertical exports within 48 hours, with revision rounds included until you are 100% proud of the final cut.',
  },
]

export default function Testimonials() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923017089301'
  const freeSampleHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi MAA Creative Studio! I want to try a risk-free sample hook for my product.")}`

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#1F1F1F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Our Quality Guarantee
          </p>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Brands Partner with MAA Creative Studio
          </h2>
          <p className="text-[#9CA3AF] mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            No stock templates, no false promises, and no guesswork. We combine direct-response psychology with cinematic editing to make your product impossible to ignore.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guarantees.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[#D4AF37]/40 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidence Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#171302] via-[#0f0f0f] to-[#171302] border border-[#D4AF37]/40 text-center relative shadow-[0_0_40px_rgba(212,175,55,0.12)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold mb-4">
            <span>🛡️</span> 100% Risk-Free Guarantee
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            See Your Product in Motion Before Deciding
          </h3>
          <p className="text-neutral-300 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            Send us your product photos or raw clips. We will edit a custom 10-second sample hook for you. If you like it, choose an affordable package. If not, no hard feelings.
          </p>
          <a
            href={freeSampleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all text-sm sm:text-base"
          >
            <span>Claim Your Free Sample on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
