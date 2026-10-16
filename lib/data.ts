export type Category = 'Wildlife' | 'Landschappen' | 'Stadsfotografie' | 'Kanoën'

export interface Photo {
  id: string
  src: string
  alt: string
  category: Category
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

const B = 'https://picsum.photos/seed'

const shufflePhotos = <T,>(items: T[]): T[] => {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  return shuffled
}

// ─── Portfolio photos ─────────────────────────────────────────────────────────

export const portfolioPhotos: Photo[] = shufflePhotos([ 
  // Wildlife — 500mm
  { id: 'w01', src: `${B}/frank-heron-500mm/1200/800`,     alt: 'Reiger in vlucht — 500mm',             category: 'Wildlife' },
  { id: 'w02', src: `${B}/frank-eagle-water/1200/800`,     alt: 'Zeearend boven het water',              category: 'Wildlife' },
  { id: 'w03', src: `${B}/frank-fox-dawn/1200/800`,        alt: 'Vos in ochtendgloor',                   category: 'Wildlife' },
  { id: 'w04', src: `${B}/frank-swan-mist/1200/800`,       alt: 'Zwaan in ochtendmist',                  category: 'Wildlife' },
  { id: 'w05', src: `${B}/frank-deer-forest/1200/800`,     alt: 'Ree in het bos',                        category: 'Wildlife' },
  { id: 'w06', src: `${B}/frank-kingfisher/1200/800`,      alt: 'IJsvogel op tak',                       category: 'Wildlife' },
  { id: 'w07', src: `${B}/frank-buzzard-sky/1200/800`,     alt: 'Buizerd in vlucht',                     category: 'Wildlife' },
  { id: 'w08', src: `${B}/frank-egret-water/1200/800`,     alt: 'Kleine zilverreiger',                   category: 'Wildlife' },
  { id: 'w09', src: `${B}/frank-otter-river/1200/800`,     alt: 'Otter langs de rivier',                 category: 'Wildlife' },
  { id: 'w10', src: `${B}/frank-osprey-dive/1200/800`,     alt: 'Visarend duikt',                        category: 'Wildlife' },
  { id: 'w11', src: `${B}/frank-hare-field/1200/800`,      alt: 'Haas in het veld',                      category: 'Wildlife' },
  { id: 'w12', src: `${B}/frank-stork-nest/1200/800`,      alt: 'Ooievaar bij het nest',                 category: 'Wildlife' },

  // Landschappen
  { id: 'l01', src: `${B}/frank-etretat-cliffs/1200/800`,  alt: 'Kliffen bij Étretat, Normandië',        category: 'Landschappen' },
  { id: 'l02', src: `${B}/frank-normandy-mist/1200/800`,   alt: 'Ochtendmist in Normandië',              category: 'Landschappen' },
  { id: 'l03', src: `${B}/frank-ardennes-valley/1200/800`, alt: 'Dal in de Ardennen, Luxemburg',         category: 'Landschappen' },
  { id: 'l04', src: `${B}/frank-clervaux-autumn/1200/800`, alt: 'Herfst bij Clervaux',                   category: 'Landschappen' },
  { id: 'l05', src: `${B}/frank-polder-sunset/1200/800`,   alt: 'Polderlandschap bij zonsondergang',     category: 'Landschappen' },
  { id: 'l06', src: `${B}/frank-windmill-dawn/1200/800`,   alt: 'Molen in ochtendmist, Nederland',       category: 'Landschappen' },
  { id: 'l07', src: `${B}/frank-normandy-field/1200/800`,  alt: 'Koolzaadvelden Normandië',              category: 'Landschappen' },
  { id: 'l08', src: `${B}/frank-lux-forest/1200/800`,      alt: 'Herfstbos Luxemburg',                   category: 'Landschappen' },
  { id: 'l09', src: `${B}/frank-gouda-meadows/1200/800`,   alt: 'Groene weiden rond Gouda',              category: 'Landschappen' },
  { id: 'l10', src: `${B}/frank-normandy-coast/1200/800`,  alt: 'Kustlijn Normandië bij laagwater',      category: 'Landschappen' },
  { id: 'l11', src: `${B}/frank-clervaux-forest/1200/800`, alt: 'Bos Clervaux-regio in de mist',         category: 'Landschappen' },
  { id: 'l12', src: `${B}/frank-nl-canal/1200/800`,        alt: 'Kanaal in het Nederlandse landschap',   category: 'Landschappen' },

  // Stadsfotografie
  { id: 's01', src: `${B}/frank-rotterdam-blue/1200/800`,  alt: 'Rotterdam skyline — blauw uur',         category: 'Stadsfotografie' },
  { id: 's02', src: `${B}/frank-gouda-market/1200/800`,    alt: 'Markt Gouda in ochtendlicht',           category: 'Stadsfotografie' },
  { id: 's03', src: `${B}/frank-dordrecht-canal/1200/800`, alt: 'Grachten Dordrecht',                    category: 'Stadsfotografie' },
  { id: 's04', src: `${B}/frank-erasmus-mist/1200/800`,    alt: 'Erasmusbrug in de mist',                category: 'Stadsfotografie' },
  { id: 's05', src: `${B}/frank-gouda-church/1200/800`,    alt: 'Sint-Janskerk Gouda',                   category: 'Stadsfotografie' },
  { id: 's06', src: `${B}/frank-dordrecht-harbor/1200/800`,alt: 'Haven Dordrecht bij dageraad',          category: 'Stadsfotografie' },
  { id: 's07', src: `${B}/frank-rotterdam-cube/1200/800`,  alt: 'Kubuswoningen Rotterdam',               category: 'Stadsfotografie' },
  { id: 's08', src: `${B}/frank-gouda-street/1200/800`,    alt: 'Stille straat Gouda',                   category: 'Stadsfotografie' },
  { id: 's09', src: `${B}/frank-dordrecht-church/1200/800`,alt: 'Grote Kerk Dordrecht',                  category: 'Stadsfotografie' },
  { id: 's10', src: `${B}/frank-rotterdam-harbor/1200/800`,alt: 'Havenzicht Rotterdam',                  category: 'Stadsfotografie' },
  { id: 's11', src: `${B}/frank-gouda-kaas/1200/800`,      alt: 'Kaasmarkt Gouda',                       category: 'Stadsfotografie' },
  { id: 's12', src: `${B}/frank-dordrecht-water/1200/800`, alt: 'Waterfront Dordrecht',                  category: 'Stadsfotografie' },
])

// ─── Projects ─────────────────────────────────────────────────────────────────

const rawProjects: Project[] = [
  {
    slug: 'normandie-in-ochtendlicht',
    title: 'Normandië in ochtendlicht',
    description:
      'Een serie landschapsfoto\'s gemaakt in het gouden ochtenduur langs de kust en in het binnenland van Normandië.',
    intro:
      'Normandië heeft een unieke kwaliteit in het ochtendlicht. De lage zon werpt lange schaduwen over de kliffen en velden, terwijl de mist langzaam optrekt uit de dalen. Deze serie is gemaakt in de vroege ochtend, voor de meeste mensen wakker zijn. Elk beeld is een stille getuige van het ritme van het land.',
    heroImage: `${B}/frank-normandy-hero/1920/1080`,
    date: 'September 2023',
    location: 'Normandië, Frankrijk',
    photos: [
      { id: 'np01', src: `${B}/frank-np-sunrise/1200/800`,   alt: 'Zonsopkomst bij Étretat',           category: 'Landschappen' },
      { id: 'np02', src: `${B}/frank-np-fieldmist/1200/800`, alt: 'Mist over de velden',               category: 'Landschappen' },
      { id: 'np03', src: `${B}/frank-np-cliffs/1200/800`,    alt: 'Kliffen in ochtendlicht',           category: 'Landschappen' },
      { id: 'np04', src: `${B}/frank-np-boat/1200/800`,      alt: 'Vissersboot in de haven',           category: 'Landschappen' },
      { id: 'np05', src: `${B}/frank-np-orchard/1200/800`,   alt: 'Boomgaard in bloei',                category: 'Landschappen' },
      { id: 'np06', src: `${B}/frank-np-sea/1200/800`,       alt: 'Grijze lucht boven zee',            category: 'Landschappen' },
      { id: 'np07', src: `${B}/frank-np-lane/1200/800`,      alt: 'Holle weg tussen heggen',           category: 'Landschappen' },
      { id: 'np08', src: `${B}/frank-np-farm/1200/800`,      alt: 'Normandische boerderij bij dageraad',category: 'Landschappen' },
      { id: 'np09', src: `${B}/frank-np-beach/1200/800`,     alt: 'Strand bij eb',                    category: 'Landschappen' },
      { id: 'np10', src: `${B}/frank-np-gulls/1200/800`,     alt: 'Zeemeeuwen boven de kliffen',       category: 'Landschappen' },
      { id: 'np11', src: `${B}/frank-np-glow/1200/800`,      alt: 'Ochtendgloed over het land',        category: 'Landschappen' },
      { id: 'np12', src: `${B}/frank-np-house/1200/800`,     alt: 'Normandisch huis in mist',          category: 'Landschappen' },
    ],
  },
  {
    slug: '500mm-ontmoet-de-natuur',
    title: '500mm ontmoet de natuur',
    description:
      'Wilde dieren geportretteerd met een 500mm telelens — van ijsvogels op takken tot roofvogels in de vlucht.',
    intro:
      'Met een 500mm lens kom je dichterbij zonder te verstoren. De compressie van de lens creëert een unieke intimiteit met wilde dieren. Deze serie toont de Nederlandse natuur zoals die zelden te zien is: scherp, dichtbij en op het juiste moment bevroren. Elke ontmoeting is een cadeau.',
    heroImage: `${B}/frank-wildlife-hero/1920/1080`,
    date: 'Voorjaar 2024',
    location: 'Nederland & België',
    photos: [
      { id: 'wp01', src: `${B}/frank-wp-kingfisher/1200/800`,  alt: 'IJsvogel met vis',             category: 'Wildlife' },
      { id: 'wp02', src: `${B}/frank-wp-osprey/1200/800`,      alt: 'Visarend landt op tak',        category: 'Wildlife' },
      { id: 'wp03', src: `${B}/frank-wp-buzzard/1200/800`,     alt: 'Buizerd in portret',           category: 'Wildlife' },
      { id: 'wp04', src: `${B}/frank-wp-heron-fish/1200/800`,  alt: 'Reiger vangt vis',             category: 'Wildlife' },
      { id: 'wp05', src: `${B}/frank-wp-stork/1200/800`,       alt: 'Ooievaar in vlucht',           category: 'Wildlife' },
      { id: 'wp06', src: `${B}/frank-wp-deer-look/1200/800`,   alt: 'Ree kijkt op',                 category: 'Wildlife' },
      { id: 'wp07', src: `${B}/frank-wp-fox-snow/1200/800`,    alt: 'Vos in de sneeuw',             category: 'Wildlife' },
      { id: 'wp08', src: `${B}/frank-wp-eagle-rise/1200/800`,  alt: 'Zeearend stijgt op',           category: 'Wildlife' },
      { id: 'wp09', src: `${B}/frank-wp-otters/1200/800`,      alt: 'Otters spelen in het water',   category: 'Wildlife' },
      { id: 'wp10', src: `${B}/frank-wp-hare/1200/800`,        alt: 'Haas in de ochtend',           category: 'Wildlife' },
      { id: 'wp11', src: `${B}/frank-wp-swan-wings/1200/800`,  alt: 'Zwaan strekt vleugels',        category: 'Wildlife' },
      { id: 'wp12', src: `${B}/frank-wp-pheasant/1200/800`,    alt: 'Fazant in het graan',          category: 'Wildlife' },
    ],
  },
  
  {
    slug: 'stadsstilte',
    title: 'Stadsstilte',
    description:
      'Rotterdam, Gouda en Dordrecht in de vroege ochtend — steden die ademen voor de dag begint.',
    intro:
      'Er bestaat een moment, net na zonsopkomst, waarop steden stil zijn. De straten zijn leeg, het licht is zacht en alles lijkt even op adem te komen. In deze serie zoek ik die stilte op in Rotterdam, Gouda en Dordrecht. Architectuur, water en licht staan centraal — de mens is slechts incidenteel aanwezig.',
    heroImage: `${B}/frank-city-hero/1920/1080`,
    date: 'Winter 2023–2024',
    location: 'Rotterdam, Gouda & Dordrecht',
    photos: [
      { id: 'cp01', src: `${B}/frank-cp-erasmus/1200/800`,     alt: 'Erasmusbrug in de mist',          category: 'Stadsfotografie' },
      { id: 'cp02', src: `${B}/frank-cp-gouda-markt/1200/800`, alt: 'Markt Gouda voor de drukte',      category: 'Stadsfotografie' },
      { id: 'cp03', src: `${B}/frank-cp-dordrecht/1200/800`,   alt: 'Dordrecht waterfront bij dageraad',category: 'Stadsfotografie' },
      { id: 'cp04', src: `${B}/frank-cp-rdam-harbor/1200/800`, alt: 'Rotterdam haven in de stilte',    category: 'Stadsfotografie' },
      { id: 'cp05', src: `${B}/frank-cp-gouda-canal/1200/800`, alt: 'Gracht Gouda in de mist',         category: 'Stadsfotografie' },
      { id: 'cp06', src: `${B}/frank-cp-dordrecht-br/1200/800`,alt: 'Brug Dordrecht bij schemering',   category: 'Stadsfotografie' },
      { id: 'cp07', src: `${B}/frank-cp-cube/1200/800`,        alt: 'Kubuswoningen ochtendlicht',      category: 'Stadsfotografie' },
      { id: 'cp08', src: `${B}/frank-cp-janskerk/1200/800`,    alt: 'Sint-Janskerk vroeg licht',       category: 'Stadsfotografie' },
      { id: 'cp09', src: `${B}/frank-cp-koopgoot/1200/800`,    alt: 'Koopgoot Rotterdam — leeg',       category: 'Stadsfotografie' },
      { id: 'cp10', src: `${B}/frank-cp-windmill/1200/800`,    alt: 'Windmolen Dordrecht',             category: 'Stadsfotografie' },
      { id: 'cp11', src: `${B}/frank-cp-rdam-blue/1200/800`,   alt: 'Waterfront Rotterdam — blauw uur',category: 'Stadsfotografie' },
      { id: 'cp12', src: `${B}/frank-cp-gouda-winter/1200/800`,alt: 'Straat Gouda — winterochtend',    category: 'Stadsfotografie' },
    ],
  },
  {
    slug: 'kanoen-rivier-en-licht',
    title: 'Kanoën in de schoonheid van de natuur',
    description:
      'Een rustige serie van kano-vakanties: water, reflecties en het zachte ochtendlicht langs de rivier.',
    intro:
      'Op een kalme ochtend op het water is alles langzamer. De kano glijdt over het oppervlak, het licht valt zacht over het water en de wereld lijkt even stil te staan. In deze serie zoek ik die rust en die beweging samen — het ritme van het water, de reflecties en de feel van een stille rivier in de vroege dag.',
    heroImage: '/images/kano/2026-10-%20kano01.jpg',
    date: 'Mei 2025',
    location: 'Gouda, Nederland',
    photos: [
      { id: 'k01', src: '/images/kano/2026-10-%20kano01.jpg', alt: 'Kano 01', category: 'Kanoën' },
      { id: 'k02', src: '/images/kano/2026-10-%20kano02.jpg', alt: 'Kano 02', category: 'Kanoën' },
      { id: 'k03', src: '/images/kano/2026-10-%20kano03.jpg', alt: 'Kano 03', category: 'Kanoën' },
      { id: 'k04', src: '/images/kano/2026-10-%20kano04.jpg', alt: 'Kano 04', category: 'Kanoën' },
      { id: 'k05', src: '/images/kano/2026-10-%20kano05.jpg', alt: 'Kano 05', category: 'Kanoën' },
      { id: 'k06', src: '/images/kano/2026-10-%20kano06.jpg', alt: 'Kano 06', category: 'Kanoën' },
      { id: 'k07', src: '/images/kano/2026-10-%20kano07.jpg', alt: 'Kano 07', category: 'Kanoën' },
      { id: 'k08', src: '/images/kano/2026-10-%20kano08.jpg', alt: 'Kano 08', category: 'Kanoën' },
      { id: 'k09', src: '/images/kano/2026-10-%20kano09.jpg', alt: 'Kano 09', category: 'Kanoën' },
      { id: 'k10', src: '/images/kano/2026-10-%20kano10.jpg', alt: 'Kano 10', category: 'Kanoën' },
      { id: 'k11', src: '/images/kano/2026-10-%20kano11.jpg', alt: 'Kano 11', category: 'Kanoën' },
      { id: 'k12', src: '/images/kano/2026-10-%20kano12.jpg', alt: 'Kano 12', category: 'Kanoën' },
      { id: 'k13', src: '/images/kano/2026-10-%20kano13.jpg', alt: 'Kano 13', category: 'Kanoën' },
      { id: 'k14', src: '/images/kano/2026-10-%20kano14.jpg', alt: 'Kano 14', category: 'Kanoën' },
      { id: 'k15', src: '/images/kano/2026-10-%20kano15.jpg', alt: 'Kano 15', category: 'Kanoën' },
      { id: 'k16', src: '/images/kano/2026-10-%20kano16.jpg', alt: 'Kano 16', category: 'Kanoën' },
      { id: 'k17', src: '/images/kano/2026-10-%20kano17.jpg', alt: 'Kano 17', category: 'Kanoën' },
      { id: 'k18', src: '/images/kano/2026-10-%20kano18.jpg', alt: 'Kano 18', category: 'Kanoën' },
    ],
  },
]

export const projects: Project[] = rawProjects.map(project => ({
  ...project,
  photos: shufflePhotos(project.photos),
}))

export const featuredPhotos = portfolioPhotos.slice(0, 6)
