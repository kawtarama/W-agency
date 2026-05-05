import Image from 'next/image'
import Link from 'next/link'

const heroImage =
  'https://images.unsplash.com/photo-1758413149385-e4117e64b283?fm=jpg&q=85&w=1600&auto=format&fit=crop'

const stats = [
  { value: '150+', label: "PROJETS REALISES" },
  { value: '98%',  label: 'CLIENTS SATISFAITS' },
  { value: '10+',  label: "ANNEES D'EXPERIENCE" },
  { value: '50+',  label: 'PARTENAIRES' },
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#040404]">

      {/* Full hero image treatment, not a framed card */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[68%]">
          <Image
            src={heroImage}
            alt="Architecture classique premium"
            fill
            priority
            className="object-cover object-center brightness-[0.58] contrast-[1.12] saturate-[0.9]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#040404_0%,rgba(4,4,4,0.92)_30%,rgba(4,4,4,0.56)_50%,rgba(4,4,4,0.08)_76%,rgba(4,4,4,0.75)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,4,4,0.08)_0%,rgba(4,4,4,0.34)_72%,#040404_100%)]" />
        <div className="absolute right-0 top-0 h-full w-[64%] bg-[radial-gradient(ellipse_70%_72%_at_72%_38%,rgba(213,166,70,0.34),transparent_66%)]" />
        <div className="absolute left-0 top-0 h-full w-[42%] bg-[radial-gradient(ellipse_60%_50%_at_5%_45%,rgba(213,166,70,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(213,166,70,0.10),transparent_70%)]" />
        <div className="absolute right-[-60px] top-[-70px] hidden h-[720px] w-[280px] rotate-[18deg] rounded-full border-l-[18px] border-gold/60 shadow-[0_0_45px_rgba(213,166,70,0.35)] md:block" />
        <div className="absolute bottom-[135px] right-[12%] hidden font-display text-[180px] font-black leading-none text-gold/70 drop-shadow-[0_0_34px_rgba(213,166,70,0.45)] md:block lg:text-[240px]">
          W
        </div>
      </div>

      {/* Main content */}
      <div className="container-lux relative z-10 grid w-full flex-1 items-center gap-6 pb-28 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-0 lg:pb-32 lg:pt-36">

        {/* LEFT */}
        <div className="reveal">
          <h1
            className="font-display font-black leading-[1.02] tracking-tight"
            style={{ fontSize: 'clamp(3.6rem, 8.5vw, 7.2rem)' }}
          >
            <span
              className="block"
              style={{
                background: 'linear-gradient(180deg,#ffffff 20%,#e8e0d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              FROM IDEA
            </span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(180deg,#ffffff 20%,#c8bfa8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TO IMPACT
            </span>
          </h1>

          <p className="mt-6 max-w-[460px] text-[13px] leading-[1.95] text-white/45">
            Nous transformons vos idees en strategies digitales performantes
            et en resultats mesurables.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-gold-gradient px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0a0500] shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(213,166,70,0.55)]"
            >
              Decouvrir nos services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/22 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 transition-all duration-300 hover:border-white/45 hover:text-white"
            >
              Nous contacter
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div aria-hidden="true" />
      </div>

      {/* STATS BAR – anchored to bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07] bg-[#040404]/80 backdrop-blur-sm">
        <div className="container-lux">
          <div className="grid grid-cols-2 divide-x divide-white/[0.07] lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-6 py-5">
                <span
                  className="font-display text-2xl font-black md:text-3xl"
                  style={{
                    background: 'linear-gradient(180deg,#f0d484 0%,#d5a646 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
