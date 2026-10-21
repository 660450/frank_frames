import type { Metadata } from 'next'
import PortfolioGroupContent from '@/components/pages/PortfolioGroupPage'
import { portfolioGroups } from '@/lib/data'
import { localizedPortfolioTitle } from '@/lib/i18n'

export function generateStaticParams() {
  return portfolioGroups.map(group => ({ slug: group.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const group = portfolioGroups.find(item => item.slug === params.slug)
  if (!group) return {}
  const title = localizedPortfolioTitle(group.slug, group.title, 'en')
  return {
    title,
    description: `Portfolio — ${title}`,
  }
}

export default function EnglishPortfolioGroupPage({ params }: { params: { slug: string } }) {
  return <PortfolioGroupContent params={params} locale="en" />
}
