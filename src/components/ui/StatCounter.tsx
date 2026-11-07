'use client'
import { useCountUp } from '@/hooks/useCountUp'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
}

export default function StatCounter({ value, suffix, label }: StatCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 })
  const count = useCountUp(value, 2000, isIntersecting)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-playfair text-[#D4AF37]">
        {count}{suffix}
      </div>
      <div className="text-[#6B7280] mt-2 text-sm uppercase tracking-widest">{label}</div>
    </div>
  )
}
