import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import { services } from '../components/siteData'

export default function ServicesSection({ compact = false }) {
  const shownServices = compact ? services.slice(0, 3) : services

  return (
    <section className="section-padding">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Nos services"
          title="Des systemes premium pour creer une croissance mesurable."
          description="Chaque service est pense pour proteger votre positionnement tout en accelerant l acquisition, la conversion et la retention."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shownServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {compact ? (
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline">Explorer tous les services</Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
