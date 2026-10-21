import type { Metadata } from 'next'
import ProjectsPage from '@/components/pages/ProjectsPage'

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Fotoprojecten van Frank uit Gouda: Normandië, 500mm natuur en stadsstilte.',
}

export default function Page() {
  return <ProjectsPage />
}
