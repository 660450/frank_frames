import PortfolioGroupPage from '@/components/pages/PortfolioGroupPage'
export { generateMetadata, generateStaticParams } from '@/components/pages/PortfolioGroupPage'

export default function Page({ params }: { params: { slug: string } }) {
  return <PortfolioGroupPage params={params} />
}
