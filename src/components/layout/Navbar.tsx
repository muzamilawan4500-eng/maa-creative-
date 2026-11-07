'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Difference', href: '#difference' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Packages', href: '#packages' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F1F1F]'
            : 'bg-[#0A0A0A]/60 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Studio Brandmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 font-playfair text-xl sm:text-2xl font-bold tracking-tight text-white group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
              <span>
                MAA <span className="text-[#D4AF37]">Creative Studio</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Direct CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="bg-[#D4AF37] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm"
              >
                Get a Free Sample
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="lg:hidden text-white p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center items-center px-6 pt-20 pb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-playfair font-semibold text-neutral-300 hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-12 h-px bg-[#D4AF37]/30 my-2" />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-xs bg-[#D4AF37] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#E8C84B] transition-colors text-base"
              >
                Get a Free Sample Ad
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
