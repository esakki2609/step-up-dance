'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdultPrograms() {
  const benefits = [
    { title: '🔥 Learn Trendy Dance', desc: 'Master the latest commercial choreography and street styles. Stay ahead of the viral trends.' },
    { title: '🧠 Mental Wellness', desc: 'Reduces stress, boosts dopamine, sharpens focus and memory. Dance is therapy in motion.' },
    { title: '🌟 Stage Confidence', desc: 'Perform at real academy events alongside students of all ages. Your stage is waiting.' }
  ]

  return (
    <section className="bg-[#141414] relative py-16 px-6 md:py-20 md:px-10 lg:py-24 lg:px-[5%] overflow-hidden">
      {/* Left Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#C9A84C]" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">FOR ADULTS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 max-w-2xl">
            Dance Has <em className="gold-text not-italic">No Age Limit</em>
          </h2>
          <p className="text-[#888] text-[16px] lg:text-[18px] leading-[1.7] max-w-2xl mb-12">
            Step Up welcomes adults at every stage — complete beginner, returning dancer, or fitness enthusiast. It is never too late.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="gold-card"
            >
              <h3 className="text-[#FAFAFA] font-bold text-[18px] mb-3">{benefit.title}</h3>
              <p className="text-[#888] text-[14px] leading-[1.6]">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link href="#trial" className="btn-gold w-full md:w-auto text-center">
            Adults — Book Your Free Trial Today →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
