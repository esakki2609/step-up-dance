'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Programs() {
  const [activeTab, setActiveTab] = useState<'children' | 'adults'>('children')
  const [selectedProgram, setSelectedProgram] = useState<any>(null)
  const [hoveredIndex, setHoveredIndex] = useState(0)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProgram])

  // Reset hovered index when switching tabs
  useEffect(() => {
    setHoveredIndex(0)
  }, [activeTab])

  const childrenPrograms = [
    { title: 'Trendy Dance', age: 'Ages 4–12', desc: 'Latest viral trends, commercial moves, and street styles taught with high energy.', icon: '🌟' },
    { title: 'Bollywood Kids', age: 'Ages 5–14', desc: 'High-energy routines, expressive choreography, fully stage-ready.', icon: '🎬' },
    { title: 'Hip Hop Juniors', age: 'Ages 6–15', desc: 'Street style, rhythm, coordination and freestyle fundamentals.', icon: '🧢' },
    { title: 'Tiny Tots', age: 'Ages 3–5', desc: 'Music, movement and motor skill development through dance.', icon: '🧸' },
    { title: 'Commercial Kids', age: 'Ages 4–12', desc: 'Industry-style choreography focusing on performance and musicality.', icon: '📸' },
    { title: 'Stage Performance', age: 'Ages 5–15', desc: 'Train for real events, competitions and public performances.', icon: '🏆' }
  ]

  const adultPrograms = [
    { title: 'Bollywood for Adults', age: 'Ages 18+', desc: 'Fitness and fun through high-energy Bollywood choreography.', icon: '✨' },
    { title: 'Contemporary Dance', age: 'Ages 16+', desc: 'Expressive modern movement and technical body control.', icon: '🌊' },
    { title: 'Trendy for Adults', age: 'Ages 18+', desc: 'Master the latest viral and commercial routines in a fun environment.', icon: '🔥' },
    { title: 'Fitness Dance', age: 'Ages 18+', desc: 'Cardio-focused routines — zero prior experience needed.', icon: '💪' },
    { title: 'Commercial Dance', age: 'All Ages', desc: 'Industry-standard choreography to hit songs, perfect for building style.', icon: '🎥' },
    { title: 'Stage Prep', age: 'Ages 16+', desc: 'Choreography, confidence and live stage performance training.', icon: '🎤' }
  ]

  const programs = activeTab === 'children' ? childrenPrograms : adultPrograms

  return (
    <section id="programs" className="bg-[#0A0A0A] pt-8 pb-6 px-6 md:px-10 lg:px-[5%] overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="text-center mb-8">
          <div className="section-label text-center mb-2">OUR CURRICULUM</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-['Cinzel']">
            Find Your <em className="gold-text not-italic">Rhythm</em>
          </h2>
          
          {/* Tab Switcher */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab('children')}
              className={`text-[12px] md:text-[13px] tracking-[2px] uppercase py-[10px] px-[24px] md:px-[28px] rounded-full transition-all duration-300 border ${
                activeTab === 'children'
                  ? 'bg-[#C9A84C] text-black border-[#C9A84C] font-bold'
                  : 'bg-transparent text-[#888] border-[#333] hover:border-[#C9A84C] hover:text-[#C9A84C]'
              }`}
            >
              For Children
            </button>
            <button
              onClick={() => setActiveTab('adults')}
              className={`text-[12px] md:text-[13px] tracking-[2px] uppercase py-[10px] px-[24px] md:px-[28px] rounded-full transition-all duration-300 border ${
                activeTab === 'adults'
                  ? 'bg-[#C9A84C] text-black border-[#C9A84C] font-bold'
                  : 'bg-transparent text-[#888] border-[#333] hover:border-[#C9A84C] hover:text-[#C9A84C]'
              }`}
            >
              For Adults
            </button>
          </div>

          <div className="max-w-2xl mx-auto min-h-[60px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'children' ? (
                <p className="text-[#888] text-[14px] lg:text-[15px] leading-[1.5]">
                  Give your child the gift of rhythm. Our specialized kids' programs are designed to build confidence, coordination, and stage presence in a highly energetic and supportive environment.
                </p>
              ) : (
                <p className="text-[#888] text-[14px] lg:text-[15px] leading-[1.5]">
                  Dance has absolutely no age limit. Whether you are a complete beginner or returning to the floor, our adult classes offer fitness, mental wellness, and professional choreography.
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Premium Split Layout */}
        <div className="mt-8 flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Left: Interactive Menu */}
          <div className="md:w-[45%] flex flex-col justify-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {programs.map((prog, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onClick={() => setSelectedProgram(prog)}
                  className={`cursor-pointer border-b border-[#c9a84c15] py-4 transition-all duration-300 relative ${
                    hoveredIndex === i ? 'pl-4' : 'hover:pl-2'
                  }`}
                >
                  {hoveredIndex === i && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-[20%] w-[3px] h-[60%] bg-[#C9A84C] rounded-r-full shadow-[0_0_10px_#C9A84C]"
                    />
                  )}
                  <div className="flex flex-col pr-6 relative">
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-['Cinzel'] transition-colors duration-300 ${
                      hoveredIndex === i ? 'text-[#C9A84C]' : 'text-[#FAFAFA]'
                    }`}>
                      {prog.title}
                    </h3>
                    
                    {/* 1-Line Description */}
                    <p className={`text-[13px] mt-1 transition-colors duration-300 line-clamp-1 ${
                      hoveredIndex === i ? 'text-[#aaa]' : 'text-[#666]'
                    }`}>
                      {prog.desc}
                    </p>

                    {/* Mobile Arrow */}
                    <span className={`absolute right-0 top-1/2 -translate-y-1/2 md:hidden text-lg transition-transform ${hoveredIndex === i ? 'text-[#C9A84C] translate-x-1' : 'text-[#333]'}`}>
                      →
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Showcase Pane (Desktop Only) */}
          <div className="md:w-[55%] relative rounded-[24px] overflow-hidden border border-[#c9a84c20] bg-[#111] shadow-[0_0_40px_rgba(201,168,76,0.05)] hidden md:flex items-center justify-center p-10 group min-h-[450px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C9A84C] blur-[150px] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none rounded-full" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${hoveredIndex}`}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center w-full max-w-[420px]"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#0A0A0A] border border-[#c9a84c40] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(201,168,76,0.15)] text-3xl">
                  {programs[hoveredIndex]?.icon}
                </div>
                
                <div className="inline-block bg-[#c9a84c1a] border border-[#c9a84c4d] text-[#C9A84C] text-[11px] font-bold uppercase tracking-[2px] py-1.5 px-4 rounded-full mb-6">
                  {programs[hoveredIndex]?.age}
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel'] text-white mb-6 leading-tight">
                  {programs[hoveredIndex]?.title}
                </h3>
                
                <p className="text-[#aaa] text-[16px] lg:text-[17px] leading-[1.7] mb-8">
                  {programs[hoveredIndex]?.desc}
                </p>
                
                <button 
                  onClick={() => setSelectedProgram(programs[hoveredIndex])}
                  className="btn-gold w-full max-w-[220px]"
                >
                  Book a Trial
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#111] border border-[#c9a84c40] p-8 md:p-12 rounded-[16px] max-w-[600px] w-full z-10 shadow-[0_0_50px_rgba(201,168,76,0.15)]"
            >
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 text-[#888] hover:text-[#C9A84C] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-[11px] text-[#C9A84C] tracking-[3px] uppercase mb-4 font-bold">
                {selectedProgram.age}
              </div>
              <h3 className="text-3xl md:text-4xl font-['Cinzel'] text-white mb-6">
                {selectedProgram.title}
              </h3>
              <p className="text-[#888] text-[16px] leading-[1.7] mb-10">
                You selected our <strong className="text-[#FAFAFA] font-medium">{selectedProgram.title}</strong> class. 
                {selectedProgram.desc} This program is expertly designed to provide the highest quality training in a dynamic environment.
              </p>

              <Link 
                href="#contact" 
                onClick={() => setSelectedProgram(null)}
                className="btn-gold block text-center w-full py-4 text-[15px]"
              >
                Book a Free Trial
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
