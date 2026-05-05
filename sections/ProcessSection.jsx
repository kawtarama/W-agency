import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const steps = [
  ['Audit', 'Nous clarifions la proposition de valeur, les offres et les canaux prioritaires.'],
  ['Strategy', 'Nous designons le systeme: message, pages, acquisition, CRM et reporting.'],
  ['Execution', 'Nous produisons les assets, automatisations et campagnes avec une direction premium.'],
  ['Optimization', 'Nous mesurons, testons et ameliorons le pipeline semaine apres semaine.'],
]

export default function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Notre methode"
          title="Une croissance orchestree comme un actif long terme."
          description="Simple, claire et orientee resultats: chaque phase transforme la vision en execution mesurable."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="relative h-full rounded-[2rem] border border-gold/18 bg-white/[0.035] p-7">
                <span className="text-xs uppercase tracking-[0.28em] text-gold-light">0{index + 1}</span>
                <h3 className="mt-12 font-display text-2xl font-semibold text-porcelain">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-porcelain/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
