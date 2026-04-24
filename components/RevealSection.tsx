'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type RevealSectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

export default function RevealSection({ id, className = '', children }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 38, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
