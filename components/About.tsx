'use client'

import { motion } from 'framer-motion'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Trainer:   /images/trainer-portrait.jpg
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function About() {
  const features = [
    { title: '💃 Dance Training', desc: 'Classical, Bollywood, Hip-Hop mastered with discipline' },
    { title: '🧘 Fitness & Yoga', desc: 'Body conditioning and mindfulness every session' },
    { title: '🎭 Stage Performance', desc: 'Real stage exposure and performance confidence' },
    { title: '🌟 Personality Dev', desc: 'Poise, communication, and confidence building' },
    { title: '👑 Celebrity Exposure', desc: 'Train near industry professionals and icons' },
    { title: '🚀 Student Growth', desc: 'Every milestone tracked and celebrated with you' }
  ]

  return (
    <section id="about" className="bg-[#0A0A0A] py-16 px-6 md:py-20 md:px-10 lg:py-24 lg:px-[5%] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-[60px] items-center">
        {/* Text Side (55%) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-[55%]"
        >
          <div className="section-label">WHAT WE OFFER</div>
          <div className="gold-divider"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Built for <em className="gold-text not-italic">Greatness</em> — For Every Age
          </h2>
          <p className="text-[#888] text-[16px] lg:text-[18px] leading-[1.85] mb-10">
            Step Up Dance Academy was founded on one belief: dance is not just movement — it is identity, expression, and transformation. Whether your child is taking their first step onto the dance floor, or you are an adult rediscovering your rhythm, our academy is built for you. We don't just train dancers. We shape confident, disciplined, expressive human beings who carry the stage with them wherever they go.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="gold-card !p-5">
                <h3 className="text-[#C9A84C] font-semibold text-[15px] mb-2 font-['Inter']">{feature.title}</h3>
                <p className="text-[#888] text-[13px] leading-[1.5]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Side (45%) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-[45%] w-full"
        >
          <img
            src="https://placehold.co/600x700/1A1A1A/C9A84C?text=Trainer"
            alt="Trainer"
            className="w-full h-auto object-cover rounded-[16px] border-2 border-[#c9a84c4d] shadow-[0_0_60px_rgba(201,168,76,0.15)]"
          />
          {/* Replace with: <Image src="/images/trainer-portrait.jpg" width={600} height={700} className="..." alt="Trainer" /> */}
        </motion.div>
      </div>
    </section>
  )
}
