import ProjectPage from '@/components/pages/ProjectPage'
export { generateMetadata, generateStaticParams } from '@/components/pages/ProjectPage'

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectPage params={params} />
}
