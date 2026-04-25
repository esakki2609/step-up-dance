'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Hero:      /images/hero.jpg
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center pt-[100px] pb-[40px] overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Layer 1: Image Placeholder */}
        <Image
          src="/images/hero_dance_crew_2.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />

        {/* Layer 2: Linear Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.95) 100%)'
          }}
        />

        {/* Layer 3: Radial Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-[8%] max-w-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#c9a84c1a] border border-[#c9a84c59] text-[#C9A84C] text-[10px] tracking-[4px] py-[6px] px-[16px] rounded-[50px] mb-4 uppercase">
            ✦ AWARD WINNING DANCE ACADEMY ✦
          </span>

          <h1 className="font-['Cinzel'] text-[clamp(48px,6vw,80px)] font-black leading-[1.1] mb-4">
            <span className="text-[#FAFAFA] block">STEP INTO</span>
            <span className="gold-text italic block">THE SPOTLIGHT</span>
          </h1>

          <p className="text-[15px] lg:text-[17px] text-[rgba(250,250,250,0.7)] max-w-[460px] leading-[1.6] mb-6">
            Train with Passion. Perform with Pride. Shine with Step Up Dance Academy — for children and adults.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <Link href="#join" className="btn-gold text-center py-3 px-6">
              Join Now
            </Link>
            <Link href="#trial" className="btn-outline text-center py-3 px-6">
              Book Free Trial
            </Link>
          </div>

          <div className="mt-8 lg:mt-[40px] grid grid-cols-2 md:flex md:flex-row md:items-center gap-4 md:gap-8">
            <div>
              <div className="text-[24px] lg:text-[32px] font-extrabold text-[#C9A84C]">1000+</div>
              <div className="text-[10px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Students</div>
            </div>
            <div className="hidden md:block w-[1px] h-[30px] bg-[#c9a84c4d]" />
            <div>
              <div className="text-[24px] lg:text-[32px] font-extrabold text-[#C9A84C]">5.0★</div>
              <div className="text-[10px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Rating</div>
            </div>
            <div className="hidden md:block w-[1px] h-[30px] bg-[#c9a84c4d]" />
            <div>
              <div className="text-[24px] lg:text-[32px] font-extrabold text-[#C9A84C]">8+</div>
              <div className="text-[10px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Years</div>
            </div>
            <div className="hidden md:block w-[1px] h-[30px] bg-[#c9a84c4d]" />
            <div>
              <div className="text-[24px] lg:text-[32px] font-extrabold text-[#C9A84C]">Both</div>
              <div className="text-[10px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Kids & Adults</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
