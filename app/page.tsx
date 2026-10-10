import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import { featuredPhotos, projects } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <Hero
        imageSrc="/images/index-hero.jpg"
        imageAlt="Landschapsfoto door Frank — hobbyfotograaf uit Gouda"
        eyebrow="Frank · Gouda, Nederland"
        title="Fotografie met aandacht voor detail"
        cta={{ label: 'Bekijk portfolio', href: '/portfolio' }}
        fullscreen
        overlay={45}
      />

      {/* ── Featured grid ─────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
              Uitgelicht
            </p>
            <h2 className="font-montserrat text-3xl font-light text-ink">Recent werk</h2>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:grid-cols-3">
            {featuredPhotos.map(photo => (
              <Link
                key={photo.id}
                href="/portfolio"
                className="group relative block aspect-[4/3] overflow-hidden bg-paper"
                aria-label={photo.alt}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
              href="/portfolio"
              className="inline-block border border-ink px-10 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white"
            >
              Volledig portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote strip ───────────────────────────────────────── */}
      <section className="bg-paper px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="font-montserrat text-2xl font-light leading-relaxed text-ink md:text-3xl">
            “Ik zoek de stilte op — in de natuur,<br className="hidden sm:block" /> in het landschap, in de stad.”
          </blockquote>
          <p className="mt-6 font-lato text-xs text-mist">
            Frank — hobbyfotograaf uit Gouda
          </p>
          <Link
            href="/over-mij"
            className="mt-6 inline-block font-lato text-[10px] tracking-[0.25em] uppercase text-accent transition-colors hover:text-ink"
          >
            Over mij →
          </Link>
        </div>
      </section>

      {/* ── Projects teaser ───────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
              Verhalen
            </p>
            <h2 className="font-montserrat text-3xl font-light text-ink">Projecten</h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {projects.map(project => (
              <Link
                key={project.slug}
                href={`/projecten/${project.slug}`}
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projecten"
              className="inline-block border border-ink px-10 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white"
            >
              Alle projecten
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gear strip ────────────────────────────────────────── */}
      <section className="border-t border-rule px-6 py-14">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {['Nikon D850', 'Nikon D810', 'Nikkor 500mm f/5.6', 'Nikkor 24–70mm', 'Statief', 'ND-filters'].map(gear => (
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
