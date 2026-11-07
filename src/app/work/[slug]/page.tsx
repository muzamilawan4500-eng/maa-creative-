import { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.brand} — Creative Breakdown | MAA Creative Studio`,
    description: `Production breakdown of the ${project.brand} ad concept by MAA Creative Studio.`,
    openGraph: {
      title: `${project.brand} — Ad Concept | MAA Creative Studio`,
      description: `Production breakdown of the ${project.brand} ad concept by MAA Creative Studio.`,
      images: [{ url: project.posterSrc }],
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#E8C84B] transition-colors mb-12 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest block mb-2">{project.category}</span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">{project.brand}</h1>
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2">
            <span className="text-base">🎬</span>
            <span className="text-[#D4AF37] font-semibold">{project.result}</span>
          </div>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden border border-[#1F1F1F] max-w-sm mx-auto" style={{ aspectRatio: '9/16' }}>
          <video src={project.videoSrc} poster={project.posterSrc} controls playsInline loop className="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111111] rounded-2xl p-8 border border-[#1F1F1F]">
            <h2 className="font-playfair text-xl font-bold text-[#D4AF37] mb-3">The Objective</h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{project.challenge}</p>
          </div>
          <div className="bg-[#111111] rounded-2xl p-8 border border-[#1F1F1F]">
            <h2 className="font-playfair text-xl font-bold text-[#D4AF37] mb-3">What We Engineered</h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{project.whatWeMade}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1a1500] to-[#111111] rounded-2xl p-8 border border-[#D4AF37]/30 text-center mb-12">
          <h2 className="font-playfair text-xl font-bold text-neutral-400 mb-2">Core Creative Style</h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-playfair">{project.result}</p>
        </div>

        <div className="text-center">
          <p className="text-[#9CA3AF] mb-6">Want a scroll-stopping video ad engineered for your product?</p>
          <a
            href="/#contact"
            className="bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 inline-block"
          >
            Get a Free Sample Hook
          </a>
        </div>
      </div>
    </main>
  )
}
