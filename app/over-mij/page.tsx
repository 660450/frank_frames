import type { Metadata } from 'next'
import Image from 'next/image'

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

export default function OverMijPage() {
  return (
    <>
      {/* Page header */}
      <div className="px-6 pb-8 pt-28 text-center md:pt-32">
        <h1 className="font-montserrat text-[2.7rem] font-light leading-none tracking-[-0.06em] text-ink md:text-[4.4rem]">Over mij</h1>
      </div>

      {/* Bio block */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Portrait placeholder */}
          <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden bg-paper lg:max-w-[32rem]">
            <Image
              src="/images/herfst1.jpg"
              alt="Frank — hobbyfotograaf Gouda"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-montserrat text-[3.2rem] font-light leading-none tracking-[-0.06em] text-ink md:text-[4.8rem]"> </h2>
            <p className="font-lato text-[0.95rem] leading-8 text-mist">
              Ik ben Frank, hobbyfotograaf uit Gouda. Ik werk voornamelijk met een Nikon D850
              en D810 en houd van het vastleggen van landschappen, natuur en bijzondere momenten
              in het licht. Mijn stijl is rustig, technisch en gericht op detail.
            </p>
            <p className="font-lato text-[0.95rem] leading-8 text-mist">
              Wat begon als het maken van eenvoudige vakantiekiekjes, groeide uit tot een echte
              passie. Fotografie dwingt mij om stil te staan bij licht, compositie en timing. Of
              ik nu wacht op het juiste moment op de Waddeneilanden of al voor zonsopgang klaarsta
              bij een klif langs de kust, het draait altijd om aandacht, geduld en het gevoel van
              het moment.
            </p>
            <p className="font-lato text-[0.95rem] leading-8 text-mist">
              Ik ben geen professional, en dat is ook niet de bedoeling. Ik maak foto&apos;s omdat het
              mij rust geeft, me uitdraagt en vooral veel plezier oplevert. Via deze website deel ik
              een selectie van beelden die voor mij betekenis hebben.
            </p>

            {/* What I photograph */}
            <div className="mt-1 border-t border-rule pt-6">
              {CATEGORIES.map(c => (
                <div
                  key={c.label}
                  className="grid grid-cols-[160px_minmax(0,1fr)] items-center gap-8 py-3 md:gap-10"
                >
                  <span className="font-lato text-[10px] tracking-[0.28em] uppercase text-mist md:text-[11px]">
                    {c.label}
                  </span>
                  <span className="font-montserrat text-[1.1rem] font-light leading-snug tracking-[-0.04em] text-ink md:text-[1.35rem]">
                    {c.detail}
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
              Uitrusting
            </p>
            <h2 className="font-montserrat text-[2rem] font-light leading-none tracking-[-0.06em] text-ink md:text-[2.6rem]">Gear</h2>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {GEAR.map(item => (
              <div
                key={item.name}
                className="bg-white p-7 transition-shadow hover:shadow-sm"
              >
                <p className="font-lato text-[9px] tracking-[0.25em] uppercase text-mist/60">
                  {item.role}
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
              Locaties
            </p>
            <h2 className="font-montserrat text-[2.3rem] font-light leading-none tracking-[-0.05em] text-ink md:text-[3.2rem]">
              Waar ik fotografeer
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { region: 'Ierland', desc: 'Kliffen bij Moher, binnenlanden, kust in ochtendmist' },
              { region: 'Veluwe', desc: ' Herfstbossen' },
              { region: 'Nederland', desc: 'Gouda, Rotterdam, polders & waterlinies' },
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
