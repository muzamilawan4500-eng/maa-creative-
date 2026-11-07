export interface PlatformChannel {
  id: string
  name: string
  badge: string
  icon: string
}

export const platforms: PlatformChannel[] = [
  { id: 'tiktok', name: 'TikTok Ads', badge: 'Vertical 9:16', icon: '🎵' },
  { id: 'reels', name: 'Instagram Reels', badge: 'High Engagement', icon: '📸' },
  { id: 'meta', name: 'Meta / Facebook Ads', badge: 'Direct-Response', icon: '⚡' },
  { id: 'shorts', name: 'YouTube Shorts', badge: 'Retention-First', icon: '▶' },
  { id: 'shopify', name: 'Shopify Product Ads', badge: 'Conversion Boost', icon: '🛍' },
  { id: 'amazon', name: 'Amazon Video Ads', badge: 'Product Focus', icon: '📦' },
]

// Backward compatibility export if needed
export const brands = platforms.map(p => ({ id: p.id, name: p.name, logo: '' }))
