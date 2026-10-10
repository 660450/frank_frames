import type { Metadata } from 'next'
import { projects } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Fotoprojecten van Frank uit Gouda: Normandië, 500mm natuur en stadsstilte.',
}

export default function ProjectenPage() {
  return (
    <>
      {/* Page header */}
      <div className="px-6 pb-16 pt-36 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Verhalen</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">Projecten</h1>
        <p className="mx-auto mt-4 max-w-md font-lato text-sm leading-relaxed text-mist">
          Diepere series rondom een thema, locatie of techniek. Elk project is een
          chronologisch opgebouwde reis.
        </p>
      </div>

      {/* Projects grid */}
      <div className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              heroImage={project.heroImage}
              date={project.date}
              location={project.location}
              photoCount={project.photos.length}
            />
          ))}
        </div>
      </div>
    </>
  )
}
