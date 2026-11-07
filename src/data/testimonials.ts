export interface QualityGuarantee {
  id: string
  title: string
  description: string
}

export const qualityGuarantees: QualityGuarantee[] = [
  {
    id: '1',
    title: '3-Second Hook Strategy',
    description: 'Engineered retention hooks that stop scrolling immediately.',
  },
  {
    id: '2',
    title: 'Commercial Sound Design',
    description: 'High-impact Foley, risers, and licensed music.',
  },
  {
    id: '3',
    title: 'Risk-Free Sample Hook',
    description: 'Sample preview for your product before you commit.',
  },
  {
    id: '4',
    title: '48-Hour Rapid Delivery',
    description: 'Quick turnaround with revision rounds included.',
  },
]

// Backward compatibility
export const testimonials = []
