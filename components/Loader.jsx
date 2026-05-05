'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 950)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-obsidian"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-gold/40 bg-gold-gradient font-display text-5xl font-black text-obsidian shadow-gold">
              W
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.42em] text-gold-light">WAgency</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
