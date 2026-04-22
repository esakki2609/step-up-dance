'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Celebrity: /images/featured-sitting-celebrity.jpg
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function CelebritySection() {
  return (
    <section id="recognition" className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://placehold.co/1920x800/0A0A0A/C9A84C?text=Celebrity+Photo"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        alt="Celebrity Feature"
      />
      {/* Replace with: <Image src="/images/featured-sitting-celebrity.jpg" fill className="object-cover" alt="Celebrity" /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a0a0ac7]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label mb-6">INDUSTRY RECOGNITION</div>
          <div className="text-[100px] text-[#c9a84c26] font-['Playfair_Display'] leading-[0.5] -mb-4">"</div>
          <h2 className="font-['Playfair_Display'] italic text-[22px] md:text-[28px] lg:text-[36px] text-[#FAFAFA] leading-[1.6]">
            Excellence is not a destination — it is a continuous journey. Step Up walks that journey every single day.
          </h2>
          <div className="mt-8">
            <Link href="#contact" className="btn-outline">
              Experience It Yourself →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
