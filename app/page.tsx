import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealSection from '@/components/RevealSection'
import ContactWhatsAppForm from '@/components/ContactWhatsAppForm'
import StudentsTabsGallery from '@/components/StudentsTabsGallery'

export const metadata: Metadata = {
  title: 'Step Up Dance Academy | Professional Dance Training in Tirunelveli',
  description:
    'Join Step Up Dance Academy for professional dance classes, curriculum-based training, certification support, stage performance opportunities, and industry-focused mentorship for kids and adults.',
  keywords: [
    'dance academy in tirunelveli',
    'professional dance classes',
    'dance master training',
    'dance curriculum',
    'dance certification',
    'bollywood dance classes',
    'hip hop dance classes',
    'kids dance classes',
    'adult dance classes',
    'choreography training',
  ],
}

export default function Home() {
  const curriculum = [
    {
      title: 'Foundation, Rhythm, And Posture Training',
      description:
        'Our professional dance curriculum in Tirunelveli builds core rhythm control, posture alignment, and movement basics for kids and adult beginners.',
    },
    {
      title: 'Bollywood, Hip-Hop, And Freestyle Choreography',
      description:
        'Students learn industry-relevant Bollywood dance, hip-hop choreography, and freestyle combinations through structured weekly dance classes.',
    },
    {
      title: 'Stage Performance And Team Synchronization',
      description:
        'Performance-focused dance coaching improves coordination, group synchronization, and stage confidence for school events and live shows.',
    },
    {
      title: 'Competition And Event Preparation Program',
      description:
        'We provide competition dance training with rehearsal planning, routine polishing, and presentation strategy for academy and interschool events.',
    },
    {
      title: 'Musicality, Expression, And Confidence Building',
      description:
        'This module strengthens musical interpretation, expressive performance quality, and confidence development for complete dance personality growth.',
    },
    {
      title: 'Assessment-Based Progression And Certification Path',
      description:
        'Our level-based dance program tracks student progress with regular assessment, milestone reviews, and certification-oriented training outcomes.',
    },
  ]

  const faqItems = [
    {
      question: 'Who can join Step Up Dance Academy?',
      answer:
        'We train kids, teens, college students, and adults with separate learning paths for beginners and advanced performers.',
    },
    {
      question: 'Do you provide certificates after training?',
      answer:
        'Yes. Students receive certificates through academy milestones, performances, and selected recognition programs.',
    },
    {
      question: 'Are classes available for working professionals?',
      answer:
        'Yes. We offer flexible batch timings, including evening and weekend slots for professionals and college students.',
    },
    {
      question: 'Can students participate in stage shows and competitions?',
      answer:
        'Absolutely. We regularly prepare students for stage performances, cultural events, and competition-level presentations.',
    },
  ]

  const certificates = [
    { src: '/images/certificates/legend-certificate.jpeg', title: 'The Little Legends Certificate', year: 2025 },
    { src: '/images/certificates/breaking international certificate.jpeg', title: 'Breaking International Certificate', year: 2024 },
    { src: '/images/certificates/dance done certificate.jpeg', title: 'Dance Don Certificate', year: 2024 },
    { src: '/images/certificates/international pride certificate (2).jpeg', title: 'International Pride Certificate', year: 2024 },
    { src: '/images/certificates/world-record-certificate.jpeg', title: 'World Record Certificate', year: 2023 },
    { src: '/images/certificates/with certificate.jpeg', title: 'Performance Recognition Certificate', year: 2023 },
    { src: '/images/certificates/pride of tamilnadu certificate.jpeg', title: 'Pride of Tamil Nadu Certificate', year: 2023 },
    { src: '/images/certificates/street dance certificate.jpeg', title: 'Street Dance Certificate', year: 2023 },
    { src: '/images/certificates/international pride certificate.jpeg', title: 'International Pride Certificate', year: 2022 },
    { src: '/images/certificates/appreciation certificte.jpeg', title: 'Appreciation Certificate', year: 2022 },
    { src: '/images/certificates/ceritificate-one.jpeg', title: 'Certificate of Achievement', year: 2021 },
  ]

  return (
    <main>
      <Navbar />

      <section className="relative min-h-[86svh] w-full flex items-center pt-[92px] pb-[12px] overflow-hidden scroll-mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dance_crew_2.jpg"
            alt="Step Up Dance Academy students performing"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[50%_28%] md:object-center"
            style={{ filter: 'brightness(1.16) contrast(1.08) saturate(1.08)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/58 to-[#0A0A0A]/82" />
        </div>

        <div className="relative z-10 px-6 lg:px-[8%] max-w-[780px] py-5 rounded-2xl bg-black/28 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-0">
          <span className="inline-block bg-[#c9a84c1a] border border-[#c9a84c59] text-[#C9A84C] text-[10px] tracking-[4px] py-[6px] px-[16px] rounded-[50px] mb-5 uppercase">
            Professional Dance Academy
          </span>
          <h1 className="text-[clamp(42px,6vw,74px)] font-black leading-[1.1] mb-5 text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.65)]">
            Master Dance With Structured Training And Stage Confidence
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#f0f0f0] leading-[1.8] max-w-[620px] mb-7 [text-shadow:0_2px_10px_rgba(0,0,0,0.65)]">
            Step Up Dance Academy delivers curriculum-led dance education, performance training, and certification-focused guidance for children and adults who want professional growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/#contact-page"
              className="btn-gold active:scale-95"
            >
              Join Now
            </a>
            <a
              href="/#curriculum"
              className="btn-outline active:scale-95"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      <RevealSection id="academy-intro" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden border border-[#c9a84c30]">
            <Image
              src="/images/dance_master.jpeg"
              alt="Dance master at Step Up Dance Academy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#FAFAFA] text-[18px] md:text-[22px] font-semibold">Jegan Master</p>
              <p className="text-[#d4d4d4] text-[12px] md:text-[14px]">Founder & Lead Dance Choreographer</p>
            </div>
          </div>
          <div>
            <div className="section-label">Dance Master & Academy Intro</div>
            <h2 className="text-3xl md:text-5xl mb-5">Professional Mentorship For Serious Learners</h2>
            <p className="text-[#bfbfbf] leading-[1.9] mb-6">
              Our dance master trains students with a strong focus on foundation, discipline, choreography quality, and stage presentation. The academy is built for students who want real skill development instead of casual short-term practice.
            </p>
            <p className="text-[#bfbfbf] leading-[1.9]">
              Every batch follows a planned progression so students improve in technique, rhythm, expression, and performance confidence throughout the year.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="industry-contacts" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Industry Contacts</div>
          <h2 className="text-3xl md:text-5xl mb-7">Network That Supports Career Growth</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            <div className="relative min-h-[420px] md:min-h-[560px] lg:min-h-[680px] rounded-2xl overflow-hidden border border-[#c9a84c40] interactive-lift bg-[#0d0d0d]">
              <Image
                src="/images/celebrities/with prabhu deva.jpeg"
                alt="Step Up Dance Academy with Prabhu Deva"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-top"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[#f5f5f5] text-[17px] font-semibold">Industry Collaboration Highlight</p>
                <p className="text-[#d2d2d2] text-[14px] mt-1">Recognized moments with Prabhu Deva and leading dance personalities.</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:h-[680px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#c9a84c40] interactive-lift bg-[#0d0d0d]">
                  <Image
                    src="/images/celebrities/with celebrity five.jpeg"
                    alt="Step Up Dance Academy with celebrity five"
                    fill
                    sizes="(max-width: 1024px) 100vw, 24vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#c9a84c40] interactive-lift bg-[#0d0d0d]">
                  <Image
                    src="/images/celebrities/with celebrity six.jpeg"
                    alt="Step Up Dance Academy with celebrity six"
                    fill
                    sizes="(max-width: 1024px) 100vw, 24vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
                {[
                  'Direct exposure to renowned choreographers and dance industry mentors',
                  'Performance opportunities through cultural events and professional stage programs',
                  'Career-focused academy network to support student growth beyond classroom training',
                  'Portfolio guidance with stage photos, rehearsal clips, and live showcase documentation',
                  'Mentorship support for dance auditions, media projects, and advanced choreography careers',
                ].map((item) => (
                  <div key={item} className="gold-card !p-4 min-h-[82px] h-full flex items-center interactive-lift">
                    <p className="text-[#e7e7e7] text-[14px] leading-[1.55]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="curriculum" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Curriculum</div>
          <h2 className="text-3xl md:text-5xl mb-7">Structured Dance Curriculum For Every Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {curriculum.map((item) => (
              <div key={item.title} className="border border-[#c9a84c26] rounded-xl p-5 bg-[#121212] interactive-lift">
                <h3 className="text-[20px] text-[#f2f2f2] font-semibold mb-2">{item.title}</h3>
                <p className="text-[#c7c7c7] text-[14px] leading-[1.8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="certificates" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Certificates</div>
          <h2 className="text-3xl md:text-5xl mb-7">Achievement Certifications And Recognitions</h2>
          <div className="overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#c9a84c33_transparent]">
            <div className="flex gap-5 md:gap-6 min-w-max snap-x snap-mandatory">
              {certificates.map((certificate) => (
                <div
                  key={certificate.src}
                  className="w-[260px] md:w-[300px] shrink-0 snap-start bg-gradient-to-b from-[#171717] to-[#111111] rounded-2xl overflow-hidden border border-[#c9a84c40] interactive-lift"
                >
                  <div className="relative h-[320px] md:h-[360px] p-3">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0b0b0b]">
                      <Image
                        src={certificate.src}
                        alt={certificate.title}
                        fill
                        sizes="(max-width: 768px) 260px, 300px"
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] tracking-[2px] uppercase text-[#C9A84C]">Year</span>
                      <span className="text-[12px] font-semibold text-[#25D366]">{certificate.year}</span>
                    </div>
                    <p className="text-[14px] text-[#e8e8e8] leading-[1.5]">{certificate.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#8d8d8d] text-[13px] mt-4">
            Scroll horizontally to view all certificates (ordered by latest year first).
          </p>
        </div>
      </RevealSection>

      <RevealSection id="students-gallery" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Students Dance Gallery</div>
          <h2 className="text-3xl md:text-5xl mb-3">Kids And Adult Student Highlights</h2>
          <p className="text-[#bcbcbc] mb-6 leading-[1.8] max-w-[860px]">
            Explore our full student gallery in separate Kids and Adult tabs. Every image includes a search-friendly description for better visibility of our dance training programs.
          </p>
          <StudentsTabsGallery />
        </div>
      </RevealSection>

      <RevealSection id="faq" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="section-label">Frequently Asked Questions</div>
          <h2 className="text-3xl md:text-5xl mb-7">Everything Parents And Students Ask</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="bg-[#121212] border border-[#c9a84c26] rounded-xl p-5">
                <summary className="cursor-pointer text-[18px] text-[#f2f2f2] font-medium">{item.question}</summary>
                <p className="text-[#bbbbbb] leading-[1.8] mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact-page" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="section-label">Get In Touch</div>
            <h2 className="text-3xl md:text-5xl mb-5">Visit Or Contact Step Up Dance Academy</h2>
            <p className="text-[#c8c8c8] leading-[1.9] mb-6">
              KSP Complex, Opposite Thiyagaraja Nagar, Opposite E B Office, Sivanthi Patti Road, Sivanthipatti, Tirunelveli-627011, Tamil Nadu
            </p>
            <p className="text-[#e5e5e5] mb-2">Phone: +91 99521 62600</p>
            <p className="text-[#e5e5e5] mb-3">Email: info@stepupdanceacademy.com</p>
            <p className="text-[#25D366] font-medium mb-8">WhatsApp us directly for admissions and class timings.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/919952162600"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold active:scale-95 w-full sm:w-auto text-center"
              >
                Chat on WhatsApp
              </a>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/stepup.dancer?utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white transition-all hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@9952162600?si=CU6Qiml6vh0bITEi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#FF0000] text-white transition-all hover:scale-110 shadow-lg"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#121212] border border-[#c9a84c33] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl mb-5">Send Enquiry</h3>
            <ContactWhatsAppForm />
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  )
}
