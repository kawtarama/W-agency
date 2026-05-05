import Reveal from '../components/Reveal'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(213,166,70,0.22),transparent_34rem)]" />
      <div className="container-lux">
        <Reveal className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">{eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-porcelain md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-porcelain/68 md:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  )
}
