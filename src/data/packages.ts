export interface PackageFeature {
  text: string
  included: boolean
}

export interface Package {
  id: string
  name: string
  price: string
  priceNote: string
  featured: boolean
  features: PackageFeature[]
  cta: string
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'Single Test Ad',
    price: '$39',
    priceNote: 'single ad',
    featured: false,
    cta: 'Test with 1 Ad',
    features: [
      { text: '1 High-converting video ad (up to 30s)', included: true },
      { text: '9:16 vertical format (TikTok & Reels)', included: true },
      { text: 'Irresistible 3-second hook design', included: true },
      { text: 'Dynamic motion text & sound effects', included: true },
      { text: '2 revision rounds included', included: true },
      { text: 'Standard 48h turnaround', included: true },
      { text: 'Multi-hook A/B variations', included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth Pack',
    price: '$99',
    priceNote: '3 video ads (save 15%)',
    featured: true,
    cta: 'Get 3 Video Ads',
    features: [
      { text: '3 Scroll-stopping video ads (up to 45s)', included: true },
      { text: '3 unique hook variations (A/B testing)', included: true },
      { text: '9:16 vertical + 1:1 square formats', included: true },
      { text: 'Cinematic color grading & audio design', included: true },
      { text: 'Unlimited revisions until satisfied', included: true },
      { text: 'Priority 48h delivery queue', included: true },
      { text: 'Direct 1-on-1 support via WhatsApp', included: true },
    ],
  },
  {
    id: 'scale',
    name: 'Scale Campaign',
    price: '$199',
    priceNote: '7 video ads batch',
    featured: false,
    cta: 'Order Batch Pack',
    features: [
      { text: '7 High-impact video ads for full campaigns', included: true },
      { text: 'Multi-platform sizing (TikTok, Reels, Feed)', included: true },
      { text: 'Creative concept brainstorming & hooks', included: true },
      { text: 'Ultra HD 4K master export files', included: true },
      { text: 'Unlimited revisions & lifetime archive', included: true },
      { text: 'Fast priority delivery', included: true },
      { text: 'Dedicated direct communication', included: true },
    ],
  },
]
