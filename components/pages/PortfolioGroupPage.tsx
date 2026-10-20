import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Gallery from '@/components/Gallery'
import { portfolioGroups } from '@/lib/data'
import { localizedPortfolioTitle, type Locale } from '@/lib/i18n'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return portfolioGroups.map(group => ({ slug: group.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const group = portfolioGroups.find(item => item.slug === params.slug)
  if (!group) return {}

  return {
    title: group.title,
    description: `Portfolio — ${group.title}`,
  }
}

export default function PortfolioGroupContent({ params, locale = 'nl' }: Props & { locale?: Locale }) {
  const group = portfolioGroups.find(item => item.slug === params.slug)
  if (!group) notFound()
  const isEnglish = locale === 'en'
  const title = localizedPortfolioTitle(group.slug, group.title, locale)

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-8 md:pt-10">
        <Link
          href={isEnglish ? '/en/portfolio' : '/portfolio'}
          aria-label={isEnglish ? 'Back to portfolio' : 'Terug naar portfolio'}
          className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 border border-rule bg-paper/95 px-3 py-2 font-lato text-[10px] tracking-[0.3em] uppercase text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-ink/40 hover:text-mist"
        >
          <span className="text-base leading-none">←</span>
          <span>{isEnglish ? 'Back' : 'Terug'}</span>
        </Link>
      </div>

      <div className="px-6 pb-12 pt-6 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Portfolio</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">{title}</h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-28">
        <Gallery
          photos={group.photos.map((photo, index) => ({
            ...photo,
            alt: isEnglish ? `${title} photograph ${index + 1}` : photo.alt,
          }))}
          columns={3}
          locale={locale}
        />
      </div>
    </>
  )
}
