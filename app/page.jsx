import HeroSection from '../sections/HeroSection'
import WhyUsSection from '../sections/WhyUsSection'
import PortfolioSection from '../sections/PortfolioSection'
import CTASection from '../sections/CTASection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <PortfolioSection compact />
      <CTASection />
    </main>
  )
}
