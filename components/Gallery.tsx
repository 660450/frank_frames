'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import type { Photo, Category } from '@/lib/data'

interface GalleryProps {
  photos: Photo[]
  /** When true, renders category filter tabs above the grid */
  showFilter?: boolean
  /** Ordered list of category labels to show in the filter */
  categories?: Category[]
  /** Number of columns — 2 or 3 */
  columns?: 2 | 3
}

const ALL = 'Alles'

export default function Gallery({
  photos,
  showFilter = false,
  categories = [],
  columns = 3,
}: GalleryProps) {
  const [active, setActive]             = useState<string>(ALL)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const tabs = [ALL, ...categories]
  const visible = active === ALL ? photos : photos.filter(p => p.category === active)

  const gridCols =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-12'
      : 'grid-cols-1 sm:grid-cols-12'

  return (
    <>
      {/* Filter tabs */}
      {showFilter && categories.length > 0 && (
        <div className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`font-lato text-[11px] tracking-[0.2em] uppercase pb-1 transition-all duration-200 border-b ${
                active === tab
                  ? 'border-ink text-ink'
                  : 'border-transparent text-mist hover:text-ink'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Photo grid */}
      <div className={`grid gap-[2px] ${gridCols}`}>
        {visible.map((photo, i) => {
          const isPortrait = photo.aspectRatio < 1
          const spanClass = isPortrait
            ? columns === 2
              ? 'sm:col-span-4'
              : 'sm:col-span-4 lg:col-span-3'
            : columns === 2
              ? 'sm:col-span-8'
              : 'sm:col-span-8 lg:col-span-6'
          const aspectClass = isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'

          return (
            <button
              key={photo.id}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Foto openen: ${photo.alt}`}
              className={`group relative col-span-12 overflow-hidden bg-paper ${spanClass} ${aspectClass}`}
              onContextMenu={e => e.preventDefault()}
              draggable={false}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] select-none ${
                  isPortrait ? 'object-contain scale-[0.96]' : 'object-cover'
                }`}
                style={isPortrait ? { objectPosition: 'center center' } : undefined}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              />
              {/* Hover vignette */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
              <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/20 px-2 py-1 font-lato text-[8px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-[1px] shadow-[0_1px_8px_rgba(0,0,0,0.15)]">
                Frank Fotografie
              </div>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={visible}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
