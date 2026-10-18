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
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

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
      <div className={`grid gap-[3px] ${gridCols}`}>
        {visible.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Foto openen: ${photo.alt}`}
            className="group relative aspect-[4/3] overflow-hidden bg-paper"
            onContextMenu={e => e.preventDefault()}
            draggable={false}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] select-none"
              style={photo.aspectRatio < 1 ? { transform: 'scale(0.9)' } : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
              draggable={false}
              onContextMenu={e => e.preventDefault()}
            />
            {/* Hover vignette */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/18" />
            <div className="pointer-events-none absolute bottom-2 right-2 rounded-full border border-white/25 bg-black/20 px-2 py-1 font-lato text-[9px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-[2px]">
              Frank Fotografie
            </div>
          </button>
        ))}
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
