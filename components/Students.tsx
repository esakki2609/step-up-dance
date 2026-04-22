'use client'

import { motion } from 'framer-motion'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Student 1: /images/student-1.jpg
 * Student 2: /images/student-2.jpg
 * Student 3: /images/student-3.jpg
 * Student 4: /images/student-4.jpg
 * Student 5: /images/student-5.jpg
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function Students() {
  const students = [
    { label: 'Rising Star', sub: 'Passion Ignited', src: '/images/students/students dance two.jpeg' },
    { label: 'Stage Ready', sub: 'Born to Perform', src: '/images/students/students dance three.jpeg' },
    { label: 'Confident', sub: 'Finding the Beat', src: '/images/students/students dance four.jpeg' },
    { label: 'Excellence', sub: 'Every Step Counts', src: '/images/students/students dance five.jpeg' },
    { label: 'Future Star', sub: 'Just Getting Started', src: '/images/students/with students two.jpeg' },
    { label: 'Spotlight', sub: 'Owning The Stage', src: '/images/students/students dance six.jpeg' }
  ]

  return (
    <section id="students" className="bg-[#0F0F0F] py-16 px-6 md:py-20 md:px-10 lg:py-28 lg:px-[5%]">
      <div className="max-w-[1400px] mx-auto text-center mb-12">
        <div className="section-label">OUR STARS</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Where Students <em className="gold-text not-italic">Become Stars</em>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar pb-8 pt-4 md:grid md:grid-cols-3 lg:grid-cols-3">
        {students.map((student, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto group relative overflow-hidden rounded-[16px] aspect-[3/4] cursor-pointer snap-center"
          >
            <img
              src={student.src}
              alt={`Student ${i}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 group-hover:border-2 group-hover:border-[#c9a84c80]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0af2] to-transparent bg-[length:100%_55%] bg-bottom bg-no-repeat flex flex-col justify-end p-4 transition-all duration-300">
              <h3 className="text-[#C9A84C] text-[12px] tracking-[2px] uppercase font-bold mb-1">
                {student.label}
              </h3>
              <p className="text-[rgba(250,250,250,0.6)] text-[11px]">
                {student.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  )
}
