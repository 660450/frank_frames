import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-lato text-[10px] tracking-[0.35em] uppercase text-mist">404</p>
      <h1 className="font-montserrat text-3xl font-light text-ink">Pagina niet gevonden</h1>
      <p className="mt-4 font-lato text-sm text-mist">
        Deze pagina bestaat niet (meer).
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border border-ink px-8 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white"
      >
        Terug naar home
      </Link>
    </div>
  )
}
