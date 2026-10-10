'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

interface Photo {
  id: string
  src: string
  alt: string
}

interface LightboxProps {
  photos: Photo[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
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
      aria-label="Foto weergave"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/96"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Sluiten (Esc)"
        className="absolute right-5 top-5 z-10 p-2 text-white/50 transition-colors hover:text-white"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M2 2l18 18M20 2L2 20" />
        </svg>
      </button>

      {/* Counter */}
      <span className="absolute left-5 top-5 font-lato text-xs text-white/40">
        {index + 1} / {photos.length}
      </span>

      {/* Prev arrow */}
      <button
        onClick={e => { e.stopPropagation(); prev() }}
        aria-label="Vorige foto"
        className="absolute left-3 z-10 p-4 text-white/40 transition-colors hover:text-white"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M15 4l-8 8 8 8" />
        </svg>
      </button>

      {/* Image wrapper */}
      <div
        className="relative mx-16 w-full max-w-5xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-[3/2] w-full">
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 90vw, 1200px"
            unoptimized
          />
        </div>

        {/* Caption */}
        <p className="mt-3 text-center font-lato text-xs text-white/35">
          {photo.alt}
        </p>
      </div>

      {/* Next arrow */}
      <button
        onClick={e => { e.stopPropagation(); next() }}
        aria-label="Volgende foto"
        className="absolute right-3 z-10 p-4 text-white/40 transition-colors hover:text-white"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M9 4l8 8-8 8" />
        </svg>
      </button>
    </div>
  )
}
