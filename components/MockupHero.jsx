import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'

export default function MockupHero({
  eyebrow,
  title,
  description,
  image,
  cta,
  tabs,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-[#050505] pb-16 pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[66%]">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center brightness-[0.55] contrast-[1.12] saturate-[0.9]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_30%,rgba(5,5,5,0.58)_52%,rgba(5,5,5,0.12)_76%,rgba(5,5,5,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.28)_62%,#050505_100%)]" />
        <div className="absolute right-0 top-0 h-full w-[60%] bg-[radial-gradient(ellipse_70%_70%_at_78%_34%,rgba(213,166,70,0.28),transparent_68%)]" />
        <div className="absolute right-[-70px] top-[-80px] hidden h-[560px] w-[220px] rotate-[18deg] rounded-full border-l-[14px] border-gold/55 shadow-[0_0_45px_rgba(213,166,70,0.32)] md:block" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(213,166,70,0.08),transparent_70%)]" />
      </div>

      <div className="container-lux relative z-10">
        <div className="grid min-h-[330px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            {eyebrow ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-gold-light">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[1.02] tracking-tight text-porcelain md:text-7xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-xl text-sm leading-8 text-white/55">{description}</p>
            ) : null}

            {cta ? (
              <Link
                href={cta.href}
                className="mt-8 inline-flex rounded-full bg-gold-gradient px-7 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-obsidian shadow-gold transition hover:-translate-y-0.5"
              >
                {cta.label}
              </Link>
            ) : null}
          </Reveal>

          {children ? <div className="hidden lg:block">{children}</div> : <div aria-hidden="true" />}
        </div>

        {tabs ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <span
                key={tab}
                className="rounded-full border border-gold/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/55 first:bg-gold-gradient first:text-obsidian"
              >
                {tab}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
