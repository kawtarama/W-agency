'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 rounded-full border border-gold/50 mix-blend-difference md:block"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.4 }}
    />
  )
}
