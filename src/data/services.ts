export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'product-ads',
    icon: 'video',
    title: 'Product Ad Videos',
    description: 'Scroll-stopping short-form ads crafted to sell. Perfect for Instagram, TikTok, Facebook, and paid campaigns.',
  },
  {
    id: 'social-reels',
    icon: 'reels',
    title: 'Social Media Reels',
    description: 'Vertical reels optimised for the Explore page — high energy, fast cuts, built to go viral.',
  },
  {
    id: 'brand-promo',
    icon: 'brand',
    title: 'Brand Promo Videos',
    description: 'Longer-form brand stories that build trust, communicate your values, and convert cold audiences.',
  },
  {
    id: 'catalogue',
    icon: 'catalogue',
    title: 'Catalogue / Product Showcase',
    description: 'Clean, elegant multi-product showcase videos for websites, e-commerce listings, and pitch decks.',
  },
]
