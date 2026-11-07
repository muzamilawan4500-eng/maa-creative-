import ContactForm from '@/components/ui/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Your Brand&apos;s<br />
              <span className="text-[#D4AF37]">Next Viral Ad</span>
            </h2>
            <p className="text-[#6B7280] mb-8 leading-relaxed">
              Share a few details and we&apos;ll get back to you within 24 hours with a plan to make your products impossible to scroll past.
            </p>
            <ul className="space-y-4">
              {['Free sample ad to start', 'No contracts, cancel anytime', 'Results or we revise for free', '48-hour delivery on priority plans'].map(point => (
                <li key={point} className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111111] rounded-2xl p-8 border border-[#1F1F1F]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
