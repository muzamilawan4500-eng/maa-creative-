export type Category = 'All' | 'GTA 6' | 'Watches' | 'Perfume' | 'Clothing' | 'Gym' | 'E-commerce' | 'Food' | 'Real Estate'

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
  aspectRatio?: '16/9' | '9/16'
}

export const projects: Project[] = [
  {
    slug: 'gta-6-creativity',
    brand: 'GTA 6 Creativity & Gaming Reel',
    category: 'GTA 6',
    result: '16:9 Cinematic Next-Gen Showcase',
    challenge: 'Capturing hyper-immersive open-world action and viral social energy for next-generation gaming audiences.',
    whatWeMade: 'Dynamic high-octane GTA 6 cinematic showcase engineered in 16:9 widescreen with rhythm cuts, sweeping camera moves, and immersive soundscapes.',
    videoSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.mp4',
    posterSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Untitled_Scene_11-20_17_04_24_20261120091524.jpg',
    aspectRatio: '16/9',
  },
  {
    slug: 'luxury-watches',
    brand: 'Luxury Timepieces & Watches',
    category: 'Watches',
    result: 'Cinematic 4K Precision Showcase',
    challenge: 'Conveying micro-mechanical craftsmanship and horological luxury on fast-scrolling mobile feeds.',
    whatWeMade: 'Macro-lens luxury timepiece film engineered with dynamic lighting and prestige sound design.',
    videoSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Luxury_watch_film_creation_1080p_20261024031446.mp4',
    posterSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Luxury_watch_film_creation_1080p_20261024031446.jpg',
    aspectRatio: '9/16',
  },
  {
    slug: 'lumiere-parfums',
    brand: 'Luxury Fragrance & Beauty',
    category: 'Perfume',
    result: 'Ice Wall Shatter Reveal',
    challenge: 'Translating invisible scent notes into a visual feeling of desire and prestige.',
    whatWeMade: 'Dramatic cinematic reveal ad featuring an ice wall shatter effect with custom sound design.',
    videoSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Ice_wall_shatters_revealing_perfume_6536f0de.mp4',
    posterSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Ice_wall_shatters_revealing_perfume_6536f0de.jpg',
    aspectRatio: '9/16',
  },
  {
    slug: 'urban-threads',
    brand: 'Streetwear & Outerwear',
    category: 'Clothing',
    result: 'Snow Storm Assembly Hook',
    challenge: 'Grabbing instant attention for apparel in crowded, fast-scrolling social feeds.',
    whatWeMade: 'Cinematic jacket assembly ad video in a dramatic snow storm with custom sound design.',
    videoSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Jacket_assembly_in_snow_storm_20261026023031.mp4',
    posterSrc: 'https://res.cloudinary.com/bn8grosa/video/upload/q_auto,f_auto/Jacket_assembly_in_snow_storm_20261026023031.jpg',
    aspectRatio: '9/16',
  },
  {
    slug: 'ironpeak-fitness',
    brand: 'Gym & Athletic Gear',
    category: 'Gym',
    result: 'High-Energy Pacing & Beats',
    challenge: 'Standard workout clips failing to convey product durability and workout intensity.',
    whatWeMade: 'Dynamic rhythm-cut showcase featuring athlete motion, heavy beats, and bold typography.',
    videoSrc: '',
    posterSrc: '/images/poster-gym.svg',
    aspectRatio: '9/16',
  },
  {
    slug: 'saveur-cafe',
    brand: 'Café & Culinary Promo',
    category: 'Food',
    result: 'Appetite Appeal & Slow-Mo',
    challenge: 'Static menu photos failing to drive emotional cravings on TikTok & Instagram.',
    whatWeMade: 'Sensory macro food reel concept engineered with sizzle audio and appetite-driven color grading.',
    videoSrc: '',
    posterSrc: '/images/poster-food.svg',
    aspectRatio: '9/16',
  },
  {
    slug: 'vertex-commerce',
    brand: 'Shopify & Tech Gadgets',
    category: 'E-commerce',
    result: 'Direct-Response Feature Demo',
    challenge: 'Product images failing to demonstrate real-world utility and problem-solving value.',
    whatWeMade: 'Short-form product demo concept with dynamic benefit callouts and clear CTA.',
    videoSrc: '',
    posterSrc: '/images/poster-ecommerce.svg',
    aspectRatio: '9/16',
  },
  {
    slug: 'golden-key-realty',
    brand: 'Architectural & Real Estate',
    category: 'Real Estate',
    result: 'Smooth Cinematic Walkthrough',
    challenge: 'Flat listing photos failing to convey scale, light, and luxury atmosphere.',
    whatWeMade: 'Cinematic walkthrough highlight concept designed to capture high-intent property inquiries.',
    videoSrc: '',
    posterSrc: '/images/poster-realestate.svg',
    aspectRatio: '9/16',
  },
]
