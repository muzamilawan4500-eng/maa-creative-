'use client'
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/data/projects'

interface LightboxProps {
  project: Project | null
  onClose: () => void
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeRef.current?.focus(), 100)
      videoRef.current?.play().catch(() => {})
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.brand} video`}
        >
          <motion.div
            className="relative w-full max-w-sm"
            style={{ aspectRatio: '9/16', maxHeight: '90vh' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={project.videoSrc}
              poster={project.posterSrc}
              controls
              playsInline
              loop
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-xl">
              <h3 className="text-white font-playfair font-bold">{project.brand}</h3>
              <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold flex items-center gap-1.5 mt-0.5">
                <span>🎬</span> {project.result}
              </p>
            </div>
          </motion.div>

          <button
            ref={closeRef}
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors p-2 rounded-full bg-black/50"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
