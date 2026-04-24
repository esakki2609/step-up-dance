'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

type StudentImage = {
  src: string
  title: string
  seo: string
}

const kidsImages: StudentImage[] = [
  {
    src: '/images/students/students danceone.jpeg',
    title: 'Kids Dance Foundation',
    seo: 'Kids dance classes in Tirunelveli focused on rhythm, confidence, and stage presence.',
  },
  {
    src: '/images/students/students dance two.jpeg',
    title: 'Kids Group Practice',
    seo: 'Professional kids dance academy training with synchronized choreography practice sessions.',
  },
  {
    src: '/images/students/students dance three.jpeg',
    title: 'Performance Training',
    seo: 'Structured dance performance training for children to improve timing and expressions.',
  },
  {
    src: '/images/students/students dance four.jpeg',
    title: 'Kids Stage Readiness',
    seo: 'Best dance coaching for kids to build stage confidence and competition preparation.',
  },
  {
    src: '/images/students/students dance five.jpeg',
    title: 'Junior Team Choreography',
    seo: 'Dance choreography classes for school students with festival and event preparation.',
  },
  {
    src: '/images/students/students dance six.jpeg',
    title: 'Kids Skill Progression',
    seo: 'Certified dance learning pathway for children from beginner to advanced levels.',
  },
  {
    src: '/images/students/with junior studens pic.jpeg',
    title: 'Junior Students Batch',
    seo: 'Trusted junior dance classes for parents seeking disciplined and safe dance coaching.',
  },
  {
    src: '/images/students/with students certificates one.jpeg',
    title: 'Kids Certification Moment',
    seo: 'Student achievement certificates in dance training that motivate long-term growth.',
  },
  {
    src: '/images/students/with students certificates two.jpeg',
    title: 'Kids Award Recognition',
    seo: 'Dance academy certification support for children after structured performance milestones.',
  },
]

const adultImages: StudentImage[] = [
  {
    src: '/images/students/adult dance one.jpeg',
    title: 'Adult Dance Program',
    seo: 'Adult dance classes in Tirunelveli with flexible timings for college and working professionals.',
  },
]

export default function StudentsTabsGallery() {
  const [tab, setTab] = useState<'kids' | 'adult'>('kids')

  const images = useMemo(() => (tab === 'kids' ? kidsImages : adultImages), [tab])

  return (
    <div>
      <div className="mb-6">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#121212] border border-[#2a2a2a] shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <button
          type="button"
          onClick={() => setTab('kids')}
            className={`min-w-[160px] px-5 py-3 rounded-xl text-sm font-semibold tracking-[1px] uppercase transition-all ${
            tab === 'kids'
                ? 'bg-gradient-to-r from-[#C9A84C] to-[#25D366] text-[#0a0a0a] shadow-[0_8px_22px_rgba(37,211,102,0.22)]'
                : 'text-[#bdbdbd] hover:text-[#f0f0f0]'
          }`}
        >
            Kids Students <span className="opacity-80">({kidsImages.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setTab('adult')}
            className={`min-w-[160px] px-5 py-3 rounded-xl text-sm font-semibold tracking-[1px] uppercase transition-all ${
            tab === 'adult'
                ? 'bg-gradient-to-r from-[#C9A84C] to-[#25D366] text-[#0a0a0a] shadow-[0_8px_22px_rgba(37,211,102,0.22)]'
                : 'text-[#bdbdbd] hover:text-[#f0f0f0]'
          }`}
        >
            Adult Students <span className="opacity-80">({adultImages.length})</span>
        </button>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#25D36666_transparent]">
        <div className={`flex gap-5 snap-x snap-mandatory ${images.length > 1 ? 'min-w-max' : 'min-w-0'}`}>
          {images.map((item) => (
            <article
              key={item.src}
              className="w-[290px] md:w-[320px] shrink-0 snap-start rounded-2xl overflow-hidden border border-[#c9a84c33] bg-[#111111] interactive-lift"
            >
              <div className="relative h-[290px]">
                <Image src={item.src} alt={item.title} fill sizes="(max-width:768px) 290px, 320px" className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-[17px] font-semibold text-[#f2f2f2] mb-2">{item.title}</h3>
                <p className="text-[13px] leading-[1.7] text-[#bdbdbd]">{item.seo}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
