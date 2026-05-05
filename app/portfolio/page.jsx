import PortfolioSection from '../../sections/PortfolioSection'
import CTASection from '../../sections/CTASection'
import MockupHero from '../../components/MockupHero'

const portfolioHeroImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85'

export const metadata = {
  title: 'Portfolio | WAgency',
  description: 'Selection de realisations premium en branding, sites et growth systems.',
}

export default function PortfolioPage() {
  return (
    <main>
      <MockupHero
        eyebrow="Nos projets recents"
        title="NOS REALISATIONS"
        description="Decouvrez nos realisations digitales concues pour inspirer confiance et generer des resultats."
        image={portfolioHeroImage}
        tabs={['Tous', 'Immobilier', 'Consulting', 'Evenementiel', 'Branding']}
      />
      <PortfolioSection />
      <CTASection title="Vous avez un projet ? Transformons-le en experience premium." />
    </main>
  )
}
