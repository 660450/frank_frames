# Frank Fotografie

Minimalistische fotografiewebsite voor Frank uit Gouda.  
Gebouwd met **Next.js 14 App Router**, **Tailwind CSS** en **TypeScript**.

---

## Snel starten

```bash
# 1. Installeer dependencies
npm install

# 2. Start de development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

---

## Projectstructuur

```
├── app/
│   ├── layout.tsx            # Root layout (Navbar + Footer + fonts)
│   ├── page.tsx              # Home
│   ├── globals.css           # Tailwind + custom animaties
│   ├── loading.tsx           # Loading state
│   ├── not-found.tsx         # 404 pagina
│   ├── portfolio/page.tsx    # Portfolio met filterbare gallery
│   ├── projecten/
│   │   ├── page.tsx          # Projectenoverzicht
│   │   └── [slug]/page.tsx   # Individuele projectpagina
│   ├── over-mij/page.tsx     # Bio, gear & locaties
│   └── contact/page.tsx      # Contactformulier
│
├── components/
│   ├── Navbar.tsx            # Fixed navigatie (transparant op hero)
│   ├── Footer.tsx            # Footer met navigatie
│   ├── Hero.tsx              # Fullscreen/halve hero met achtergrondafbeelding
│   ├── Gallery.tsx           # Foto-grid met categorie-filter
│   ├── Lightbox.tsx          # Donkere lightbox (keyboard-navigatie)
│   └── ProjectCard.tsx       # Projectkaart voor overzichtspagina
│
├── lib/
│   └── data.ts               # Alle foto- en projectdata
│
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Foto's toevoegen en organiseren

De site leest foto’s op basis van de mapstructuur in `public/images/` in plaats van een handmatige lijst in `lib/data.ts`.

Gebruik daarom deze structuur:

```text
public/
├── images/
│   ├── portfolio/
│   │   ├── Gouda/
│   │   │   ├── 01.jpg
│   │   │   └── 02.jpg
│   │   └── Landschap en natuur/
│   │       ├── 01.jpg
│   │       └── 02.jpg
│   └── projecten/
│       ├── kanoen-rivier-en-licht/
│       │   ├── kano01.jpg
│       │   └── kano02.jpg
│       └── food/
│           ├── 01.jpg
│           └── 02.jpg
```

- `public/images/portfolio/...` = foto’s voor de portfolio-galerij
- `public/images/projecten/...` = foto’s voor projectpagina’s
- elk project/map krijgt automatisch een eigen kopje op de pagina
- laat geen losse foto’s in de hoofdmap staan; zet ze per serie in een eigen map

Als je een nieuwe serie wilt toevoegen:

1. maak een nieuwe folder in `public/images/portfolio/` of `public/images/projecten/`
2. plaats de foto’s daar in
3. herstart de dev-server als nodig
4. de pagina wordt automatisch opgebouwd vanuit die map

Belangrijk: geen spaties in bestandsnamen, of gebruik een veilige naam zoals `kano01.jpg`.

---

## Als de app ineens een Next.js cache-fout geeft

Als je in de browser een fout ziet zoals:

```text
Error: Cannot find module './249.js'
```

of een vergelijkbare `webpack-runtime`-fout, dan is dit meestal een oude dev-cache, niet een probleem met je foto’s.

Doe dit dan:

```bash
# 1. stop de dev-server op port 3000
lsof -ti :3000 | xargs kill

# 2. wis de cache
rm -rf .next

# 3. start opnieuw
npm run dev
```

Vervolgens even een harde refresh in de browser:

- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

Als je een Next.js-devserver nog steeds ziet hangen, check dan of er nog een `node next dev`-proces draait en stop dat ook.

---

## Eigen foto's toevoegen

Vervang de picsum.photos-URLs in `lib/data.ts` door je eigen foto's:

```ts
// Optie 1: foto's in /public/images/
src: '/images/heron-500mm.jpg'

// Optie 2: externe hosting (bijv. Cloudinary, Imgix)
src: 'https://res.cloudinary.com/jouw-account/...'
```

Bij lokale foto's: voeg ze toe aan `/public/images/` en pas `next.config.js` niet aan.  
Bij externe hosting: voeg het domein toe aan `remotePatterns` in `next.config.js`.

---

## Deployment

Voor een werkende contactformulier-API is een server-runtime nodig. Daarom is de app nu geconfigureerd voor **Next.js in normale servermodus** (geen `output: 'export'`).

### Aanbevolen: deploy naar Vercel

```bash
npx vercel
```

Vercel ondersteunt de Next.js API-routes uit `app/api/contact/route.ts` zonder extra serverconfiguratie.

### Als je toch een statische export wilt gebruiken

Dat werkt alleen als je de contactformulier-API vervangt door een externe dienst zoals Formspree, EmailJS of een `mailto:`-link. Een `app/api/contact/route.ts` route kan niet werken op een pure GitHub Pages static export.

---

## Contactformulier activeren

Voor het echte verzenden van e-mails configureer je in `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=frank.frames@outlook.com
RESEND_FROM_EMAIL="Frank Fotografie <mail@jouwdomein.nl>"
```

Belangrijk: `RESEND_FROM_EMAIL` moet een geverifieerd Resend-adres zijn. De standaard `onboarding@resend.dev` werkt alleen in de Resend sandbox en is niet geschikt voor productie.

---

## Design tokens

| Token     | Waarde    | Gebruik                  |
|-----------|-----------|--------------------------|
| `ink`     | `#111111` | Tekst, randen            |
| `mist`    | `#888888` | Labels, subtekst         |
| `paper`   | `#f5f5f5` | Achtergrond secties      |
| `rule`    | `#e0e0e0` | Dunne lijnen             |
| `accent`  | `#0066FF` | Links, hover, active nav |

Lettertypen: **Montserrat** (titels) + **Lato** (bodytekst) via Google Fonts.
