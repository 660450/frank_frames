'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/portfolio',  label: 'Portfolio'  },
  { href: '/projecten',  label: 'Projecten'  },
  { href: '/over-mij',   label: 'Over mij'   },
  { href: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname                  = usePathname()
  const isHome                    = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className={`font-montserrat text-lg font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
            transparent ? 'text-white' : 'text-ink'
          }`}
        >
          Frank
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Hoofdnavigatie">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-lato text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                pathname.startsWith(href) ? 'text-accent' : transparent ? 'text-white/85 hover:text-white' : 'text-ink hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={menuOpen}
          className={`relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
            transparent ? 'text-white' : 'text-ink'
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
              menuOpen ? 'translate-y-[8.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
              menuOpen ? '-translate-y-[8.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-64 border-b border-rule' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5" aria-label="Mobiele navigatie">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-lato text-[11px] tracking-[0.2em] uppercase py-2 transition-colors ${
                pathname.startsWith(href) ? 'text-accent' : 'text-ink hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
