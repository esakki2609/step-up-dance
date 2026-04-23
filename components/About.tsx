'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const features = [
    { title: 'Trendy Dance Training', desc: 'Commercial, Bollywood, and Hip-Hop mastered with style and energy' },
    { title: 'High-Energy Fitness', desc: 'Body conditioning, rhythm, and intense cardio every session' },
    { title: 'Stage Performance', desc: 'Real stage exposure and performance confidence' },
    { title: 'Personality Development', desc: 'Poise, communication, and confidence building' },
    { title: 'Celebrity Exposure', desc: 'Train near industry professionals and icons' },
    { title: 'Student Growth', desc: 'Every milestone tracked and celebrated with you' }
  ]

  return (
    <section id="about" className="bg-[#0A0A0A] pt-16 pb-6 px-6 md:pt-20 md:pb-8 lg:pt-24 lg:pb-10 lg:px-[5%] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-[40px] items-center">
        {/* Text Side (55%) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-[55%]"
        >
          <div className="section-label">THE ACADEMY & THE MASTER</div>
          <div className="gold-divider"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-['Playfair_Display']">
            Train with an Expert <em className="gold-text not-italic">Dance Master</em>
          </h2>
          <p className="text-[#888] text-[15px] lg:text-[17px] leading-[1.6] mb-4">
            Welcome to Step Up Dance Academy. We provide the best dance classes for students who want to truly learn dance and express themselves. Our academy is led by an experienced dance master who brings years of professional choreography to every single training session.
          </p>
          <p className="text-[#888] text-[15px] lg:text-[17px] leading-[1.6] mb-6">
            You will receive expert guidance designed to build your confidence and perfect your stage presence. Join our community and discover your rhythm in a supportive and highly energetic environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((feature, i) => (
              <div key={i} className="gold-card !p-4 border border-[#c9a84c20] hover:border-[#c9a84c60] transition-colors">
                <h3 className="text-[#C9A84C] font-semibold text-[14px] mb-1 font-['Inter']">{feature.title}</h3>
                <p className="text-[#888] text-[12px] leading-[1.4]">{feature.desc}</p>
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
          <div className="relative w-full rounded-[16px] overflow-hidden border-[4px] border-[#C9A84C] shadow-[0_0_50px_rgba(201,168,76,0.25)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-40 z-10"></div>
            <Image
              src="/images/dance_master.jpeg"
              alt="Professional Dance Master"
              width={800}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="text-white font-['Playfair_Display'] text-2xl font-bold drop-shadow-lg">The Dance Master</div>
              <div className="text-[#C9A84C] text-sm tracking-widest uppercase font-bold mt-1">Lead Choreographer</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
