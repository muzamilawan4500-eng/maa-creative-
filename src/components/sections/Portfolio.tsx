'use client'
import { useState } from 'react'
import { projects, Category } from '@/data/projects'
import PortfolioGrid from '@/components/ui/PortfolioGrid'

const categories: Category[] = ['All', 'Clothing', 'Gym', 'E-commerce', 'Food', 'Perfume', 'Real Estate']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">Our Work</h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Commercial video concepts and ad showcases engineered to stop the scroll and drive action.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black'
                  : 'border border-[#1F1F1F] text-[#6B7280] hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <PortfolioGrid projects={filtered} />

        <p className="text-center text-[#6B7280] mt-12 text-sm">
          More projects coming soon — follow us for updates.
        </p>
      </div>
    </section>
  )
}
