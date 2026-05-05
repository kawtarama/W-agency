import Reveal from '../../components/Reveal'
import MockupHero from '../../components/MockupHero'
import CTASection from '../../sections/CTASection'

const steps = [
  ['Analyse', 'Audit de votre offre, marche, audience et actifs existants.'],
  ['Strategie', 'Plan clair pour prioriser les leviers de croissance.'],
  ['Execution', 'Creation des pages, contenus, campagnes et automatisations.'],
  ['Optimisation', 'Mesure, tests et amelioration continue des performances.'],
]

const promises = [
  'Transparence totale sur les actions et les resultats',
  'Methods structurees et adaptees a vos objectifs',
  'Accompagnement humain, clair et reactif',
  'Performance mesurable a chaque etape',
]

const methodHeroImage =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85'

export const metadata = {
  title: 'Notre methode | WAgency',
  description: 'Le growth system de WAgency pour transformer une idee en croissance mesurable.',
}

export default function MethodPage() {
  return (
    <main>
      <MockupHero
        eyebrow="Growth system"
        title={<>NOTRE METHODE<br />DE CROISSANCE</>}
        description="Un processus en 4 etapes pour passer d une idee a des resultats visibles."
        image={methodHeroImage}
      />

      <section className="bg-[#080808] py-16">
        <div className="container-lux grid gap-4 md:grid-cols-4">
          {steps.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.07}>
              <div className="relative h-full rounded-2xl border border-gold/20 bg-white/[0.035] p-6 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/35 bg-black/30 font-display text-xl text-gold-light">0{index + 1}</div>
                <h2 className="mt-5 font-display text-xl font-bold text-porcelain">{title}</h2>
                <p className="mt-3 text-xs leading-6 text-white/50">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 text-[#111]">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Notre promesse</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Nous vous accompagnons a chaque etape.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {promises.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[#eadfc8] bg-[#faf8f4] p-6 text-center text-sm leading-7 text-[#666]">
                  <span className="mb-4 inline-grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-white text-gold">✓</span>
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Pret a demarrer votre croissance ?" />
    </main>
  )
}
