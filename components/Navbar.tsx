'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Logo:      /images/logo-stepup.png
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Students', href: '#students' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#0a0a0ae6] backdrop-blur-[20px] py-4 border-b border-[#c9a84c33]'
          : 'bg-transparent py-6 px-[5%]'
      } px-[5%]`}
    >
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-[80px] h-[40px] bg-white flex items-center justify-center text-black text-xs font-bold text-center">
            STEP UP LOGO
          </div>
          {/* Replace with: <Image src="/images/logo-stepup.png" width={80} height={40} alt="Logo" /> */}
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#FAFAFA] text-[13px] font-medium tracking-[1.5px] uppercase hover:text-[#C9A84C] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="hidden lg:block">
          <Link href="#join" className="btn-gold !px-6 !py-2.5">
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#C9A84C] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0afa] border-b border-[#c9a84c33] flex flex-col lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 px-[5%] border-b border-[#c9a84c1a] text-[#FAFAFA] text-[13px] font-medium tracking-[1.5px] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-[5%] w-full">
              <Link
                href="#join"
                className="btn-gold w-full text-center block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
