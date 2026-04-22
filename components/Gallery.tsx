'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const scrollRef = useRef<HTMLDivElement>(null)

  const filters = ['All', 'Adults', 'Kids']

  const items = [
    { id: 11, type: 'Adults', src: '/images/students/adult dance one.jpeg' },
    { id: 12, type: 'Kids', src: '/images/students/students dance five.jpeg' },
    { id: 13, type: 'Kids', src: '/images/students/students dance four.jpeg' },
    { id: 14, type: 'Kids', src: '/images/students/students dance three.jpeg' },
    { id: 15, type: 'Kids', src: '/images/students/with students one.jpeg' },
    { id: 16, type: 'Kids', src: '/images/students/with students three.jpeg' },
    { id: 17, type: 'Kids', src: '/images/students/with students.jpeg' },
  ]

  const filteredItems = activeFilter === 'All' ? items : items.filter(item => item.type === activeFilter)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section id="gallery" className="bg-[#0F0F0F] py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[5%]">
        <div className="text-center mb-12">
          <div className="section-label mb-4">OUR MOMENTS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
            The Step Up <em className="gold-text not-italic">Gallery</em>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[13px] md:text-[15px] tracking-[1px] uppercase py-[10px] px-[20px] transition-all duration-300 ${
                  activeFilter === filter
                    ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] font-bold'
                    : 'text-[#888] font-medium hover:text-[#C9A84C]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative group max-w-[1600px] mx-auto px-4 md:px-8">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0a0a0ae6] border border-[#c9a84c33] text-[#C9A84C] p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar pb-8 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] aspect-[4/5] relative rounded-[16px] overflow-hidden snap-center cursor-pointer bg-[#1A1A1A] border border-[#c9a84c1a]"
              >
                <img
                  src={item.src}
                  alt={`Gallery Image ${item.type} ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.08]"
                />
                <div className="absolute top-4 left-4 bg-[#0a0a0ae6] text-[#C9A84C] text-[11px] font-bold tracking-[1px] uppercase py-1.5 px-3 rounded-[50px] border border-[#c9a84c33]">
                  {item.type}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0a0a0ae6] border border-[#c9a84c33] text-[#C9A84C] p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  )
}
