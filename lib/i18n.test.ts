import { describe, expect, it } from 'vitest'
import { localizedPortfolioTitle, localizedPhotoAlt, localizedProject } from './i18n'
import type { Project } from './data'

describe('i18n helpers', () => {
  it('returns english portfolio title for english locale', () => {
    expect(localizedPortfolioTitle('gouda', 'Gouda', 'en')).toBe('Gouda')
    expect(localizedPortfolioTitle('landschap-en-natuur', 'Landschap', 'en')).toBe('Landscape & Nature')
  })

  it('keeps dutch title in dutch locale', () => {
    expect(localizedPortfolioTitle('gouda', 'Gouda', 'nl')).toBe('Gouda')
  })

  it('creates english alt text for portfolio photos', () => {
    expect(localizedPhotoAlt('portfolio-gouda-3', 'Gouda 3', 'en')).toBe('Gouda photograph 3')
  })

  it('localizes project metadata for english', () => {
    const project: Project = {
      slug: 'kanoen-rivier-en-licht',
      title: 'Kanoën in de schoonheid van de natuur',
      description: 'Originele beschrijving',
      intro: 'Intro',
      heroImage: '/hero.jpg',
      date: '2025',
      location: 'Gouda, Nederland',
      photos: [],
    }

    const localized = localizedProject(project, 'en')

    expect(localized.title).toBe('Canoeing in the Beauty of Nature')
    expect(localized.description).toBe('A quiet series of canoe trips: water, reflections and soft morning light along the river.')
    expect(localized.location).toBe('Gouda, the Netherlands')
  })
})
