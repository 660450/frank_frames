import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'
import { projectGroups } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Fotoprojecten van Frank uit Gouda: Normandië, 500mm natuur en stadsstilte.',
}

export default function ProjectenPage() {
  return (
    <>
      <div className="px-6 pb-16 pt-36 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Verhalen</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">Projecten</h1>
        <p className="mx-auto mt-4 max-w-md font-lato text-sm leading-relaxed text-mist">
          Diepere series rondom een thema, locatie of techniek. Elke map wordt hier als apart project getoond.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-6 pb-28">
        {projectGroups.map(group => (
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
