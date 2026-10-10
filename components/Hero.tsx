import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  /** Absolute URL or path to the background image */
  imageSrc: string
  imageAlt: string
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
}

export default function Hero({
  imageSrc,
  imageAlt,
  title,
  eyebrow,
  cta,
  fullscreen = true,
  overlay = 42,
}: HeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden ${fullscreen ? 'h-screen' : 'h-[58vh] min-h-[380px]'}`}
    >
      {/* Background photo */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        unoptimized
      />

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
