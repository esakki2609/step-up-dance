'use client'

import { motion } from 'framer-motion'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Awards:    /images/award-stage.jpg
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function Achievements() {
  const cards = [
    { title: '🏆 Multiple Awards', desc: 'Recognized at state and national levels' },
    { title: '🎖️ Best Academy', desc: 'Top-rated by students, parents, professionals' },
    { title: '🌟 Star Alumni', desc: 'Students performing on prestigious stages' }
  ]

  return (
    <section className="relative min-h-[500px] w-full flex items-center overflow-hidden">
      {/* Background */}
      <img
        src="/images/certificates/world-record-certificate.jpeg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        alt="Award Stage Background"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a0a0acc]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-[5%] py-20 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="section-label">MILESTONES</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Recognized <em className="gold-text not-italic">Excellence</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[rgba(255,255,255,0.04)] border border-[#c9a84c4d] backdrop-blur-[10px] rounded-[12px] p-8"
            >
              <h3 className="text-[#FAFAFA] font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-[rgba(250,250,250,0.8)] text-[14px] leading-[1.6]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
