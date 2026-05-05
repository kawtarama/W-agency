import Image from 'next/image'
import Reveal from './Reveal'

export default function PortfolioCard({ project, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group overflow-hidden rounded-[2rem] border border-gold/18 bg-white/[0.035]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={675}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent opacity-70" />
          <span className="absolute left-5 top-5 rounded-full border border-gold/30 bg-obsidian/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-light backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-2xl font-semibold text-porcelain">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-porcelain/62">{project.description}</p>
        </div>
      </article>
    </Reveal>
  )
}
