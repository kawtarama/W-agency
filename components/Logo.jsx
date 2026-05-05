import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="group inline-block" aria-label="W Agency accueil">
      <Image
        src="/images/agency3.png"
        alt="WAgency"
        width={160}
        height={60}
        className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
        priority
      />
    </Link>
  )
}
