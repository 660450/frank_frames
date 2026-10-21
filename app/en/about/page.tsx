import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'Frank is an amateur photographer from Gouda, photographing wildlife, landscapes and cities.',
}

export default function EnglishAboutPage() {
  return <AboutContent locale="en" />
}
