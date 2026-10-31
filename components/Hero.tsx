'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  /** Absolute URL or path to the background image or multiple images for a slideshow */
  imageSrc: string | string[]
  imageAlt: string | string[]
  /** Main headline */
  title: string
  /** Small label above the headline */
  eyebrow?: string
  /** Optional CTA button */
  cta?: { label: string; href: string }
  /** true = 100vh, false = 60vh */
  fullscreen?: boolean
  /** Overlay darkness 0–100 */
  overlay?: number
  /** Delay in ms between slideshow images */
  slideInterval?: number
}

export default function Hero({
  imageSrc,
  imageAlt,
  title,
  eyebrow,
  cta,
  fullscreen = true,
  overlay = 42,
  slideInterval = 5000,
}: HeroProps) {
  const sources = Array.isArray(imageSrc) ? imageSrc : [imageSrc]
  const alts = Array.isArray(imageAlt) ? imageAlt : [imageAlt]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (sources.length < 2) return

    const intervalId = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % sources.length)
    }, slideInterval)

    return () => window.clearInterval(intervalId)
  }, [slideInterval, sources.length])

  return (
    <section
      className={`relative isolate overflow-hidden ${fullscreen ? 'h-screen' : 'h-[58vh] min-h-[380px]'}`}
    >
      {sources.map((src, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt={alts[index] ?? alts[0] ?? title}
          fill
          priority={index === 0}
          className={`scale-[0.96] object-cover transition-opacity duration-1000 ease-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: '50% 50%' }}
          sizes="100vw"
          unoptimized
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlay / 100})` }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        {eyebrow && (
          <p className="mb-4 animate-fade-in font-lato text-[10px] tracking-[0.35em] uppercase text-white/65">
            {eyebrow}
          </p>
        )}

        <h1 className="animate-slide-up max-w-3xl font-montserrat text-3xl font-light leading-snug tracking-wide sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {cta && (
          <Link
            href={cta.href}
            className="animate-fade-in-delay mt-10 inline-block border border-white/50 px-8 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-ink"
          >
            {cta.label}
          </Link>
        )}
      </div>

      {sources.length > 1 && (
        <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {sources.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Scroll indicator — only on fullscreen */}
      {fullscreen && (
        <div className="animate-fade-in-delay absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50">
          <span className="font-lato text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            aria-hidden="true"
            className="animate-bounce"
          >
            <path d="M7 0v14M1 8l6 6 6-6" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      )}
    </section>
  )
}
