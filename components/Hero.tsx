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

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[120px] pb-[60px] md:pt-[150px] flex items-center overflow-hidden w-full">
      {/* Background Layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Layer 1: Image Placeholder */}
        <img
          src="/images/hero_dance_crew.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
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
      <div className="relative z-10 px-6 lg:px-[8%] max-w-[700px] mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#c9a84c1a] border border-[#c9a84c59] text-[#C9A84C] text-[10px] tracking-[4px] py-[7px] px-[18px] rounded-[50px] mb-6 uppercase">
            ✦ AWARD WINNING DANCE ACADEMY ✦
          </span>

          <h1 className="font-['Playfair_Display'] text-[52px] md:text-[72px] lg:text-[clamp(72px,8vw,110px)] font-black leading-none mb-5">
            <span className="text-[#FAFAFA] block">STEP INTO</span>
            <span className="gold-text italic block">THE SPOTLIGHT</span>
          </h1>

          <p className="text-[16px] lg:text-[18px] text-[rgba(250,250,250,0.7)] max-w-[460px] leading-[1.75] mb-8">
            Train with Passion. Perform with Pride. Shine with Step Up Dance Academy — for children and adults.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <Link href="#join" className="btn-gold text-center">
              Join Now
            </Link>
            <Link href="#trial" className="btn-outline text-center">
              Book Free Trial
            </Link>
          </div>

          <div className="mt-10 lg:mt-[60px] grid grid-cols-2 md:flex md:flex-row md:items-center gap-6 md:gap-10">
            <div>
              <div className="text-[28px] lg:text-[36px] font-extrabold text-[#C9A84C]">1000+</div>
              <div className="text-[11px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Students</div>
            </div>
            <div className="hidden md:block w-[1px] h-[40px] bg-[#c9a84c4d]" />
            <div>
              <div className="text-[28px] lg:text-[36px] font-extrabold text-[#C9A84C]">5.0★</div>
              <div className="text-[11px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Rating</div>
            </div>
            <div className="hidden md:block w-[1px] h-[40px] bg-[#c9a84c4d]" />
            <div>
              <div className="text-[28px] lg:text-[36px] font-extrabold text-[#C9A84C]">8+</div>
              <div className="text-[11px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Years</div>
            </div>
            <div className="hidden md:block w-[1px] h-[40px] bg-[#c9a84c4d]" />
            <div>
              <div className="text-[28px] lg:text-[36px] font-extrabold text-[#C9A84C]">Both</div>
              <div className="text-[11px] text-[rgba(250,250,250,0.55)] tracking-[2px] uppercase">Kids & Adults</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
