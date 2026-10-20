import type { Metadata } from 'next'
import PortfolioPage from '@/components/pages/PortfolioPage'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Wildlife, landschappen en stadsfotografie door Frank uit Gouda. Nikon D850/D810 met 500mm.',
}

export default function Page() {
  return <PortfolioPage />
}
