'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Trainer:   /images/trainer-portrait.jpg
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function Trainer() {
  const bulletPoints = [
    'Professional Choreographer',
    'Industry Stage Experience',
    'Celebrity Collaborations',
    '1000+ Students Trained — Children & Adults'
  ]

  return (
    <section className="bg-[#0A0A0A] py-16 px-6 md:py-20 md:px-10 lg:py-28 lg:px-[5%] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-[60px]">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <img
            src="https://placehold.co/500x600/1A1A1A/C9A84C?text=Lead+Trainer"
            alt="Lead Trainer"
            className="w-full max-w-[500px] rounded-[16px] border-2 border-[#c9a84c4d] shadow-[0_0_60px_rgba(201,168,76,0.15)] object-cover"
          />
          {/* Replace with: <Image src="/images/trainer-portrait.jpg" width={500} height={600} className="..." alt="..." /> */}
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="section-label">MEET YOUR MENTOR</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Professional <em className="gold-text not-italic">Mentorship</em>
          </h2>
          <p className="text-[#888] text-[16px] lg:text-[18px] leading-[1.85] mb-8">
            Our lead trainer brings years of professional stage experience, elite industry connections, and a personal commitment to every student — child or adult. Every session is crafted to push you beyond your limits while keeping the joy of dance alive.
          </p>

          <ul className="mb-10 space-y-4">
            {bulletPoints.map((point, i) => (
              <li key={i} className="flex items-center text-[#FAFAFA] font-medium text-[15px] lg:text-[16px]">
                <span className="text-[#C9A84C] mr-3">✦</span>
                {point}
              </li>
            ))}
          </ul>

          <Link href="#contact" className="btn-gold w-full md:w-auto text-center">
            Train with the Best →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
