'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n'

interface Photo {
  id: string
  src: string
  alt: string
}

interface LightboxProps {
  photos: Photo[]
  initialIndex: number
  onClose: () => void
  locale: Locale
}

export default function Lightbox({ photos, initialIndex, onClose, locale }: LightboxProps) {
  const isEnglish = locale === 'en'
  const [index, setIndex] = useState(initialIndex)

  const prev = useCallback(
    () => setIndex(i => (i - 1 + photos.length) % photos.length),
    [photos.length]
  )
  const next = useCallback(
    () => setIndex(i => (i + 1) % photos.length),
    [photos.length]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [onClose, prev, next])

  const photo = photos[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isEnglish ? 'Photo viewer' : 'Foto weergave'}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/96"
      onContextMenu={e => e.preventDefault()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label={isEnglish ? 'Close (Esc)' : 'Sluiten (Esc)'}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/25 text-lg text-white/80 transition hover:border-white/60 hover:bg-black/40 hover:text-white"
      >
        ×
      </button>

      {/* Counter */}
      <span className="absolute left-4 top-4 z-20 font-lato text-[11px] tracking-[0.2em] text-white/45 uppercase">
        {index + 1} / {photos.length}
      </span>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label={isEnglish ? 'Previous photo' : 'Vorige foto'}
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/60 transition hover:border-white/35 hover:bg-black/35 hover:text-white md:left-6"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M15 4l-8 8 8 8" />
        </svg>
      </button>

      {/* Image wrapper */}
      <div className="relative mx-14 w-full max-w-5xl md:mx-20" onClick={e => e.stopPropagation()}>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-black/40">
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            fill
            className="select-none object-contain"
            sizes="(max-width: 1280px) 90vw, 1200px"
            unoptimized
            draggable={false}
            onContextMenu={e => e.preventDefault()}
          />
        </div>

        {/* Caption */}
        <p className="mt-3 text-center font-lato text-[11px] uppercase tracking-[0.18em] text-white/45">
          {photo.alt}
        </p>
      </div>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label={isEnglish ? 'Next photo' : 'Volgende foto'}
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/60 transition hover:border-white/35 hover:bg-black/35 hover:text-white md:right-6"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M9 4l8 8-8 8" />
        </svg>
      </button>
    </div>
  )
}
