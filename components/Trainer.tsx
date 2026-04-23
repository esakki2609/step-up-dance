'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Trainer() {
  const bulletPoints = [
    'Learn from an industry leading celebrity choreographer',
    'Gain direct exposure to professional stage performances',
    'Join a top-rated dance academy with proven results',
    'Master advanced dance techniques and routines'
  ]

  return (
    <section className="bg-[#0A0A0A] pt-6 pb-6 px-6 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10 lg:px-[5%] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/images/celebrities/with prabhu deva.jpeg"
              alt="Lead Trainer with Prabhu Deva"
              width={500}
              height={600}
              className="w-full h-[50vh] lg:h-[65vh] max-h-[550px] rounded-[16px] border-[4px] border-[#C9A84C] shadow-[0_0_60px_rgba(201,168,76,0.2)] object-cover object-top transform transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="section-label">CELEBRITY MENTORSHIP</div>
          <h2 className="text-3xl md:text-4xl lg:text-[clamp(36px,4vw,48px)] mb-3 font-['Playfair_Display']">
            Train with <em className="gold-text not-italic">Industry Icons</em>
          </h2>
          <p className="text-[#888] text-[14px] lg:text-[16px] leading-[1.6] mb-3">
            When you join our dance academy, you receive direct training from a celebrity dance choreographer who has worked alongside legends like Prabhu Deva. We bring authentic industry experience straight to our students.
          </p>
          <p className="text-[#888] text-[14px] lg:text-[16px] leading-[1.6] mb-6">
            This is your opportunity to learn dance from experts who understand exactly what it takes to succeed on the big stage. We provide professional dance training that prepares you for real world performances and career opportunities.
          </p>

          <ul className="mb-6 space-y-2">
            {bulletPoints.map((point, i) => (
              <li key={i} className="flex items-center text-[#FAFAFA] font-medium text-[13px] lg:text-[14px]">
                <span className="text-[#C9A84C] mr-3 text-lg leading-none">✦</span>
                {point}
              </li>
            ))}
          </ul>

          <Link href="#contact" className="btn-gold inline-block w-full md:w-auto text-center py-3 px-8 mt-2">
            Start Your Training
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
