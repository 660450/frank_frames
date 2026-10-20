import type { Metadata } from 'next'
import ProjectContent from '@/components/pages/ProjectPage'
import { projects } from '@/lib/data'
import { localizedProject } from '@/lib/i18n'

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sourceProject = projects.find(project => project.slug === params.slug)
  if (!sourceProject) return {}
  const project = localizedProject(sourceProject, 'en')
  return {
    title: project.title,
    description: project.description,
  }
}

export default function EnglishProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectContent params={params} locale="en" />
}
