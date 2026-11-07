'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isIntersectingRef = useRef(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure DOM properties are initialized explicitly
    video.muted = true
    video.defaultMuted = true
    video.loop = true
    video.playsInline = true

    const playSafe = () => {
      const p = video.play()
      if (p !== undefined) {
        p.catch(() => {
          // Autoplay was deferred until user interaction
        })
      }
    }

    playSafe()

    // Bulletproof loop failsafe: restart video immediately if browser native loop stalls
    const handleEnded = () => {
      video.currentTime = 0
      playSafe()
    }

    // Safety check near duration end to guarantee zero stutter continuous loop
    const handleTimeUpdate = () => {
      if (video.duration > 0 && video.currentTime >= video.duration - 0.12) {
        video.currentTime = 0
        playSafe()
      }
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('timeupdate', handleTimeUpdate)

    // Performance optimization: Pause video when scrolled out of view to eliminate CPU/GPU usage
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          playSafe()
        } else {
          video.pause()
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Performance optimization: Pause playback when tab is in background to save battery/RAM
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause()
      } else if (isIntersectingRef.current) {
        playSafe()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 pb-20"
    >
      {/* Background Video with Clean Dark Overlay */}
      <video
        ref={videoRef}
        src="/videos/hero-showreel.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.svg"
        onEnded={(e) => {
          const v = e.currentTarget
          v.currentTime = 0
          v.play().catch(() => {})
        }}
      >
        <source src="/videos/hero-showreel.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric vignette to guarantee pristine text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/75 to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#111111]/80 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em]">
            MAA Creative Studio · Direct-Response Video Ads
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          We Create{' '}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#E8C84B] via-[#D4AF37] to-[#B8972E] italic pr-3 sm:pr-4 pb-1 tracking-normal">
            Scroll-Stopping Ads
          </span>{' '}
          <br className="hidden sm:inline" />
          for Your Brand
        </motion.h1>

        {/* Tagline Strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-xl font-medium tracking-wide text-[#D4AF37] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>More Views</span>
          <span className="text-[#6B7280]">•</span>
          <span>More Engagement</span>
          <span className="text-[#6B7280]">•</span>
          <span>More Sales</span>
        </motion.div>

        {/* Short Subheading / Value Proposition */}
        <motion.p
          className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          High-impact ad videos built for Clothing, Gym Accessories, Shopify &amp; E-commerce, Restaurants, Perfume, and Real Estate. We engineer videos that turn scrollers into buyers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all duration-300 text-base"
          >
            Get a Free Sample Ad
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto border border-neutral-700 bg-neutral-950/60 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-base"
          >
            See Our Work ↓
          </a>
        </motion.div>

        {/* Micro-proof strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-neutral-400 border-t border-neutral-900 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37]">★</span> 100% Focused on Client ROI
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37]">✓</span> 48-Hour Rush Available
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37]">✓</span> Ready for TikTok, Reels &amp; Paid Ads
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
