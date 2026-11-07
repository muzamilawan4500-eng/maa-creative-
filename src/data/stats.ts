export interface ProductionStandard {
  id: string
  highlight: string
  label: string
  sublabel: string
}

export const productionStandards: ProductionStandard[] = [
  {
    id: 'quality',
    highlight: '4K UHD',
    label: 'Studio-Grade Visuals',
    sublabel: 'Color-graded for maximum mobile pop',
  },
  {
    id: 'turnaround',
    highlight: '48 Hours',
    label: 'Rapid Turnaround',
    sublabel: 'Launch-ready files straight to your drive',
  },
  {
    id: 'guarantee',
    highlight: '100%',
    label: 'Satisfaction Promise',
    sublabel: 'Dedicated revisions until approved',
  },
]

// Backward compatibility export
export const stats = [
  { id: 'quality', value: 4, suffix: 'K UHD', label: 'Studio Master Quality' },
  { id: 'turnaround', value: 48, suffix: 'h', label: 'Rapid Turnaround' },
  { id: 'guarantee', value: 100, suffix: '%', label: 'Satisfaction Policy' },
]
