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
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-950/40 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
            <span className="text-fuchsia-400 text-xs font-semibold uppercase tracking-[0.2em]">
              🎮 Special Feature · Gaming &amp; 3D Video Ads
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white tracking-tight">
            GTA 6 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-[#E8C84B] to-[#D4AF37]">Creativity</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            High-octane 16:9 widescreen cinematic showcase engineered for next-gen open-world gaming. Streamed directly from Cloudinary CDN for instant, zero-lag playback with 100% full-frame visibility.
          </p>
        </div>

        {/* 16:9 Widescreen Cinema Theater Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-fuchsia-500/40 shadow-[0_0_60px_rgba(217,70,239,0.22)] bg-black cursor-pointer group"
            onClick={toggleMute}
          >
            {/* Ambient video reflection in the background */}
            <video
              src="https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.mp4"
              aria-hidden="true"
              muted
              loop
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-105 pointer-events-none"
            />

            {/* Main 16:9 Full Widescreen Video Player */}
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.mp4"
              poster="https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="relative z-10 w-full h-full object-contain"
            />

            {/* Top Bar Floating Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
              <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                GTA 6 Cinema Reel
              </span>
              <span className="bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                16:9 Widescreen UHD
              </span>
            </div>

            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-fuchsia-400/60 text-fuchsia-300 flex items-center gap-2 text-xs sm:text-sm font-semibold hover:bg-fuchsia-500 hover:text-white transition-all shadow-xl"
            >
              {isMuted ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Tap for Sound</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span>Sound On</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Breakdown & Production Highlights */}
        <div className="max-w-4xl mx-auto bg-[#111111]/90 border border-fuchsia-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-2xl mb-2">🎬</div>
              <h4 className="text-white font-bold text-base mb-1">16:9 Widescreen Frame</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Rendered in authentic 16:9 aspect ratio to capture the complete open-world scope with zero cropping.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-white font-bold text-base mb-1">Cloudinary CDN Stream</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Streamed on-demand from Cloudinary with adaptive bitrate, keeping your website database and code ultra-fast.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-2xl mb-2">🔊</div>
              <h4 className="text-white font-bold text-base mb-1">Immersive Sound Sync</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                High-energy sound engineering synced to fast action cuts, tire squeals, and cinematic transitions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800/80 pt-6">
            <div>
              <p className="text-white font-bold text-base">Want a custom gaming or 3D video ad for your brand?</p>
              <p className="text-neutral-400 text-xs">We handle game capture, camera choreography, color grade, and sound.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-[#D4AF37] text-black font-bold px-6 py-3 rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all text-sm"
              >
                Order a Gaming Ad
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto text-center border border-neutral-700 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] px-6 py-3 rounded-full transition-all text-sm font-medium"
              >
                Portfolio ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
