import Reveal from '../../components/Reveal'
import MockupHero from '../../components/MockupHero'

const contactDetails = [
  ['Email', 'hello@wagency.com'],
  ['Phone', '+212 600 000 000'],
  ['Studio', 'Casablanca / Paris'],
]

const contactHeroImage =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85'

export const metadata = {
  title: 'Contact | WAgency',
  description: 'Contactez WAgency pour un audit strategique premium.',
}

export default function ContactPage() {
  return (
    <main>
      <MockupHero
        eyebrow="Contact"
        title="CONTACTEZ-NOUS"
        description="Parlons de votre projet et des objectifs que vous souhaitez atteindre."
        image={contactHeroImage}
      />

      <section className="bg-[#080808] pb-24">
        <div className="container-lux grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-2xl border border-gold/18 bg-white/[0.035] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.34em] text-gold-light">Informations</p>
              <div className="mt-8 grid gap-5">
                {contactDetails.map(([label, value]) => (
                  <div key={label} className="border-b border-white/8 pb-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-porcelain/42">{label}</p>
                    <p className="mt-2 text-lg text-porcelain">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="rounded-2xl border border-gold/18 bg-white/[0.035] p-6 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-porcelain/70">
                  Nom
                  <input className="rounded-2xl border border-gold/18 bg-black/30 px-4 py-4 text-porcelain outline-none transition focus:border-gold" placeholder="Votre nom" />
                </label>
                <label className="grid gap-2 text-sm text-porcelain/70">
                  Email
                  <input type="email" className="rounded-2xl border border-gold/18 bg-black/30 px-4 py-4 text-porcelain outline-none transition focus:border-gold" placeholder="vous@email.com" />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm text-porcelain/70">
                Projet
                <input className="rounded-2xl border border-gold/18 bg-black/30 px-4 py-4 text-porcelain outline-none transition focus:border-gold" placeholder="Branding, site, leads, automation..." />
              </label>
              <label className="mt-5 grid gap-2 text-sm text-porcelain/70">
                Message
                <textarea rows="6" className="rounded-2xl border border-gold/18 bg-black/30 px-4 py-4 text-porcelain outline-none transition focus:border-gold" placeholder="Expliquez votre objectif principal..." />
              </label>
              <button
                type="submit"
                className="mt-7 inline-flex rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-obsidian shadow-gold transition hover:-translate-y-1"
              >
                Envoyer le message
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050505] pb-20">
        <div className="container-lux">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-gold/18 bg-[#0d0d0d]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(213,166,70,0.08)_1px,transparent_1px),linear-gradient(rgba(213,166,70,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-gradient font-display text-xl font-bold text-obsidian shadow-gold">W</div>
            <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-gold-light">Casablanca / Maroc</p>
          </div>
        </div>
      </section>
    </main>
  )
}
