'use client'
import { useState } from 'react'
import { Project } from '@/data/projects'
import VideoCard from './VideoCard'
import Lightbox from './Lightbox'

interface PortfolioGridProps {
  projects: Project[]
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <VideoCard key={project.slug} project={project} onClick={setSelectedProject} />
        ))}
      </div>
      <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
