import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  heroImage: string
  date: string
  location: string
  photoCount: number
}

export default function ProjectCard({
  slug,
  title,
  description,
  heroImage,
  date,
  location,
  photoCount,
}: ProjectCardProps) {
  return (
    <Link href={`/projecten/${slug}`} className="group block">
      {/* Cover image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/12" />
      </div>

      {/* Meta */}
      <div className="mt-5 space-y-1.5">
        <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist">
          {date} · {location}
        </p>
        <h3 className="font-montserrat text-xl font-light text-ink transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="line-clamp-2 font-lato text-sm leading-relaxed text-mist">
          {description}
        </p>
        <p className="font-lato text-[10px] tracking-wider text-mist/60">
          {photoCount} foto&apos;s
        </p>
      </div>
    </Link>
  )
}
