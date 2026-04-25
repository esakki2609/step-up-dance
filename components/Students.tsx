'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Students() {
  const students = [
    { src: '/images/students/with students certificates one.jpeg', alt: 'Student proudly receiving Step Up Dance certification' },
    { src: '/images/students/adult dance one.jpeg', alt: 'Adult dance training session at Step Up Academy' },
    { src: '/images/students/students dance five.jpeg', alt: 'Energetic student dance performance' },
    { src: '/images/students/with students certificates two.jpeg', alt: 'Proud student holding professional dance certificate' },
    { src: '/images/students/students dance four.jpeg', alt: 'Students mastering new dance choreography' },
    { src: '/images/students/with junior studens pic.jpeg', alt: 'Dance master with junior academy students' },
    { src: '/images/students/students dance six.jpeg', alt: 'Dance academy students performing on stage' },
    { src: '/images/students/with students one.jpeg', alt: 'Dance master posing with graduating students' },
    { src: '/images/students/students dance three.jpeg', alt: 'Group dance training in session' },
    { src: '/images/students/with students pics.jpeg', alt: 'Step Up Dance studio group picture' },
    { src: '/images/students/students dance two.jpeg', alt: 'Professional dance practice session' },
    { src: '/images/students/with students three.jpeg', alt: 'Students smiling after a rigorous dance class' },
    { src: '/images/students/students danceone.jpeg', alt: 'Live dance class in action' },
    { src: '/images/students/with students two.jpeg', alt: 'Happy dance students posing together' },
    { src: '/images/students/with students.jpeg', alt: 'Step up dance academy student community' },
  ]

  return (
    <section id="students" className="bg-[#050505] py-16 px-6 md:py-20 md:px-10 lg:py-28 lg:px-[5%] border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-2">OUR STARS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel'] mb-4">
            Where Passion <em className="gold-text not-italic">Meets Success</em>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto text-[14px] md:text-[15px] leading-[1.6]">
            Take a look at our vibrant community. From high-energy studio practices to proud certification moments, our students represent the heart and soul of Step Up Dance Academy.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
        {students.map((student, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
            className="group relative overflow-hidden rounded-[12px] md:rounded-[16px] aspect-square cursor-pointer bg-[#111]"
          >
            <Image
              src={student.src}
              alt={student.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 border border-transparent group-hover:border-[#c9a84c40] rounded-[12px] md:rounded-[16px]">
               <div className="w-8 h-8 rounded-full bg-[#C9A84C] text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
