import StatsCounter from '../components/StatsCounter'
import { stats } from '../components/siteData'

export default function StatsSection() {
  return (
    <section className="bg-[#050505] border-t border-gold/10">
      <div className="container-lux grid grid-cols-2 divide-x divide-y divide-gold/10 lg:grid-cols-4 lg:divide-y-0">
        {stats.map((stat, i) => (
          <StatsCounter key={stat.label} {...stat} isLast={i === stats.length - 1} />
        ))}
      </div>
    </section>
  )
}
