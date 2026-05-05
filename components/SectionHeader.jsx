import Reveal from './Reveal'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-gold-light">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-porcelain md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-sm leading-7 text-porcelain/68 md:text-base ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
