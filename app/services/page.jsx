import Link from 'next/link'
import Reveal from '../../components/Reveal'
import MockupHero from '../../components/MockupHero'
import CTASection from '../../sections/CTASection'
import { services } from '../../components/siteData'

const servicesHeroImage =
  'https://images.unsplash.com/photo-1758413149385-e4117e64b283?fm=jpg&q=85&w=1600&auto=format&fit=crop'

export const metadata = {
  title: 'Services | WAgency',
  description: 'Services premium de growth, branding, acquisition et automatisation.',
}

export default function ServicesPage() {
  return (
    <main>
      <MockupHero
        eyebrow="Nos expertises digitales"
        title="NOS SERVICES"
        description="Des solutions digitales completes pour accelerer votre croissance avec precision, style et resultats."
        image={servicesHeroImage}
      />

      <section className="bg-white py-20 text-[#111]">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Ce que nous faisons</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Nous accompagnons les entreprises dans leur croissance.</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <Link
                  href={index === 0 ? '/services/generation-de-leads' : '/services'}
                  className="group block h-full rounded-2xl border border-[#eadfc8] bg-[#faf8f4] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_12px_40px_rgba(213,166,70,0.14)]"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-white font-display text-xl text-gold">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.04em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#666]">{service.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
