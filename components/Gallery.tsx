'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with real images.
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Performances', 'Training', 'Awards']

  const items = [
    { id: 1, type: 'Performances', src: 'https://placehold.co/400x500/1A1A1A/C9A84C?text=Performance' },
    { id: 2, type: 'Training', src: 'https://placehold.co/400x300/1A1A1A/C9A84C?text=Training' },
    { id: 3, type: 'Awards', src: 'https://placehold.co/400x500/1A1A1A/C9A84C?text=Awards' },
    { id: 4, type: 'Performances', src: 'https://placehold.co/400x400/1A1A1A/C9A84C?text=Stage' },
    { id: 5, type: 'Training', src: 'https://placehold.co/400x300/1A1A1A/C9A84C?text=Student' },
    { id: 6, type: 'Performances', src: 'https://placehold.co/400x500/1A1A1A/C9A84C?text=Performance+2' },
    { id: 7, type: 'Training', src: 'https://placehold.co/400x400/1A1A1A/C9A84C?text=Training+2' },
    { id: 8, type: 'Awards', src: 'https://placehold.co/400x300/1A1A1A/C9A84C?text=Awards+2' },
    { id: 9, type: 'Performances', src: 'https://placehold.co/400x500/1A1A1A/C9A84C?text=Stage+2' },
    { id: 10, type: 'Training', src: 'https://placehold.co/400x400/1A1A1A/C9A84C?text=Student+2' }
  ]

  const filteredItems = activeFilter === 'All' ? items : items.filter(item => item.type === activeFilter)

  return (
    <section id="gallery" className="bg-[#0F0F0F] py-16 px-6 md:py-20 md:px-10 lg:py-28 lg:px-[5%]">
      <div className="max-w-[1400px] mx-auto">
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

        {/* Gallery Grid */}
        <motion.layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[10px] bg-[#1A1A1A]"
              >
                {/* Replace with real gallery image when available */}
                <img
                  src={item.src}
                  alt={`Gallery Image ${item.id}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-110 group-hover:border-2 group-hover:border-[#c9a84c80]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.layout>
      </div>
    </section>
  )
}
