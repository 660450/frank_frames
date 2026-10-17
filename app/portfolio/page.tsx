import type { Metadata } from 'next'
import Image from 'next/image'
import { portfolioGroups } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Wildlife, landschappen en stadsfotografie door Frank uit Gouda. Nikon D850/D810 met 500mm.',
}

export default function PortfolioPage() {
  return (
    <>
      <div className="px-6 pb-16 pt-36 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Werk</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">Portfolio</h1>
        <p className="mx-auto mt-4 max-w-md font-lato text-sm leading-relaxed text-mist">
          Kies een thema om de bijbehorende foto&apos;s te openen.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioGroups.map(group => {
            const coverPhoto = group.photos[0]

            return (
              <a
                key={group.slug}
                href={`/portfolio/${group.slug}`}
                className="group block overflow-hidden border border-rule bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-ink/30"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-paper">
                  {coverPhoto ? (
                    <Image
                      src={coverPhoto.src}
                      alt={group.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      unoptimized
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <p className="font-lato text-[10px] tracking-[0.3em] uppercase text-white/80">
                      {group.photos.length} foto&apos;s
                    </p>
                    <h2 className="mt-2 font-montserrat text-2xl font-light text-white">{group.title}</h2>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
