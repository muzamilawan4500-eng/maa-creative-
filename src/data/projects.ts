export type Category = 'All' | 'Clothing' | 'Gym' | 'E-commerce' | 'Food' | 'Perfume' | 'Real Estate'

export interface Project {
  slug: string
  brand: string
  category: Exclude<Category, 'All'>
  result: string
  challenge: string
  whatWeMade: string
  videoSrc: string
  posterSrc: string
  galleryVideos?: string[]
}

export const projects: Project[] = [
  {
    slug: 'urban-threads',
    brand: 'Streetwear & Outerwear',
    category: 'Clothing',
    result: 'Snow Storm Assembly Hook',
    challenge: 'Grabbing instant attention for apparel in crowded, fast-scrolling social feeds.',
    whatWeMade: 'Cinematic jacket assembly ad video in a dramatic snow storm with custom sound design.',
    videoSrc: '/videos/jacket-assembly-snow-storm.mp4',
    posterSrc: '/images/poster-clothing.svg',
  },
  {
    slug: 'ironpeak-fitness',
    brand: 'Gym & Athletic Gear',
    category: 'Gym',
    result: 'High-Energy Pacing & Beats',
    challenge: 'Standard workout clips failing to convey product durability and workout intensity.',
    whatWeMade: 'Dynamic rhythm-cut showcase featuring athlete motion, heavy beats, and bold typography.',
    videoSrc: '/videos/placeholder.mp4',
    posterSrc: '/images/poster-gym.svg',
  },
  {
    slug: 'saveur-cafe',
    brand: 'Café & Culinary Promo',
    category: 'Food',
    result: 'Appetite Appeal & Slow-Mo',
    challenge: 'Static menu photos failing to drive emotional cravings on TikTok & Instagram.',
    whatWeMade: 'Sensory macro food reel concept engineered with sizzle audio and appetite-driven color grading.',
    videoSrc: '/videos/placeholder.mp4',
    posterSrc: '/images/poster-food.svg',
  },
  {
    slug: 'lumiere-parfums',
    brand: 'Luxury Fragrance & Beauty',
    category: 'Perfume',
    result: 'Sensory Luxury Aesthetic',
    challenge: 'Translating invisible scent notes into a visual feeling of desire and prestige.',
    whatWeMade: 'Sensory visual ad concept evoking elegance, light reflections, and high-fashion pacing.',
    videoSrc: '/videos/placeholder.mp4',
    posterSrc: '/images/poster-perfume.svg',
  },
  {
    slug: 'vertex-commerce',
    brand: 'Shopify & Tech Gadgets',
    category: 'E-commerce',
    result: 'Direct-Response Feature Demo',
    challenge: 'Product images failing to demonstrate real-world utility and problem-solving value.',
    whatWeMade: 'Short-form product demo concept with dynamic benefit callouts and clear CTA.',
    videoSrc: '/videos/placeholder.mp4',
    posterSrc: '/images/poster-ecommerce.svg',
  },
  {
    slug: 'golden-key-realty',
    brand: 'Architectural & Real Estate',
    category: 'Real Estate',
    result: 'Smooth Cinematic Walkthrough',
    challenge: 'Flat listing photos failing to convey scale, light, and luxury atmosphere.',
    whatWeMade: 'Cinematic walkthrough highlight concept designed to capture high-intent property inquiries.',
    videoSrc: '/videos/placeholder.mp4',
    posterSrc: '/images/poster-realestate.svg',
  },
]
