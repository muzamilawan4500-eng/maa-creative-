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
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)

    // Initial attempt to start autoplay immediately on load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }

    return () => observer.disconnect()
  }, [isRealVideo])

  const handleMouseEnter = () => {
    if (videoRef.current && isRealVideo) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current && isRealVideo) {
      // Keep smooth looping
    }
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
    Clothing: 'bg-purple-950/80 text-purple-300 border-purple-800/50',
    Gym: 'bg-blue-950/80 text-blue-300 border-blue-800/50',
    'E-commerce': 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50',
    Food: 'bg-amber-950/80 text-amber-300 border-amber-800/50',
    Perfume: 'bg-pink-950/80 text-pink-300 border-pink-800/50',
    'Real Estate': 'bg-yellow-950/80 text-yellow-300 border-yellow-800/50',
  }

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#222222] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.22)]"
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
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onClick={handleTap}
        />
      ) : (
        <img
          src={project.posterSrc}
          alt={project.brand}
          className="absolute inset-0 w-full h-full object-cover"
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
