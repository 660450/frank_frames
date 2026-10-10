import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Frank Fotografie | Gouda',
    template: '%s | Frank Fotografie',
  },
  description:
    'Minimalistische fotografiewebsite van Frank uit Gouda. Wildlife met 500mm, landschappen uit Normandië & Luxemburg, en stadsfotografie.',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Frank Fotografie',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-white text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
