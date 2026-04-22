'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const Counter = ({ end, label, duration = 2 }: { end: string, label: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  // Extract number part
  const numMatch = end.match(/\d+/)
  const num = numMatch ? parseInt(numMatch[0], 10) : 0
  const suffix = end.replace(/\d+/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = num / (duration * 60) // 60fps
          
          const animate = () => {
            start += increment
            if (start < num) {
              setCount(Math.ceil(start))
              requestAnimationFrame(animate)
            } else {
              setCount(num)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated, num, duration])

  return (
    <div ref={ref} className="bg-[#1A1A1A] border border-[#c9a84c26] rounded-[12px] p-8 px-6 text-center">
      <div className="text-[40px] lg:text-[48px] font-black text-[#C9A84C] mb-2">{count}{suffix}</div>
      <div className="text-[12px] uppercase tracking-[2px] text-[#888] font-semibold">{label}</div>
    </div>
  )
}

export default function WhyUs() {
  const pillars = [
    { title: '🏆 Award-Winning Curriculum' },
    { title: '👨‍🏫 Professional Mentorship' },
    { title: '🎭 Real Stage Exposure' }
  ]

  return (
    <section className="bg-[#0A0A0A] py-16 px-6 md:py-20 md:px-10 lg:py-28 lg:px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          <Counter end="1000+" label="Students Trained" />
          <Counter end="5★" label="Average Rating" />
          <Counter end="8+" label="Years of Excellence" />
          <Counter end="50+" label="Stage Performances" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="gold-card flex items-center justify-center text-center !py-10"
            >
              <h3 className="text-[#FAFAFA] font-bold text-xl">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
