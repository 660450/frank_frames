import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import { localizedProject, type Locale } from '@/lib/i18n'

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

export default function ProjectContent({ params, locale = 'nl' }: Props & { locale?: Locale }) {
  const sourceProject = projects.find(p => p.slug === params.slug)
  if (!sourceProject) notFound()
  const project = localizedProject(sourceProject, locale)
  const isEnglish = locale === 'en'

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-8 md:pt-10">
        <Link
          href={isEnglish ? '/en/projects' : '/projecten'}
          aria-label={isEnglish ? 'Back to projects' : 'Terug naar projecten'}
          className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 border border-rule bg-paper/95 px-3 py-2 font-lato text-[10px] tracking-[0.3em] uppercase text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-ink/40 hover:text-mist"
        >
          <span className="text-base leading-none">←</span>
          <span>{isEnglish ? 'Back' : 'Terug'}</span>
        </Link>
      </div>

      {/* Hero */}
      <Hero
        imageSrc={project.heroImage}
        imageAlt={`${project.title} — ${isEnglish ? 'featured photograph' : 'hero'}`}
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
        <Gallery
          photos={project.photos.map((photo, index) => ({
            ...photo,
            alt: isEnglish ? `${project.title} photograph ${index + 1}` : photo.alt,
          }))}
          columns={3}
          locale={locale}
        />
      </section>
    </>
  )
}
