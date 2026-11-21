'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function GtaShowcase() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 })
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

    if (isIntersecting) {
      playSafe()
    } else {
      video.pause()
    }

    const handleEnded = () => {
      video.currentTime = 0
      playSafe()
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [isIntersecting])

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
    <section id="gta-creativity" className="py-24 bg-[#080808] relative overflow-hidden border-t border-[#1a1a1a]" ref={ref}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-950/40 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
            <span className="text-fuchsia-400 text-xs font-semibold uppercase tracking-[0.2em]">
              🎮 Special Feature · Gaming &amp; 3D Video Ads
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white tracking-tight">
            GTA 6 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-[#E8C84B] to-[#D4AF37]">Creativity</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            High-octane cinematic reel engineered for next-gen open-world gaming. Crafted with rapid beat-sync hooks, dynamic camera sweeps, and hyper-engaging pacing for social feeds.
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/90 border border-fuchsia-500/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(217,70,239,0.08)]">
          {/* 9:16 Video Mockup Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div
              className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-fuchsia-500/40 shadow-[0_0_35px_rgba(0,0,0,0.9),0_0_20px_rgba(217,70,239,0.25)] bg-black cursor-pointer group"
              onClick={toggleMute}
            >
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.mp4"
                poster="https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Sound Toggle Button */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-fuchsia-400/50 text-fuchsia-300 flex items-center gap-1.5 text-xs font-semibold hover:bg-fuchsia-500 hover:text-white transition-all shadow-lg"
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

              <div className="absolute top-3 left-3 z-20">
                <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                  GTA 6 Reel
                </span>
              </div>
            </div>
          </div>

          {/* Details & Production Breakdown */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-2">
              Next-Gen Creative Production
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
              Viral Hook Engineering for Gaming &amp; Entertainment
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Powered by Cloudinary CDN streaming for instant bufferless playback. We transform gameplay footage and 3D renders into scroll-stopping commercial assets designed for maximum viewer retention.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <span className="w-6 h-6 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 text-xs font-bold">✓</span>
                <span><strong>Instant 2-Second Hook:</strong> engineered to capture TikTok and Reels algorithm priority.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <span className="w-6 h-6 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 text-xs font-bold">✓</span>
                <span><strong>Cloudinary CDN Integration:</strong> zero website load lag, adaptive streaming quality.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <span className="w-6 h-6 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 text-xs font-bold">✓</span>
                <span><strong>High-Energy Sound Design:</strong> heavy bass, cinematic whooshes, and spatial immersion.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="bg-[#D4AF37] text-black font-bold px-6 py-3 rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all text-sm"
              >
                Order a Gaming / 3D Ad
              </a>
              <a
                href="#portfolio"
                className="border border-neutral-700 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] px-6 py-3 rounded-full transition-all text-sm font-medium"
              >
                View Full Portfolio ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
