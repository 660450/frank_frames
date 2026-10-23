'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { messages } from '@/lib/i18n'

export default function Footer() {
  const year = new Date().getFullYear()
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const t = messages[isEnglish ? 'en' : 'nl']
  const links = [
    { href: isEnglish ? '/en/portfolio' : '/portfolio', label: t.nav.portfolio },
    { href: isEnglish ? '/en/projects' : '/projecten', label: t.nav.projects },
    { href: isEnglish ? '/en/about' : '/over-mij', label: t.nav.about },
    { href: isEnglish ? '/en/contact' : '/contact', label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-rule bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <p className="font-montserrat text-base font-bold tracking-[0.25em] uppercase text-ink">
              Frank
            </p>
            <p className="mt-1 font-lato text-xs text-mist">
              {isEnglish ? 'Photography from Gouda, the Netherlands' : 'Fotografie vanuit Gouda, Nederland'}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2" aria-label={t.nav.footer}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-lato text-[11px] tracking-[0.2em] uppercase text-mist transition-colors hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/frank.frames2026"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram frank.frames2026"
            className="flex items-center gap-2 font-lato text-[11px] tracking-[0.2em] uppercase text-mist transition-colors hover:text-ink"
          >
            {/* Instagram icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-rule pt-6 text-center">
          <p className="font-lato text-[10px] tracking-wider text-mist/60 uppercase">
            © {year} Frank Fotografie · {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
