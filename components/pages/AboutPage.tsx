import type { Metadata } from 'next'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Hobbyfotograaf Frank uit Gouda — wildlife, landschappen en steden met Nikon D850/D810.',
}

const GEAR = [
  { name: 'Nikon D850',        role: 'Primaire body',       detail: '45,7 MP · Fullframe' },
  { name: 'Nikon D810',        role: 'Tweede body',         detail: '36,3 MP · Fullframe' },
  { name: 'Nikkor prime lenzen', role: 'Momenten onderweg',  detail: '2.8 · HDR' },
  { name: 'Nikkor 24–70mm f/2.8', role: 'Landschappen & stad', detail: 'AF-S · VR' },
  { name: 'Carbon statief',    role: 'Stabilisatie',        detail: 'Gitzo-serie' },
  { name: 'ND-filters',        role: 'Lange sluitertijden', detail: 'ND4 / ND8 / ND64' },
]

const CATEGORIES = [
  { label: 'Wildlife', detail: 'Vogels, Plassen & Ierland' },
  { label: 'Stadsfotografie', detail: 'Rotterdam, Gouda & Gent' },
]

export default function AboutContent({ locale = 'nl' }: { locale?: Locale }) {
  const isEnglish = locale === 'en'

  return (
    <>
      {/* Page header */}
      <div className="px-6 pb-8 pt-28 text-center md:pt-32">
        <h1 className="font-montserrat text-[2.7rem] font-light leading-none tracking-[-0.06em] text-ink md:text-[4.4rem]">{isEnglish ? 'About me' : 'Over mij'}</h1>
      </div>

      {/* Bio block */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Portrait placeholder */}
          <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden bg-paper lg:max-w-[32rem]">
            <Image
              src="/images/herfst1.jpg"
              alt={isEnglish ? 'Frank — amateur photographer from Gouda' : 'Frank — hobbyfotograaf Gouda'}
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-montserrat text-[3.2rem] font-light leading-none tracking-[-0.06em] text-ink md:text-[4.8rem]"> </h2>
            <p className="font-lato text-[0.95rem] leading-8 text-mist">
              {isEnglish
                ? 'I’m Frank, an amateur photographer from Gouda. I mainly work with a Nikon D850 and D810, and love capturing landscapes, nature and special moments in the light. My style is calm, technical and focused on detail.'
                : 'Ik ben Frank, hobbyfotograaf uit Gouda. Ik werk voornamelijk met een Nikon D850 en D810 en houd van het vastleggen van landschappen, natuur en bijzondere momenten in het licht. Mijn stijl is rustig, technisch en gericht op detail.'}
            </p>
            <p className="font-lato text-[0.95rem] leading-8 text-mist">
              {isEnglish
                ? 'What began as taking simple holiday snapshots grew into a real passion. Photography makes me pause and pay attention to light, composition and timing. Whether I’m waiting for the right moment on the Wadden Islands or getting ready before sunrise on a coastal cliff, it always comes down to attention, patience and the feeling of the moment.'
                : 'Wat begon als het maken van eenvoudige vakantiekiekjes, groeide uit tot een echte passie. Fotografie dwingt mij om stil te staan bij licht, compositie en timing. Of ik nu wacht op het juiste moment op de Waddeneilanden of al voor zonsopgang klaarsta bij een klif langs de kust, het draait altijd om aandacht, geduld en het gevoel van het moment.'}
            </p>
            <p className="font-lato text-[0.95rem] leading-8 text-mist">
              {isEnglish
                ? 'I’m not a professional, and that’s not the point. I take photographs because it gives me peace, challenges me and, above all, brings me joy. Through this website I share a selection of images that mean something to me.'
                : 'Ik ben geen professional, en dat is ook niet de bedoeling. Ik maak foto&apos;s omdat het mij rust geeft, me uitdaagt en vooral veel plezier oplevert. Via deze website deel ik een selectie van beelden die voor mij betekenis hebben.'}
            </p>

            {/* What I photograph */}
            <div className="mt-1 border-t border-rule pt-6">
              {CATEGORIES.map(c => (
                <div
                  key={c.label}
                  className="grid grid-cols-[160px_minmax(0,1fr)] items-center gap-8 py-3 md:gap-10"
                >
                  <span className="font-lato text-[10px] tracking-[0.28em] uppercase text-mist md:text-[11px]">
                    {isEnglish && c.label === 'Stadsfotografie' ? 'Urban photography' : c.label}
                  </span>
                  <span className="font-montserrat text-[1.1rem] font-light leading-snug tracking-[-0.04em] text-ink md:text-[1.35rem]">
                    {isEnglish
                      ? c.label === 'Wildlife' ? 'Birds, wetlands & Ireland' : 'Rotterdam, Gouda & Ghent'
                      : c.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gear section */}
      <section className="bg-paper px-6 py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 font-lato text-[9px] tracking-[0.28em] uppercase text-mist md:text-[10px]">
              {isEnglish ? 'Equipment' : 'Uitrusting'}
            </p>
            <h2 className="font-montserrat text-[2rem] font-light leading-none tracking-[-0.06em] text-ink md:text-[2.6rem]">{isEnglish ? 'Camera gear' : 'Gear'}</h2>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {GEAR.map(item => (
              <div
                key={item.name}
                className="bg-white p-7 transition-shadow hover:shadow-sm"
              >
                <p className="font-lato text-[9px] tracking-[0.25em] uppercase text-mist/60">
                  {isEnglish
                    ? ['Primary camera', 'Second camera', 'Everyday moments', 'Landscapes & city', 'Stabilisation', 'Long exposures'][GEAR.indexOf(item)]
                    : item.role}
                </p>
                <h3 className="mt-1 font-montserrat text-base font-medium text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 font-lato text-xs text-mist">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations strip */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.32em] uppercase text-mist">
              {isEnglish ? 'Locations' : 'Locaties'}
            </p>
            <h2 className="font-montserrat text-[2.3rem] font-light leading-none tracking-[-0.05em] text-ink md:text-[3.2rem]">
              {isEnglish ? 'Where I take photographs' : 'Waar ik fotografeer'}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { region: isEnglish ? 'Ireland' : 'Ierland', desc: isEnglish ? 'Cliffs of Moher, the countryside and misty morning coasts' : 'Kliffen bij Moher, binnenlanden, kust in ochtendmist' },
              { region: 'Veluwe', desc: isEnglish ? 'Autumn forests' : 'Herfstbossen' },
              { region: isEnglish ? 'The Netherlands' : 'Nederland', desc: isEnglish ? 'Gouda, Rotterdam, polders & waterways' : 'Gouda, Rotterdam, polders & waterlinies' },
            ].map(loc => (
              <div key={loc.region} className="border-t border-rule pt-5">
                <h3 className="mb-1 font-montserrat text-lg font-light text-ink">
                  {loc.region}
                </h3>
                <p className="font-lato text-sm leading-relaxed text-mist">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
