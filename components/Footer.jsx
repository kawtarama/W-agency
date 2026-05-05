import Link from 'next/link'
import Logo from './Logo'
import { navLinks } from './siteData'

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-[#050505]">
      <div className="container-lux py-8">
        <div className="grid items-start gap-8 rounded-2xl border border-gold/10 bg-white/[0.025] px-5 py-7 md:px-7 lg:grid-cols-[1.15fr_1.35fr_0.95fr] lg:gap-8">
        <div className="max-w-[300px]">
          <Logo />
          <p className="mt-3 text-[12px] leading-6 text-porcelain/50">
            Le partenaire digital pour transformer vos idees en croissance mesurable.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-light">Navigation</p>
          <div className="grid grid-cols-2 gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="text-[11px] uppercase tracking-[0.14em] text-porcelain/55 transition-colors hover:text-gold-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-light">Contact</p>
          <a href="mailto:hello@wagency.com" className="mt-4 block text-[13px] text-porcelain/75 hover:text-gold-light">
            hello@wagency.com
          </a>
          <p className="mt-2 text-[12px] text-porcelain/45">Casablanca - Paris - Remote</p>
          <div className="mt-4 flex gap-3 lg:justify-end">
            {['IG', 'IN', 'FB'].map((item) => (
              <span key={item} className="grid h-8 w-8 place-items-center rounded-full border border-gold/18 text-[10px] text-gold-light/70">
                {item}
              </span>
            ))}
          </div>
        </div>
        </div>
      </div>
      <div className="container-lux flex flex-col justify-between gap-2 border-t border-white/8 py-4 text-[11px] text-porcelain/38 sm:flex-row">
        <span>(c) 2026 WAgency. Tous droits reserves.</span>
        <span>Design premium noir & or.</span>
      </div>
    </footer>
  )
}
