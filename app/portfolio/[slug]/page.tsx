import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Gallery from '@/components/Gallery'
import { portfolioGroups } from '@/lib/data'

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

export default function PortfolioGroupPage({ params }: Props) {
  const group = portfolioGroups.find(item => item.slug === params.slug)
  if (!group) notFound()

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-8 md:pt-10">
        <a
          href="/portfolio"
          aria-label="Terug naar portfolio"
          className="inline-flex items-center gap-2 border border-rule bg-paper px-3 py-2 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-colors hover:border-ink/40 hover:text-mist"
        >
          <span className="text-base leading-none">←</span>
          <span>Terug</span>
        </a>
      </div>

      <div className="px-6 pb-12 pt-6 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Portfolio</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">{group.title}</h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-28">
        <Gallery photos={group.photos} columns={3} />
      </div>
    </>
  )
}
