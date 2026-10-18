import fs from 'fs'
import path from 'path'

export type Category = 'Wildlife' | 'Landschappen' | 'Stadsfotografie' | 'Kanoën'

export interface Photo {
  id: string
  src: string
  alt: string
  category: Category
  aspectRatio: number
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
      'Aan het einde van de dag, wanneer de zon ondergaat, lijkt alles op het water langzamer te gaan. De kano glijdt geruisloos over het oppervlak, terwijl het laatste zonlicht zacht over het water valt. Even lijkt de wereld stil te staan. In deze serie zoek ik die combinatie van rust en beweging: het ritme van het water, de weerspiegelingen en de sfeer van een stille rivier of plas in de avondschemering.',
    location: 'Gouda, Nederland',
  },
  food: {
    title: 'Food & Gastronomie',
    description: 'Eten, texturen en detail in een warme, tastbare sfeer.',
    intro:
      'De aanleiding voor het maken van deze website was een verzoek van een kennis om foto\'s te maken van verschillende gerechten. Deze foto\'s zouden worden opgenomen in een boek waarin diverse restaurants uit Gouda werden beschreven. Bij elk restaurant werd een gerecht gepresenteerd en toegelicht. De opbrengst van het boek ging naar een goed doel. Als dank zouden mijn naam en website in het boek worden vermeld. Op dat moment bestond deze website nog niet, maar inmiddels wel. Op deze pagina vindt u een selectie van de gerechten die ik voor dit project heb gefotografeerd.',
    date: '2025',
    location: 'Nederland',
  },
}

const getPhotoCategory = (folderName: string, root: 'portfolio' | 'projecten'): Category => {
  const value = folderName.toLowerCase()

  if (root === 'projecten' && value.includes('kano')) return 'Kanoën'
  if (value.includes('gouda bij nacht') || value.includes('Rotterdam') || value.includes('Steden')) return 'Stadsfotografie'
  if (value.includes('natuur') || value.includes('landschap') || value.includes('Wadden eilanden') || value.includes('food')) return 'Landschappen'
  if (value.includes('Kermis')) return 'Stadsfotografie'

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

const getImageDimensions = (filePath: string): { width: number; height: number } => {
  const buffer = fs.readFileSync(filePath)
  const signature = buffer.subarray(0, 8)

  if (signature.toString('hex', 0, 8) === '89504e470d0a1a0a') {
    const width = buffer.readUInt32BE(0x08)
    const height = buffer.readUInt32BE(0x0c)
    return { width, height }
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1
        continue
      }

      const marker = buffer[offset + 1]
      if (marker === 0xda) break

      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        const blockLength = buffer.readUInt16BE(offset + 2)
        const height = buffer.readUInt16BE(offset + 5)
        const width = buffer.readUInt16BE(offset + 7)
        return { width, height }
      }

      offset += 2 + buffer.readUInt16BE(offset + 2)
    }
  }

  return { width: 4, height: 3 }
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
    const fullPath = path.join(folderPath, file)
    const { width, height } = getImageDimensions(fullPath)
    const aspectRatio = width && height ? width / height : 4 / 3

    return {
      id: `${root}-${createSlug(folderName)}-${index + 1}`,
      src: `/images/${root}/${safeFolder}/${safeFile}`,
      alt: `${title} ${index + 1}`,
      category: getPhotoCategory(folderName, root),
      aspectRatio,
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
