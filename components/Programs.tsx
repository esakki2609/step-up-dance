'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Programs() {
  const [activeTab, setActiveTab] = useState<'children' | 'adults'>('children')

  const childrenPrograms = [
    { title: 'Trendy Dance', age: 'Ages 4–12', desc: 'Latest viral trends, commercial moves, and street styles taught with high energy' },
    { title: 'Bollywood Kids', age: 'Ages 5–14', desc: 'High-energy routines, expressive choreography, fully stage-ready' },
    { title: 'Hip Hop Juniors', age: 'Ages 6–15', desc: 'Street style, rhythm, coordination and freestyle fundamentals' },
    { title: 'Tiny Tots', age: 'Ages 3–5', desc: 'Music, movement and motor skill development through dance' },
    { title: 'Commercial Kids', age: 'Ages 4–12', desc: 'Industry-style choreography focusing on performance and musicality' },
    { title: 'Stage Performance', age: 'Ages 5–15', desc: 'Train for real events, competitions and public performances' }
  ]

  const adultPrograms = [
    { title: 'Bollywood for Adults', age: 'Ages 18+', desc: 'Fitness and fun through high-energy Bollywood choreography' },
    { title: 'Contemporary Dance', age: 'Ages 16+', desc: 'Expressive modern movement and technical body control' },
    { title: 'Trendy for Adults', age: 'Ages 18+', desc: 'Master the latest viral and commercial routines in a fun environment' },
    { title: 'Fitness Dance', age: 'Ages 18+', desc: 'Cardio-focused routines — zero prior experience needed' },
    { title: 'Commercial Dance', age: 'All Ages', desc: 'Industry-standard choreography to hit songs, perfect for building style' },
    { title: 'Stage Prep', age: 'Ages 16+', desc: 'Choreography, confidence and live stage performance training' }
  ]

  const programs = activeTab === 'children' ? childrenPrograms : adultPrograms

  return (
    <section id="programs" className="bg-[#0F0F0F] py-16 px-6 md:py-20 md:px-10 lg:py-28 lg:px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="section-label text-center mb-4">OUR PROGRAMS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
            Find Your <em className="gold-text not-italic">Rhythm</em>
          </h2>
          
          {/* Tab Switcher */}
          <div className="flex justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('children')}
              className={`text-[15px] tracking-[1px] uppercase py-[12px] px-[28px] transition-all duration-300 ${
                activeTab === 'children'
                  ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] font-bold'
                  : 'text-[#888] font-medium hover:text-[#C9A84C]'
              }`}
            >
              For Children
            </button>
            <button
              onClick={() => setActiveTab('adults')}
              className={`text-[15px] tracking-[1px] uppercase py-[12px] px-[28px] transition-all duration-300 ${
                activeTab === 'adults'
                  ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] font-bold'
                  : 'text-[#888] font-medium hover:text-[#C9A84C]'
              }`}
            >
              For Adults
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {programs.map((prog, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="gold-card relative"
              >
                <div className="absolute top-6 right-6 bg-[#c9a84c1a] border border-[#c9a84c4d] text-[#C9A84C] text-[11px] font-bold uppercase tracking-[1px] py-1 px-3 rounded-[50px]">
                  {prog.age}
                </div>
                <h3 className="text-xl md:text-2xl text-[#FAFAFA] font-['Playfair_Display'] mb-3 pr-20">{prog.title}</h3>
                <p className="text-[#888] text-[14px] leading-[1.6]">{prog.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
