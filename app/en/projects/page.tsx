import type { Metadata } from 'next'
import ProjectsContent from '@/components/pages/ProjectsPage'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Photography projects and visual stories by Frank from Gouda.',
}

export default function EnglishProjectsPage() {
  return <ProjectsContent locale="en" />
}
