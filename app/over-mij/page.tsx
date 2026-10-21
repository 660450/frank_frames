import type { Metadata } from 'next'
import AboutPage from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Hobbyfotograaf Frank uit Gouda — wildlife, landschappen en steden met Nikon D850/D810.',
}

export default function Page() {
  return <AboutPage />
}
