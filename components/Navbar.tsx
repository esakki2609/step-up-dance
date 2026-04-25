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
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [showCursorFx, setShowCursorFx] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
      setShowCursorFx(true)
    }

    const handleMouseLeave = () => {
      setShowCursorFx(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  const navLinks = [
    { name: 'Intro', href: '/#academy-intro' },
    { name: 'Curriculum', href: '/#curriculum' },
    { name: 'Certificates', href: '/#certificates' },
    { name: 'Students', href: '/#students-gallery' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact-page' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#0a0a0ae6] backdrop-blur-[20px] py-4 border-b border-[#c9a84c33]'
          : 'bg-transparent py-6 px-[5%]'
      } px-[5%]`}
    >
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block h-4 w-4 rounded-full bg-[#25D366]/70 blur-[1px]"
        animate={{ x: cursor.x - 8, y: cursor.y - 8, opacity: showCursorFx ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.35 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[59] hidden md:block h-20 w-20 rounded-full bg-[#C9A84C]/20 blur-2xl"
        animate={{ x: cursor.x - 40, y: cursor.y - 40, opacity: showCursorFx ? 0.85 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.7 }}
      />

      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center logo-3d-wrap logo-spin">
          <motion.img
            src="/images/logo/step-up-dance-logo.jpeg"
            className="h-[70px] w-[70px] object-cover rounded-full mix-blend-screen logo-float logo-3d"
            alt="Step Up Dance Academy Logo"
            animate={{
              y: [0, -3, 0],
            }}
            whileHover={{ scale: 1.08, rotate: -4 }}
            transition={{
              y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.2 },
              rotate: { duration: 0.2 },
            }}
          />
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#FAFAFA] text-[13px] font-medium tracking-[1.5px] uppercase hover:text-[#C9A84C] transition-colors duration-300 nav-link-animated"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="hidden lg:block">
          <a
            href="/#contact-page"
            className="btn-gold !px-6 !py-2.5"
          >
            Join Now
          </a>
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
              <a
                href="/#contact-page"
                className="btn-gold w-full text-center block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
