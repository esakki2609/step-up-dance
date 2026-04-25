'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const certificates = [
    { year: '2017', title: 'Award of Appreciation', img: '/images/certificates/appreciation certificte.jpeg', seo: 'Step Up Dance Academy early appreciation award' },
    { year: '2018', title: 'Foundational Excellence', img: '/images/certificates/ceritificate-one.jpeg', seo: 'Professional dance excellence certificate' },
    { year: '2019', title: 'Street Dance Championship', img: '/images/certificates/street dance certificate.jpeg', seo: 'Street dance championship recognition' },
    { year: '2020', title: 'International Breaking', img: '/images/certificates/breaking international certificate.jpeg', seo: 'International break dancing certificate' },
    { year: '2024', title: 'Dance Don Certificate', img: '/images/certificates/dance done certificate.jpeg', seo: 'Dance don certificate recognition for Step Up Dance Academy' },
    { year: '2022', title: 'Pride Recognition', img: '/images/certificates/international pride certificate.jpeg', seo: 'International pride dance recognition' },
    { year: '2022', title: 'Global Achievement', img: '/images/certificates/international pride certificate (2).jpeg', seo: 'Global dance achievement certificate' },
    { year: '2023', title: 'Pride of Tamilnadu', img: '/images/certificates/pride of tamilnadu certificate.jpeg', seo: 'Pride of Tamilnadu dance award' },
    { year: '2023', title: 'Celebrity Endorsement', img: '/images/certificates/with certificate.jpeg', seo: 'Celebrity endorsed dance certificate' },
    { year: '2024', title: 'World Record Holder', img: '/images/certificates/world-record-certificate.jpeg', seo: 'Official world record dance certificate' },
    { year: '2024', title: 'Living Legend Award', img: '/images/certificates/legend-certificate.jpeg', seo: 'Living legend dance academy recognition' },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section id="achievements" className="bg-[#050505] pt-6 pb-10 overflow-hidden relative border-t border-[#1a1a1a]">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#C9A84C] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-[5%] relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-2">OUR JOURNEY</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel']">
              A Legacy of <em className="gold-text not-italic">Excellence</em>
            </h2>
            <p className="text-[#888] mt-2 max-w-xl text-[14px] leading-[1.5]">
              Explore the timeline of our professional dance academy, featuring world records, international championships, and prestigious state-level recognition.
            </p>
          </motion.div>

          {/* Scroll Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden gap-4 md:flex"
          >
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#c9a84c40] flex items-center justify-center hover:bg-[#C9A84C] hover:text-black transition-all text-[#C9A84C]"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#c9a84c40] flex items-center justify-center hover:bg-[#C9A84C] hover:text-black transition-all text-[#C9A84C]"
              aria-label="Scroll right"
            >
              →
            </button>
          </motion.div>
        </div>

        {/* Horizontal Timeline Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative -mx-6 md:-mx-[5%] px-6 md:px-[5%]"
        >
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 items-center hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Inject CSS to absolutely hide webkit scrollbar since Tailwind no-scrollbar plugin isn't installed */}
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />

            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="relative group w-[85vw] sm:w-[320px] md:w-[380px] lg:w-[420px] snap-center flex-shrink-0"
              >
                {/* Timeline Line Connector */}
                <div className="absolute top-3 left-0 w-full h-[1px] bg-[#c9a84c20] -z-10" />
                
                {/* Year Dot */}
                <div className="w-6 h-6 rounded-full bg-[#111] border-2 border-[#C9A84C] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(201,168,76,0.3)] group-hover:scale-110 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                </div>

                <div className="text-[#C9A84C] font-bold tracking-[2px] text-[15px] mb-1">{cert.year}</div>
                <h3 className="text-white text-lg md:text-xl font-['Cinzel'] mb-4 min-h-[56px] line-clamp-2 pr-4 transition-colors group-hover:text-[#FAFAFA]">{cert.title}</h3>
                
                {/* Certificate Image Frame */}
                <div className="relative aspect-[3/2] w-full rounded-[12px] overflow-hidden border border-[#c9a84c30] group-hover:border-[#C9A84C] transition-all duration-500 shadow-xl group-hover:shadow-[0_10px_40px_rgba(201,168,76,0.15)] group-hover:-translate-y-1 bg-[#111]">
                  <Image 
                    src={cert.img} 
                    alt={cert.seo}
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}

            {/* Spacer for right padding on scroll */}
            <div className="min-w-[10px] md:min-w-[5%]" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-2 md:hidden flex items-center justify-center gap-2 text-[#888] text-[11px] font-medium tracking-[1px] uppercase">
          <span>←</span>
          <span>Swipe Timeline</span>
          <span>→</span>
        </div>

      </div>
    </section>
  )
}
