import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import { featuredPhotos, projects } from '@/lib/data'
import { localizedPhotoAlt, localizedProject, type Locale } from '@/lib/i18n'

export default function HomeContent({ locale = 'nl' }: { locale?: Locale }) {
  const isEnglish = locale === 'en'

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <Hero
        imageSrc="/images/index-hero.jpg"
        imageAlt={isEnglish ? 'Landscape photograph by Frank, an amateur photographer from Gouda' : 'Landschapsfoto door Frank — hobbyfotograaf uit Gouda'}
        eyebrow={isEnglish ? 'Frank · Gouda, the Netherlands' : 'Frank · Gouda, Nederland'}
        title={isEnglish ? 'Photography with an eye for detail' : 'Fotografie met aandacht voor detail'}
        cta={{ label: isEnglish ? 'Explore portfolio' : 'Bekijk portfolio', href: isEnglish ? '/en/portfolio' : '/portfolio' }}
        fullscreen
        overlay={45}
      />

      {/* ── Featured grid ─────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
              {isEnglish ? 'Featured' : 'Uitgelicht'}
            </p>
            <h2 className="font-montserrat text-3xl font-light text-ink">{isEnglish ? 'Recent work' : 'Recent werk'}</h2>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:grid-cols-3">
            {featuredPhotos.map(photo => (
              <Link
                key={photo.id}
                href={isEnglish ? '/en/portfolio' : '/portfolio'}
                className="group relative block aspect-[4/3] overflow-hidden bg-paper"
                aria-label={localizedPhotoAlt(photo.id, photo.alt, locale)}
              >
                <Image
                  src={photo.src}
                  alt={localizedPhotoAlt(photo.id, photo.alt, locale)}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/15" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href={isEnglish ? '/en/portfolio' : '/portfolio'}
              className="inline-block border border-ink px-10 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white"
            >
              {isEnglish ? 'Full portfolio' : 'Volledig portfolio'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote strip ───────────────────────────────────────── */}
      <section className="bg-paper px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="font-montserrat text-2xl font-light leading-relaxed text-ink md:text-3xl">
            {isEnglish
              ? <>“I seek out quiet — in nature,<br className="hidden sm:block" /> in the landscape, in the city.”</>
              : <>“Ik zoek de stilte op — in de natuur,<br className="hidden sm:block" /> in het landschap, in de stad.”</>}
          </blockquote>
          <p className="mt-6 font-lato text-xs text-mist">
            {isEnglish ? 'Frank — amateur photographer from Gouda' : 'Frank — hobbyfotograaf uit Gouda'}
          </p>
          <Link
            href={isEnglish ? '/en/about' : '/over-mij'}
            className="mt-6 inline-block font-lato text-[10px] tracking-[0.25em] uppercase text-accent transition-colors hover:text-ink"
          >
            {isEnglish ? 'About me →' : 'Over mij →'}
          </Link>
        </div>
      </section>

      {/* ── Projects teaser ───────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
              {isEnglish ? 'Stories' : 'Verhalen'}
            </p>
            <h2 className="font-montserrat text-3xl font-light text-ink">{isEnglish ? 'Projects' : 'Projecten'}</h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {projects.map(sourceProject => {
              const project = localizedProject(sourceProject, locale)
              return (
              <Link
                key={project.slug}
                href={`${isEnglish ? '/en/projects' : '/projecten'}/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-paper">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/12" />
                </div>
                <div className="mt-4">
                  <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
                    {project.date} · {project.location}
                  </p>
                  <h3 className="mt-1 font-montserrat text-lg font-light text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
              </Link>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projecten"
              className="inline-block border border-ink px-10 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white"
            >
              {isEnglish ? 'All projects' : 'Alle projecten'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gear strip ────────────────────────────────────────── */}
      <section className="border-t border-rule px-6 py-14">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {(isEnglish
            ? ['Nikon D850', 'Nikon D810', 'Nikkor 500mm f/5.6', 'Nikkor 24–70mm', 'Tripod', 'ND filters']
            : ['Nikon D850', 'Nikon D810', 'Nikkor 500mm f/5.6', 'Nikkor 24–70mm', 'Statief', 'ND-filters']
          ).map(gear => (
            <span
              key={gear}
              className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist"
            >
              {gear}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
