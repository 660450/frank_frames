import type { Metadata } from 'next'
import PortfolioContent from '@/components/pages/PortfolioPage'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Wildlife, landscapes and urban photography by Frank from Gouda, the Netherlands.',
}

export default function EnglishPortfolioPage() {
  return <PortfolioContent locale="en" />
}
