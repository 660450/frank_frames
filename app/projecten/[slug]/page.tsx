import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={project.heroImage}
        imageAlt={`${project.title} — hero`}
        eyebrow={`${project.date} · ${project.location}`}
        title={project.title}
        fullscreen={false}
        overlay={50}
      />

      {/* Intro block */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
            {project.date} &nbsp;·&nbsp; {project.location}
          </p>
          <h1 className="mb-6 font-montserrat text-3xl font-light text-ink md:text-4xl">
            {project.title}
          </h1>
          <p className="font-lato text-base leading-loose text-mist">{project.intro}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-rule" />
      </div>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-16 pb-28">
        <Gallery photos={project.photos} columns={3} />
      </section>

      {/* Back link */}
      <div className="border-t border-rule px-6 py-10 text-center">
        <a
          href="/projecten"
          className="font-lato text-[10px] tracking-[0.3em] uppercase text-mist transition-colors hover:text-ink"
        >
          ← Terug naar projecten
        </a>
      </div>
    </>
  )
}
