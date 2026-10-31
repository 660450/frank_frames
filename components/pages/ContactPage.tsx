import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import type { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met Frank — hobbyfotograaf uit Gouda.',
}

export default function ContactContent({ locale = 'nl' }: { locale?: Locale }) {
  const isEnglish = locale === 'en'

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f3ee_0%,#ffffff_20%,#ffffff_100%)]">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(188,164,134,0.12),_transparent_58%)]" />

      <div className="relative px-6 pb-28 pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
            {isEnglish ? 'Get in touch' : 'Bereikbaar'}
          </p>
          <h1 className="font-montserrat text-4xl font-light text-ink md:text-6xl">Contact</h1>
          <p className="mx-auto mt-5 max-w-xl font-lato text-sm leading-relaxed text-mist md:text-base">
            {isEnglish
              ? 'Have a question about a photograph or location? I’d love to hear from you.'
              : 'Vragen over een foto of locatie? Ik hoor graag van je.'}
          </p>
        </div>

        <section className="mx-auto mt-14 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(29,25,20,0.06)] backdrop-blur-sm md:p-8">
              <ContactForm locale={locale} />
            </div>

            <aside className="flex flex-col gap-5">
              <div className="rounded-[2rem] border border-stone-200 bg-[#f9f5f1] p-6 shadow-[0_20px_50px_rgba(29,25,20,0.04)]">
                <p className="mb-4 font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
                  {isEnglish ? 'Location' : 'Locatie'}
                </p>
                <div className="space-y-2">
                  <p className="font-lato text-base text-ink">Gouda, Zuid-Holland</p>
                  <p className="font-lato text-base text-ink">{isEnglish ? 'The Netherlands' : 'Nederland'}</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-[#f9f5f1] p-6 shadow-[0_20px_50px_rgba(29,25,20,0.04)]">
                <p className="mb-4 font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/frank.frames2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-lato text-sm text-ink transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white text-ink">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  @frank.frames2026
                </a>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-[#f4efe9] p-6 shadow-[0_20px_50px_rgba(29,25,20,0.04)]">
                <p className="font-lato text-xs leading-relaxed text-mist">
                  {isEnglish
                    ? 'I usually reply within a few days. I’m a hobby photographer and happy to answer any questions about shoots, locations, or portraits.'
                    : 'Ik reageer meestal binnen een paar dagen. Ik ben een hobbyfotograaf en help graag met vragen over shoots, locaties of portretten.'}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  )
}
