import Reveal from '../../../components/Reveal'
import MockupHero from '../../../components/MockupHero'
import CTASection from '../../../sections/CTASection'

const deliverables = [
  'Cartographie ICP et messages par segment',
  'Landing page dediee avec tracking conversion',
  'Sequences outbound et retargeting premium',
  'CRM pipeline, scoring et dashboards executifs',
]

const process = [
  ['01', 'Diagnostic', 'Analyse de l offre, des segments, des preuves et du parcours actuel.'],
  ['02', 'Architecture', 'Creation du funnel, des messages, des pages et des automatisations.'],
  ['03', 'Launch', 'Mise en ligne, tracking, tests creatives et orchestration des canaux.'],
  ['04', 'Scale', 'Optimisation hebdomadaire sur la qualite, le cout et la vitesse du pipeline.'],
]

const leadHeroImage =
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85'

export const metadata = {
  title: 'Generation de leads | WAgency',
  description: 'Service detaille de generation de leads premium pour holdings et marques ambitieuses.',
}

export default function ServiceDetailPage() {
  return (
    <main>
      <MockupHero
        eyebrow="Service detail"
        title={<>GENERATION<br />DE LEADS</>}
        description="Attirez des prospects qualifies et transformez votre acquisition en systeme previsible."
        image={leadHeroImage}
        cta={{ href: '/contact', label: 'Demander un audit' }}
      />

      <section className="bg-white py-20 text-[#111]">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Pourquoi la generation de leads est essentielle ?</h2>
            <p className="mt-4 text-sm leading-7 text-[#666]">
              Sans pipeline clair, les opportunites arrivent au hasard. Notre approche construit un flux regulier de prospects qualifies.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[#eadfc8] bg-[#faf8f4] p-6 text-center">
                  <div className="mx-auto mb-5 grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-white text-sm font-bold text-gold">0{index + 1}</div>
                  <p className="text-sm leading-7 text-[#555]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#080808]">
        <div className="container-lux">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Notre approche</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-porcelain md:text-5xl">Resultats attendus</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <Reveal key={title}>
                <div className="h-full rounded-2xl border border-gold/18 bg-white/[0.035] p-7">
                  <span className="text-gold-light">{number}</span>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-porcelain">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-porcelain/62">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Generons un flux regulier de prospects qui respectent votre valeur." />
    </main>
  )
}
