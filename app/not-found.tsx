'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">404</p>
      <h1 className="font-montserrat text-3xl font-light text-ink">
        {isEnglish ? 'Page not found' : 'Pagina niet gevonden'}
      </h1>
      <p className="mt-4 font-lato text-sm text-mist">
        {isEnglish ? 'This page does not exist (anymore).' : 'Deze pagina bestaat niet (meer).'}
      </p>
      <Link
        href={isEnglish ? '/en' : '/'}
        className="mt-10 inline-block border border-ink px-8 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white"
      >
        {isEnglish ? 'Back to home' : 'Terug naar home'}
      </Link>
    </div>
  )
}
