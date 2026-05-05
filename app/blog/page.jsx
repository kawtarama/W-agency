import Image from 'next/image'
import Reveal from '../../components/Reveal'
import MockupHero from '../../components/MockupHero'
import CTASection from '../../sections/CTASection'
import { posts } from '../../components/siteData'

const blogHeroImage =
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85'

export const metadata = {
  title: 'Blog | WAgency',
  description: 'Insights sur le growth premium, la conversion et les experiences digitales luxe.',
}

export default function BlogPage() {
  return (
    <main>
      <MockupHero
        eyebrow="Insights"
        title="BLOG"
        description="Conseils, analyses et tendances pour booster votre croissance digitale."
        image={blogHeroImage}
        tabs={['Tous les articles', 'Strategies', 'Marketing', 'Branding', 'Conseils']}
      />

      <section className="bg-white py-20 text-[#111]">
        <div className="container-lux mb-10 text-center">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Nos articles</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Dernieres analyses du blog</h2>
          </Reveal>
        </div>
        <div className="container-lux grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border border-[#eadfc8] bg-[#faf8f4] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_14px_45px_rgba(213,166,70,0.16)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover brightness-[0.9] contrast-[1.05] saturate-[0.92] transition duration-700 group-hover:scale-105 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_55%)]" />
                </div>
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-gold">{post.tag}</span>
                    <span className="text-[#777]">{post.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold leading-tight text-[#111]">{post.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#666]">
                    Decouvrez un angle pratique pour ameliorer votre acquisition et votre image.
                  </p>
                  <span className="mt-6 inline-flex text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                    Lire l article
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Transformez vos contenus en actifs commerciaux premium." />
    </main>
  )
}
