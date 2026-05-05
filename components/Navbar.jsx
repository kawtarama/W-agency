'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { navLinks } from './siteData'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 py-3 shadow-[0_4px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  active ? 'text-gold' : 'text-porcelain/65 hover:text-porcelain'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-obsidian shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(213,166,70,0.45)] lg:inline-flex"
        >
          Reserver un appel
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-6 bg-gold transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-[2px] w-6 bg-gold transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-6 bg-gold transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open ? (
        <div className="container-lux mt-3 overflow-hidden rounded-2xl border border-gold/15 bg-[#0e0e0e]/98 backdrop-blur-xl lg:hidden">
          <div className="grid divide-y divide-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-porcelain/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="m-4 rounded-full bg-gold-gradient px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-obsidian"
            >
              Reserver un appel
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
