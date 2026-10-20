import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Frank, an amateur photographer from Gouda.',
}

export default function EnglishContactPage() {
  return <ContactContent locale="en" />
}
