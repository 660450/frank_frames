import type { Metadata } from 'next'
import { portfolioPhotos } from '@/lib/data'
import Gallery from '@/components/Gallery'
import type { Category } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Wildlife, landschappen en stadsfotografie door Frank uit Gouda. Nikon D850/D810 met 500mm.',
}

const CATEGORIES: Category[] = ['Wildlife', 'Landschappen', 'Stadsfotografie', 'Kanoën']

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <div className="px-6 pb-16 pt-36 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Werk</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">Portfolio</h1>
        <p className="mx-auto mt-4 max-w-md font-lato text-sm leading-relaxed text-mist">
          Wildlife met 500mm &nbsp;·&nbsp; Landschappen uit Normandië, Luxemburg &amp; Nederland
          &nbsp;·&nbsp; Stadsfotografie
        </p>
      </div>

      {/* Gallery with category filter */}
      <div className="mx-auto max-w-7xl px-6 pb-28">
        <Gallery
          photos={portfolioPhotos}
          showFilter
          categories={CATEGORIES}
          columns={3}
        />
      </div>
    </>
  )
}
