import type { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met Frank — hobbyfotograaf uit Gouda.',
}

export default function Page() {
  return <ContactPage />
}
