'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function StatsCounter({ value, suffix, label, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center py-10 px-6 text-center ${
        !isLast ? 'border-r border-gold/15' : ''
      }`}
    >
      <div className="font-display text-5xl font-bold text-gold-light md:text-6xl">
        {count}{suffix}
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-porcelain/50">{label}</p>
    </div>
  )
}
