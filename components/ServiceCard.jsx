import Link from 'next/link'
import Reveal from './Reveal'

export default function ServiceCard({ service, index }) {
  return (
    <Reveal delay={index * 0.07}>
      <Link
        href="/services/generation-de-leads"
        className="group glass-card gold-border block h-full rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold"
      >
        <div className="mb-9 flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-xs font-semibold text-gold-light">
            {service.icon}
          </span>
          <span className="text-2xl text-gold/50 transition-transform group-hover:translate-x-1">+</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-porcelain">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-porcelain/62">{service.description}</p>
      </Link>
    </Reveal>
  )
}
