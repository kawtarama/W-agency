import Reveal from '../components/Reveal'
import { whyUs } from '../components/siteData'

function StrategyIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <circle cx="24" cy="24" r="22" stroke="#D5A646" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M14 34L20 26L26 30L34 18" stroke="#D5A646" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="18" r="3" fill="#D5A646" />
      <circle cx="14" cy="34" r="2" fill="#E9C684" opacity="0.6" />
    </svg>
  )
}

function ResultsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <circle cx="24" cy="24" r="22" stroke="#D5A646" strokeOpacity="0.4" strokeWidth="1.5" />
      <rect x="12" y="28" width="7" height="10" rx="1.5" fill="#D5A646" opacity="0.7" />
      <rect x="21" y="22" width="7" height="16" rx="1.5" fill="#E9C684" />
      <rect x="30" y="15" width="7" height="23" rx="1.5" fill="#D5A646" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <circle cx="24" cy="24" r="22" stroke="#D5A646" strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="24" cy="19" r="5" stroke="#D5A646" strokeWidth="2" />
      <path d="M13 37c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke="#E9C684" strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="17" r="3.5" stroke="#D5A646" strokeWidth="1.5" opacity="0.6" />
      <path d="M38 30c2.5 1.5 4 4 4 7" stroke="#D5A646" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <circle cx="24" cy="24" r="22" stroke="#D5A646" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M17 21a7 7 0 0 1 14 0v4a7 7 0 0 1-14 0v-4Z" stroke="#D5A646" strokeWidth="2" />
      <path d="M13 23a11 11 0 0 0 22 0" stroke="#E9C684" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="24" y1="32" x2="24" y2="37" stroke="#D5A646" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="37" x2="29" y2="37" stroke="#D5A646" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const icons = {
  strategy: StrategyIcon,
  results: ResultsIcon,
  team: TeamIcon,
  support: SupportIcon,
}

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-[#111] md:text-5xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#555]">
            Nous combinons strategie, analyse, creativite et performance
            pour generer une croissance durable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e8e0d0] bg-[#faf8f4] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_8px_32px_rgba(213,166,70,0.14)]">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.06em] text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.85] text-[#666]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
