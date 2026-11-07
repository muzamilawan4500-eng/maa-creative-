import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/social.creator1?mdxt=azRuNDV3bWR0d2xs',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1DtNEyi2oM/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muzamil-awan-28a413445',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'maapakaging@gmail.com'

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="font-playfair text-2xl font-bold text-white mb-3">
              MAA <span className="text-[#D4AF37]">Creative Studio</span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
              We Create Scroll-Stopping Ads for Your Brand —<br />
              More Views. More Engagement. More Sales.
            </p>
            <p className="text-neutral-400 text-xs">
              Specialized video production for Clothing, Gym, Shopify, Restaurants, Perfume, and Real Estate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Portfolio Work', href: '#portfolio' },
                { label: 'The MAA Difference', href: '#difference' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#how-it-works' },
                { label: 'Pricing Packages', href: '#packages' },
                { label: 'Get In Touch', href: '#contact' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#6B7280] hover:text-[#D4AF37] transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social Accounts */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Direct Contact</h4>
            
            {/* Email link */}
            <div className="mb-6">
              <span className="text-xs text-neutral-500 block uppercase tracking-wider mb-1.5">Official Inquiries</span>
              <a
                href={`mailto:${email}`}
                className="text-neutral-300 hover:text-[#D4AF37] transition-colors text-sm font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {email}
              </a>
            </div>

            {/* Social media icons (Instagram, Facebook, LinkedIn) */}
            <div>
              <span className="text-xs text-neutral-500 block uppercase tracking-wider mb-2.5">Connect With Us</span>
              <div className="flex items-center gap-3">
                {socialLinks.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${s.name}`}
                    title={s.name}
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} MAA Creative Studio. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs">
            Designed for brands that demand attention.
          </p>
        </div>
      </div>
    </footer>
  )
}
