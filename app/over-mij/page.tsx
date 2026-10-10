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
  { name: 'Nikkor 500mm f/5.6 PF', role: 'Wildlife & vogels',  detail: 'PF-element · VR' },
  { name: 'Nikkor 24–70mm f/2.8', role: 'Landschappen & stad', detail: 'AF-S · VR' },
  { name: 'Carbon statief',    role: 'Stabilisatie',        detail: 'Gitzo-serie' },
  { name: 'ND-filters',        role: 'Lange sluitertijden', detail: 'ND4 / ND8 / ND64' },
]

const CATEGORIES = [
  { label: 'Wildlife',         detail: 'Vogels, zoogdieren & macro met 500mm' },
  { label: 'Landschappen',     detail: 'Normandië, Luxemburg (Clervaux) & Nederland' },
  { label: 'Stadsfotografie',  detail: 'Rotterdam, Gouda & Dordrecht' },
]

export default function OverMijPage() {
  return (
    <>
      {/* Page header */}
      <div className="px-6 pb-12 pt-36 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">Wie ben ik</p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">Over mij</h1>
      </div>

      {/* Bio block */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Portrait placeholder */}
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-paper lg:max-w-none">
            <Image
              src="https://picsum.photos/seed/frank-portrait-gouda/600/800"
              alt="Frank — hobbyfotograaf Gouda"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-montserrat text-2xl font-light text-ink">Frank</h2>
            <p className="font-lato text-sm leading-loose text-mist">
              Ik ben Frank, hobbyfotograaf uit Gouda. Ik werk met Nikon D850/D810 en een
              500mm lens voor wildlife, en reis graag door Frankrijk, Luxemburg en Nederland
              om landschappen vast te leggen. Mijn stijl is rustig, technisch en gericht op
              detail.
            </p>
            <p className="font-lato text-sm leading-loose text-mist">
              Fotografie begon als manier om de wereld te vertragen. Het dwingt mij om stil
              te staan bij het licht, de compositie en het moment. Of ik nu wacht op een
              IJsvogel langs de rivier of in het donker voor zonsopkomst klaarstaa bij de
              Étretat-kliffen — het gaat altijd om aandacht.
            </p>
            <p className="font-lato text-sm leading-loose text-mist">
              Ik ben geen professional. Ik maak foto&apos;s omdat het me vreugde geeft.
            </p>

            {/* What I photograph */}
            <div className="mt-2 space-y-3 border-t border-rule pt-6">
              {CATEGORIES.map(c => (
                <div key={c.label} className="flex items-baseline gap-4">
                  <span className="w-28 shrink-0 font-lato text-[10px] tracking-[0.2em] uppercase text-mist">
                    {c.label}
                  </span>
                  <span className="font-lato text-sm text-ink/70">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gear section */}
      <section className="bg-paper px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
              Uitrusting
            </p>
            <h2 className="font-montserrat text-3xl font-light text-ink">Gear</h2>
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
          <div className="mb-10 text-center">
            <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
              Locaties
            </p>
            <h2 className="font-montserrat text-2xl font-light text-ink">
              Waar ik fotografeer
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { region: 'Normandië', desc: 'Kliffen bij Étretat, binnenlanden, kust in ochtendmist' },
              { region: 'Luxemburg', desc: 'Clervaux-regio, Ardennen, herfstbossen' },
              { region: 'Nederland', desc: 'Gouda, Rotterdam, Dordrecht, polders & waterlinies' },
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
