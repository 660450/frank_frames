import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'
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
          Foto&apos;s gesorteerd per map en per thema. Elke map verschijnt hier als apart onderdeel.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-6 pb-28">
        {portfolioGroups.map(group => (
          <section key={group.slug} className="space-y-6">
            <div className="flex items-end justify-between gap-4 border-b border-rule pb-3">
              <h2 className="font-montserrat text-2xl font-light text-ink">{group.title}</h2>
              <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
                {group.photos.length} foto&apos;s
              </span>
            </div>

            <Gallery photos={group.photos} columns={3} />
          </section>
        ))}
      </div>
    </>
  )
}
