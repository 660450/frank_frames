import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LocaleDocument from '@/components/LocaleDocument'
import Script from 'next/script'

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
      <head>
        <Script id="set-document-language" strategy="beforeInteractive">
          {`document.documentElement.lang = location.pathname === '/en' || location.pathname.startsWith('/en/') ? 'en' : 'nl'`}
        </Script>
      </head>
      <body className="bg-white text-ink antialiased">
        <LocaleDocument />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
