import fs from 'fs'
import path from 'path'

export type Category = 'Wildlife' | 'Landschappen' | 'Stadsfotografie' | 'Kanoën'

export interface Photo {
  id: string
  src: string
  alt: string
  category: Category
}

export interface PhotoGroup {
  title: string
  slug: string
  photos: Photo[]
}

export interface Project {
  slug: string
  title: string
  description: string
  intro: string
  heroImage: string
  date: string
  location: string
  photos: Photo[]
}

const projectTitleMap: Record<string, Partial<Project>> = {
  'kanoen-rivier-en-licht': {
    title: 'Kanoën in de schoonheid van de natuur',
    description: 'Een rustige serie van kano-vakanties: water, reflecties en het zachte ochtendlicht langs de rivier.',
    intro:
      'Op een kalme ochtend op het water is alles langzamer. De kano glijdt over het oppervlak, het licht valt zacht over het water en de wereld lijkt even stil te staan. In deze serie zoek ik die rust en die beweging samen — het ritme van het water, de reflecties en de feel van een stille rivier in de vroege dag.',
    date: 'Mei 2025',
    location: 'Gouda, Nederland',
  },
  food: {
    title: 'Food',
    description: 'Eten, texturen en detail in een warme, tastbare sfeer.',
    intro: 'Een serie over smaak, licht en compositie in de wereld van eten en detail.',
    date: '2025',
    location: 'Nederland',
  },
}

const getPhotoCategory = (folderName: string, root: 'portfolio' | 'projecten'): Category => {
  const value = folderName.toLowerCase()

  if (root === 'projecten' && value.includes('kano')) return 'Kanoën'
  if (value.includes('gouda') || value.includes('rotterdam') || value.includes('steden')) return 'Stadsfotografie'
  if (value.includes('natuur') || value.includes('landschap') || value.includes('wadden') || value.includes('food')) return 'Landschappen'
  if (value.includes('kermis')) return 'Stadsfotografie'

  return 'Landschappen'
}

const normalizeDirName = (value: string) => value.trim()

const createFolderTitle = (value: string) => {
  const cleaned = normalizeDirName(value)
  return cleaned
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

const createSlug = (value: string) => {
  return normalizeDirName(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const listFolderPhotos = (root: 'portfolio' | 'projecten', folderName: string): Photo[] => {
  const folderPath = path.join(process.cwd(), 'public', 'images', root, folderName)
  if (!fs.existsSync(folderPath)) return []

  const files = fs
    .readdirSync(folderPath)
    .filter(file => /\.(jpe?g|png|webp|avif|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

  return files.map((file, index) => {
    const safeFolder = encodeURIComponent(folderName)
    const safeFile = encodeURIComponent(file)
    const title = createFolderTitle(folderName)

    return {
      id: `${root}-${createSlug(folderName)}-${index + 1}`,
      src: `/images/${root}/${safeFolder}/${safeFile}`,
      alt: `${title} ${index + 1}`,
      category: getPhotoCategory(folderName, root),
    }
  })
}

const listPhotoGroups = (root: 'portfolio' | 'projecten'): PhotoGroup[] => {
  const rootPath = path.join(process.cwd(), 'public', 'images', root)
  if (!fs.existsSync(rootPath)) return []

  return fs
    .readdirSync(rootPath, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const folderName = entry.name
      const photos = listFolderPhotos(root, folderName)

      return {
        title: createFolderTitle(folderName),
        slug: createSlug(folderName),
        photos,
      }
    })
    .filter(group => group.photos.length > 0)
}

export const portfolioGroups: PhotoGroup[] = listPhotoGroups('portfolio')
export const projectGroups: PhotoGroup[] = listPhotoGroups('projecten')

export const portfolioPhotos: Photo[] = portfolioGroups.flatMap(group => group.photos)

export const projects: Project[] = projectGroups.map(group => {
  const meta = projectTitleMap[group.slug] ?? {}
  const heroImage = group.photos[0]?.src ?? '/images/index-hero.jpg'

  return {
    slug: group.slug,
    title: meta.title ?? createFolderTitle(group.title),
    description: meta.description ?? 'Projectfoto\'s uit deze serie.',
    intro: meta.intro ?? 'Een fotoproject met een verzameling beelden uit deze serie.',
    heroImage,
    date: meta.date ?? '2025',
    location: meta.location ?? 'Nederland',
    photos: group.photos,
  }
})

export const featuredPhotos = portfolioPhotos.slice(0, 6)
