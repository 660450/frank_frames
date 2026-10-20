import type { Project } from '@/lib/data'
import { localeMessages } from '@/lib/locales'

export type Locale = 'nl' | 'en'

export const messages = localeMessages

const portfolioTitles: Record<string, string> = {
  gouda: 'Gouda',
  kermis: 'Fairground',
  'landschap-en-natuur': 'Landscape & Nature',
  'kanoen-rivier-en-licht': 'Canoeing, River & Light',
  oorlogsbeelden: 'Wartime Images',
  rotterdam: 'Rotterdam',
  stadsfotografie: 'Urban Photography',
  'wadden-eilanden': 'Wadden Islands',
}

const projectTranslations: Record<string, Partial<Project>> = {
  'kanoen-rivier-en-licht': {
    title: 'Canoeing in the Beauty of Nature',
    description: 'A quiet series of canoe trips: water, reflections and soft morning light along the river.',
    intro:
      'At the end of the day, as the sun sets, everything on the water seems to slow down. The canoe glides silently across the surface while the last sunlight falls softly on the water. For a moment, the world seems to stand still. In this series I look for that combination of calm and movement: the rhythm of the water, the reflections and the atmosphere of a quiet river or lake at dusk.',
    location: 'Gouda, the Netherlands',
  },
  food: {
    title: 'Food & Gastronomy',
    description: 'Food, textures and detail in a warm, tactile atmosphere.',
    intro:
      'The idea for this website came from an acquaintance who asked me to photograph several dishes. The photographs were to be included in a book about restaurants in Gouda. Each restaurant was featured with one of its dishes, and proceeds from the book went to charity. In return, my name and website would be mentioned in the book. At the time, this website did not yet exist, but it does now. This page features a selection of the dishes I photographed for the project.',
    date: '2025',
    location: 'The Netherlands',
  },
}

export function localizedPortfolioTitle(slug: string, title: string, locale: Locale) {
  return locale === 'en' ? portfolioTitles[slug] ?? title : title
}

export function localizedPhotoAlt(id: string, alt: string, locale: Locale) {
  if (locale === 'nl') return alt

  const match = id.match(/^portfolio-(.+)-(\d+)$/)
  if (!match) return alt
  return `${portfolioTitles[match[1]] ?? alt.replace(/\s+\d+$/, '')} photograph ${match[2]}`
}

export function localizedProject(project: Project, locale: Locale): Project {
  if (locale === 'nl') return project

  const translation = projectTranslations[project.slug]
  return {
    ...project,
    ...translation,
    description: translation?.description ?? 'Photographs from this project.',
    intro: translation?.intro ?? 'A photography project featuring a collection of images from this series.',
    location: project.location.includes('Nederland')
      ? project.location.replace(/Nederland\b/g, 'the Netherlands')
      : project.location,
  }
}
