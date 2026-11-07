import { packages } from '@/data/packages'
import PricingCard from '@/components/ui/PricingCard'

export default function Packages() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923017089301'
  const freeSampleHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi MAA Creative Studio! I would like to request a free sample hook for my product.")}`

  return (
    <section id="packages" className="py-24 bg-[#060606] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">Transparent Rates</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">Simple, Accessible Packages</h2>
          <p className="text-[#9CA3AF] mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            No bloated agency retainers. Start with a single ad to test our creative execution, or choose a multi-ad pack to launch your campaign.
          </p>
        </div>

        {/* Risk-Free Sample Banner */}
        <div className="max-w-3xl mx-auto mb-14 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1c1705] via-[#121212] to-[#1c1705] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-[0_0_25px_rgba(212,175,55,0.08)]">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-xl shrink-0">
              🎁
            </span>
            <div>
              <p className="text-white text-sm font-bold">Want to test our editing style first?</p>
              <p className="text-[#D4AF37] text-xs mt-0.5">We will create a free 10-second sample hook for your product before you pay.</p>
            </div>
          </div>
          <a
            href={freeSampleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#D4AF37] text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#E8C84B] transition-all shadow-sm"
          >
            Claim Free Sample →
          </a>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map(pkg => <PricingCard key={pkg.id} pkg={pkg} />)}
        </div>

        <p className="text-center text-[#6B7280] text-sm mt-10">
          Have custom requirements, bulk volume, or a specific budget?{' '}
          <a href={freeSampleHref} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-medium">
            Message us on WhatsApp
          </a>
          {' '}— we respond within minutes.
        </p>
      </div>
    </section>
  )
}
