import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomePage'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Minimalist photography by Frank from Gouda, the Netherlands. Wildlife, landscapes and urban photography.',
}

export default function EnglishHomePage() {
  return <HomeContent locale="en" />
}
