'use client'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function FinalCTA() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923017089301'
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'maapakaging@gmail.com'
  const message = encodeURIComponent("Hi MAA Creative Studio! I'd like a free sample ad for my brand.")

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl p-12 md:p-16 text-center border border-[#D4AF37]/30 bg-gradient-to-b from-[#1a1500] to-[#0A0A0A] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Send us one product photo —<br />
            <span className="text-[#D4AF37]">we&apos;ll make a free sample ad</span><br />
            for your brand
          </h2>
          <p className="text-[#6B7280] text-lg mb-10">No commitment. No cost. Just results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1fb855] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center gap-2 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </a>
            <a
              href={`mailto:${email}?subject=Free%20Sample%20Ad%20Request%20-%20MAA%20Creative%20Studio`}
              className="border-2 border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-base"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
