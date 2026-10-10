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

Voor GitHub Pages moet de app als statische export worden gebouwd:

```bash
npm run build
```

De app exporteert dan een `out/`-map die je rechtstreeks kunt deployen via GitHub Pages.

Bij een repository met naam `frank-fotosite` wordt de site beschikbaar op:

```text
https://<jouw-github-gebruikersnaam>.github.io/frank-fotosite/
```

Voor een custom domain of een gebruikerssite zonder repo-naam kun je `basePath` en `assetPrefix` in `next.config.js` verwijderen.

Of deploy direct naar **Vercel**:

```bash
npx vercel
```

---

## Contactformulier activeren

Het formulier in `app/contact/page.tsx` simuleert nu een verzending.  
Vervang de `setTimeout` mock door een echte API-call:

- **Formspree**: `fetch('https://formspree.io/f/JOUW_ID', { method: 'POST', body: formData })`
- **Resend**: server action met `resend.emails.send(...)`
- **Vercel**: gebruik een API route in `app/api/contact/route.ts`

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
