import Link from 'next/link'

export default function Button({ href, children, variant = 'primary', className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300'
  const variants = {
    primary: 'bg-gold-gradient text-obsidian shadow-gold hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(213,166,70,0.36)]',
    outline: 'border border-gold/40 bg-white/5 text-gold-light hover:-translate-y-1 hover:border-gold hover:bg-gold/10',
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
