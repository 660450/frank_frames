import Link from 'next/link'

const LINKS = [
  { href: '/portfolio',  label: 'Portfolio'  },
  { href: '/projecten',  label: 'Projecten'  },
  { href: '/over-mij',   label: 'Over mij'   },
  { href: '/contact',    label: 'Contact'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

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
              Fotografie vanuit Gouda, Nederland
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2" aria-label="Footer navigatie">
            {LINKS.map(({ href, label }) => (
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
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
            © {year} Frank Fotografie · Alle rechten voorbehouden
          </p>
        </div>
      </div>
    </footer>
  )
}
