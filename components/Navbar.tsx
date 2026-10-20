'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { messages } from '@/lib/i18n'

function languagePath(pathname: string, toEnglish: boolean) {
  if (toEnglish) {
    if (pathname === '/en' || pathname.startsWith('/en/')) return pathname
    const englishPath = pathname === '/' ? '' : pathname
    const localized = englishPath
      .replace(/^\/over-mij(?=\/|$)/, '/about')
      .replace(/^\/projecten(?=\/|$)/, '/projects')
    return `/en${localized}`
  }

  if (pathname !== '/en' && !pathname.startsWith('/en/')) return pathname
  const dutchPath = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  return dutchPath
    .replace(/^\/about(?=\/|$)/, '/over-mij')
    .replace(/^\/projects(?=\/|$)/, '/projecten')
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname                  = usePathname()
  const isEnglish                 = pathname === '/en' || pathname.startsWith('/en/')
  const locale                    = isEnglish ? 'en' : 'nl'
  const t                         = messages[locale]
  const navLinks = [
    { href: isEnglish ? '/en/portfolio' : '/portfolio', label: t.nav.portfolio },
    { href: isEnglish ? '/en/projects' : '/projecten', label: t.nav.projects },
    { href: isEnglish ? '/en/about' : '/over-mij', label: t.nav.about },
    { href: isEnglish ? '/en/contact' : '/contact', label: t.nav.contact },
  ]
  const isHome                    = pathname === '/'
    || pathname === '/en'

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
        <nav className="hidden items-center gap-8 md:flex" aria-label={t.nav.main}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-lato text-[12px] font-semibold tracking-[0.24em] uppercase transition-all duration-200 md:text-[13px] ${
                pathname === href || pathname.startsWith(`${href}/`)
                  ? 'text-accent'
                  : transparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-ink hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className={`flex items-center gap-2 border-l pl-6 font-lato text-[11px] tracking-[0.16em] uppercase ${
            transparent ? 'border-white/40 text-white/70' : 'border-rule text-mist'
          }`} aria-label={t.language}>
            <Link
              href={languagePath(pathname, false)}
              aria-current={!isEnglish ? 'page' : undefined}
              className={!isEnglish ? 'font-bold text-accent' : 'transition-colors hover:text-ink'}
            >
              NL
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={languagePath(pathname, true)}
              aria-current={isEnglish ? 'page' : undefined}
              className={isEnglish ? 'font-bold text-accent' : 'transition-colors hover:text-ink'}
            >
              EN
            </Link>
          </div>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
          menuOpen ? 'max-h-96 border-b border-rule' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5" aria-label={t.nav.mobile}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-lato text-[12px] font-semibold tracking-[0.24em] uppercase py-2 transition-colors ${
                pathname === href || pathname.startsWith(`${href}/`) ? 'text-accent' : 'text-ink hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3 border-t border-rule pt-4 font-lato text-[11px] tracking-[0.16em] uppercase text-mist" aria-label={t.language}>
            <Link
              href={languagePath(pathname, false)}
              aria-current={!isEnglish ? 'page' : undefined}
              className={!isEnglish ? 'font-bold text-accent' : 'hover:text-ink'}
            >
              Nederlands
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href={languagePath(pathname, true)}
              aria-current={isEnglish ? 'page' : undefined}
              className={isEnglish ? 'font-bold text-accent' : 'hover:text-ink'}
            >
              English
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
