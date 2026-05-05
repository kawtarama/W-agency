import Link from 'next/link'

export default function CTASection({
  title = "Pret a faire passer votre business au niveau superieur ?",
}) {
  return (
    <section className="bg-[#0d0d0d] border-y border-gold/12 py-14">
      <div className="container-lux flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(ellipse,rgba(213,166,70,0.12),transparent_70%)]" />
          <h2 className="relative font-display text-2xl font-bold text-porcelain md:text-3xl lg:text-[2rem]">
            {title}
          </h2>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-obsidian shadow-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(213,166,70,0.5)]"
        >
          Reserver un appel
        </Link>
      </div>
    </section>
  )
}
