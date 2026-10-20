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
    <>
      {/* Page header */}
      <div className="px-6 pb-12 pt-36 text-center">
        <p className="mb-2 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">
          {isEnglish ? 'Get in touch' : 'Bereikbaar'}
        </p>
        <h1 className="font-montserrat text-4xl font-light text-ink md:text-5xl">Contact</h1>
        <p className="mx-auto mt-4 max-w-sm font-lato text-sm leading-relaxed text-mist">
          {isEnglish ? 'Have a question about a photograph or location? Feel free to send me a message.' : 'Vragen over een foto of locatie? Stuur gerust een bericht.'}
        </p>
      </div>

      {/* Form + aside */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-4xl gap-16 lg:grid-cols-[1.6fr_1fr]">
          {/* Client-side form */}
          <ContactForm locale={locale} />

          {/* Aside */}
          <aside className="flex flex-col gap-8 pt-1">
            <div>
              <p className="mb-1 font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
                {isEnglish ? 'Location' : 'Locatie'}
              </p>
              <p className="font-lato text-sm text-ink">Gouda, Zuid-Holland</p>
              <p className="font-lato text-sm text-ink">{isEnglish ? 'The Netherlands' : 'Nederland'}</p>
            </div>

            <div>
              <p className="mb-1 font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
                Instagram
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-lato text-sm text-ink transition-colors hover:text-accent"
              >
                @frank.fotografie
              </a>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="font-lato text-xs leading-relaxed text-mist">
                {isEnglish
                  ? 'I usually reply within a few days. I’m an amateur photographer and happy to answer your questions.'
                  : 'Ik reageer meestal binnen een paar dagen. Ik ben een hobbyfotograaf en beschikbaar voor vragen.'}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
