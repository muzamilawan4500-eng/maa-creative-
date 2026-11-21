'use client'
import { useRef, useState, useEffect } from 'react'
import { Project } from '@/data/projects'

interface VideoCardProps {
  project: Project
  onClick: (project: Project) => void
}

export default function VideoCard({ project, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  const isRealVideo = Boolean(project.videoSrc && !project.videoSrc.includes('placeholder'))

  useEffect(() => {
    if (!isRealVideo) return
    const el = cardRef.current
    const video = videoRef.current
    if (!el || !video) return

    // Explicitly guarantee muted autoplay compliance across all browsers
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

    // Play only when visible on screen; pause when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playSafe()
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)

    const handleEnded = () => {
      video.currentTime = 0
      playSafe()
    }
    video.addEventListener('ended', handleEnded)

    return () => {
      observer.disconnect()
      video.removeEventListener('ended', handleEnded)
    }
  }, [isRealVideo])

  const handleMouseEnter = () => {
    if (videoRef.current && isRealVideo) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    // Continue smooth looping when hovering away
  }

  const handleTap = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.innerWidth < 768 && videoRef.current && isRealVideo) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }

  const categoryBadges: Record<string, string> = {
    'GTA 6': 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-800/50',
    Watches: 'bg-amber-950/80 text-amber-300 border-amber-800/50',
    Clothing: 'bg-purple-950/80 text-purple-300 border-purple-800/50',
    Gym: 'bg-blue-950/80 text-blue-300 border-blue-800/50',
    'E-commerce': 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50',
    Food: 'bg-orange-950/80 text-orange-300 border-orange-800/50',
    Perfume: 'bg-pink-950/80 text-pink-300 border-pink-800/50',
    'Real Estate': 'bg-yellow-950/80 text-yellow-300 border-yellow-800/50',
  }

  const isWide = project.aspectRatio === '16/9'

  return (
    <div
      ref={cardRef}
      className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-[#0d0d0d] border ${
        isWide ? 'border-fuchsia-500/40 hover:border-fuchsia-400' : 'border-[#222222] hover:border-[#D4AF37]'
      } transition-all duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.22)]`}
      style={{ aspectRatio: '9/16' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      aria-label={`View ${project.brand} ad video`}
    >
      {/* Background Poster / Real Autoplaying Video */}
      {isRealVideo && !hasError ? (
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full ${
            isWide ? 'object-contain bg-black' : 'object-cover'
          } transition-transform duration-500 group-hover:scale-105`}
          onClick={handleTap}
        />
      ) : (
        <img
          src={project.posterSrc}
          alt={project.brand}
          className={`absolute inset-0 w-full h-full ${
            isWide ? 'object-contain bg-black' : 'object-cover'
          }`}
        />
      )}

      {/* Floating Center Play Icon (hides automatically while video is playing) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
          isPlaying ? 'opacity-0 scale-90' : 'opacity-100 group-hover:scale-110'
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-sm border border-[#D4AF37] flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-[#D4AF37] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Deep gradient backing for crystal-clear readability */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />

      {/* Content Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <span
          className={`text-[11px] px-2.5 py-1 rounded-full font-semibold mb-2 inline-block border backdrop-blur-sm ${
            categoryBadges[project.category] || 'bg-neutral-800 text-neutral-300 border-neutral-700'
          }`}
        >
          {project.category}
        </span>
        <h3 className="text-white text-lg font-bold font-playfair tracking-wide leading-snug drop-shadow-sm">
          {project.brand}
        </h3>
        <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold mt-1 flex items-center gap-1.5 drop-shadow-sm">
          <span>🎬</span> {project.result}
        </p>
      </div>
    </div>
  )
}
