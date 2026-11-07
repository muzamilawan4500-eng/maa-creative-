'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function BeforeAfter() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.loop = true
    video.playsInline = true

    const playSafe = () => {
      const p = video.play()
      if (p !== undefined) {
        p.catch(() => {})
      }
    }

    // Always attempt initial play
    playSafe()

    const handleEnded = () => {
      video.currentTime = 0
      playSafe()
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
    if (video.paused) {
      video.play().catch(() => {})
    }
  }

  return (
    <section id="difference" className="py-24 bg-[#0A0A0A] relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Real Impact &amp; Creative Transformation
          </p>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The MAA Difference
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            See how we transform flat, lifeless product photos into dynamic, high-converting video ads engineered for social feeds.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* BEFORE CARD */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-[#222222] bg-[#111111] flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden bg-[#0e0e0e] h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center p-6 group">
              {/* Subtle studio backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <img
                src="/images/static-product-photo.jpeg"
                alt="Before: Flat static product photo"
                className="relative z-10 max-h-full max-w-full object-contain rounded-xl shadow-lg border border-neutral-800/80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-neutral-800 text-neutral-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-neutral-700 shadow-sm">
                  Before
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-neutral-300 mb-2">
                Static Product Photo
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm mb-4 leading-relaxed">
                Raw photo on a white background. Easily ignored while scrolling feeds, leading to high ad spend with minimal return.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 border-t border-neutral-800 pt-4">
                <li className="flex items-center gap-2 text-red-400/80">
                  <span>✕</span> 0.3% Average click-through rate
                </li>
                <li className="flex items-center gap-2 text-red-400/80">
                  <span>✕</span> Fails to trigger impulse purchases
                </li>
                <li className="flex items-center gap-2 text-red-400/80">
                  <span>✕</span> Wastes budget on cold audiences
                </li>
              </ul>
            </div>
          </motion.div>

          {/* AFTER CARD */}
          <motion.div
            className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 bg-gradient-to-b from-[#161204] to-[#0f0e08] flex flex-col justify-between shadow-[0_0_35px_rgba(212,175,55,0.12)]"
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Perfectly Framed 9:16 Video Showcase */}
            <div className="relative overflow-hidden bg-[#050505] h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center p-3 sm:p-4 group">
              {/* Subtle ambient video backdrop reflection */}
              <video
                src="/videos/cinematic-video-ad.mp4"
                aria-hidden="true"
                muted
                loop
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
              />

              {/* Darkening vignette */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />

              {/* Mobile Phone Mockup Frame - 9:16 Vertical, 100% visible, zero crop */}
              <div
                className="relative z-10 h-full max-h-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_0_35px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.25)] bg-black cursor-pointer group/vid"
                onClick={toggleMute}
              >
                <video
                  ref={videoRef}
                  src="/videos/cinematic-video-ad.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />

                {/* Sound Toggle Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/60 text-[#D4AF37] flex items-center gap-1.5 text-xs font-semibold hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg"
                >
                  {isMuted ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span>Tap for Sound</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              </div>

              {/* Card Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-[#D4AF37] text-black text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  After (MAA Creative Studio)
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-white mb-2 flex items-center justify-between">
                <span>Cinematic 9:16 Video Ad</span>
                <span className="text-[#D4AF37] text-xs font-sans uppercase font-bold tracking-wider">Ready to Post</span>
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mb-4 leading-relaxed">
                Crafted with an irresistible first-2-second hook, motion rhythm, licensed audio, and clear call-to-action.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-200 border-t border-[#D4AF37]/20 pt-4">
                <li className="flex items-center gap-2 text-[#D4AF37]">
                  <span>✓</span> 3.2× Average lift in engagement &amp; CTR
                </li>
                <li className="flex items-center gap-2 text-[#D4AF37]">
                  <span>✓</span> Formatted natively for Instagram Reels &amp; TikTok
                </li>
                <li className="flex items-center gap-2 text-[#D4AF37]">
                  <span>✓</span> Decreases Customer Acquisition Cost (CAC)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
