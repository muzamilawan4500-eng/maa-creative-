import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maacreative.agency'),
  title: {
    default: 'MAA Creative Studio — Scroll-Stopping Product Ad Videos',
    template: '%s | MAA Creative Studio',
  },
  description: 'We create scroll-stopping product ad videos for clothing brands, gyms, restaurants, e-commerce stores, and more. More views, more engagement, more sales.',
  keywords: ['product ad videos', 'social media reels', 'brand videos', 'ad studio', 'MAA Creative Studio'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maacreative.agency',
    siteName: 'MAA Creative Studio',
    title: 'MAA Creative Studio — Scroll-Stopping Product Ad Videos',
    description: 'We create scroll-stopping product ad videos for clothing brands, gyms, restaurants, e-commerce stores, and more.',
    images: [{ url: '/images/og-image.svg', width: 1200, height: 630, alt: 'MAA Creative Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAA Creative Studio — Scroll-Stopping Product Ad Videos',
    description: 'We create scroll-stopping product ad videos for brands.',
    images: ['/images/og-image.svg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MAA Creative Studio',
              url: 'https://maacreative.agency',
              logo: 'https://maacreative.agency/images/og-image.svg',
              description: 'We create scroll-stopping product ad videos for brands.',
              email: 'maapakaging@gmail.com',
              telephone: '+923017089301',
              sameAs: [
                'https://www.instagram.com/social.creator1?mdxt=azRuNDV3bWR0d2xs',
                'https://www.facebook.com/share/1DtNEyi2oM/',
                'https://www.linkedin.com/in/muzamil-awan-28a413445',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white font-inter antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
