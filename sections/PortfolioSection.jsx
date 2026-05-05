import Image from 'next/image'
import Link from 'next/link'
import Reveal from '../components/Reveal'
import { projects } from '../components/siteData'

export default function PortfolioSection({ compact = false }) {
  const shownProjects = compact ? projects.slice(0, 4) : projects

  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-lux">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">Nos realisations</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-porcelain md:text-5xl">
              Nos Realisations
            </h2>
          </Reveal>
          {compact && (
            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="shrink-0 rounded-full border border-gold/35 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light transition hover:border-gold hover:bg-gold/8"
              >
                Voir tout
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shownProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-xl border border-gold/15 bg-[#111] shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={450}
                    height={600}
                    className="h-full w-full object-cover brightness-[0.82] contrast-[1.08] saturate-[0.9] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(213,166,70,0.08),transparent_35%),linear-gradient(to_top,#080808_0%,rgba(8,8,8,0.72)_24%,rgba(8,8,8,0.08)_70%)]" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_30%,rgba(213,166,70,0.14),transparent_55%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="mb-2 inline-block rounded border border-gold/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-porcelain leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
