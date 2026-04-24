import Link from 'next/link'

/*
 * IMAGE REPLACEMENT GUIDE:
 * When real images are ready, place them in /public/images/ and 
 * replace the placeholder src with:
 *
 * Logo:      /images/logo-stepup.png
 *
 * Switch <img> tags to <Image> from next/image after adding real files.
 */

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#c9a84c26] py-12 px-6 md:py-16 md:px-10 lg:py-20 lg:px-[5%]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Brand */}
        <div>
            <div className="mb-6">
              <img src="/images/logo/step-up-dance-logo.jpeg" className="h-[70px] w-[70px] object-cover rounded-full mix-blend-screen" style={{ filter: 'brightness(1.2) contrast(1.2)' }} alt="Step Up Dance Academy Logo" />
            </div>
          <p className="text-[#888] text-[14px] leading-[1.6] mb-6">
            Train with Passion. Perform with Pride. Shine.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[#888] hover:text-[#C9A84C] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-[#888] hover:text-[#C9A84C] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="text-[#888] hover:text-[#C9A84C] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-[#FAFAFA] font-bold tracking-[1px] uppercase text-[13px] mb-6">QUICK LINKS</h4>
          <ul className="space-y-3">
            {['Intro', 'Industry Contacts', 'Curriculum', 'Certificates', 'Students', 'Get In Touch', 'FAQ', 'Contact'].map(link => {
              const hrefMap: Record<string, string> = {
                Intro: '/#academy-intro',
                'Industry Contacts': '/#industry-contacts',
                Curriculum: '/#curriculum',
                Certificates: '/#certificates',
                Students: '/#students-gallery',
                'Get In Touch': '/#contact-page',
                FAQ: '/#faq',
                Contact: '/#contact-page',
              }
              const href = hrefMap[link]
              return (
                <li key={link}>
                  <Link href={href} className="text-[#888] text-[14px] hover:text-[#C9A84C] transition-colors">
                    {link}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Column 3 - Programs */}
        <div>
          <h4 className="text-[#FAFAFA] font-bold tracking-[1px] uppercase text-[13px] mb-6">COURSE TRACKS</h4>
          <ul className="space-y-3">
            {['Foundation', 'Bollywood', 'Hip-Hop', 'Freestyle', 'Stage Training', 'Competition Prep'].map(link => (
              <li key={link}>
                <Link href="/#curriculum" className="text-[#888] text-[14px] hover:text-[#C9A84C] transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="text-[#FAFAFA] font-bold tracking-[1px] uppercase text-[13px] mb-6">REACH US</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-[#888] text-[14px] leading-[1.6]">
              <span className="text-[#C9A84C]">📍</span>
              <span>Step Up Dance Academy<br/>KSP Complex, Opposite Thiyagaraja Nagar, Opposite E B Office,<br/>Sivanthi Patti Road, Sivanthipatti,<br/>Tirunelveli-627011, Tamil Nadu</span>
            </li>
            <li className="flex gap-3 text-[#888] text-[14px] leading-[1.6]">
              <span className="text-[#C9A84C]">📞</span>
              <span>+91 99521 62600</span>
            </li>
            <li className="flex gap-3 text-[#888] text-[14px] leading-[1.6]">
              <span className="text-[#C9A84C]">📧</span>
              <span>info@stepupdanceacademy.com</span>
            </li>
            <li>
              <a href="https://wa.me/919952162600" target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-[14px] font-medium hover:underline flex items-center gap-2 mt-2">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto border-t border-[rgba(255,255,255,0.05)] mt-12 pt-6 text-[13px] text-[#555] text-center">
        © 2025 Step Up Dance Academy. All Rights Reserved. ✦
      </div>
    </footer>
  )
}
