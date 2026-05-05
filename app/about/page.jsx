import Image from 'next/image'
import Reveal from '../../components/Reveal'

const values = [
  ['Notre vision', 'Devenir le partenaire digital de reference pour les entreprises ambitieuses.'],
  ['Notre approche', 'Strategie, creativite et data pour transformer les idees en resultats.'],
  ['Nos valeurs', 'Transparence, engagement et excellence a chaque etape du projet.'],
]

const team = [
  {
    name: 'Yassine Bellarbi',
    role: 'Strategie & Growth',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Sara El Mansouri',
    role: 'Brand & Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Nawfal Tahiri',
    role: 'Acquisition Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Mina Amrani',
    role: 'Client Success',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85',
  },
]

const aboutHeroImage =
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85'

export const metadata = {
  title: 'A propos | WAgency',
  description: 'Decouvrez la mission, les valeurs et l equipe de WAgency.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] overflow-hidden bg-theme-bg pb-10 pt-28 md:pb-12 md:pt-32">
        <Image
          src={aboutHeroImage}
          alt="Bureau moderne WAgency"
          fill
          priority
          className="object-cover object-left-center brightness-[0.88] contrast-[1.06] saturate-[0.92]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.95)_0%,rgba(7,7,7,0.86)_36%,rgba(7,7,7,0.48)_58%,rgba(7,7,7,0.16)_78%,rgba(7,7,7,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,7,0.62)_0%,rgba(7,7,7,0.15)_52%,rgba(7,7,7,0.38)_100%)]" />

        <div className="container-lux relative z-10 flex min-h-[50vh] items-center">
          <Reveal className="max-w-[420px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-gold-light">
              Notre histoire
            </p>
            <h1 className="mt-3 font-display text-3xl font-black leading-[1.05] text-white sm:text-4xl md:text-5xl">
              A PROPOS
              <br />
              DE W-AGENCY
            </h1>
            <p className="mt-4 max-w-sm text-[13px] leading-7 text-white/65">
              Notre mission est d aider les entreprises a grandir grace au digital.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gold-gradient px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-obsidian shadow-gold transition hover:-translate-y-0.5"
            >
              Reserver un appel
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 text-[#111]">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Notre mission</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Transformer vos idees en strategies digitales puissantes qui generent des resultats mesurables et durables.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-[#eadfc8] bg-[#faf8f4] p-7 text-center shadow-sm">
                  <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-white text-gold">
                    {index === 0 ? '◎' : index === 1 ? '↗' : '◈'}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#111]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#666]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 text-[#111]">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Notre equipe</p>
            <p className="mt-3 text-sm text-[#666]">
              Une equipe d experts passionnes et dedies a votre croissance.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.07}>
                <div className="group overflow-hidden rounded-xl border border-[#eadfc8] bg-[#faf8f4] p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_14px_40px_rgba(213,166,70,0.14)]">
                  <div className="relative mx-auto aspect-[4/4.3] overflow-hidden rounded-lg bg-[#111]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center brightness-[0.95] contrast-[1.05] saturate-[0.9] transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#111]">{member.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#777]">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
