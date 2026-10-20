'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LocaleDocument() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang =
      pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'nl'
  }, [pathname])

  return null
}
